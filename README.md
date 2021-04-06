# the_yellow_boot
A Full Stack Ecommerce project built with MERN as part of an interview process.


Original Brief given [here](https://github.com/randomlyalex/the_yellow_boot/blob/master/planning/brief/Golden_Shoe_.pdf).

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
- [Material-UI](https://material-ui.com/) - UI library


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
- Once logged in users can reload their basket, checkout usual CRUD orders/items/people/baskets
- Responsive UI for all screens, with three breakpoints for desktop, tablet and phone.
- Dark mode toggle w/ local storage save (disabled for this demo)


## To -do

- Error management with descriptive messages, backend fires, front end is yet to capture logically
- Toast notifications for actions and errors etc.
- Loading spinners for fetching processes (currently silent or plain text only)
- Put some UI around the Orders page
- Implement an online returns policy

## Screenshots

#### Animated
![Animated](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/pI5Pi5ZaVi.gif)

### Static (in no order yet)
![1](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.06.48.png)
![2](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.07.14.png)
![3](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.07.29.png)
![4](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.07.46.png)
![5](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.08.17.png)
![6](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.08.43.png)
![7](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.09.09.png)
![7](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.09.23.png)
![7](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.09.30.png)
![7](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.09.49.png)
![7](https://github.com/randomlyalex/the_yellow_boot/blob/master/screenshots/Screenshot%202021-04-06%20at%2014.10.09.png)

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

This assumes a connection to mongoDB 

```
from root 
run: npm run seed-data

```

#### Env
Database URI, name, port, and JWT secret all need adding to your local .env file:

```
SERVER_PORT=
MONGODB=
JWT_SECRET=

```

#### To Run

```
from root: npm run dev
This uses concurrently to run front and backend together.
```





