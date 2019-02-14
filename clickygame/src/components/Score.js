import React from "react";



class Score extends React.Component {
    //set initial state
    state = {
        score: 0
    };
  
    //handle score increase
    handleScoreIncrement = () => {
      
        this.setState({ count: this.state.score + 1 });
    };
}
    export default Score;