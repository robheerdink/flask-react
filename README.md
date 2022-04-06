```
npx create-react-app react-flask-app
cd react-flask-app

# to recreate modules
npm install

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
```
