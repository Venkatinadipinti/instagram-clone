import React from 'react'
import './Sidenav.css'
const Sidenav = () => {
  return (
    <div className='sidenav'>
 <img  className="sidenav_logo"src="https://blackhillsballoons.com/wp-content/uploads/2021/01/Instagram-Logo.png " alt=""/>
    <div className='sidenav_buttons'>
      <button className='side_button'>
      <i class="fa fa-home" aria-hidden="true"></i>
        <span>Home</span>
        </button>
        <button className='side_button'>
      <i class="fa fa-search" aria-hidden="true"></i>
        <span>Search</span>
        </button>
        <button className='side_button'>
        <i class="fa fa-expand" aria-hidden="true"></i>
        <span>Explore</span>
        </button>
        <button className='side_button'>
        <i class="fa fa-play-circle" aria-hidden="true"></i>
        <span>Reels</span>
        </button>
        <button className='side_button'>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <span>Messages</span>
        </button>
        <button className='side_button'>
        <i class="fa fa-heart" aria-hidden="true"></i>
        <span>Notification</span>
        </button>
        <button className='side_button'>
        <i class="fa fa-plus-square" aria-hidden="true"></i>
        <span>Create</span>
        </button>
    </div>
    <div className='sidenav_more'>
<button className='side_button'>
<i class="fa fa-bars" aria-hidden="true"></i>
<span>Menu</span>
</button>
    </div>
    </div>
  )
}

export default Sidenav
