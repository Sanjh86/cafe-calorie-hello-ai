/**
 * Returns mock cafe menu data.
 * In a real application, this data would typically come from an external source
 * like a spreadsheet (Google Sheet) or another internal API.
 * @returns {Array<Object>} An array of cafe objects with their menus.
 */
function getMockCafeData() {
  const mockCafeData = [
    {
      id: 'fiesta',
      name: 'Fiesta',
      image_url: 'https://lh3.googleusercontent.com/IWskjqka4J9WNRDNNLSs-QYMT14iyvODdv8iyoRfpgpp3Wr2YBNYP0hOZh5vtNHl2K0hzQ6SNW9PSDOCOKWU8ORQ0x83sdJdRcBPWaQMPuLkK3bBTQ=s0', 
      stations: [
        {
          name: 'Breakfast',
          dishes: [
            { name: 'Scrambled Eggs', calories: 180, protein: 13, carbs: 2, fat: 14, dietary_tags: ['Non-Vegetarian'], serving_size: 2, serving_unit: 'eggs', type: 'main' },
            { name: 'Oatmeal with Berries', calories: 250, protein: 8, carbs: 45, fat: 5, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'bowl', type: 'main' },
            { name: 'Whole Wheat Toast', calories: 120, protein: 4, carbs: 20, fat: 2, dietary_tags: ['Vegan'], serving_size: 2, serving_unit: 'slices', type: 'side' },
          ],
        },
        {
          name: 'Mains',
          dishes: [
            { name: 'Chicken Tikka Masala', calories: 450, protein: 35, carbs: 20, fat: 25, dietary_tags: ['Non-Vegetarian'], serving_size: 1, serving_unit: 'portion', type: 'main' },
            { name: 'Paneer Butter Masala', calories: 400, protein: 20, carbs: 25, fat: 28, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'portion', type: 'main' },
            { name: 'Dal Makhani', calories: 300, protein: 15, carbs: 40, fat: 10, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'bowl', type: 'main' },
            { name: 'Steamed Basmati Rice', calories: 200, protein: 4, carbs: 45, fat: 0, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'cup', type: 'side' },
          ],
        },
        {
          name: 'Sides',
          dishes: [
            { name: 'Naan Bread', calories: 150, protein: 5, carbs: 28, fat: 3, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'piece', type: 'side' },
            { name: 'Mixed Green Salad', calories: 80, protein: 3, carbs: 10, fat: 4, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'bowl', type: 'side' },
          ],
        },
        {
          name: 'Desserts',
          dishes: [
            { name: 'Gulab Jamun', calories: 180, protein: 2, carbs: 30, fat: 7, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'piece', type: 'dessert' },
            { name: 'Fruit Custard', calories: 220, protein: 5, carbs: 35, fat: 8, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'bowl', type: 'dessert' },
          ],
        },
        {
          name: 'Beverages',
          dishes: [
            { name: 'Masala Chai', calories: 80, protein: 3, carbs: 10, fat: 4, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'cup', type: 'beverage' },
            { name: 'Fresh Lime Soda', calories: 60, protein: 0, carbs: 15, fat: 0, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'glass', type: 'beverage' },
          ],
        },
      ],
    },
    {
      id: 'air',
      name: 'Air',
      image_url: 'https://lh3.googleusercontent.com/scpTD-Cyi4N0wbJftHe2fYs_3QNbODfqmJgMOOVoAHCLF-GWHKuyBFNlfF8NyAm1ZNMiaGL3h-TQm2Kkrm_WpkS_HOjjASdJ_DLFQ769AwWDfSo9xA=s0', 
      stations: [
        {
          name: 'Grill Station',
          dishes: [
            { name: 'Grilled Chicken Breast', calories: 220, protein: 40, carbs: 0, fat: 6, dietary_tags: ['Non-Vegetarian'], serving_size: 1, serving_unit: 'breast', type: 'main' },
            { name: 'Grilled Paneer Skewers', calories: 280, protein: 25, carbs: 5, fat: 18, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'skewer', type: 'main' },
            { name: 'Roasted Vegetables', calories: 150, protein: 5, carbs: 20, fat: 8, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'cup', type: 'side' },
          ],
        },
        {
          name: 'Pasta Bar',
          dishes: [
            { name: 'Whole Wheat Pasta', calories: 250, protein: 9, carbs: 50, fat: 2, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'cup', type: 'main' },
            { name: 'Marinara Sauce', calories: 100, protein: 2, carbs: 15, fat: 4, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'cup', type: 'side' },
            { name: 'Alfredo Sauce', calories: 280, protein: 5, carbs: 10, fat: 25, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'cup', type: 'side' },
            { name: 'Grilled Prawns', calories: 120, protein: 20, carbs: 1, fat: 4, dietary_tags: ['Non-Vegetarian'], serving_size: 5, serving_unit: 'pieces', type: 'main' },
          ],
        },
        {
          name: 'Soup & Salad',
          dishes: [
            { name: 'Lentil Soup', calories: 180, protein: 12, carbs: 25, fat: 3, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'bowl', type: 'main' },
            { name: 'Caesar Salad (no dressing)', calories: 100, protein: 5, carbs: 10, fat: 5, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'bowl', type: 'side' },
            { name: 'Chicken Caesar Salad', calories: 250, protein: 25, carbs: 10, fat: 12, dietary_tags: ['Non-Vegetarian'], serving_size: 1, serving_unit: 'bowl', type: 'main' },
            { name: 'Balsamic Vinaigrette', calories: 90, protein: 0, carbs: 5, fat: 8, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'tbsp', type: 'side' },
          ],
        },
        {
          name: 'Sandwich Bar',
          dishes: [
            { name: 'Multigrain Bread', calories: 100, protein: 4, carbs: 18, fat: 2, dietary_tags: ['Vegan'], serving_size: 2, serving_unit: 'slices', type: 'side' },
            { name: 'Turkey Breast Slices', calories: 80, protein: 15, carbs: 0, fat: 2, dietary_tags: ['Non-Vegetarian'], serving_size: 3, serving_unit: 'slices', type: 'main' },
            { name: 'Cheddar Cheese', calories: 110, protein: 7, carbs: 1, fat: 9, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'slice', type: 'side' },
            { name: 'Lettuce & Tomato', calories: 10, protein: 1, carbs: 2, fat: 0, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'portion', type: 'side' },
          ],
        },
        {
          name: 'Smoothie Bar',
          dishes: [
            { name: 'Protein Smoothie', calories: 300, protein: 30, carbs: 30, fat: 8, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'glass', type: 'beverage' },
            { name: 'Green Detox Smoothie', calories: 150, protein: 5, carbs: 25, fat: 2, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'glass', type: 'beverage' },
          ],
        },
        { // Added new Beverages station for Air Cafe
          name: 'Beverages',
          dishes: [
            { name: 'Iced Coffee', calories: 120, protein: 2, carbs: 20, fat: 4, dietary_tags: ['Vegetarian'], serving_size: 1, serving_unit: 'cup', type: 'beverage' },
            { name: 'Sparkling Water', calories: 0, protein: 0, carbs: 0, fat: 0, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'glass', type: 'beverage' },
            { name: 'Orange Juice', calories: 110, protein: 1, carbs: 26, fat: 0, dietary_tags: ['Vegan'], serving_size: 1, serving_unit: 'glass', type: 'beverage' },
          ],
        },
      ],
    },
  ];
  return mockCafeData;
}
