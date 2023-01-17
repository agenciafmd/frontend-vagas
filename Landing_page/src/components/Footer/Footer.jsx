import { 
  Box, 
  Text, 
  useColorModeValue, 
  Stack, 
  Container 
} from '@chakra-ui/react';
import { Link as Link2 } from 'react-scroll';

export function Footer() {
  return (
    <footer id='footer'>
      <Box bg={useColorModeValue('#000', '#fff')}>
        <Box 
        display='flex' 
        justifyContent='space-between' 
        margin='0 auto' maxW='1200px' 
        p='50px 0' 
        alignItems='center'
        >


        <Container>
          <Text 
          color={useColorModeValue('#fff', '#000')}
          lineHeight={{ base: '20px', md: '25px'}}
          >
          email@email.com <br/> 17 9 4736-4958
          </Text>
        </Container>
        

      <Container display='flex' alignItems='end'>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display='flex'
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent='flex-end'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={{ base: '5px', md: '20px'}}
          >

            <Link2 
            to='Home' 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            style={{ cursor: 'pointer', textDecoration: 'underline'}}
            > 
              <Text color={useColorModeValue('#fff', '#000')}>Home</Text>
            </Link2>

            <Link2 
            to='Cards' 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
            style={{ cursor: 'pointer', textDecoration: 'underline'}}
            > 
              <Text color={useColorModeValue('#fff', '#000')}>Top rated</Text>
            </Link2>

            <Link2 
            to='Overviews_Cards' 
            spy={true} smooth={true} 
            offset={50} 
            duration={500}
            style={{ cursor: 'pointer', textDecoration: 'underline'}}
            > 
              <Text color={useColorModeValue('#fff', '#000')}>Overviews</Text>
            </Link2>
            
        </Stack>
      </Container>

        </Box>
      </Box>
    </footer>
  );
}