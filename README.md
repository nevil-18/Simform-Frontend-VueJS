# car-showroom

## What is the use of this Repo [![Generic badge](https://img.shields.io/badge/What-VueJS-blue.svg)](https://vuejs.org/v2/guide/)

This Repo demonstrates the use of the following in vuejs
1. Vue Routing
2. Components
3. Communication between Components ( Parent to child component )
4. Axios Library to make HTTP calls

## Application Live URL [![Generic badge](https://img.shields.io/badge/Deployed-Success-green.svg)](https://aditya-sridhar.github.io/simple-vuejs-app/)

## Prerequisites

### Install NodeJS [![Generic badge](https://img.shields.io/badge/Prerequisite-NodeJS-blue.svg)](https://nodejs.org/en/)

Refer https://nodejs.org/en/ to install NodeJS

### Install Vue Cli [![Generic badge](https://img.shields.io/badge/Prerequisite-VueCli-blue.svg)](https://cli.vuejs.org/guide/)

Install Vue Cli Node Package Globally using the following Command.

```bash
npm install -g @vue/cli
```
## Cloning and Running the Application

Clone the application to local

Go into the project Folder and install the npm packages using the following command
```bash
npm install
```
Run the following command to run the application
```
npm run serve
```
The Application runs on **localhost:8080**

## Application Design

### Views and components

**Car** : This View Displays a list of cars and gets the data from a json from assets folder

**CarDetails** : This View Displays the Details of a single car and gets the data from a json from assets Folder

**GalleryCard** : Display component displays the name of the selected car in **Caars** View. **GalleryCard** is a child component of **Cars** View

### Http Library [![Generic badge](https://img.shields.io/badge/http-axios-blue.svg)](https://www.npmjs.com/package/axios)

**axios** library is used to make http calls

### Routing

The Application has 2 endpoints

**/car** : The ties to *Cars* View

**/cardetails** : This ties to *CarDetails* View

## References

**VueJS** : https://vuejs.org/v2/guide/

**vue cli** : https://cli.vuejs.org/guide/

**axios** : https://www.npmjs.com/package/axios

**vue bootstrap** : https://bootstrap-vue.js.org/docs

**vue router** : https://router.vuejs.org/guide/
