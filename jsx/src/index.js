// Imnport the react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom'; 



// create a react component
const App = () => {
    const buttonText = {text: 'Click me'};
    const labelText = 'Enter Text'; 

    return (
        <div>
            <label className = "label" hmtlfor = "name">
                {labelText}
            </label>
            <input id = "name" type = "text" />
            <button style ={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>
        </div>
    ); 
};

//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);