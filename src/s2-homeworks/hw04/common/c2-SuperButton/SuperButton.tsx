import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: 'red' | 'secondary' | ''
}

// const SuperButton: React.FC<SuperButtonPropsType> = ({
//                                                          xType,
//                                                          className,
//                                                          disabled,
//                                                          ...restProps
//                                                      }) => {
//     let finalClassName = s.button;
//
//     if (disabled) {
//         finalClassName += " " + s.disabled;
//     } else if (xType === "red") {
//         finalClassName += " " + s.red;
//     } else if (xType === "secondary") {
//         finalClassName += " " + s.secondary;
//     }
//
//     if (className) {
//         finalClassName += " " + className;
//     }

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const defaultClassName = s.default

    const finalClassName =
        `
            ${s.button}
            ${disabled ? s.disabled : ''}
            ${xType === 'red' ? s.red : ''}
             ${xType === 'secondary' ? s.secondary : ''}
            ${className ? className : defaultClassName}
           
        `
    // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
