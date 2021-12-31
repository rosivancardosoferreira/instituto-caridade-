import React from "react";
import {
    BrowserRouter as Router,
  } from "react-router-dom";
  
//ROUTES
import Public from "./public";

function Routes (){
  function renderPageRoutes () {    
    return Public()
  }

  return (
    <Router>
      {renderPageRoutes()}
    </Router>
  );
}

//   export default connect(mapStateToProps)(Routes);
export default Routes;