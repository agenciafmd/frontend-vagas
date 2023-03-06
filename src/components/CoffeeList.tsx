import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Keyboard, Mousewheel, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect, useState } from 'react'
import { CoffeeCard } from './CoffeeCard'
import clsx from 'clsx'

interface Product {
  id: string
  name: string
  description: string
  price: number
  imgUrl: string
  type: string[]
}

export function CoffeeList() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchData() {
      const response: Product[] = await fetch(
        'https://my-json-server.typicode.com/geovaneborba/rocketseat-ignite-desafios/products',
        {
          method: 'GET',
        }
      ).then((response) => response.json())

      const coffeeList = response.slice(0, 6)

      setProducts(
        coffeeList.map((item: Product) => {
          return {
            ...item,
            imgUrl: item.imgUrl.replace('/', '/src/assets/'),
          }
        })
      )
    }
    fetchData()
  }, [])

  return (
    <section id="coffee-list" className={clsx('mx-4 mt-16 animate-fade-down')}>
      <h2
        className={clsx(
          'text-3xl font-baloo font-extrabold text-base-subtitle mb-8',
          'sm:text-3xl'
        )}
      >
        Nossos cafés
      </h2>

      <div
        className={clsx(
          'flex flex-col gap-4',
          'sm:flex-row sm:flex-wrap sm:gap-2',
          'md:gap-4',
          'xl:grid-cols-3'
        )}
      >
        {products.map((product) => (
          <CoffeeCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}
