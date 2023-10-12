import React from 'react'
import styles from './logo.module.css'
import Image from 'next/image'
import Bird from '../../../public/logo.png'

const Logo = ({width, height}) => {
  return (
    <>
        <div className={styles.logo}>
            <Image src={Bird} alt='logo' width={width} height={height}/>
        </div> 
    </>
  )
}

export default Logo
