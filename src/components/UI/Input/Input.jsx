import React from 'react'
import style from './Input.module.scss';

export function Input(props) {
    const { type = "text", placeholder = "Заголовок поста" } = props;

    return (
        <input {...props} className={style.Input} type={type} placeholder={placeholder}/>
    )
}
