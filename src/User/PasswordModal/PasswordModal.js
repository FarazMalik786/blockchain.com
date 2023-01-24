import React from 'react'
import Modal from '../../Shared/Modal/Modal'
import Field from '../../Shared/Field/Field'
import Button from '../../Shared/Button/Button'
import style from './PasswordModal.module.css'


function PasswordModal({close}) {
  return (
    <div>
       <Modal
    className={style.modal}
    title='Change Password'
    close={close}
    actions={
      <Button primary onClick={close}>Confirm</Button>
    }
  >
    <div className={style.modalContent}>
      <Field label='Current Password' type='password'/>
      <Field label='New password' type='password'/>
      <Field label='Confirm new password' type='password'/>
    </div>
  </Modal>
    </div>
  )
}

export default PasswordModal
