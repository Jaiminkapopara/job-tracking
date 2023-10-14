import React from 'react'
import styles from './button.module.css'

const Button = ({text, handler, outline, type}) => {
  return (
    <>
        <button className={outline ? styles.outlineButton : styles.button} onClick={handler} type={type}>
            {text}
        </button>
    </>
  )
}

export default Button
