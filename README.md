# User_Register
BACKEND: JSON SERVER
FRONTEND: REACT


- [Commands](#commands)
- [Package.json](#packagejson)
- [Accessing Data Base](#accessing-data-base)

# Commands
## *npm init -y*

1. **Initialize a new Node.js project.**  
2. **Automatically accept all default settings in `package.json`.**

## *npm i --save json-server -E*

1. **Install the `json-server` package and add it to dependencies.**  
2. **Use the exact version specified in the package (no version range).**

## *npm start*

1. **Run the start script defined in `package.json`.**  
2. **Commonly used to launch the main application.**

## *create-react-app frontend*

1. **Creates a new React application named `frontend`.**  
2. **Sets up all the necessary files, dependencies, and build configuration automatically.**  
3. **Generates a ready-to-start project folder called `frontend` with React boilerplate.**

# Packagejson
## *--watch db.json*

1. **Start watching the `db.json` file for changes.**  
2. **Automatically update the server data when `db.json` is modified.**
## *--port 3001*

**Specifies the port number where the server listens.**  
By default, `json-server` runs on port `3000`. Using `--port 3001` changes it to port `3001`.



# Accessing Data Base

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
