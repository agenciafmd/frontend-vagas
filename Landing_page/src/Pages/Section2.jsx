import { 
  Flex, 
  Heading, 
  Box, Card, 
  CardBody, 
  Image, Stack, 
  Text, 
  CardFooter, 
  Divider, 
  Button, 
  GridItem, 
  Grid, 
  Container, 
  useColorModeValue 
} from '@chakra-ui/react';
import './Swiper.css'


const Movie_Img = 'https://image.tmdb.org/t/p/w500/'

export function Section_TopRated({movie}) {

  return (
    <div className='box' id='Cards'>
      <Flex>
        <Heading 
        p='2' borderLeft='5px' 
        borderLeftStyle='solid' 
        borderLeftColor='#9ef542' 
        margin={{ base: '40px 10px', md: '40px 50px'}}
        fontWeight='bold' 
        fontSize={{ base: '25px', md: '35px'}}
        >
          Top Rated of Moment
        </Heading>
      </Flex>

      <div className='Card'>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'}} gap={6}>
        {movie.map((Movies) =>
            <Card 
            h={{ base: '350px', md: '550px'}} 
            w={{ base: '170px', md: '300px'}} 
            background={useColorModeValue('#fff', '#20202380')}
            key={Movies.title}
            >
              <CardBody>
                <Image 
                src={`${Movie_Img}${Movies.poster_path}`} 
                alt={Movies.title} 
                borderRadius={{ base: 'none', md:'lg'}} 
                h={{ base: '120px', md: '300px'}} 
                w={{ base: '150px', md: '500px'}}
                />

                <Stack spacing='24px' marginTop='10px'>
                  <Heading 
                  fontSize={{ base: '13px', md: '17px'}}
                  >
                    {Movies.title}
                  </Heading>

                  <Button 
                  boxShadow='inner'
                  display={{ base: 'none', md: 'block'}}
                  border='2px solid #20202380'
                  fontWeight='medium'
                  >
                    Buy section
                  </Button>
                </Stack>

              </CardBody>

              <Divider display={{ base: 'none', md: 'block'}}/>

              <CardFooter display={{ base: 'block', md: 'flex'}} alignItems='center'>

                <Button 
                display={{ base: 'block', md: 'none'}}
                boxShadow='xl'
                border='2px solid #20202380'
                margin='0'
                fontWeight='medium'
                >
                  Buy section
                </Button>

                <Container 
                display='flex' 
                alignItems='center' 
                marginTop='15px'>

                  <Container display='flex' alignItems='center' justifyContent='center'>
                    <Text>
                      Rated:
                    </Text>

                    <Text 
                    p={{ base: '7px', md: '10px'}} 
                    bg={useColorModeValue('#000', '#fff')} 
                    borderRadius='lg' 
                    color={useColorModeValue('#fff', '#000')}
                    marginLeft='10px'
                    >
                      {Movies.vote_average}
                    </Text>
                  </Container>

                    <Text fontWeight='medium' display={{ base: 'none', md: 'block'}}>
                      Views:{Movies.popularity}
                    </Text>

                </Container>

              </CardFooter>
            </Card>
            )}
          </Grid>
      </div>
      

    </div>
  );
}