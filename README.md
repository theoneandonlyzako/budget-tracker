# Budget Tracker<br/>
To add expenses and deposits to their budget with or without an online connection<br/>

## Links

Repo Link: https://github.com/theoneandonlyzako/budget-tracker <br/>
Deployed Link: https://zaks-budget-tracker.herokuapp.com/
<br/><br/>

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## License
This project is licensed under the Unlicense license.
</br><br/>


## Table of Contents 
* [Description](#description)
* [Packages](#packages)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Contact](#contact)
* [Site Example](#example)
</br><br/>

## Description
A progrssive web application built to help travelers keep track of their budget while away from home -- and away from a reliable internet connection.. Built with Express, Mongoose, compression, morgan and MongoDB.</br><br/>

## Packages
- express
- moment
- mongoose
- compression
- morgan
</br><br/>

## Installation
​1. Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the [MongoDB Website](https://docs.mongodb.com/manual/installation/))</br>
2. Clone the repo</br>
3. Install dependencies with `npm -i`</br>
5. Run `npm start` to run the server and make the API live</br>
</br><br/>

## Usage
Provides a simple interface for entering expenses and credits, tracks balance changes and displays a chart showing how the balance has changed over time. When used without an internet connection, the app will remember the balance from the last time it was connected to the server, and display changes relative to that balance. Transactions entered while offline are stored in the browser/client's local database (IndexedDB) and sync'ed to the server upon the next successful reconnection. The app can also be installed on a mobile device by using the "Add to Home Screen" option offered by some mobile web browsers.
</br>

**Install Example**

![img](./site2.png)<br/></br>

## Contributing
​Contributors: Zak Stamps With Lots of help from our trusty 'ol friend Google.
</br><br/>

## Contact
If you have any questions about the repo, open an issue or contact me directly at theoneandonlyzako@gmail.com or visit my website at zakstamps.com
<br/><br/>

## Example

![img](./site.png)<br/></br>
