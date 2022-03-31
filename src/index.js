import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// style sheet for symentic UI https://react.semantic-ui.com/
// npm install semantic-ui-react semantic-ui-css
// import 'semantic-ui-css/semantic.min.css'
// ReactDOM.render(<App />, document.getElementById('root'));
// But has some erros, not resolved maybe just stick to bootstrap
// https://github.com/Semantic-Org/Semantic-UI/issues/7073


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
