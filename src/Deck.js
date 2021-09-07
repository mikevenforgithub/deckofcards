import React , {Component} from "react";
import { Grid, Button, Typography} from "@material-ui/core";

export default class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {   
          theDeck: [],
          shuffledDeck: [],
          imageLink: ""
      };
      this.shuffleCards = this.shuffleCards.bind(this);
  }
  
  UNSAFE_componentWillMount(){
      
    //instead of manually create the deck I use 2 loops for ranks and suites to create the cards and then
    // push all the cards into a single deck variable before the component mounting
      var suits = ['hearts', 'clubs', 'diamonds', 'spades'];
      var ranks = ['2','3','4','5','6','7','8','9','10','11','12','13','1'];
      var deck = []

      for(var i = 0; i < 4; i++){
        for(var j = 0; j < 13; j++){
            deck.push(suits[i] + ranks[j])
         }
      }
      this.setState({
        theDeck: deck,
      });

  }

  shuffleCards(){
    // a way that makes sense to shuffle the cards is to substitute each card with another card
    // at a random index and vice versa 
      var shuffledDeck = this.state.theDeck
      for( var i = 0; i < 52 ; i++ ){
          var currentCard = shuffledDeck[i];
          var ranIndex = Math.floor(Math.random() * 52);
          shuffledDeck[i] = shuffledDeck[ranIndex];
          shuffledDeck[ranIndex] = currentCard;
      }
      this.setState({
          theDeck: shuffledDeck,
        });
}
  
   // instead of having a simple card with the suit and rank only I though it would be good
   // to have a full pocker card therefore
  // here I am using links of images of poker cards that I found, and I am creating variables 
  // to source the ones that I need as the component is updated, selecting the first 5 of the deck
  componentDidUpdate(){
    var url1 = "https://raw.githubusercontent.com/hayeah/playing-cards-assets/master/png/";
    var url2 = "_of_";
    var url3 = ".png"
    var allnums = [];
    var allstr = [];

  // here I use two for loops to replace the part of the string I dont need, and add jack,queen,king and ace
    for(var i=0; i<5; i++){
       var thenum = this.state.theDeck[i].replace( /^\D+/g, ''); 
       allnums.push(thenum)
    }

    for(var i=0; i<5; i++){
        if(allnums[i] === '11'){
            allnums[i] = "jack"
        }
        if(allnums[i] === '12'){
            allnums[i] = "queen"
        }
        if(allnums[i] === '13'){
            allnums[i] = "king"
        }
        if(allnums[i] === '1'){
            allnums[i] = "ace"
        }
     }
    
    // here I dont consider numbers and specific characters so that I can have the suit I need
    for(var i=0; i<5; i++){
        var thestr = this.state.theDeck[i].replace(/[0-9]|J|K|Q|A/g, '');
        allstr.push(thestr);
     }

    var cardid = document.getElementById("firstimage")
    cardid.setAttribute("src", url1 + allnums[0] + url2 + allstr[0] + url3)
    var cardid2 = document.getElementById("secondimage")
    cardid2.setAttribute("src", url1 + allnums[1] + url2 + allstr[1] + url3)
    var cardid3 = document.getElementById("thirdimage")
    cardid3.setAttribute("src", url1 + allnums[2] + url2 + allstr[2] + url3)
    var cardid4 = document.getElementById("fourthimage")
    cardid4.setAttribute("src", url1 + allnums[3] + url2 + allstr[3] + url3)
    var cardid5 = document.getElementById("fifthimage")
    cardid5.setAttribute("src", url1 + allnums[4] + url2 + allstr[4] + url3)
  }

  

  render(){
      return ( 
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
                DECK OF CARDS
            </Typography>
          </Grid>
          <br></br>
          <Grid item xs={12} align="center">
            <Typography variant="h4" component="h4">  
            Click the button to shuffle the deck and get the first 5 cards ! 
            </Typography>
            <br></br>
          <Grid item xs={12} align="center">
            <Button color="primary" variant="contained" onClick={this.shuffleCards}>
                SHUFFLE
            </Button>
          </Grid>
          <hr></hr>
            <img id="firstimage" alt="" />  
            <img id="secondimage" alt="" />
            <img id="thirdimage" alt="" />
            <img id="fourthimage" alt="" />
            <img id="fifthimage" alt="" />
          </Grid>
        </Grid>    
            
    );
  }
} 

