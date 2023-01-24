import React from 'react'
import TopBar from "./TopBar/TopBar"
import Sidebar from './Sidebar/Sidebar'
import style from './Layout.module.css'

function Layout({children}) {
  return (
    <div className={style.page}>
    <TopBar />
    <div className={style.columns}>
      <Sidebar />
      <div className={style.content}>{children}</div>
    </div>
  </div>
  )
}

export default Layout
