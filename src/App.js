import './App.css';
import Lights from './light'
import React, { useState} from 'react'
import SquidGame from "./SquidGameBG.mp4"
import useSound from 'use-sound'
import RedLight from './red-light.mp3'
import GreenLight from './green-light.mp3'
import RobotDoll from './robot-doll.mp3'


function App() {
  const [lit, setLit] = useState("yellow")

  const [playRed] = useSound(RedLight);
  const [playGreen] = useSound(GreenLight);
  const [playRobot] = useSound(RobotDoll);
  

  if (lit ===('red'))
  playRed()
  if (lit ===('green'))
  playGreen()
  if (lit ===('yellow'))
  playRobot()

  
  
  return (
   <div className='project'>
    <div className="video"><video  controls
    muted
    autoPlay={"autoplay"}
    preLoad="auto"
    loop
      style={{
      position:"relative",
      width: "100%",
      height: "100%"
     }} >
      <source src={SquidGame} type="video/mp4"/></video>
    <div className="traffic-container">
    <div className='traffic'>
    <Lights
      lit={lit}
      setLit={setLit}
    />
   </div>   
  </div>
  </div>
  </div> 
);
};

  


export default App;
