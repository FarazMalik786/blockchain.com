import React from 'react'
import cn from 'classnames'
import style from './style.module.css'

function Font({children, color, pointer, ...props}) {
  return (
    <span {...props} className={
        cn(color && style[color], pointer && style.pointer)
      }>{children}</span>
  )
}

export default Font
