import React from "react";
import { render } from "@testing-library/react";
import GroceryContainer from "./components/GroceryContainer";
import './App.css';
import { BrowserRouter as Router} from "react-router-dom"

render(
    <Router>
        <GroceryContainer />
    </Router>,
    document.getElementById("root")
 )