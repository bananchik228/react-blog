import React from 'react'

import './about.scss'

export default () => {
    return (
        <div className="about">
            <h1 className="about__title">Обо мне</h1>
            <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum voluptate unde quidem quia sapiente. Nostrum tempora qui reprehenderit, nobis libero odio deleniti non in mollitia veniam perferendis neque quos enim vero minima laudantium temporibus deserunt et beatae voluptas ipsa? Error quam debitis soluta modi omnis itaque corrupti fugiat odit!</p>

            <img src="https://picsum.photos/600/300" alt="Какая-то картинка" />

            <p className="about__text about__text_size_small">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, deleniti voluptas non aperiam recusandae corporis voluptatem dicta sunt rerum, mollitia autem quaerat optio cupiditate eaque in eos nostrum maxime debitis.</p>
        </div>
    )
}