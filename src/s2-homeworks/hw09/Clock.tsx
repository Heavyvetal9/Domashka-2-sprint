import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        stop();
        const id: number = +setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(id);
    };


    // const start = () => {
    //     stop()
    //     const id: number = +setInterval(()=>{
    //         setDate(new Date())
    //     }, 1000)
    //     setTimerId(id)// пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    //     // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    //
    // }


    const stop = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(undefined);
        }
    };


    // const stop = () => {
    //     clearInterval(timerId)// пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    //
    // }

    const onMouseEnter = () => {
        setShow(true)// пишут студенты // показать дату если наведена мышка

    }
    const onMouseLeave = () => {
        setShow(false)// пишут студенты // спрятать дату если мышка не наведена

    }

    const stringTime = new Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date) || <br />;

    // const stringTime = new Intl.DateTimeFormat('en-US', {weekday:'long'}).format(date) || <br/>
    const stringDate = new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date) || <br />;
    // const stringDate = date?.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }) || <br/>

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)

    const stringDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date) || <br />;
    const stringMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date) || <br />;

    // const stringDay = date?.toLocaleDateString('en-US', {weekday: 'long'}) || <br/> // пишут студенты
    // const stringMonth = date?.toLocaleDateString('en-US', {month: 'long'})|| <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
