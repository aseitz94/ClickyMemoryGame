import React from "react";

const reset = () => {
    userScore = 0;
}

const handlescorupdate = () => {

    var userScore = 0;
    var highScore = 0;
    var targetNumber = 9;
    //targetNumber = number of total pictures
    if (userScore === targetNumber) {
      reset
    }
}

class Score extends React.Component {
    //set initial state
    state = {
        score: 0
    };
   
  
    //handle score increase
    // handleScoreIncrement = () => {
      
    //     this.setState({ count: this.state.score + 1 });
    // };




}
    export default Score;