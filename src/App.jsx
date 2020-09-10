import React, { useState } from 'react'

import '@assets/sass/style.scss'

import Header from '@components/header'
import Content from '@routes/content'

export default () => {
    const [posts, setPosts] = useState([
        {
            title: 'Утренние новости!',
            category: 'Личная жизнь',
            description: 'У меня наконец появилось свободное время, ловите парочку интересных новостей от меня:  На акциях протеста в Белоруссии...',
            content: '',
            date: new Date(2021, 1, 13, 8, 13, 5)
        },
        {
            title: 'Простите за отсутсвие новостей.',
            category: 'Личная жизнь',
            description: 'У меня нет свободного времены что бы побликовать очень интересные посты, извините, думаю в 2021 году они будут.',
            content: '',
            date: new Date(2020, 10, 5, 12, 5, 23)
        },
        {
            title: 'Я создал свой блог!',
            category: 'Личная жизнь',
            description: 'Теперь у меня есть свой собственный блог. Здесь я буду публиковать очень интересные посты, следите за новостями!',
            content: '',
            date: new Date()
        }
    ])

    const addPost = post => {
        setPosts([post, ...posts])
    }

    return <>
        <Header />
        <Content posts={posts} addPost={addPost} />
    </>
}