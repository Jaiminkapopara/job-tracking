import Image from 'next/image'
import React from 'react'

const Img = ({src, width, height}) => {
  return (
    <>
        <Image src={src} alt='s' width={width} height={height}/> 
    </>
  )
}

export default Img
