import React from 'react'
import styles from "./input.module.scss"

const Input = () => {
  return (
    <div className={styles.container}>
            <input type="text" placeholder="joanjames@gmail.com"/> <button>Join</button>
    </div>
  )
}

export default Input