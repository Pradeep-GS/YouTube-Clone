import React from 'react'
import './Video.css'
import Player from '../../Components/player/Player'
import Recoment from '../../Components/Recommendation/Recoment'
const Video = () => {
  return (
    <div className="video">
      <Player/>
      <Recoment/>
    </div>
  )
}

export default Video