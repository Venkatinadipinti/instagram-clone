import React from 'react'
import './Post.css'
const Post = ({user,postImage,likes,  timespamp}) => {
  return (
    <div className='post'>
     <div className='post_header'>
    <div style={{backgroundColor:'black',color:'white',width:'30px',height:'30px',borderRadius:'50%',textAlign:'center',position:'relative',top:'24px',right:'35px'}}>R</div>
    {user}.<span>{timespamp}</span>
     </div>
     <i class="fa fa-ellipsis-h" aria-hidden="true" style={{position:'relative',left:'500px',top:'-20px'}}></i>
     <div className='post_img'>
     </div>
     <img src={postImage} alt=" " className='img'/>
     <div className='post_footer'>
      <div className='post_footerIcons'>
        <div className='post_iconsMain'>
        <i className="fa fa-heart" aria-hidden="true"></i>
        <i className="fa fa-comment" aria-hidden="true"></i>
        <i className="fa fa-telegram" aria-hidden="true"></i>
        </div>
        <div className='post_iconSave'>
        <i className="fa fa-bookmark" aria-hidden="true" style={{position:'absolute',left:'500px'}}></i>
        </div>
      </div>
     </div>
     Liked by {likes} people 
    </div>
  )
}

export default Post

