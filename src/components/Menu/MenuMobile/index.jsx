import Image from 'next/image'
import { useState } from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import claws from '../../../assets/claws.svg'
import toggleMenu from '../../../assets/toggleMenu.svg'
import { MenuDesktop } from '../MenuDesktop'
import { MenuMobileImgContainer } from './style'

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

          <MenuMobileImgContainer>
            <Image src={claws} alt="claws" height={347} />
          </MenuMobileImgContainer>
        </ModalBody>
      </Modal>
    </>
  )
}
