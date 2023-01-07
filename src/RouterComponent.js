import React from "react";
import{BrowserRouter,Route,Routes} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import ProductComponent from "./ProductComponent";

function RouterComponent() {
    return(
        <BrowserRouter>
           <Routes>
              <Route path="/"element={<LoginComponent/>} />
              <Route path="/Product"element={<ProductComponent/>} />
           </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;