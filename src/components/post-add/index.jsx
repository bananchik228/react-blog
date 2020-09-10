import React from 'react'
import { useHistory } from 'react-router-dom'
import useInput from '@hooks/useInput'

import Button from '@components/button'

import './post-add.scss'

export default ({addPost}) => {
    const redirect = useHistory().push

    const [title, changeTitle] = useInput(''),
          [description, changeDescription] = useInput(''),
          [content, changeContent] = useInput(''),
          [category, changeCategory] = useInput('Веб-разработка')

    function sendForm() {
        addPost({
            title: title,
            category: category,
            description: description,
            content: content,
            date: new Date()
        })

        redirect('/posts')
    }

    return (
        <div className="post-add">
            <div className="post-add__form">
                <h1 className="post-add__title">Создание нового поста</h1>

                <div className="post-add__item">
                    <div className="post-add__name">
                        <label htmlFor="input-title">Заголовок поста</label>
                    </div>
                    <div className="post-add__content">
                        <input id="input-title" name="title" placeholder="Заголовок поста" value={title} onChange={changeTitle} />
                    </div>
                </div>

                <div className="post-add__item">
                    <div className="post-add__name">
                        <label htmlFor="input-description">Краткое описание</label>
                    </div>
                    <div className="post-add__content">
                        <textarea id="input-description" name="description" placeholder="Краткое описание" value={description} onChange={changeDescription} />
                    </div>
                </div>

                <div className="post-add__item">
                    <div className="post-add__name">
                        <label htmlFor="input-content">Содержимое поста</label>
                    </div>
                    <div className="post-add__content">
                        <textarea id="input-content" name="content" placeholder="Содержимое поста" value={content} onChange={changeContent} />
                    </div>
                </div>

                <div className="post-add__item">
                    <div className="post-add__name">
                        <label htmlFor="input-category">Категория</label>
                    </div>
                    <div className="post-add__content">
                        <select id="input-category" name="category" value={category} onChange={changeCategory}>
                            <option value="Личная жизнь">Веб-разработка</option>
                            <option value="Планы на будущее">Планы на будущее</option>
                            <option value="Личная жизнь">Личная жизнь</option>
                        </select>
                    </div>
                </div>

                <div className="post-add__item">
                    <div className="post-add__name" />
                    <div className="post-add__content">
                        <Button type="info" onClick={sendForm}>Опубликовать</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}