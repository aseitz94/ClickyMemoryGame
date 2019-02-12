import React, { Component } from 'react';
import Image from "../components/Images"

const starTrek = [
  {
    id: 1,
    name: "Captain Jean-Luc Picard",
    image: "https://vignette.wikia.nocookie.net/memoryalpha/images/f/fc/Jean-Luc_Picard%2C_2364.jpg/revision/latest?cb=20180906020126&path-prefix=en" ,
    clicked: false
  },
  {
    id: 2,
    name: "William Riker",
    image:"https://vignette.wikia.nocookie.net/memoryalpha/images/c/c0/William_Riker%2C_2379.jpg/revision/latest?cb=20180906184144&path-prefix=en",
    clicked: false
  },
  {
    id: 3,
    name: "Commander Data",
    image:"https://vignette.wikia.nocookie.net/memoryalpha/images/4/4f/Data%2C_2366.jpg/revision/latest?cb=20130529102644&path-prefix=en",
    clicked: false
  },
  {
    id: 4,
    name: "Commander Worf",
    image:"https://vignette.wikia.nocookie.net/memoryalpha/images/9/93/Worf%2C_2371.jpg/revision/latest?cb=20120205202415&path-prefix=en",
    clicked: false
  },
  {
    id: 5,
    name: "Geordi La Forge",
    image:"https://vignette.wikia.nocookie.net/memoryalpha/images/8/8a/Geordi_La_Forge%2C_2368.jpg/revision/latest?cb=20120205164003&path-prefix=en",
    clicked: false
  },
  {
    id: 6,
    name: "Deanna Troi",
    image:"https://vignette.wikia.nocookie.net/memoryalpha/images/e/e0/Deanna_Troi%2C_2365.jpg/revision/latest?cb=20121209022154&path-prefix=en",
    clicked: false
  },
  {
    id: 7,
    name: "Beverly Crusher",
    image:"https://vignette.wikia.nocookie.net/memoryalpha/images/2/2c/Beverly_Crusher%2C_2366.jpg/revision/latest?cb=20130424031825&path-prefix=en",
    clicked: false
  },
  {
    id: 8,
    name: "Wesley Crusher",
    image:"https://vignette.wikia.nocookie.net/memoryalpha/images/d/d3/Wesley_Crusher%2C_2366.jpg/revision/latest?cb=20050618012319&path-prefix=en",
    clicked: false
  },
  {
    id: 9,
    name: "Tasha Yar",
    image:"https://vignette.wikia.nocookie.net/memoryalpha/images/5/5b/Natasha_Yar%2C_2364.jpg/revision/latest?cb=20161121002748&path-prefix=en",
    clicked: false
  },
  
];

function App() {
  return <Image starTrek={starTrek} />;
}

export default App;
