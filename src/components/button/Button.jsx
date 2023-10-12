import React from 'react'
import styles from './button.module.css'

const Button = ({text, handler, outline}) => {
  return (
    <>
        <button className={outline ? styles.outlineButton : styles.button} onClick={handler}>
            {text}
        </button>
    </>
  )
}

export default Button
