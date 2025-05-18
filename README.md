# User_Register
BACKEND: JSON SERVER
FRONTEND: REACT


- [Backend](#backend)
    - [Commands](#commands-backend)
    - [Package.json](#packagejson-backend)
    - [Accessing Data Base](#accessing-data-base-backend)

- [Frontemd](#frontend)
    - [Commands](#commands-frontend)
    - [Package.json](#packagejson-frontend)
    - [Accessing Data Base](#accessing-data-base)

# Backend
## Commands Backend
### *npm init -y*

1. **Initialize a new Node.js project.**  
2. **Automatically accept all default settings in `package.json`.**

### *npm i --save json-server -E*

1. **Install the `json-server` package and add it to dependencies.**  
2. **Use the exact version specified in the package (no version range).**

### *npm start*

1. **Run the start script defined in `package.json`.**  
2. **Commonly used to launch the main application.**

## Packagejson Backend
### *--watch db.json*

1. **Start watching the `db.json` file for changes.**  
2. **Automatically update the server data when `db.json` is modified.**
### *--port 3001*

**Specifies the port number where the server listens.**  
By default, `json-server` runs on port `3000`. Using `--port 3001` changes it to port `3001`.

## Accessing Data Base Backend

1. **The server is running on port `3001`**  
   This happens because of the `--port 3001` flag used when starting `json-server`.

2. **`db.json` is being used as the database**  
   The `--watch db.json` option tells `json-server` to read and monitor the `db.json` file for changes.

3. **`/users/1` returns the user with `id: "1"`**  
   When you visit `http://localhost:3001/users/1`, the server reads from `db.json` and returns the object:

   ```json
   {
     "id": "1",
     "name": "Arthur Oliveira",
     "email": "aoliveira@company.com"
   }

# Frontend

## Commands Frontend
### *create-react-app frontend*

1. **Creates a new React application named `frontend`.**  
2. **Sets up all the necessary files, dependencies, and build configuration automatically.**  
3. **Generates a ready-to-start project folder called `frontend` with React boilerplate.**

### *npm start*

1. **Runs the development server for the React app.**  
2. **Starts the React app in the browser, usually at `http://localhost:3000`.**  
3. **Enables hot-reloading, so changes in the code update the app automatically without refreshing the page.**

## Packagejson Frontend
### *axios*  
*Promise-based HTTP client for making API requests.*

### *bootstrap*  
*Popular CSS framework for responsive and styled UI components.*

### *react*  
*Core React library for building user interfaces.*

### *react-dom*  
*React package for DOM-specific methods, rendering React components to the web page.*

### *react-router*  
*Core routing library for React (mostly used for shared logic).*

### *react-router-dom*  
*React Router bindings specifically for web browsers, enables declarative routing.*

### *react-scripts*  
*Scripts and configuration used by Create React App to build and run your app.*
