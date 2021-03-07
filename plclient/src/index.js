import React from 'react';
import ReactDOM from 'react-dom';
import 'style/index.css';
import MainMenu from "./MainMenu";
import getFAS from './getAwesomeFontThemes';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reportWebVitals from './reportWebVitals';

let fasArray = getFAS();

ReactDOM.render(
  <React.StrictMode>
    <MainMenu/>
      <FontAwesomeIcon icon={fasArray[847]} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
