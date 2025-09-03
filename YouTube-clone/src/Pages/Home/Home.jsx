import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import Feed from '../../Components/Feed/Feed'
import './Home.css'
const Home = ({sidebar}) => {
  return (
       <>
       <SideBar sidebar={sidebar}/>
       <div className={`container ${sidebar?"":'large'}`}>
          <Feed/>
       </div>
       </>
       
  )
}

export default Home