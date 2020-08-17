<h1 align="center">
    <img alt="Ecoleta" title="Ecoleta" src=".github/ecoleta.svg" width="220px" />
</h1>

<p align="center">
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="Ecoleta" src=".github/ecoleta.png" width="100%">
</p>

## 🚀 Features

This app features all the latest tools and practices in mobile development!

- ⚛️ [**React**](https://reactjs.org/) — A JavaScript library for building user interfaces
- ⚛️ [**React Native**](https://reactnative.dev/) — A lib that provides a way to create native apps for Android and iOS
- 💹 [**Node.js**](https://nodejs.org/en/) — An asynchronous, open source, event-driven JavaScript interpreter
- 📟 [**Celebrate**](https://github.com/arb/celebrate) — A joi validation middleware for Express 
- :iphone: [**Expo**](https://expo.io/) —  A tool used in mobile development with React Native that allows easy access to the device’s native API’s

## 💻 Project

Ecoleta is a marketplace that helps people find waste collection points efficiently.

## 🔖 Layout

You can view the project layout through [this link](https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-Booster?node-id=0%3A1). Remembering that you will need to have a [Figma account](http://figma.com/).

## 🤔 Getting started

1. Clone this repo using `git clone https://github.com/mthsandrioli/ecoleta`
2. Move yourself to the appropriate directory: `cd ecoleta`<br />

### Getting started with the backend server

1. Move yourself to the server folder: `cd server`
2. Run `npm install` to install dependencies<br />
3. Create a `.env` file and add the UPLOADS url connection in UPLOADS_URL field
4. Run `npm run knex:migrate` to create the database
5. Run `npm run knex:seed` to populate the database
6. Run `npm run dev` to start the server

### Getting started with the web app

1. Move yourself to the web folder: `cd web`
2. Run `npm install` to install dependencies<br />
3. Create a `.env` file and add the API url connection in REACT_APP_API_URL field
4. Run `npm start` to start the web application

### Getting started with the mobile app

1. Move yourself to the mobile folder: `cd mobile`
2. Run `npm install` to install dependencies<br />
3. Run `npm start` to start the mobile app
