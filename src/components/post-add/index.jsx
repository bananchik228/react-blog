import React from 'react'

import Button from '@components/button'

import './post-add.scss'

export default () => {
    return (
        <div className="post-add">
            <div className="post-add__form">
                <h1 class="post-add__title">Создание нового поста</h1>

                <div className="post-add__item">
                    <div className="post-add__name">
                        <label htmlFor="input-title">Заголовок поста</label>
                    </div>
                    <div className="post-add__content">
                        <input id="input-title" name="title" placeholder="Заголовок поста" />
                    </div>
                </div>

                <div className="post-add__item">
                    <div className="post-add__name">
                        <label htmlFor="input-description">Краткое описание</label>
                    </div>
                    <div className="post-add__content">
                        <textarea id="input-description" name="description" placeholder="Краткое описание" />
                    </div>
                </div>

                <div className="post-add__item">
                    <div className="post-add__name">
                        <label htmlFor="input-content">Содержимое поста</label>
                    </div>
                    <div className="post-add__content">
                        <textarea id="input-content" name="content" placeholder="Содержимое поста" />
                    </div>
                </div>

                <div className="post-add__item">
                    <div className="post-add__name">
                        <label htmlFor="input-category">Категория</label>
                    </div>
                    <div className="post-add__content">
                        <select id="input-category" name="category">
                            <option value="Личная жизнь">Веб-разработка</option>
                            <option value="Планы на будущее">Планы на будущее</option>
                            <option value="Личная жизнь">Личная жизнь</option>
                        </select>
                    </div>
                </div>

                <div className="post-add__item">
                    <div className="post-add__name" />
                    <div className="post-add__content">
                        <Button type="info">Опубликовать</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}