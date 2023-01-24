import React from 'react'
import Modal from '../../Shared/Modal/Modal'
import Button from '../../Shared/Button/Button'
import Field from '../../Shared/Field/Field'
import style from './EmailModal.module.css'

function EmailModal({close}) {
  return (
    <div>
      <Modal
    className={style.modal}
    title='Change Email'
    close={close}
    actions={
      <Button primary onClick={close}>Send Verification</Button>
    }
  >
    <div className={style.modalContent}>
      <div className={style.text}>
        Enter a new email address, and click "Send Verification." You’ll receive a verification email with a link you can click on to finalize the change.
      </div>
      <Field error='Error message' />
    </div>
  </Modal>
    </div>
  )
}

export default EmailModal
