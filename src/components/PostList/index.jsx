import React from 'react'
import PostItem from '../PostItem';

import style from './PostList.module.scss';

export default function index({ posts, removePost }) {
  return (
    <div className={style.PostList}>
        {
            posts.map((post, index) => (
                <PostItem key={post.id} post={post} index={index+1} removePostItem={removePost}/>
            ))
        }
    </div>
  )
}
