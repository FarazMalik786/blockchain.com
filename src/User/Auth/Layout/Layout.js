import React from 'react'
import logo from 'assets/images/logo.png'
import cn from 'classnames'
import style from './Layout.module.css'

function Layout({children, className}) {
  return (
    <div className={style.page}>
    <div className={cn(style.wrap, className)}>
      <img className={style.logo} src={logo} alt="logo"/>
      {children}
    </div>
  </div>
  )
}

export default Layout
