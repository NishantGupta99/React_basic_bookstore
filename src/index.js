import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from "./firstComponent"; // here we have imported our first component 



ReactDOM.render(
  <React.StrictMode>
    <FirstComponent /> {/* this is how we use a componenent */}
    
  </React.StrictMode>,
  document.getElementById('root')
);



