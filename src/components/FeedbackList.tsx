import clsx from 'clsx'
import { Pagination, A11y, Mousewheel, Keyboard, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Feedback } from './FeedbackCard'

export function FeedbackList() {
  return (
    <section
      id="feedback-list"
      className={clsx('mx-4 mt-16')}
      data-aos="zoom-in"
      data-aos-duration={1500}
      data-aos-easing="linear"
    >
      <h2
        className={clsx(
          'font-baloo font-extrabold text-3xl text-base-subtitle mb-8',
          'sm:text-3xl'
        )}
      >
        O que nossos clientes acham
      </h2>

      <Swiper
        modules={[Pagination, A11y, Mousewheel, Keyboard, Autoplay]}
        pagination
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        keyboard
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 'auto',
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
            width: 640,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
            width: 768,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        className="pb-12"
      >
        <SwiperSlide>
          <Feedback />
        </SwiperSlide>

        <SwiperSlide>
          <Feedback />
        </SwiperSlide>

        <SwiperSlide>
          <Feedback />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
