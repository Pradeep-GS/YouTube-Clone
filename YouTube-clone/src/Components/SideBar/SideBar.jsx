import React from 'react'
import { items } from '../../assets/asserts'
import './Sidebar.css'
const SideBar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small"}`}>
        <div className="catogery">
            <div className="link">
                <img src={items.home} alt="" className="home" />
                <p>Home</p>
            </div>
            <div className="link">
                <img src={items.game_icon} alt="" className="game" />
                <p>Gaming</p>
            </div>
             <div className="link">
                <img src={items.automobiles} alt="" className="auto" />
                <p>Automobiles</p>
            </div>
             <div className="link">
                <img src={items.sports} alt="" className="sports" />
                <p>Sports</p>
            </div>
             <div className="link">
                <img src={items.tech} alt="" className="tech" />
                <p>Technology</p>
            </div>
             <div className="link">
                <img src={items.music} alt="" className="music" />
                <p>Music</p>
            </div>
             <div className="link">
                <img src={items.blogs} alt="" className="blog" />
                <p>Blogs</p>
            </div>
             <div className="link">
                <img src={items.news} alt="" className="news" />
                <p>News</p>
            </div>

        </div>
        <hr />
        <div className="subcribtion">
            <h3>Subcribed Channel</h3>
            <div className="channel">
                <img src={items.jack} alt="" />
                <p>Mr.Beast</p>
            </div>
            <div className="channel">
                <img src={items.jack} alt="" />
                <p>Mr.Beast</p>
            </div>
            <div className="channel">
                <img src={items.jack} alt="" />
                <p>Mr.Beast</p>
            </div>
            <div className="channel">
                <img src={items.jack} alt="" />
                <p>Mr.Beast</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar