import { 
  Box, 
  Container, 
  FormControl, 
  FormLabel, 
  Input, 
  Spacer, 
  Text, 
  FormHelperText, 
  FormErrorMessage, 
  Button, 
  useColorModeValue, 
  useDisclosure, 
  IconButton
} from '@chakra-ui/react'


import {   
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/modal';


import { motion, useAnimation, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { CheckIcon } from '@chakra-ui/icons';


export function FormNewsLetter() {
  const {ref, inView} = useInView();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ test, setTest ] = useState(false)
 
  const animation = useAnimation();
  const animationForm = useAnimation();


  function validateName(value) {
    let error
    if (!value, value == 'Enter name') {
      error = 'Name is required'
    }
    return error
  }

  function validateEmail(value) {
    let error
    if (!value, value == 'Enter E-mail') {
      error = 'E-mail is required'
    }
    return error
  }

  useEffect(() => {
    if(inView){
      animation.start({
        opacity: 1,
        x: '5vh',
        transition: {
          ease: [0, 0.71, 0.2, 1.01],
          duration: 2,
          type: 'Inertia',
          delay: 0.3,
        }
      }),

      animationForm.start({
        opacity: 1,
        x: '5vh',
        transition: {
          ease: [0, 0.71, 0.2, 1.01],
          duration: 2,
          type: 'Inertia',
          delay: 0.3
        }
      })
    }

    if(!inView){
      animation.start({opacity: 0, x: '-100vh'})
      animationForm.start({opacity: 0, x: '100vh'})
    }

  }, [inView])

  return (
    <div>
      <Box 
      maxW='1200px' 
      display={{ base: 'none', md: 'flex'}} 
      margin='100px auto 0' 
      justifyContent='space-between' 
      p='50px 0' ref={ref}
      >
        <motion.div animate={animation}>
          <Text  
          fontSize='50px' 
          lineHeight='50px'
          borderLeft='5px solid #9ef542'
          p='10px'
          >
            Subscribe to <br/> <Spacer marginLeft='15px'>NewsLetters</Spacer>
          </Text>
        </motion.div>
        

        <motion.div animate={animationForm}>
          <Container display='flex'>
            <Formik
              initialValues={{ name: 'Enter name', email: 'Enter E-mail' }}
              onSubmit={onOpen}
            >
              {(props) => (
                <Form>
                  <Field name='name' validate={validateName}>
                    {({ field, form }) => (
                      
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>Name</FormLabel>
                        <Input {...field} 
                        placeholder='name' 
                        border='2px solid #9ef542' 
                        bg={useColorModeValue('#fff', '#000')} 
                        color={useColorModeValue('#000', '#fff')} 
                        marginRight='20px'/>
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name='email' validate={validateEmail}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <FormLabel>E-mail</FormLabel>
                        <Input {...field} 
                        placeholder='e-mail'
                         border='2px solid #9ef542' 
                         bg={useColorModeValue('#fff', '#000')} 
                         color={useColorModeValue('#000', '#fff')} 
                         p='10px'/>
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                    <Button
                      mt={4}
                      type='submit'
                      border='3px solid #9ef542'
                      bg={useColorModeValue('#fff', '#000')}
                      marginRight='20px'
                    >
                      Submit
                    </Button>
                </Form>
              )}
            </Formik>
         </Container>
        </motion.div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='#000'>
          <ModalHeader color='#fff'>Registration completed successfully</ModalHeader>
          <ModalCloseButton color='#fff'/>
          <ModalBody display='flex' justifyContent='center'>
            <IconButton icon={<CheckIcon color='#9ef542'/>} onClick={onClose} bg='transparent'></IconButton>
          </ModalBody>
        </ModalContent>
      </Modal>
      </Box>
    </div>
  )
}