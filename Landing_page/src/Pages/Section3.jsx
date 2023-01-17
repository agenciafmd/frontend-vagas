import { 
  Card, 
  CardBody, 
  useColorModeValue, 
  Image, 
  Heading, 
  Stack, 
  Button, 
  Text, 
  CardFooter,
  IconButton, 
  Container 
} from '@chakra-ui/react';

import { SwiperSlide, Swiper } from 'swiper/react';
import { InfoIcon } from '@chakra-ui/icons';
import { Autoplay } from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css';
import './Swiper.css'

const Movie_Img = 'https://image.tmdb.org/t/p/w500/'
export function SlideCards({movie}) {
  return(
    <div id='Overviews_Cards'>

        <Heading
        p='10px' 
        borderLeft='5px'
        marginBottom='40px'
        marginLeft={{ base: '10px', md: '50px'}} 
        borderLeftStyle='solid' 
        borderLeftColor='#9ef542' 
        fontWeight='bold' 
        fontSize={{ base: '25px', md: '35px'}}
        >
          Overviews
        </Heading>

      <Container display={{ base: 'none', md: 'block'}} maxW='1000px'>
        <Swiper
        slidesPerView={3}
        loop={true}
        >
          {movie.map((movies) => {
            return (
              <SwiperSlide key={movies.title}>
                <Card 
                h='530px'
                w='300px' 
                background={useColorModeValue('#fff', '#20202380')}
                >
                  <CardBody>
                      <Image 
                      src={`${Movie_Img}${movies.poster_path}`} 
                      alt={movies.title} 
                      borderRadius={{ base: 'none', md:'lg'}} 
                      h='250px' 
                      w='300px'
                      />

                      <Stack spacing='20px' marginTop='10px'>
                        <Heading 
                        fontSize='17px'
                        >
                          {movies.title}
                        </Heading>

                        <Container>
                          <Heading 
                          fontSize='17px'
                          fontWeight='extrabold'
                          >
                            Overview:
                          </Heading>

                          <Text maxH='70px' overflow='hidden'>
                            {movies.overview}
                          </Text>
                        </Container>
                      </Stack>
                  </CardBody>

                  <CardFooter 
                  display='flex' 
                  alignItems='center' 
                  justifyContent='center'
                  >
                    <Text>See More:</Text>
                    <IconButton icon={<InfoIcon/>} marginLeft='10px' />
                  </CardFooter>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>



      <Container display={{ base: 'block', md: 'none'}} maxW='1000px'>
        <Swiper
        modules={[ Autoplay ]}
        autoplay={{ delay: 2000 }}
        slidesPerView={2}
        loop={true}
        >
          {movie.map((movies) => {
            return (
              <SwiperSlide key={movies.id}>
                <Card 
                h='300px' 
                w='160px'
                background={useColorModeValue('#fff', '#20202380')}
                >
                  <CardBody>
                      <Image 
                      src={`${Movie_Img}${movies.poster_path}`} 
                      alt={movies.title} 
                      borderRadius={{ base: 'none', md:'lg'}} 
                      h={{ base: '120px', md: '250px'}} 
                      w={{ base: '150px', md: '300px'}}
                      />

                      <Stack spacing='20px' marginTop='10px'>
                        <Heading 
                        fontSize={{ base: '15px', md: '17px'}}
                        >
                          {movies.title}
                        </Heading>
                      </Stack>
                  </CardBody>

                  <CardFooter 
                  display='flex' 
                  alignItems='center' 
                  justifyContent='center'
                  >
                    <Text>See More:</Text>
                    <IconButton icon={<InfoIcon/>} marginLeft='10px' />
                  </CardFooter>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
}