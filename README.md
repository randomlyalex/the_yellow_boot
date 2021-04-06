# the_yellow_boot
A Full Stack Ecommerce project built with MERN as part of an interview process.


Original Brief given [here](https://github.com/randomlyalex/the_yellow_boot/blob/master/planning/brief/Golden_Shoe_.pdf).

[Link to figma wireframe and planning](https://www.figma.com/files/project/25720481/OpenSpaces)

[Link to planing diagrams](https://github.com/randomlyalex/the_yellow_boot/blob/master/planning/the_yellow_boot.svg)


## Demo

TBC to deploy

## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - React Frontend framework 
- [React Router](https://reactrouter.com/) - Library for general routing & navigation
- [Redux w/ hooks](https://redux.js.org/) - State management library
- [Redux Toolkit](https://redux-toolkit.js.org/) - Toolset for efficient Redux development
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Middleware which allows action creators to return a function
- [React Router](https://reactrouter.com/) - Library for general routing & navigation
- [Material-UI w/ lots of CSS customisations](https://material-ui.com/) - UI library


#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [MongoDB](https://www.mongodb.com/) - Opens-source noSQL/Document database to store data
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file


## Features

- Authentication (login/register w/ username/email & password)
- public user can browse, filter
- Once logged in users can reload their basket, checkout usual CRUD orders/items
- responsive UI for all screens, with three breakpoints for desktop, tablet and phone.
- Dark mode toggle w/ local storage save (disabled for this demo)


## To -do

- Error management with descriptive messages, backend fires, front end is yet to capture logically
- Toast notifications for actions: creating projects, removing membes etc.
- Loading spinners for fetching processes

## Screenshots

#### Animated
![](url)

### Static
![](url)


##To setup

#### Client:

Cd into the frontend folder and install dependancies and run front end server for develpment:

```
cd frontend
run: npm install
```

#### Server:

Cd into the backend folder and install dependancies and run server for develpment:

```
from root
run: npm install
```

#### DB

This assumes a connection locally to mongoDB
Database name: the_yellow_boot

from root run: npm run seed-data

```
mongodb://localhost:27017
```

##To Run

```
from root: npm run dev
This uses concurrently to run front and backend together.
```




