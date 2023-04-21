# MERN Student Forum

## Description

An Student Forum built with MERN stack, and utilizes third party API's.

- features:
  - Node provides the backend environment for this application
  - Express middleware is used to handle requests, routes
  - Mongoose schemas to model the application data
  - React for displaying UI components
  - JWT Thunk middleware to handle autentication

## Demo

This application is deployed on Render Please check it out :smile: [here](https://6441845506644302a06bd0b6--lucent-bombolone-0db952.netlify.app).

## Install

Some basic Git commands are:

```
$ git clone https://github.com/Marta233/MERN_STACK.git
$ cd project
$ npm install
```

## Setup

```
 Create .env file that include:

  * MONGO_URI &
  * JWT_SECRET
  * PORT

```

## Start development

```
$ npm run dev
```

## Simple build for production

```
$ npm run build
```

## Run build for production

```
$ npm start
```

## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

- [Webpack](https://webpack.js.org/)

### Code Formatter

- Add a `.vscode` directory
- Create a file `settings.json` inside `.vscode`
- Install Prettier - Code formatter in VSCode
- Add the following snippet:

```json
{
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "prettier.arrowParens": "avoid",
  "prettier.jsxSingleQuote": true,
  "prettier.trailingComma": "none",
  "javascript.preferences.quoteStyle": "single"
}
```
