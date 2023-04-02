import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDom.createRoot( root ).render(
   <BrowserRouter >  
     <App />
    </BrowserRouter>
) 