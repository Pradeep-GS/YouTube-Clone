import React from 'react'
import './Navbar.css'
import { items } from '../../assets/asserts'
const Navbar = ({setsidebar}) => {
  return (
    <nav className="flex-div navbar">
        <div className="left-nav flex-div">
            <img src={items.menu} onClick={()=>setsidebar(prev=>prev===false?true:false) }className='menu' />
            <img src={items.logo} alt="logo" className="logo" />
        </div>
        <div className="middle-nav flex-div">
            <input type="text" placeholder='Search Your Videos' />
            <img src={items.search} alt="search" className="search" />
        </div>
        <div className="rigth-nav flex-div">
            <img src={items.upload} alt="upload" className="create" />
            <img src={items.more} alt="more" className="more" />
            <img src={items.notification} alt="notifi" className="notification" />
            <img src={items.jack} alt="" className="profile" />
        </div>
    </nav>
  )
}

export default Navbar