# tech-blog [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE)

## Table of Contents

* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Technology](#technology)
* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [License](#license)
* [Sources](#sources)

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Technology

* [![Node.js](https://img.shields.io/badge/Node.js®-v20.4.0-blue?logo=node.js)](https://nodejs.org/en)

* [![npm](https://img.shields.io/badge/npm-v9.8.0-blue?logo=npm)](https://docs.npmjs.com/cli/v9/)
  * [![DotEnv Package](https://img.shields.io/badge/DotEnv-8.2.0-green?logo=dotenv)](https://www.npmjs.com/package/dotenv)
  * [![Express Package](https://img.shields.io/badge/Express-4.17.1-green?logo=express)](https://www.npmjs.com/package/express)
  * [![MySQL2 Package](https://img.shields.io/badge/MySQL2-2.1.0-green?logo=mysql)](https://www.npmjs.com/package/https://www.npmjs.com/package/mysql2)
  * [![Sequelize Package](https://img.shields.io/badge/sequelize-5.21.7-green?logo=sequelize)](https://www.npmjs.com/package/https://www.npmjs.com/package/sequelize)
  * [![bcrypt Package](https://img.shields.io/badge/bcrypt-5.1.0-green?logo=npm)](https://www.npmjs.com/package/bcrypt)
  * [![connect-session-sequelize Package](https://img.shields.io/badge/Connect--Session--Sequelize-7.1.7-green?logo=npm)](https://www.npmjs.com/package/connect-session-sequelize)
  * [![express-handlebars Package](https://img.shields.io/badge/Express--Handlebars-7.1.1-green?logo=express)](https://www.npmjs.com/package/express-handlebars)
  * [![express-session Package](https://img.shields.io/badge/Express--Session-1.17.3-green?logo=express)](https://www.npmjs.com/package/express-session)
  * [![handlebars Package](https://img.shields.io/badge/Handlebars-4.7.8-green?logo=handlebars.js)](https://handlebarsjs.com/)


## Installation

* Packages to support this application can be installed by using [*npm install*](https://docs.npmjs.com/cli/v9/commands/npm-install) commands.

> **Note**: If you do not have a `package.json` in your directory already, enter command below to [*initiate*](https://docs.npmjs.com/cli/v9/commands/npm-init).
>
>```bash
>npm init -y
>```
>
>```bash
>npm i
>```


**Before you start, make sure to created a *`.env`* file in the root directory as the example shown below:**

```bash
DB_NAME='blogs_db'
DB_USER='root'
DB_PW='' Keep the quotations and put your mysql password inside them.

Dont forget to save the file!
```

* Seed the application by entering the commands below:

```bash
npm run seed
```

* This application can be invoked by using the following command:

```bash
npm start
```

## Usage  


![image](https://github.com/ceresmarkley/tech-blog/assets/129554518/7cd218da-1705-4819-98ce-f086dfd33e4c)




## Links

* GitHub Repo: [Tech Blog Repo](https://github.com/ceresmarkley/tech-blog)
* Deployed URL: [Tech Blog!](https://tech-blog-v16-9f64c5daf8fc.herokuapp.com/)


## License

* This application is licensed by [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE).


## Sources 

[Peer Support For Routes and Handlebars](https://github.com/CQlove/The-tech-blog)
