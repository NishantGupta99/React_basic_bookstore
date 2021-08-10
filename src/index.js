import React from 'react';
import ReactDOM from 'react-dom';
//import FirstComponent from "./firstComponent"; // here we have imported our first component 
//import SecondComponent from "./SecondComponent";
import NestedComponent from "./NestedComponent";
import Bookstore from "./Bookstore";

ReactDOM.render(
  <React.StrictMode>
    <Bookstore />
  </React.StrictMode>,
  document.getElementById('root')
);



