import React from 'react'
import { Button } from '../UI';

import styles from './PostItem.module.scss';

export default function PostItem({ post, index, removePostItem }) {
  return (
    <div className={styles.PostItem}>
        <div className={styles.header}>
            <span>{index}.</span><h1 className={styles.title}>{post.title}</h1>
            <Button onClick={() => removePostItem(post)}>Удалить</Button>
        </div>
        <div className={styles.desc}>{post.desc}</div>
    </div>
  )
}
