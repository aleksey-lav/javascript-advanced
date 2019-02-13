import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Greetings(props){

    return(
        <h1>Hello {props.phrase}! My name is {props.name}</h1>
    )
}
function GreetAll(){
    return (
        <div>
            <Greetings phrase="World" name="Ivan"/>
            <Greetings phrase="World" name="Anna"/>
            <Greetings phrase="World" name="John"/>
        </div>
    )
}



ReactDOM.render(<GreetAll />, document.getElementById('root'));

serviceWorker.unregister();
