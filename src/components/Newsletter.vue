<template>
  <section class="flex" id="more-info">
    <div
      class="
        w-full
        px-6
        py-20
        sm:px-14
        md:px-24 md:w-1/2
        lg:w-2/5
        xl:w-1/3
        bg-darkgreen
      "
    >
      <div class="pt-14">
        <h2
          class="
            max-w-xs
            text-5xl
            font-bold
            tracking-tight
            text-transparent
            leading-tighter
            font-marker
            bg-clip-text bg-gradient-to-r
            from-secondary
            to-tertiary
          "
        >
          Get more info
        </h2>
        <p
          class="max-w-lg text-xl leading-relaxed text-gray-300 pt-7 font-sofia"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet neque in lorem lacinia egestas et at sem. In vehicula, nunc sit
          amet tincidunt lobortis
        </p>
        <div class="pt-6">
          <div class="flex flex-col space-y-1">
            <label class="text-sm text-gray-800 font-sofia">Name</label>
            <input
              type="text"
              class="
                w-full
                px-6
                py-4
                text-sm
                font-normal
                tracking-wider
                placeholder-gray-300
                bg-gray-900
                rounded-xl
                font-sofia
              "
              placeholder="John Sanders"
            />
          </div>
          <div class="flex flex-col pt-6 space-y-1">
            <label class="text-sm text-gray-800 font-sofia">Email</label>
            <input
              type="text"
              class="
                w-full
                px-6
                py-4
                text-sm
                font-normal
                tracking-wider
                placeholder-gray-300
                bg-gray-900
                rounded-xl
                font-sofia
              "
              placeholder="example@email.com"
            />
          </div>
          <div class="pt-10">
            <button
              class="
                w-full
                px-6
                py-4
                font-bold
                text-white
                bg-green
                rounded-xl
                font-sofia
                hover:transition-all hover:bg-lightgreen
              "
            >
              Get full access
            </button>
          </div>
          <div class="pt-6">
            <p class="text-sm leading-relaxed text-gray-700 pr-0 font-sofia">
              By clicking "Get full access", you agree to our
              <a
                href="#"
                class="
                  text-white
                  border-b border-white
                  hover:text-lightgreen
                  hover:transition-all
                  hover:border-lightgreen
                  hover:transition-200
                "
                >Terms of Service</a
              >
              and
              <a
                href="#"
                class="
                  text-white
                  border-b border-white
                  hover:text-lightgreen
                  hover:transition-all
                  hover:border-lightgreen
                  hover:transition-200
                "
                >Privacy Statement</a
              >. We'll occasionally send you account related emails.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        hidden
        relative
        md:flex
        md:items-end
        md:justify-center
        md:w-1/2
        md:px-12
        md:py-20
        md:block
        lg:w-3/5
        xl:w-2/3
      "
    >
      <img
        src="../assets/galaxy-2.jpg"
        alt="Galaxy rick and morty"
        class="
          absolute
          opacity-[0.12]
          w-full
          h-full
          object-cover
          top-0
          left-0
          z-0
        "
      />
      <a href="#firstBlock" class="relative flex items-center justify-center">
        <img
          src="../assets/kisspng-morty-smith-rick-sanchez-nike-clip-art-rick-and-morty.png"
          alt="Rick in galaxies" data-aos="fade-right" data-aos-offset="500" data-aos-duration="500"
        />
      </a>
    </div>
  </section>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {},
  setup() {},
  mounted() {
    AOS.init();
    AOS.refresh();
  },
};
</script>
<style></style>