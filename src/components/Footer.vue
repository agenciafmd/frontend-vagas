<template>
  <div id="contact" class="w-full bg-darkgreen relative">
    <div
      class="
        container
        relative
        pt-8
        mx-auto
        flex flex-col
        md:flex-row md:items-center md:justify-end md:pb-8
      "
    >
      <img
        src="../assets/logo_footer.png"
        alt="logo"
        class="
          w-60
          order-2
          mx-auto
          md:left-0 md:absolute md:bottom-0 md:self-start md:z-10
        "
        data-aos="fade-down"
        data-aos-offset="-500"
      />
      <div
        class="
          grid
          gap-4
          grid-cols-1
          justify-items-center
          order-1
          md:grid-cols-2 md:w-2/6
        "
      >
        <div class="">
          <a
            href="mailto:email@email.com"
            class="
              inline-flex
              text-lg
              my-4
              xl:my-0
              text-white
              font-sofia
              hover:text-lightgreen
              hover:transition-all
              hover:border-lightgreen
              hover:transition-200
            "
            ><Icon
              icon="ic:round-email"
              class="my-auto mr-2"
            />email@email.com</a
          >
        </div>
        <div>
          <a
            href="https://whats.link/brunodevtest"
            target="_blank"
            class="
              inline-flex
              text-lg text-white
              mb-6
              md:mb-0
              font-sofia
              hover:text-lightgreen
              hover:transition-all
              hover:border-lightgreen
              hover:transition-200
            "
            ><Icon icon="simple-icons:whatsapp" class="my-auto mr-2" /> (17)
            99999-9999</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="flex h-8 relative bg-[#D2E054] md:z:20">
    <span
      class="
        inline-block
        absolute
        h-12
        px-8
        pt-3
        -top-4
        bg-yellow-500
        mx-auto
        left-0
        right-0
        w-72
        z-20
        rounded-t-md
      "
    >
      Feito com <strong class="bg-red">❤</strong> por
      <span class="font-medium text-darkgreen border-b border-darkgreen"
        >Bruno Pires</span
      >
    </span>
  </div>
</template>
// <script>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  setup() {},
  components: {
    Icon
  },
  mounted() {
    AOS.init();
    AOS.refresh();
  },
};

</script>