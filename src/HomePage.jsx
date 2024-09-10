import React from 'react'
import Video from '../assets/images/elmi.mp4'

const HomePage = () => {
  return (
    <div className="background">
        <video className="video" src={Video} autoPlay loop muted width="600" height="300" />
    </div>
  )
}

export default HomePage