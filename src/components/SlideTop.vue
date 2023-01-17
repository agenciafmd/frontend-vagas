<template>
  <swiper
    id="firstBlock"
    :navigation="true"
    :effect="'fade'"
    :modules="modules"
    class="relative"
  >
    <img
      src="../assets/galaxy.jpg"
      alt="Galaxy from rick and morty"
      class="absolute opacity-20 w-full h-full object-cover top-0 left-0 z-0"
    />
    <swiper-slide class="">
      <div class="px-6 py-36 sm:px-14 xl:px-40">
        <div
          class="
            flex flex-col
            relative
            z-10
            items-center
            container
            mx-auto
            lg:flex-row lg:items-start lg:justify-between
          "
        >
          <div
            class="
              flex flex-col
              max-w-xl
              text-left
              sm:items-center sm:text-center
              lg:text-left lg:items-start lg:w-2/4 lg:my-auto
            "
          >
            <h2
              class="
                text-5xl
                font-bold
                tracking-tight
                text-transparent text-center
                sm:text-6xl
                lg:max-w-lg
                md:text-7xl md:text-left
                leading-tighter
                font-marker
                bg-clip-text bg-gradient-to-r
                from-secondary
                to-tertiary
              "
            >
              Portal Lemon Cheesecakes
            </h2>
            <p
              class="
                pr-0
                text-center text-base
                leading-relaxed
                text-gray-300
                sm:pr-0 sm:text-lg
                md:pr-12 md:text-left
                lg:max-w-lg
                font-sofia
                pt-7
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              faucibus consequat diam, quis efficitur sapien viverra vitae.
              Donec nec semper elit.
            </p>
          </div>
          <div
            class="
              w-full
              pt-10
              md:justify-center md:flex
              lg:block lg:pl-20 lg:pt-0 lg:w-2/4
            "
          >
            <img
              src="../assets/Rick-And-Morty-Portal.png"
              alt="Rick and Morty Portal"
            />
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="">
      <div class="px-6 py-36 sm:px-14 xl:px-40">
        <div
          class="
            flex flex-col
            relative
            z-10
            items-center
            container
            mx-auto
            lg:flex-row lg:items-start lg:justify-between
          "
        >
          <div
            class="
              flex flex-col
              max-w-xl
              text-left
              sm:items-center sm:text-center
              lg:text-left lg:items-start lg:w-2/4 lg:my-auto
            "
          >
            <h2
              class="
                text-5xl
                font-bold
                tracking-tight
                text-transparent text-center
                sm:text-6xl
                lg:max-w-lg
                md:text-7xl md:text-left
                leading-tighter
                font-marker
                bg-clip-text bg-gradient-to-r
                from-secondary
                to-tertiary
              "
            >
              Lets goo!
            </h2>
            <p
              class="
                pr-0
                text-center text-base
                leading-relaxed
                text-gray-300
                sm:pr-0 sm:text-lg
                md:pr-12 md:text-left
                lg:max-w-lg
                font-sofia
                pt-7
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              faucibus consequat diam, quis efficitur sapien viverra vitae.
              Donec nec semper elit.
            </p>
          </div>
          <div
            class="
              w-full
              pt-10
              md:justify-center md:flex
              lg:block lg:pl-20 lg:pt-0 lg:w-2/4
            "
          >
            <img
              src="../assets/rick-and-morty-falling-portal-to-portal-carter-briar-transparent.png"
              alt="Rick and Morty Portal"
            />
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="">
      <div class="px-6 py-36 sm:px-14 xl:px-40">
        <div
          class="
            flex flex-col
            relative
            z-10
            items-center
            container
            mx-auto
            lg:flex-row lg:items-start lg:justify-between
          "
        >
          <div
            class="
              flex flex-col
              max-w-xl
              text-left
              sm:items-center sm:text-center
              lg:text-left lg:items-start lg:w-2/4 lg:my-auto
            "
          >
            <h2
              class="
                text-5xl
                font-bold
                tracking-tight
                text-transparent text-center
                sm:text-6xl
                lg:max-w-lg
                md:text-7xl md:text-left
                leading-tighter
                font-marker
                bg-clip-text bg-gradient-to-r
                from-secondary
                to-tertiary
              "
            >
              See you later :)
            </h2>
            <p
              class="
                pr-0
                text-center text-base
                leading-relaxed
                text-gray-300
                sm:pr-0 sm:text-lg
                md:pr-12 md:text-left
                lg:max-w-lg
                font-sofia
                pt-7
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              faucibus consequat diam, quis efficitur sapien viverra vitae.
              Donec nec semper elit.
            </p>
          </div>
          <div
            class="
              w-full
              pt-10
              md:justify-center md:flex
              lg:block lg:pl-20 lg:pt-0 lg:w-2/4
            "
          >
            <img
              src="../assets/rick-and-morty-falling-portal-to-portal-carter-briar-transparent.png"
              alt="Rick and Morty Portal"
              class="scale-rotate"
            />
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Navigation],
    };
  },
};
</script>
<style scoped>
.swiper-slide {
  opacity: 0 !important;
}
.swiper-slide-active {
  opacity: 1 !important;
}
.swiper-slide p,
.swiper-slide h2 {
  position: relative;
}
.swiper-slide-active p {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-delay: 0.3s;
  animation-fill-mode: both;
}
.swiper-slide-active h2 {
  animation-name: fade-in-right;
  animation-duration: 2s;
  animation-delay: 0.3s;
  animation-fill-mode: both;
}
.swiper-slide-active img {
  animation-name: fade-in-left;
  animation-duration: 2s;
  animation-delay: 0.3s;
  animation-fill-mode: both;
}
.swiper-slide-active .scale-rotate{
   animation: rotate_scale 3s;
   animation-fill-mode: both
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(-150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes rotate_scale {
  0% {
    -webkit-transform: scale(1) rotate(360deg);
    opacity: 1
  }
  100% {
    -webkit-transform: scale(0) rotate(-360deg);
    opacity: 0
  }
}
</style>>
