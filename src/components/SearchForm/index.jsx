import React, { useState } from 'react'
import { Input, Button } from '../UI'
import styles from './SearchForm.module.scss';

export default function SearchForm({ setSearchText }) {
    const [query, setQuery] = useState('');
    const onSearch = () => {
        setSearchText(query);
    };

    return (
        <form className={styles.searchForm} onSubmit={e => e.preventDefault()}>
            <h1 className={styles.title}>
                Поиск
            </h1>
            <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Искать..."/>
            <Button onClick={onSearch} children="Отправить"/>
        </form>
    )
}
