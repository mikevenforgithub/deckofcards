import React , {Component} from "react";
import Deck from "./Deck";

export default class App extends Component {
  constructor(props) {
      super(props);
  }
  render(){
      return ( 
      <div className="center">
        <Deck/>
      </div>);
  }
} 


