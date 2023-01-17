<template>
  <div class="glass-effect fixed w-full mx-auto left-0 right-0 top-0 z-50">
    <nav
      class="
        container
        px-6
        py-3
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
        >
          <img class="w-44" src="../assets/Rick-And-Morty-Logo.png" />
        </router-link>

        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
        <li class="text-gray-100 hover:text-yellow">
          <router-link to="#main-characters">Main characters</router-link>
        </li>
        <li class="text-gray-100 hover:text-yellow">
          <router-link to="#other-characters">Other characters</router-link>
        </li>
        <li class="text-gray-100 hover:text-yellow">
          <router-link to="#more-info">More info</router-link>
        </li>
        <li class="text-gray-100 hover:text-yellow">
          <router-link to="#contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
<style scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
</style>