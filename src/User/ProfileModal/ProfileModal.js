import React from 'react'
import { useState } from 'react'
import Modal from '../../Shared/Modal/Modal'
import Button from '../../Shared/Button/Button'
import Checkbox from '../../Shared/Checkbox/Checkbox'
import EmailModal from "../../User/EmailModal/EmailModal"
import PasswordModal from '../../User/PasswordModal/PasswordModal'
import {Link} from 'react-router-dom'
import avatar from "../../assets/images/avatar.png"
import routes from '../../routes'
import style from './ProfileModal.module.css'

function ProfileModal({close}) {
    const [openEmailModal, setOpenEmailModal] = useState(false)
  const [openPasswordModal, setOpenPasswordModal] = useState(false)
  return (
    <>
    {
      !openEmailModal &&
      <Modal className={style.modal} close={close}>
        <div className={style.modalHeader}>
          <div className={style.modalAvatar} style={{backgroundImage: `url(${avatar})`}}/>
          <div className={style.modalUserInfo}>
            <div className={style.modalName}>Robert Chen</div>
            <div className={style.modalEmail}>robchen@gmail.com</div>
            <div className={style.modalDate}>Since 07/01/2020</div>
          </div>
        </div>
        <Button className={style.modalButton} light onClick={() => setOpenPasswordModal(true)}>
          Change Password
        </Button>
        <Button className={style.modalButton} light onClick={() => setOpenEmailModal(true)}>
          Change Email
        </Button>
        <Button className={style.modalButton} light component={'label'}>
          <div>Dark Mode</div>
          <Checkbox/>
        </Button>
        <Button component={Link} to={routes.auth.logIn()} className={style.modalButton} light>
          Log out
        </Button>
      </Modal>
    }
    {openEmailModal && <EmailModal close={() => setOpenEmailModal(false)}/>}
    {openPasswordModal && <PasswordModal close={() => setOpenPasswordModal(false)}/>}
  </>
  )
}

export default ProfileModal
