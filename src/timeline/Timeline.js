import React, { useState } from 'react'
import './Timeline.css'
import Sugesstions from './Sugesstions'
import Post from '../posts/Post'

const Timeline = () => {
  const[post,setPost]=useState([
    {
      user:'redian',
      postImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfbBbN29vzo7X46LywgBRcmShxh8fUYX6FpIrhNB01A&s',
      likes:12,
      timespamp:'1d',
    },
    {
      user:'johndoe',
      postImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZIG7rVkxZNSk9ahTmjKCe1jfRPqRS0NyFtQy8BoLjw&s',
      likes:56,
      timespamp:'2d',
    },
    {
      user:'kobie_18',
      postImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9a-UikHjZSLwu8dUEePNWTyL62EDQ4xeCiAApua9O8ezBI7zbEqQeJbptNiO0zh5nrIE&usqp=CAU',
      likes:104,
      timespamp:'12h',
    },
    {
      user:'redian',
      postImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzr-8YQwWzX6CZFxb780zSj1dOjc8zOXzeZp5Zkbe7YA&s',
      likes:12,
      timespamp:'10min'
    },
    {
      user:'johndoe',
      postImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZIG7rVkxZNSk9ahTmjKCe1jfRPqRS0NyFtQy8BoLjw&s',
      likes:56,
      timespamp:'5sec'
    },
  ]);
  return (
    <div className='timeline'>
    <div className='timeline_left'>
      <div className='timeline_posts'>
       {post.map(post=>(
        <Post user={post.user} postImage={post.postImage} likes={post.likes} timespamp={post.timespamp}/>
       ))}
      </div>
      </div>
    <div className='timeline_right'>
        <Sugesstions/>
    </div>
    </div>
  )
}

export default Timeline

