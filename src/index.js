// Import the core React library, enabling us to define and use React components
import React from "react";

// Import the ReactDOM library, which allows us to render React components to the DOM
import ReactDOM from "react-dom";

// Import the main App component, which serves as the root component for the React application
import App from "./App";

// Render the App component inside the HTML element with id 'root', displaying the React app on the page
ReactDOM.render(<App />, document.getElementById("root"));
