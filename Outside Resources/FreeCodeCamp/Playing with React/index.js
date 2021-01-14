// Objective: Fill in the boilerplate React code required to render an 
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

// HINTS:
// import the librairies you need first
// use one of the librairies to render some JSX to the page

import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
 return (
    <div>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    </div>
 )
}

  //! APP = what do I want to render, document.querySelector = where do I want to render it
ReactDOM.render(
    <MyApp />,//creating an instance of my function 
    document.getElementById("root"))