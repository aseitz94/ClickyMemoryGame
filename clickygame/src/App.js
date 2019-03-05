import React from 'react';
import Images from "./components/Images"
import Navbar from "./components/Navbar/index"
import Wrapper from "./components/Wrapper/index"
import starTrek from "./components/StarTrek"


console.log(starTrek)

//
class App extends React.Component {

  state = {
    score: 0,
    highScore: 0,
    clicked
  };

  // handleClickCheck = id => {
  //   const starTrek = this.state.starTrek.filter(starTrek => starTrek.clicked !==  );
  // }

  handleCardShuffle = (a) => {
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }

  }
//onclick image 
    //check if image has been clicked before
    //if image not been clicked add a point
    //check every time if the user has 9 pts if not continue
    //if user score is > than high score update high score
    //change boolen to true
    //shuffle images
    //
    //if image has been clicked display loser message
    //game score back to 0, high score remains
    //card shuffle
    //change back booleans back to false
  
  //if 9pts display winner message
  
  render() {
    return (<div>
      <Navbar />
    
      {starTrek.map(character => < Images
        id={character.id}
        name={character.name}
        image={character.image}
    
      />)}
    
    </div>
    )
  }


export default App;
