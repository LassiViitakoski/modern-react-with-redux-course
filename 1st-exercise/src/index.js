// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

/*
if (module.hot) {
    module.hot.accept();
}
*/


// Create a react component
const App = () => {
    const buttonText = 'Click me!';
    const style = { backgroundColor: 'orangered', color: 'white', borderRadius: '100px' };
    const labelText = 'Enter name: ';

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText}
            </button>
        </div>
        
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);