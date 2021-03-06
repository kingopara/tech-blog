# tech-blog

## Description
AS A developer who writes about tech

I WANT a (content management system) CMS-style blog site

SO THAT I can publish articles, blog posts, and my thoughts and opinions

[Link to deployed application on Heroku](https://tech-blog-app21.herokuapp.com/)

## Table of content
* [Description](#description)
* [Project Requirements](#projectrequirements)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#Badges)
* [Contributing](#contributing)

## Preview
![Preview 1](assets/images/techblog.png)

## Project Requirements
* GIVEN a CMS-style blog site
* WHEN I visit the site for the first time
    
    `THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in`

* WHEN I click on the homepage option
    
    `THEN I am taken to the homepage`

* WHEN I click on any other links in the navigation
  
    `THEN I am prompted to either sign up or sign in`

* WHEN I choose to sign up
  
    `THEN I am prompted to create a username and password`

* WHEN I click on the sign-up button
  
    `THEN my user credentials are saved and I am logged into the site`

* WHEN I revisit the site at a later time and choose to sign in
  
    `THEN I am prompted to enter my username and password`

* WHEN I am signed in to the site
  
  `THEN I see navigation links for the homepage, the dashboard, and the option to log out`

* WHEN I click on the homepage option in the navigation
  
    `THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created`

* WHEN I click on an existing blog post
  
    `THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment`

* WHEN I enter a comment and click on the submit button while signed in
  
    `THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created`

* WHEN I click on the dashboard option in the navigation
  
    `THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post`

* WHEN I click on the button to add a new blog post
 
 `   THEN I am prompted to enter both a title and contents for my blog post`

* WHEN I click on the button to create a new blog post
  
    `THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post`

* WHEN I click on one of my existing posts in the dashboard
    
    `THEN I am able to delete or update my post and taken back to an updated dashboard`

* WHEN I click on the logout option in the navigation
 
    `THEN I am signed out of the site`

* WHEN I am idle on the site for more than a set time
    
    `THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments`

## Installation

Run these commands to Install individual packages to use the app

* `npm init -y`

* `npm install express sequelize mysql2`

* `npm install dotenv`

* `npm install bcrypt`

* `npm install connect-session-sequelize`

* `npm install express-handlebars`

* `npm install express-session`

OR run `npm install` to install all packages at once

## Usage 

At the root of the directory, run these commands:

* `mysql -u root -p` (to log into mysql shell & enter your password)
* `source db/schema.sql` (to create the schema)
* `quit;`
* change the "`sequelize.sync`" value to "`true`" in the "`server.js file`" to drop & create tables and columns for the database and then back to `false`
* `npm start` or `node server.js` (to start the application's server)
* navigate to the browser and open http://localhost:3001 to run the app


## Credit
This app was made with love and hardwork by Praise Opara

## License

[MIT](https://opensource.org/licenses/MIT)

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Contributing

![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)