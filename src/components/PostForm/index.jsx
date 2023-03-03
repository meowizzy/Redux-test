import React, { useState } from 'react'
import { Button, Input, Textarea} from '../UI';
import style from './PostForm.module.scss';

export default function PostForm({ create }) {
  const [postItem, setPostItem] = useState({
    title: '',
    desc: ''
  });

  const addPostItem = () => {
    const newPost = {
      ...postItem,
      id: Date.now()
    };

    if (newPost.title && newPost.desc) {
      create(newPost);
      setPostItem({
        title: '',
        desc: ''
      });
    }
  };

  return (
    <form className={style.PostForm} onSubmit={e => e.preventDefault()}>
        <Input value={postItem.title} onChange={e => setPostItem({...postItem, title: e.target.value})} placeholder="Заголовок поста" type="text"/>
        <Textarea value={postItem.desc} onChange={e => setPostItem({...postItem, desc: e.target.value})} placeholder="Описание поста"/>
        <Button onClick={addPostItem}>Добавить</Button>
    </form>
  )
}
