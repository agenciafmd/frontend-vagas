<template>
  <h1 class="hidden">Landing Page Rick and Morty - Vue</h1>
  <Header />
  <div class="w-full min-h-screen text-gray-300 bg-darkgreen">
    <SlideTop />
  </div>
  <div class="gradient-transition relative pt-45 text-gray-300 bg-darkgreen">
    <div class="container mx-auto relative details-side">
      <div class="hidden detail-left md:block" data-aos="fade-right" data-aos-once="true"></div>
      <Grid />
    </div>
    <div class="container mx-auto relative details-side">
      <SlideApi />
      <div class="detail-right" data-aos="fade-left" data-aos-once="true" data-aos-offset="350"></div>
    </div>
    <Newsletter />
  </div>
    <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import SlideTop from "@/components/SlideTop";
import Grid from "@/components/Grid.vue";
import SlideApi from "@/components/SlideApi.vue";
import Newsletter from "@/components/Newsletter.vue";
import Footer from "@/components/Footer.vue";
import AOS from "aos"
import "aos/dist/aos.css";

export default {
  name: "HomeView",
  components: {
    Header,
    SlideTop,
    Grid,
    SlideApi,
    Newsletter,
    Footer,
  },
  mounted(){
    AOS.init();
    AOS.refresh();
  }
};
</script>
<style scoped>
.gradient-transition {
  background-image: linear-gradient(180deg, transparent, black);
}
.gradient-transition:before {
  background-image: linear-gradient(
    180deg,
    rgba(3, 18, 10, 0) 0%,
    rgba(3, 18, 11, 1) 100%
  );
  content: "";
  height: 200px;
  position: absolute;
  top: -195px;
  left: 0;
  width: 100%;
  z-index: 1;
}
.details-side .detail-left {
  background-image: url("../assets/rick-and-morty-portal-gun.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 130px;
  height: 130px;
  position: absolute;
  /* transform: rotate(15deg) translateZ(0); */
  left: calc((((100vw - 1536px) / 2) * -1) + 20px);
  top: 30px;
  z-index: 2;
}
.details-side .detail-right {
  display: block;
  background-image: url("../assets/clip-detail-2.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 300px;
  height: 200px;
  position: absolute;
  right: calc(((100vw - 1536px) / 2) * -1);
  bottom: -130px;
  z-index: 2;
  /* opacity: 0.65; */
}
@media (min-width: 1280px) and (max-width: 1535px) {
  .details-side .detail-left {
    left: calc((((100vw - 1232px) / 2) * -1) + 20px);
  }
  .details-side .detail-right {
    right: calc(((100vw - 1232px) / 2) * -1);
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .details-side .detail-left {
    left: calc((((100vw - 1024px) / 2) * -1) + 20px);
  }
  .details-side .detail-right {
    right: calc(((100vw - 1024px) / 2) * -1);
  }
}
@media (min-width: 767px) and (max-width: 1023px) {
  .details-side .detail-left {
    left: calc((((100vw - 640px) / 2) * -1) + 20px);
  }
  .details-side .detail-right {
    right: calc(((100vw - 640px) / 2) * -1);
  }
}
@media (max-width: 766px) {
  .details-side .detail-left {
    left: calc((((100vw - 100%) / 2) * -1) + 20px);
    width: 100px;
    height: 100px;
    top: 0;
  }
  .details-side .detail-right {
    right: calc(((100vw - 100%) / 2) * -1);
    width: 150px;
    height: 150px;
    bottom: -110px;
  }
}
</style>
