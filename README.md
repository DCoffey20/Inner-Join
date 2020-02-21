# Inner-Join
A dataing app for developers

User Story:
As a coder, I want a dating app so that I can find someone to date who is also a coder and knows the same coding langauges.

Config - Contains the middleware for the project (isAuthenticated.js) and essentially is what allows the user to access the database

- isAuthenticated.js - Restricts the user from accessing certain data if not logged into an account

- config.js - Allows the user to access the database via the server

- passport.js - Checks by email and then matched password to see if there is a user in the database when they try to log in using email and password input information


Controllers - Contains all of the controllers for the database models, essentially the routers

- memberlanguages-controller.js - The controller for the languages.js model

- members-controller.js - The controller for the members.js model

- messages-controller.js - The controller for the messages.js model

- profilepics-controller.js - The controller for the profilepics.js model


Migrations - Contains the migrations that utilize Sequelize in order to create data tables in mySQL

- 20200208165830-create-members.js - The migration file that is responsible for formatting and creating the Members table in inner_join_db

- 20200208170755-create-messages.js - The migration file that is responsible for formatting and creating the Messages table in inner_join_db

- 20200212000835-create-languages-known.js - The migration file that is responsible for formatting and creating the Languages table in inner_join_db

- 20200214010846-create-profile-pics.js - The migration file that is responsible for formatting and creating the profilePics table in inner_join_db


Public - Contains all of the static content (HTML, CSS,Javascript)

- CSS - Contains the graphics used and the css files responsible for styling the display
    - login.css - Contains the styling for the login page

    - memprof.css - Contains the styling for the member profile page

    - signup.css - Contains the styling for the member signup page

    - survey.css - Contains the styling for the survey page

    - viewjoins.css - Contains the styling for the viewjoins page

- JS - Contains the Javascript files responsible for making the static content dynamic

    - login.js - Contains the Javascript responsible for posting the login data to api so that the user can be authenticated

    - memprof.js - Contains the Javascript responsible for getting the member data for display to the user and putting data if the user choses to edit their information

    - signup.js - Contains the Javascript responsible for posting member data when the user is signing up as a new member 

    - survey.js - Contains the Javascript responsible for posting language data when the user is signing up as a new member

    - viewjoins.js - Contains the Javascript responsible for getting member data for the user to view based on who the user is matched with

- login.html - Static html content for the login page

- memprof.html - Static html content for the member profile page

- signup.html - Static html content for the signup page

- survey.html - Static html content for the survey page

- viewjoins.html - Static html content for the viewjoins page


Routes - Contains the API and HTML routes

- api-routes - Contains the API routes for the handlebars files in the Views folder

- login-routes - Contains the HTML routes for the HTML files in the Public folder


Views - Contains all the handlebars files responsible for displaying content

- Layouts - Contains the main.handlebars file 
    - main.handlebars file - the main handlebars file that all of the others become the body of when they are called upon

- login.handlebars - Contains the html content for the login page

- memprof.handlebars - Contains the html content for the member profile page

- signup.handlebars - Contains the html content for the signup page

- survey.handlebars - Contains the html content for the survey page

- viewjoins.handlebars - Contains the html content for the viewjoins page

package-lock.json - Data from installations

package.json - The npm dependencies required in the project

seed.sql - Information to populate the inner_join_db database with data for testing purposes

schema.sql - Commands necessary to create and use the inner_join_db database

server.js - Creates the server and view port for the project so that is can be viewed and used locally. Essentially brings everything together as a functional website/application 
