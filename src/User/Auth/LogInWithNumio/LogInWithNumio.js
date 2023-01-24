import React from 'react'
import {Title} from "../Shared/Shared"
import Layout from '../Layout/Layout'
import qr from "../../../assets/images/numio-qr.png"
import style from './LogInWithNumio.module.css'


function LogInWithNumio() {
  return (
    <div>
       <Layout className={style.wrap}>
    <Title>Login</Title>
    <div className={style.text}>
      Scan the QR code with your Numio app to login
    </div>
    <div className={style.qr}>
      <img src={qr} alt="numio qr code"/>
    </div>
  </Layout>
    </div>
  )
}

export default LogInWithNumio
