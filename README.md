# 🥗 Café Calorie: Your Google Cafe Meal Planner!

## What's This Project All About?
Hey there! Ever feel like eating at the Google cafe is a bit of a guessing game when you're trying to stick to your diet? That's where Café Calorie swoops in! It's this cool web app we built to help Googlers like you easily pick meals that fit your health goals. No more head-scratching over menus!

## The Problem We're Fixing
So, a lot of Googlers find it tough to hit their daily calorie, protein, or other diet targets at the cafe. With all those awesome, ever-changing menus, it's easy to get lost. People end up doing math on their phones, using other apps, or just, well, guessing! And that can be super frustrating and not great for staying healthy.

## Our Smart Solution: Your Personal Meal Planner!
Café Calorie is a neat little web app that works right with go/eat (we're using some pretend menu data for now, just for the demo!). You just tell it your daily calorie goals, what kind of protein, carbs, and fat you're aiming for, and if you're vegan, vegetarian, or even non-vegetarian. Then our smart system gets to work:
* **Grabs Menu Info**: It quickly looks at the daily cafe menu and all the nutrition stuff for each dish.

* **Gets Super Smart**: Our special "combinatorial optimization algorithm" (fancy talk for really smart math!) figures out the best food combos and exactly how much of each item you should grab to hit your goals. It's way more than just filtering!

* **Offers Cool Ideas**: It keeps your dietary preferences in mind. And guess what? Later on, we want it to even suggest creative ways to tweak meals if there isn't a perfect match. How cool is that?!

* **Shows You the Details**: You'll see a clear breakdown of your total calories, protein, carbs, and fat for your recommended meal. Plus, it'll even tell you the serving sizes, like "1.5 bowls" or "2 slices."

*Basically, it's your personal diet assistant, making healthy choices simple and stress-free!*

## Our AI Magic!
What makes our project special? It's our hybrid optimization approach! We're mixing a few clever ideas:
* **Smart Math for Meals**: We use fancy algorithms to precisely calculate the best meal combos that hit your calorie and macro targets, even letting you have half-servings or one-and-a-half servings for a perfect fit.

* **Clever Filtering**: It instantly adjusts the menu based on whether you're vegan, vegetarian, or non-vegetarian.

* **Future Creative Help**: We've built it so we can add generative AI later. Imagine it suggesting, "Hey, try adding some roasted veggies to that lentil soup for extra fiber!"

This isn't just a basic food filter; it's a truly personalized and super helpful meal planning tool!

## Why You'll Love It!
Café Calorie is a game-changer because it:

* **Stops the Guessing Game**: No more manual calculations or wondering if you're eating right.
* **Saves You Time & Stress**: Quick, confident food choices mean less worrying.
* **Helps You Be Healthier**: Turns the cafe menu into your personal wellness guide.
* **Works for Everyone**: Great for all sorts of diets and preferences!

## Why This Rocks for Google!
This project brings some serious perks to Google too:

* **Happier, Healthier Googlers**: A healthier team is a more productive and engaged team!
* **Boosts Google's Image**: Shows off Google's commitment to employee well-being.
* **Smarter Cafes (Later!)**: We could even use anonymous data to help cafes plan menus better and cut down on food waste. Win-win!

## Want to See It in Action? (Google Apps Script Demo)
Our web app runs right on Google Apps Script!

## What You'll Need
Just a Google Account! Easy peasy.

## How to Get It Running
* **Head to Apps Script**: Open `script.google.com` in your browser.
* **Start a New Project**: Click that `New project` button.
* **Give It a Name**: Call it something like CafeCalorieApp.
* **Create `cafe-calorie.html`**:
    - `Go to File > New > HTML file`
    - Name it `cafe-calorie.html`.
    - Copy the HTML code and paste it in. Save it!
* **Create `main.gs`**:
    - Rename the default `Code.gs` file to `main.gs`.
    - Copy the `main.gs code` and paste it in. Save!
* **Create `data.gs`**:
    - Go to `File > New > Script file`.
    - Name it `data.gs`.
    - Copy the `data.gs` code and paste it in. Save!
* **Create `util.gs`**:
    - Go to `File > New > Script file`.
    - Name it `util.gs`.
    - Copy the `util.gs` code and paste it in. Save!
* **Deploy It as a Web App!**
   - In the Apps Script editor, click `Deploy > New deployment`.
   - Pick `Web app` as the type.
   - For "Execute as", `choose Me (your Google account)`.
   - Hit `Deploy`!
* **Grab Your Live Link**: Once it's deployed, you'll get a Web App URL. That's your live demo link!

## Quick Tip for Updates!
* If you change anything in your .gs files (`main.gs`, `data.gs`, `util.gs`), you HAVE TO create a new deployment version for those changes to show up. Just go to `Deploy > Manage deployments`, click the little pencil icon, pick `New version`, and hit `Deploy` again.
* Changes to your `cafe-calorie.html` usually show up right away when you refresh the page.

## What's Next for Café Calorie?
We've got big dreams!
* Connecting to the real go/eat data.
* Making the meal optimization even smarter with advanced tech.
* Adding super creative meal suggestions using generative AI.
* Letting users save their favorite goals and past meals.
* Building in ways for users to give feedback on dishes!
