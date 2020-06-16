# Proof of Concept that use local enviroment to develop a Google Apps Script

Proof of Concept that use local enviroment to develop a Google Apps Script (GAS). This PoC use:

- [clasp](https://github.com/google/clasp) to clone, push and pull from a GAS Project;
- [@types/google-apps-script](https://www.npmjs.com/package/@types/google-apps-script) to enable highlight on Visual Studio Code.

## Install

Steps to startup:

- `npm install -g @google/clasp`
- `npm install --save @types/google-apps-script`

## Setup

- Enable the Google Apps Script API: https://script.google.com/home/usersettings

![Enable Apps Script API](https://user-images.githubusercontent.com/744973/54870967-a9135780-4d6a-11e9-991c-9f57a508bdf0.gif)

- Then login for the first time 

`clasp login`

## Simple Commands

* To start a local new project use 

`clasp create`

* To clone an existing project use

`clasp clone {id_script}`

The id_Script can be found on the properties of script.

* To push the changes to a project use

`clasp push`

* To pull the changes to a project use

`clasp pull`
