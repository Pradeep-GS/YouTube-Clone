import React from 'react'
import video from "../../assets/video.mp4"
import './player.css'
import { items } from '../../assets/asserts'
const Player = () => {
  return (
    <div className="play-video">
        <video src={video} controls autoPlay muted></video>
        <h3>From Basic To Advance Level CSS Master Class</h3>
        <div className="info">
            <p>1523 viwes &bull; 5 minutes ago</p>
            <div>8
                <span><img src={items.like} alt="" />1M</span>
                <span><img src={items.dislike} alt="" /></span>
                <span><img src={items.share} alt="" />Share</span>
                <span><img src={items.save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="channel-info">
            <img src={items.jack} alt="" />
            <div>
                <h4>Code Io</h4>
                <span>1M Subcribers</span>
            </div>
            <button>Subcribe</button>
        </div>
        <div className="discription">
            <p>Here We Can Learn About All Things</p>
            <p>Subcribe to see all full length video</p>
            <hr />
            <h4>10 Comments</h4>
            <div className="comments">
                <img src={items.simon} alt="" className='pro'/>
                <div>
                    <h3>Jack mama <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consequuntur?</p>
                    <div className="comment-img">
                        <img src={items.like} alt="" /><span>150 likes</span>
                        <img src={items.dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={items.simon} alt=""className='pro' />
                <div>
                    <h3>Jack mama <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consequuntur?</p>
                    <div className="comment-img">
                        <img src={items.like} alt="" />
                        <span>150 likes</span>
                        <img src={items.dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={items.simon} alt="" className='pro' />
                <div>
                    <h3>Jack mama <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consequuntur?</p>
                    <div className="comment-img">
                        <img src={items.like} alt="" /><span>150 likes</span>
                        <img src={items.dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={items.simon} alt="" className='pro'/>
                <div>
                    <h3>Jack mama <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consequuntur?</p>
                    <div className="comment-img">
                        <img src={items.like} alt="" /><span>150 likes</span>
                        <img src={items.dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Player