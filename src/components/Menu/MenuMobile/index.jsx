import Image from 'next/image'
import { useState } from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import toggleMenu from '../../../assets/toggleMenu.svg'
import { MenuDesktop } from '../MenuDesktop'

export function MenuMobile() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Image
        src={toggleMenu}
        alt="Toggle Menu"
        onClick={handleShow}
        style={{ cursor: 'pointer' }}
      />

      <Modal show={show} fullscreen="sm-down" contentClassName="customModal">
        <ModalBody onClick={handleClose}>
          <MenuDesktop />
        </ModalBody>
      </Modal>
    </>
  )
}
