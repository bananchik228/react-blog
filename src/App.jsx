import React, { useState } from 'react'

import '@assets/sass/style.scss'

import Header from '@components/header'
import Content from '@routes/content'

export default () => {
    const [posts, setPosts] = useState([
        {
            title: 'Утренние новости!',
            description: 'У меня наконец появилось свободное время, ловите парочку интересных новостей от меня:  На акциях протеста в Белоруссии...',
            date: new Date(2021, 1, 13, 8, 13, 5)
        },
        {
            title: 'Простите за отсутсвие новостей.',
            description: 'У меня нет свободного времены что бы побликовать очень интересные посты, извините, думаю в 2021 году они будут.',
            date: new Date(2020, 10, 5, 12, 5, 23)
        },
        {
            title: 'Я создал свой блог!',
            description: 'Теперь у меня есть свой собственный блог. Здесь я буду публиковать очень интересные посты, следите за новостями!',
            date: new Date()
        }
    ])

    const addPost = post => {
        setPosts([...posts, post])
    }

    return <>
        <Header />
        <Content posts={posts} addPost={addPost} />
    </>
}