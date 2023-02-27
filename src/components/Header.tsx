import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Keyboard, Mousewheel, Pagination } from 'swiper'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import coffeeCup from '../assets/coffee-cup.svg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import clsx from 'clsx'

export function Header() {
  return (
    <header
      className={clsx('bg-background-header ', 'lg:py-[5.875rem] lg:px-40')}
    >
      <Swiper
        modules={[Pagination, A11y, Mousewheel, Keyboard, Autoplay]}
        // autoplay={{ delay: 3000 }}
        speed={300}
        keyboard
        pagination={{ clickable: true }}
        className="pb-12"
      >
        <SwiperSlide>
          <div
            className={clsx(
              'px-4 flex flex-col mt-8',
              'sm:grid sm:grid-cols-2',
              'lg:mt-0'
            )}
          >
            <div className={clsx('order-2', 'sm:order-1')}>
              <h1
                className={clsx(
                  'text-base-title font-baloo font-extrabold text-2xl mt-4',
                  'lg:text-5xl'
                )}
              >
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p
                className={clsx(
                  'text-base-title font-roboto text-xl mt-4',
                  'lg:text-2xl'
                )}
              >
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <ul
                className={clsx(
                  'flex flex-col gap-y-5 mt-8',
                  'lg:grid lg:grid-cols-2 lg:gap-y-4'
                )}
              >
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-dark p-2 rounded-full font-roboto text-base">
                    <ShoppingCart weight="fill" className="text-white" />
                  </span>
                  Compra simples e segura
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-base-text p-2 rounded-full font-roboto text-base">
                    <Package weight="fill" className="text-white" />
                  </span>
                  Embalagem mantém o café intacto
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-yellow p-2 rounded-full font-roboto text-base">
                    <Timer weight="fill" className="text-white" />
                  </span>
                  Entrega rápida e rastreada
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-purple p-2 rounded-full font-roboto text-base">
                    <Coffee weight="fill" className="text-white" />
                  </span>
                  O café chega fresquinho até você
                </li>
              </ul>
            </div>
            <img
              src={coffeeCup}
              alt="Imagem de um copo de café"
              className={clsx('order-1', 'sm:order-2')}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={clsx(
              'px-4 flex flex-col mt-8',
              'sm:grid sm:grid-cols-2'
            )}
          >
            <div className={clsx('order-2', 'sm:order-1')}>
              <h1
                className={clsx(
                  'text-base-title font-baloo font-extrabold text-2xl mt-4',
                  'lg:text-5xl'
                )}
              >
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p
                className={clsx(
                  'text-base-title font-roboto text-xl mt-4',
                  'lg:text-2xl'
                )}
              >
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <ul
                className={clsx(
                  'flex flex-col gap-y-5 mt-8',
                  'lg:grid lg:grid-cols-2 lg:gap-y-4'
                )}
              >
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-dark p-2 rounded-full font-roboto text-base">
                    <ShoppingCart weight="fill" className="text-white" />
                  </span>
                  Compra simples e segura
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-base-text p-2 rounded-full font-roboto text-base">
                    <Package weight="fill" className="text-white" />
                  </span>
                  Embalagem mantém o café intacto
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-yellow p-2 rounded-full font-roboto text-base">
                    <Timer weight="fill" className="text-white" />
                  </span>
                  Entrega rápida e rastreada
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-purple p-2 rounded-full font-roboto text-base">
                    <Coffee weight="fill" className="text-white" />
                  </span>
                  O café chega fresquinho até você
                </li>
              </ul>
            </div>
            <img
              src={coffeeCup}
              alt="Imagem de um copo de café"
              className={clsx('order-1', 'sm:order-2')}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={clsx(
              'px-4 flex flex-col mt-8',
              'sm:grid sm:grid-cols-2'
            )}
          >
            <div className={clsx('order-2', 'sm:order-1')}>
              <h1
                className={clsx(
                  'text-base-title font-baloo font-extrabold text-2xl mt-4',
                  'lg:text-5xl'
                )}
              >
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p
                className={clsx(
                  'text-base-title font-roboto text-xl mt-4',
                  'lg:text-2xl'
                )}
              >
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <ul
                className={clsx(
                  'flex flex-col gap-y-5 mt-8',
                  'lg:grid lg:grid-cols-2 lg:gap-y-4'
                )}
              >
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-dark p-2 rounded-full font-roboto text-base">
                    <ShoppingCart weight="fill" className="text-white" />
                  </span>
                  Compra simples e segura
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-base-text p-2 rounded-full font-roboto text-base">
                    <Package weight="fill" className="text-white" />
                  </span>
                  Embalagem mantém o café intacto
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-yellow p-2 rounded-full font-roboto text-base">
                    <Timer weight="fill" className="text-white" />
                  </span>
                  Entrega rápida e rastreada
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-purple p-2 rounded-full font-roboto text-base">
                    <Coffee weight="fill" className="text-white" />
                  </span>
                  O café chega fresquinho até você
                </li>
              </ul>
            </div>
            <img
              src={coffeeCup}
              alt="Imagem de um copo de café"
              className={clsx('order-1', 'sm:order-2')}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  )
}
