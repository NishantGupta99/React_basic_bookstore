import React from 'react';
import ReactDOM from 'react-dom';
//import FirstComponent from "./firstComponent"; // here we have imported our first component 
//import SecondComponent from "./SecondComponent";
import NestedComponent from "./NestedComponent";

ReactDOM.render(
  <React.StrictMode>
    <NestedComponent />    
  </React.StrictMode>,
  document.getElementById('root')
);



