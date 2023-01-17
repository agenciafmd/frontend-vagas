import { 
  Box, 
  Container, 
  Menu, 
  MenuButton, 
  MenuList, 
  Stack, 
  useColorModeValue, 
  MenuItem, 
  IconButton, 
  Link 
} from '@chakra-ui/react';

import { ThemeToggle } from '../toggle_theme';
import { Link as Link2 } from 'react-scroll';
import { HamburgerIcon } from '@chakra-ui/icons';

export function Header() {
  return(
  <Box
    position='fixed'
    as="nav"
    w="100%"
    zIndex={10}
    bg={useColorModeValue('#ffffff40', '#20202380')}
    css={{ backdropFilter: 'blur(10px)' }}
    borderBottom='3px'
    borderBottomStyle='solid'
    borderBottomColor='#9ef542'
  >
    <Container
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      p='4'
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        spacing='20px'
      >
          <Link2 
          to='Home' 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500} 
          style={{ cursor: 'pointer', textDecoration: 'underline'}}
          > 
            Home
          </Link2>

          <Link2 
          to='Cards' 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500}
          style={{ cursor: 'pointer', textDecoration: 'underline'}}
          > 
            Top rated
          </Link2>

          <Link2 
          to='Overviews_Cards' 
          spy={true} smooth={true} 
          offset={50} 
          duration={500}
          style={{ cursor: 'pointer', textDecoration: 'underline'}}
          > 
            Overviews
          </Link2>

          <Link2 
          to='footer' 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500}
          style={{ cursor: 'pointer', textDecoration: 'underline'}}
          > 
            Footer
          </Link2>
      </Stack>

      <Box flex={1} align="right">
        <ThemeToggle/>

        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
          <Menu>
            <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
            />

            <MenuList>
                <MenuItem>
                  <Link2 to='Home' spy={true} smooth={true} offset={50} duration={500}>
                    Home
                  </Link2>
                </MenuItem>

                <MenuItem>
                  <Link2 to='Cards' spy={true} smooth={true} offset={50} duration={500}>
                    Top rated
                  </Link2>
                </MenuItem>

                <MenuItem>
                  <Link2 to='Overviews_Cards' spy={true} smooth={true} offset={50} duration={500}>
                    Overviews
                  </Link2>
                </MenuItem>

                <MenuItem>
                  <Link2 to='footer' spy={true} smooth={true} offset={50} duration={500}>
                    Footer
                  </Link2>
                </MenuItem>

            </MenuList>
          </Menu>
        </Box>
      </Box>


    </Container>
  </Box>
  )
}