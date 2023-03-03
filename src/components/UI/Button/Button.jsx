import React from 'react'
import style from './Button.module.scss';

export function Button(props) {
  return (
    <button {...props} className={style.button}>
        {props.children}
    </button>
  )
}
