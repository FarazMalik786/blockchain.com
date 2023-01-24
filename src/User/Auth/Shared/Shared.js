import React from 'react'
import style from './Shared.module.css'
function Shared({children}) {
  return (
    <div className={style.title}>{children}</div>
  )
}

export default Shared
