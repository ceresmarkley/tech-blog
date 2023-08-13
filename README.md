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
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
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


![image](https://github.com/ceresmarkley/tech-blog/assets/129554518/c5e6e64d-26bd-4d10-bf44-8d8f1bbf1031)



## Links

* GitHub Repo: [Tech Blog Repo](https://github.com/ceresmarkley/tech-blog)
* Deployed URL: [Tech Blog!](https://tech-blog-v16-9f64c5daf8fc.herokuapp.com/)


## License

* This application is licensed by [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE).


## Sources 

[Peer Support For Routes and Handlebars](https://github.com/CQlove/The-tech-blog)
