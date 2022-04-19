```
npx create-react-app react-flask-app
cd react-flask-app

# to recreate modules
npm install

# isntalled packages
npm i react-router-dom
npm i react-json-to-table
npm i bootstrap
npm i axios
npm i react-hook-form
npm i --save typescript @types/node @types/react @types/react-dom @types/jest

# so we dont get cors errors, when running the compiled build files
package.json > see proxy at the bottom > proxy": "http://127.0.0.1:5000"

npm start
npm test
npm run build

Need to run npm run build, for the first when viewing through flask server

# Debugging backend / frontend
- backend: Because venv is not in root of project most ide's dont detect it automaticly (see cwd and pythonPath)
- frontend: npm start or yarn has to be running
.vscode/launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: Flask Run / Debug",
            "type": "python",
            "request": "launch",
            "cwd": "${workspaceRoot}/api",
            "pythonPath": "${workspaceRoot}/api/venv/bin/python",
            "program": "run.py",
            "env": {
                "FLASK_APP": "run.py",
                "FLASK_ENV": "development"
            },
            "args": [
                "run",
                "--no-debugger"
            ]
        },
        {
            "name": "REACT",
            "type": "pwa-chrome",
            "runtimeExecutable": "/usr/bin/brave-beta",
            "request": "launch",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
          }
    ]
}

```
