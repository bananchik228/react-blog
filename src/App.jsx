import React from 'react'

import '@assets/sass/style.scss'

import Header from '@components/header'
import Content from '@routes/content'

export default () => {
    return <>
        <Header />
        <Content />
    </>
}