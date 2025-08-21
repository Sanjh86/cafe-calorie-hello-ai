/**
 * Helper function to calculate total nutrients for a list of dishes, considering quantities.
 * @param {Array<Object>} mealItems - An array of objects, each with a 'dish' and 'quantity'.
 * @returns {Object} An object containing total calories, protein, carbs, and fat.
 */
function calculateTotalNutrients(mealItems) {
  return mealItems.reduce(
    (acc, item) => {
      acc.calories += item.dish.calories * item.quantity;
      acc.protein += item.dish.protein * item.quantity;
      acc.carbs += item.dish.carbs * item.quantity;
      acc.fat += item.dish.fat * item.quantity;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

/**
 * Generates a meal plan based on user goals and available dishes.
 * This version uses a more comprehensive combinatorial search and allows excluding dishes.
 * @param {Object} goals - User's dietary goals (maxCalories, minProtein, etc.).
 * @param {Array<Object>} allDishes - All available dishes from all cafes.
 * @param {Array<string>} [excludedDishNames=[]] - Optional: Names of dishes to exclude from this generation.
 * @returns {Object} An object containing the recommended meal (array of {dish, quantity} objects) and its total nutrients.
 */
function generateMealPlan(goals, allDishes, excludedDishNames = []) {
  let bestMeal = [];
  let bestNutrients = { calories: 0, protein: 0, carbs: 0, fat: 0 };
  let minCalorieDiff = Infinity; // To find the meal closest to the target calories

  const servingMultiples = [0.5, 1.0, 1.5, 2.0]; // Consider half, full, 1.5x, and double servings
  const maxDistinctItemsInMeal = 3; // Limit the number of distinct items in a meal for performance

  // Filter dishes by dietary preference and excluded dishes
  const filteredDishes = allDishes.filter(dish => {
    if (excludedDishNames.includes(dish.name)) {
      return false; // Exclude this dish if it's in the exclusion list
    }

    if (goals.dietaryPreference === 'Vegan' && !dish.dietary_tags.includes('Vegan')) {
      return false;
    }
    if (goals.dietaryPreference === 'Vegetarian' && dish.dietary_tags.includes('Non-Vegetarian')) {
      return false; // Exclude non-veg if vegetarian is preferred
    }
    // If dietaryPreference is 'Non-Vegetarian' or 'Any', no further filtering by dietary_tags is needed here.
    // The presence of 'Non-Vegetarian' tag means it's a non-veg option.
    // If 'Any' is selected, all types are allowed.
    // If 'Non-Vegetarian' is selected, non-veg items are allowed, and other items are also allowed unless they are strictly Vegan/Vegetarian and the user explicitly wants non-veg.
    // The current logic handles this by not filtering out non-veg if Vegetarian is NOT selected.
    return true;
  });

  // Generate all possible "item-quantity" combinations for individual dishes
  const allPossibleItems = [];
  filteredDishes.forEach(dish => {
    servingMultiples.forEach(quantity => {
      const potentialCalories = dish.calories * quantity;
      const potentialProtein = dish.protein * quantity;
      const potentialCarbs = dish.carbs * quantity;
      const potentialFat = dish.fat * quantity;

      // Only add items that individually don't exceed max constraints (except minProtein)
      if (
        potentialCalories <= goals.maxCalories &&
        potentialCarbs <= goals.maxCarbs &&
        potentialFat <= goals.maxFat
      ) {
        allPossibleItems.push({ dish: dish, quantity: quantity });
      }
    });
  });

  // Sort items by protein per calorie for a more effective greedy-like search
  allPossibleItems.sort((a, b) => {
    const proteinPerCalA = a.dish.calories > 0 ? (a.dish.protein * a.quantity) / (a.dish.calories * a.quantity) : 0;
    const proteinPerCalB = b.dish.calories > 0 ? (b.dish.protein * b.quantity) / (b.dish.calories * b.quantity) : 0;
    return proteinPerCalB - proteinPerCalA; // Higher protein/calorie first
  });

  // --- Combinatorial Search (Approximation of LP for demo) ---
  // We'll explore combinations of 1 to maxDistinctItemsInMeal items.

  // Helper to evaluate a meal and update bestMeal if it's better
  function evaluateAndSetBestMeal(currentMeal, currentNutrients) {
    if (
      currentNutrients.calories <= goals.maxCalories &&
      currentNutrients.protein >= goals.minProtein &&
      currentNutrients.carbs <= goals.maxCarbs &&
      currentNutrients.fat <= goals.maxFat
    ) {
      const diff = Math.abs(currentNutrients.calories - goals.maxCalories);
      // Prioritize closer calorie match, then higher protein
      if (diff < minCalorieDiff || (diff === minCalorieDiff && currentNutrients.protein > bestNutrients.protein)) {
        minCalorieDiff = diff;
        bestMeal = [...currentMeal];
        bestNutrients = { ...currentNutrients };
      }
    }
  }

  // Generate combinations using recursion (more flexible than nested loops)
  function findCombinations(startIndex, currentCombo, currentNutrients) {
    // If current combination is valid and better, save it
    if (currentCombo.length > 0) {
      evaluateAndSetBestMeal(currentCombo, currentNutrients);
    }

    // Stop if we reached max items or no more items to add
    if (currentCombo.length >= maxDistinctItemsInMeal || startIndex >= allPossibleItems.length) {
      return;
    }

    for (let i = startIndex; i < allPossibleItems.length; i++) {
      const nextItem = allPossibleItems[i];
      const newCombo = [...currentCombo, nextItem];
      const newNutrients = calculateTotalNutrients(newCombo);

      // Check if adding this item keeps us within constraints (except minProtein for now)
      if (
        newNutrients.calories <= goals.maxCalories &&
        newNutrients.carbs <= goals.maxCarbs &&
        newNutrients.fat <= goals.maxFat
      ) {
        findCombinations(i + 1, newCombo, newNutrients);
      }
    }
  }

  // Initial call to start the combinatorial search
  findCombinations(0, [], { calories: 0, protein: 0, carbs: 0, fat: 0 });


  // Fallback: If no combination works, try to find a single item that fits the calorie goal
  // and is closest to protein goal, or just the highest protein item that fits calories.
  if (bestMeal.length === 0 && filteredDishes.length > 0) {
    let fallbackDish = null;
    let minFallbackDiff = Infinity;

    const sortedFilteredDishes = [...filteredDishes].sort((a,b) => b.protein - a.protein);

    for (const dish of sortedFilteredDishes) {
      for (const quantity of servingMultiples) {
        const currentCalories = dish.calories * quantity;
        const currentProtein = dish.protein * quantity;
        const currentCarbs = dish.carbs * quantity;
        const currentFat = dish.fat * quantity;

        if (
          currentCalories <= goals.maxCalories &&
          currentProtein >= goals.minProtein &&
          currentCarbs <= goals.maxCarbs &&
          currentFat <= goals.maxFat
        ) {
          const diff = Math.abs(currentCalories - goals.maxCalories);
          if (diff < minFallbackDiff) {
            minFallbackDiff = diff;
            fallbackDish = { dish: dish, quantity: quantity };
          }
        }
      }
    }

    if (fallbackDish) {
      bestMeal = [fallbackDish];
      bestNutrients = calculateTotalNutrients(bestMeal);
    } else {
      // If no single item fits all, find the single item closest to calorie goal
      // that meets dietary preference, if any.
      let closestSingleItem = null;
      let minCalorieOnlyDiff = Infinity;

      for (const dish of sortedFilteredDishes) {
        for (const quantity of servingMultiples) {
          const currentCalories = dish.calories * quantity;
          if (currentCalories <= goals.maxCalories) {
            const diff = Math.abs(currentCalories - goals.maxCalories);
            if (diff < minCalorieOnlyDiff) {
              minCalorieOnlyDiff = diff;
              closestSingleItem = { dish: dish, quantity: quantity };
            }
          }
        }
      }
      if (closestSingleItem) {
        bestMeal = [closestSingleItem];
        bestNutrients = calculateTotalNutrients(bestMeal);
      } else {
        // Absolutely no item fits any calorie goal, return empty
        bestMeal = [];
        bestNutrients = { calories: 0, protein: 0, carbs: 0, fat: 0 };
      }
    }
  }

  // If after all attempts, still no meal is found, return an empty plan
  if (bestMeal.length === 0) {
      return { meal: [], nutrients: { calories: 0, protein: 0, carbs: 0, fat: 0 } };
  }

  return { meal: bestMeal, nutrients: bestNutrients };
}
