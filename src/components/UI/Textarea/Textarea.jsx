import React from 'react'

import style from './Textarea.module.scss';

export function Textarea(props) {
    const { cols = "30", rows = "10" } = props;

    return (
        <textarea {...props} cols={cols} rows={rows} className={style.Textarea}/>
    )
}
