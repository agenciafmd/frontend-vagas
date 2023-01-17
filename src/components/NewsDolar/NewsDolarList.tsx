import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import NewsDolarItem from './NewsDolarItem';
import { Carousel, Container, Inner } from './styles';
import { AiFillDollarCircle } from 'react-icons/ai';


const NewsDolarList = () => {
  const carousel = useRef<HTMLElement | any>(null);
  const [width, setWidth] = useState(0);
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    setWidth(carousel.current?.scrollWidth);
    const getArticles = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/everything?q=dolar&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      setArticles(response.data.articles);
    }
    getArticles();

    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);

  }, []);

  return (
    <Container>
      <Carousel
        ref={carousel}
        whileTap={{ cursor: 'grabbing' }}
      >
        <Inner
          drag='x'
          dragConstraints={{ left: -width, right: 13020 }}
          initial={{ x: width }}
          animate={{ x: 13020 }}
          transition={{ duration: 3 }}
        >
          {articles.map((article: any, index) => {
            return (
              <div key={index}>
                <NewsDolarItem
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  urlImage={article.urlToImage}
                />
              </div>
            )
          })}
        </Inner>
      </Carousel>
      <div className='dolar'>
        <AiFillDollarCircle className='icon-dolar' color='#ffd700' />
        <h1>Dolar News</h1>
      </div>
    </Container>
  );
}

export default NewsDolarList;