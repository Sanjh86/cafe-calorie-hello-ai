/**
 * Serves the HTML content of the web app.
 * This function is automatically called when the web app URL is accessed.
 * @returns {HtmlOutput} The HTML content to be displayed.
 */

function doGet() {
  // Create a template from the 'cafe-calorie.html' file
  return HtmlService.createTemplateFromFile('cafe-calorie')
      .evaluate() // Process any server-side includes or scripts in the HTML
      .setTitle('Cafe Calorie App'); // Set the title of the web page
}
    
