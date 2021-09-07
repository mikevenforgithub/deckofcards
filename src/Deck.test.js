import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Deck';
import Grid from './Deck';
import Typography from './Deck';


it("renders withouth crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
});

it("renders withouth crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Grid></Grid>, div)
});

it("renders withouth crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Typography></Typography>, div)
})

