import React, { useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [disabled, setDisabled] = useState(false) // состояние для блокировки кнопок

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://samurai.it-incubator.io/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')
        setDisabled(true) // блокируем кнопки

        axios
            .post(url, { success: x })
            .then((res) => {
                setCode('Код 200!')
                setImage(success200)
                // дописываем обработку успешного ответа
                setText(res.data.errorText || '')
                setInfo(res.data.info || '')
            })
            .catch((e) => {
                // дописываем обработку ошибок
                if (e.response) {
                    // сервер ответил с ошибкой
                    const status = e.response.status
                    if (status === 400) {
                        setCode('Ошибка 400!')
                        setImage(error400)
                        setText(e.response.data.errorText || '')
                        setInfo(e.response.data.info || '')
                    } else if (status === 500) {
                        setCode('Ошибка 500!')
                        setImage(error500)
                        setText(e.response.data.errorText || '')
                        setInfo(e.response.data.info || '')
                    } else {
                        // другая ошибка сервера
                        setCode(`Error ${status}!`)
                        setImage(errorUnknown)
                        setText(e.response.data.errorText || e.message)
                        setInfo(e.response.data.info || 'Unknown server error')
                    }
                } else if (e.request) {
                    // запрос был сделан, но ответ не получен
                    setCode('Network Error!')
                    setImage(errorUnknown)
                    setText(e.message || 'Network error')
                    setInfo('Check your internet connection')
                } else {
                    // что-то пошло не так при настройке запроса
                    setCode('Error!')
                    setImage(errorUnknown)
                    setText(e.message || 'Something went wrong')
                    setInfo('Unknown error occurred')
                }
            })
            .finally(() => {
                setDisabled(false) // разблокируем кнопки в любом случае
            })
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        disabled={disabled} // дизейблим кнопку
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={disabled} // дизейблим кнопку
                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={disabled} // дизейблим кнопку
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                        disabled={disabled} // дизейблим кнопку
                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status" />}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13