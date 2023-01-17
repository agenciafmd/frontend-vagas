<template>
  <div class="py-6 px-1 md:pb-52" id="other-characters">
    <h2
      class="
        text-4xl
        font-bold
        text-center
        tracking-tight
        text-transparent
        mx-auto
        sm:text-5xl
        md:text-4xl
        md:mb-12
        leading-tighter
        font-marker
        bg-clip-text bg-gradient-to-r
        from-secondary
        to-tertiary
      "
    >
      Other characters
    </h2>
    <swiper
      class="h-full pb-16 md:hidden"
      :navigation="true"
      :effect="'fade'"
      :modules="modules"
      :breakpoints="{
        '0': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '767': {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        '1600': {
          slidesPerView: 5,
          spaceBetween: 5,
        },
      }"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <swiper-slide
        v-for="(character, key) in characters"
        :key="key"
        class="w-full min-h-max mx-auto p-12 md:px-3 md:py-32 overflow-hidden"
      >
        <div class="hover:scale-105 transition-all effect">
          <img class="w-full rounded-t-2xl image-box" :src="character.image" />
          <div
            class="
              w-full
              min-h-[200px]
              card
              mx-auto
              px-4
              pt-4
              pb-8
              rounded-b-2xl
              md:min-h-[230px]
            "
          >
            <h3
              class="
                text-2xl
                font-bold
                tracking-tight
                text-transparent
                sm:text-3xl
                lg:max-w-lg
                md:text-2xl
                leading-tighter
                font-marker
                bg-clip-text bg-gradient-to-r
                from-secondary
                to-tertiary
              "
            >
              {{ character.name }}
            </h3>
            <span
              class="
                block
                pr-4
                text-base
                leading-relaxed
                text-gray-300
                font-sofia
                pt-2
                mt-1
                sm:pr-0 sm:text-lg
                lg:max-w-lg
              "
              ><span class="font-semibold mr-1">Specie:</span
              >{{ character.species }}</span
            >
            <span
              class="
                block
                pr-4
                text-base
                leading-relaxed
                text-gray-300
                font-sofia
                pt-1
                mt-0
                sm:pr-0 sm:text-lg
                lg:max-w-lg
              "
              ><span class="font-semibold mr-1">Gender:</span
              >{{ character.gender }}</span
            >
            <span
              class="
                block
                pr-4
                text-base
                leading-relaxed
                text-gray-300
                font-sofia
                pt-1
                mt-0
                sm:pr-0 sm:text-lg
                lg:max-w-lg
              "
              ><span class="font-semibold mr-1">Location:</span
              >{{ character.location.name }}</span
            >
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="hidden md:flex md:flex-row md:flex-wrap">
      <div
        v-for="(character, key) in characters"
        :key="key"
        :v-if="characters && characters.length > 0 && key <= limitationList"
        class="
          w-full
          min-h-max
          mx-auto
          py-6
          md:px-3 md:pt-6 md:w-1/5
          overflow-hidden
        "
        data-aos="flip-left" data-aos-duration="500" :data-aos-delay="(50 + (key * 100))" data-aos-offset="-120" data-aos-once="true"
      >
        <div class="hover:scale-105 transition-all effect">
          <img class="w-full rounded-t-2xl image-box" :src="character.image" />
          <div
            class="
              w-full
              min-h-[200px]
              card
              mx-auto
              px-4
              pt-4
              pb-8
              rounded-b-2xl
              md:min-h-[230px]
            "
          >
            <h3
              class="
                text-2xl
                font-bold
                tracking-tight
                text-transparent
                sm:text-3xl
                lg:max-w-lg
                md:text-2xl
                leading-tighter
                font-marker
                bg-clip-text bg-gradient-to-r
                from-secondary
                to-tertiary
              "
            >
              {{ character.name }}
            </h3>
            <span
              class="
                block
                pr-4
                text-base
                leading-relaxed
                text-gray-300
                font-sofia
                pt-2
                mt-1
                sm:pr-0 sm:text-lg
                lg:max-w-lg
              "
              ><span class="font-semibold mr-1">Specie:</span
              >{{ character.species }}</span
            >
            <span
              class="
                block
                pr-4
                text-base
                leading-relaxed
                text-gray-300
                font-sofia
                pt-1
                mt-0
                sm:pr-0 sm:text-lg
                lg:max-w-lg
              "
              ><span class="font-semibold mr-1">Gender:</span
              >{{ character.gender }}</span
            >
            <span
              class="
                block
                pr-4
                text-base
                leading-relaxed
                text-gray-300
                font-sofia
                pt-1
                mt-0
                sm:pr-0 sm:text-lg
                lg:max-w-lg
              "
              ><span class="font-semibold mr-1">Location:</span
              >{{ character.location.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import api from "@/store/api";
import { computed, onMounted, reactive, toRefs } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const data = reactive({ characters: {} });

    onMounted(async () => {
      const response = await api.all();
      data.characters = response.data.results;
    });
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      limitationList: 9,
      modules: [Navigation, Pagination, A11y],
      ...toRefs(data),
    };
  },
};
</script>
<style scoped>
.card {
  display: block;
  background: #000;
  box-shadow: 0px 7px 0px #bdca4c;
}
.effect {
  border: 1px solid transparent;
  border-radius: 10px;
}
.effect:hover {
  border: 1px solid #bdca4c;
}
.effect:hover .card {
  background: #071510;
}
.image-box {
  box-shadow: 0px -7px 0px #bdca4c;
}
div[v-if="false"] {
  display: none;
}
</style>