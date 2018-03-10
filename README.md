# Top Instagram hashtags

The objective of this project was to show the 10 top hasthag related to another hashtag.    

## Getting Started
To get a copy of these project install git bash, open it from the command line and use 
$ git clone: https://github.com/daviddlaiton/Parcial1-WebDev.git

Then, open the root directory and run

$ npm install

Once it finishes, open the frontend folder and run npm install again.

To deploy the application return to the root directory and run 
$ npm start



### Prerequisites

Firstly, you need to install nodeJS, the installer can be downloaded from: https://nodejs.org/es/
Be sure to select the install npm option and the addToPATH option during the installation process.

Secondly, install mongoDB in your local environment. Follow the instructions on the link below to get it:

https://docs.mongodb.com/manual/administration/install-community/

It´s recommended to have yarn installed, because it makes the use of the React front-end easier. To install it use:
```
$ npm install -g yarn
```

Checklist
```
NodeJS
MongoDB
Yarn

```

### Installing

Go to the root directory and run the npm install command.

```
$ npm install
```

Go to the frontend directory and run the npm install command.

```
$ cd frontend
$ npm install
```
Return to the root dirctory and run nodemon server.js

```
$ nodemon server.js
```
Once again, go to the frontend and run yarn start
```
$ yarn start
```
Front end should be running in localhost:3000, while the server should be running in localhost:5000


## Deployment

To deploy the application on a live environment, you should go to the front end directory and run 
```
yarn build
```
This should generate a build folder.

Finally, modify the server.js file located in the root directory so that it serves the files inside build folder as static content
```
    app.use(express.static(path.join(__dirname, "frontend/build")));
```

## Built With

* [React](https://reactjs.org/) - The javascript library used to develop the front-end.
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Express](http://expressjs.com/es/) - The web framework used.
* [MongoDB](https://www.mongodb.com/es) - The databased used.


## Author

* **Andrés David Laiton** - [daviddlaiton](https://github.com/daviddlaiton)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

