import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import NewsItem from './NewsItem';
import { Carousel, Container, Inner } from './styles';


const NewsList = () => {
  const carousel = useRef<HTMLElement | any>(null);
  const [width, setWidth] = useState(0);
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    setWidth(carousel.current?.scrollWidth);
    const getArticles = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`
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
                <NewsItem
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
      <div className="bitcoin">
        <img
          src='https://www.cryptocompare.com/media/19633/btc.png'
          alt='bitcoin'
        />
        <h1>Bitcoin News</h1>
      </div>
    </Container>
  );
}

export default NewsList;