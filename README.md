**Description**

This project was completed as part of General Assembly’s Software Engineering course - Unit 4 (week 11). The project is a React and express-based habit and mood tracking app named Habito. Habito is based around the concept that if one improves a skill by 1% each day they will have improved approximately 37x after a year. The app allows users to add habits they wish to complete regularly and stick with them. The app allows users to view their data in various graph forms and also includes a journaling functionality. The application uses custom APIs to connect the front and back end of the application. 

**Deployment link**

The project can be found here: https://habitoo-13f15a6250b8.herokuapp.com/

Test Email - USETHISONE@GMAIL.COM 

Password - 3CN!TUm!FaZEz

**Code Installation**

To access the code, follow the steps below:

1. Clone the repository from GitHub.
2. Open the project in your preferred code editor.

**Timeframe & Working Team**

The project was to be completed within a week-long timeframe, starting on the 11th of July 2023. The project was completed individually.

**Technologies Used**

This Project included the use of:

- HTML
- CSS
- JavaScript
- React
- Three.js (React Three Fibre)
- Node.js
- Express
- MongoDB
- Mongoose
- Bulma
- Recharts
- Git
- GitHub
- Npm
- AJAX

**Brief**

The project’s technical requirements included the following:

Incorporate the technologies of the MERN stack:
MongoDB/Mongoose
Express
React
Node
A well-styled interactive front-end.
Communicate with the Express backend via AJAX.
Implement token-based authentication. Including the ability of a user to sign-up, log in & log out.

**Planning**

When planning the project I started by building the entity relationship diagrams via the use of CodePlanner.co.  I built a user model that would include username, password and email. I then build out models for habits, moods and notes these models would be attached to the user model through one-to-many relationships. The multiplier field within the habit model is increased by 1% each day and will be displayed in graphical form. During the project’s build process, the models changed significantly in order to meet the data formats required for recharts. 

<img width="596" alt="Screenshot 2023-08-09 at 12 40 40" src="https://github.com/Fing1499/Habito/assets/130996567/a93aec09-5f43-40e2-bced-c0a1e26a9831">

When planning the project's theme and UI, I searched through Google to find UI layouts for inspiration. Once I had decided on a general aesthetic that I thought fit the project's functionality I started to build a wireframe using Figma. I wanted the Dashboard to contain all relevant information and forms so the user could open the application and check off their completed habits and mood seamlessly. 

<img width="303" alt="Screenshot 2023-08-09 at 12 41 14" src="https://github.com/Fing1499/Habito/assets/130996567/59e8f72b-574c-4700-bcd6-4d514c7b25d4">

**Build/Code Process**

When starting the build process I cloned my MERN-stack base code repo that I had built up in class the week prior. This base code included token-based user authentication with login and sign-up functionality. I then moved on to client-side routing using react-router to lay out all the pages that would be required for the application to work. Having completed the majority of the client-side routing I connected my MongoDB database to the application and started building out the HTML forms and basic server-side functions to ensure the user could sign-up, log in and add a habit, note or mood.

Once basic functionality was implemented successfully I moved on to working through the main app functionality.  I first built the ability to check off habits that had been completed, I then needed to implement functionality that checks whether the habit has been completed on the current day. Once I had built these the shape of the application began to appear, I then worked towards implementing the mood functionality where a new mood object is created if a mood had not been previously selected for the current day. These implementations were completed relatively smoothly, however, not without vast amounts of sketching and re-sketching of the logic required within the if-else blocks. I then decided to work through adding the journaling aspect of the application, this was simple and comparatively easy to implement. With the main portion of the application built, read through the recharts documentation in order to get a better understanding of how to implement their graphs for the data visualisation aspect of the application. It was a steep learning curve to implement the data visualisation pages and included a lot of trial and error and eventually led to the user model requiring an extra field in order to format the data in the correct way, nonetheless, I managed to get the graphs working and displaying the correct data. Once all the functional aspects of the application were finished I moved on to styling and adding Three.js for the homepage. Below I have outlined some of the more interesting server-side code snippets from the project.

Index function:

This function runs on each render of the dashboard page, it checks to see which habits have been completed on the current date and changes the multiplier and amount completed values if the habit has not been completed
The function starts by accessing the current date through a JavaScript date object and uses .split to remove the time aspect of the date. 

The function then finds all habits the user has added and iterates over each habit checking if the current date is included within the completed_dates array. If the current date is not included then previous_multiuplier is set to the current multiplier, previous_amount completed is set to the current amount_completed and completed_today is set to false. 

If the current date is included within dates_completed then completed_today is set to true. Should the else block run completed_today should already be equal to true, however in order to ensure there was no potential for errors I set it to true within the block as well. The function then sends the JSON response back to the front end to update the UI accordingly.

<img width="668" alt="Screenshot 2023-08-09 at 12 46 38" src="https://github.com/Fing1499/Habito/assets/130996567/c624f3bf-e765-498f-a3e4-7d3c579a21b0">

Add Mood:

This function is responsible for adding or overwriting the user's mood and is called on button press within an HTML form.

The function starts by finding the current user within the database by searching for the id using the req.user.id.

The function then enters into an if-else block. The if statement checks that the mood array of the current user contains the current date being sent within the request body. If this statement evaluates to true the function finds the index of the date and changes the item at the index returned by moodIndex to the value of req.body. This functionality allows users to change their mood selection throughout the day should their mood change.
If the current mood is not within the mood array then the function creates a new mood object using the request body and pushes it into the mood array.

Finally, the function saves the updated user model and sends a JSON response to confirm the changes. 

<img width="748" alt="Screenshot 2023-08-09 at 12 46 57" src="https://github.com/Fing1499/Habito/assets/130996567/617db55a-f4fa-49c0-9598-8cdf64f8c4e3">

Add Chart Data:

This function is responsible for adding data to the chart data array on the user model, this function was implemented in order to format the data in compliance with recharts formatting requirements. The addChartData function is called whenever a user either checks or unchecks the ‘completed’ box on the habit form.

The function first finds the relevant user within the database and then checks to see if the chart_data array on the user model contains an object that includes the current date. If this evaluates to false then a new chartData object is created using the data sent within the request body. This new object is then pushed into the chart_data array. 

Should a matching data be found the function checks whether the completed_today portion of the request’s body is equal to true or false. For both instances, if completed_today is equal to true or false the function finds the index of the matching date and increments habits_completed by plus or minus one depending on the value of completed_today.  

Finally, the function saves the updates made to the user model and sends a JSON response to confirm the changes. 

<img width="749" alt="Screenshot 2023-08-09 at 12 47 17" src="https://github.com/Fing1499/Habito/assets/130996567/8f6763c9-5937-4330-9fe1-09d5ddaebaf7">

Complete Habit:

This function is the core of the application and is responsible for allowing users to check off their completed habits each day. The function is called when the user checks the box of the habit form on the dashboard. 
The function first finds the relevant user within the database by searching for an id that matches the req.user id.

The function then finds the habit within the habit array on the user model that matches the id within the request body and sets the value of completed_today to the corresponding value sent within the request body.

The function then starts an if-else block checking whether completed_today value within the request body is true or false. Similar to the chart data function amount_completed and multiplier are incremented by 1 or 1% respectively if completed_today is true. Should the user uncheck the box on the form the completed-today will be equal to false and the function then resets the amount_completed and multiplier to their previous values.

Finally, the function saves the updated user model and sends a JSON response to confirm the changes. 

<img width="578" alt="Screenshot 2023-08-09 at 12 48 05" src="https://github.com/Fing1499/Habito/assets/130996567/bc1ca680-2abf-4201-9db6-16ed77e06b1d">

**Challenges**

Throughout the project I encountered various challenges I will outline the most relevant ones below:

Implementing Recharts:

The use of Recharts required a steep learning curve in order to use effectively and I had considerable difficulty in getting the graphs to display the data correctly. Through reading the Reacharts documentation I realised the data had to be formatted a certain way, this led to the addition of another model embedded within the main user model. This new chart_data model allowed me to store the user data in the correct format without having to iterate over the old format data multiple times on the front end which would inevitably slow the application down. Having spent hours changing various values the use of Recharts quickly became more fluid than when I had first encountered it and it is definitely a package I will be using again.

Conditional Logic:

The conditional logic within the chartData and completeHabit server-side functions were more time-consuming than one would imagine. When initially building these functions I could not get them to behave in the intended way, this was because my conditional logic was incorrect. A solution did not come about simply or quickly and required me to sketch out the logic semantically until it made sense. This was an excellent learning experience as I explored the benefit of talking myself through my own code in order to find a solution.

**Wins**

Overall I am proud of what I achieved within the timeframe limitations, and I believe my ability to write code to a deadline improved dramatically with this project. Three.js is a JavaScript library I have been wanting to use for a while and I am happy I managed to implement it albeit in a minor way. Nonetheless, it serves as a solid foundation from which I can continue to learn and grow my repertoire as a developer. 

**Key Learnings**

Throughout this project the learning experience was invaluable, my knowledge and grasp of React and its hooks became more fluid and much easier to understand. I furthered my experience and knowledge of JavaScript,  HTML and CSS while dipping my toes into the possibilities of data visualisation through the use of npm packages and libraries. I believe the most important skill I improved on is my ability to write code and plan in a way that will allow me to effectively finish projects within a  given deadline. 

**Known Bugs**

Within the application, there are a few minor bugs that require attention:

useEffect:

The useEffect hook does not work as intended most of the time when adding a new habit. Inorder for the user to see the habit they have just added the page needs to be refreshed however, useEffect works throughout the rest of the application.

Starred:

Starred habits should have a hard limit of three to save them from taking up too much screen space. At this point in time, this is not the case and will need to be added in future.  

**Future Improvements**

Polish the UI:

The UI requires a bit more polish before I could consider it finished, the journaling section especially. 

Server-side Error Handling:

The error handling also requires more attention in order to display custom error messages should something go wrong when using the APIs.

Desktop friendly:

At the moment the UI is **only** mobile-friendly due to time constraints however this should be a relatively simple fix. 

**Contributors**

Findlay Garrard 







