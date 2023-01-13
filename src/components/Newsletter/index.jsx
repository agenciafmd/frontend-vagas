import Image from 'next/image'
import { useState } from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import arrow from '../../assets/arrowButton.svg'
import checkIcon from '../../assets/modalNews/check.svg'
import { Input } from '../Input'
import { InputBox } from '../Input/style'
import { NewsletterButton, NewsletterContainer, NewsletterForm } from './style'

export function Newsletter() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    clearErrors
  } = useForm({
    defaultValues: {
      name: '',
      email: ''
    }
  })

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const onSubmit = async data => {
    console.log(data)
    reset({ name: '', email: '' })

    setShow(true)
  }

  const onError = () => {
    setTimeout(() => {
      clearErrors()
    }, 5000)
  }

  return (
    <>
      <NewsletterContainer>
        <h1>
          Assine nossa <span>newsletter</span>
        </h1>

        <NewsletterForm onSubmit={handleSubmit(onSubmit, onError)}>
          <InputBox>
            <Input
              control={control}
              name="name"
              placeholder="Nome"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <p>{`O campo nome é obrigatório.`}</p>}
          </InputBox>

          <InputBox>
            <Input
              control={control}
              name="email"
              placeholder="E-mail"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <p>{`O campo e-mail é obrigatório.`}</p>}
          </InputBox>

          <NewsletterButton>
            <Image src={arrow} alt="send button" />
          </NewsletterButton>
        </NewsletterForm>
      </NewsletterContainer>

      <Modal
        show={show}
        onHide={handleClose}
        contentClassName="customModalNews"
      >
        <ModalBody>
          <Image src={checkIcon} alt="icon check" />

          <h3>Sucesso!</h3>
          <p>
            sua inscrição foi realizada e em breve você começará a receber
            nossas notícias.
          </p>
        </ModalBody>
      </Modal>
    </>
  )
}
