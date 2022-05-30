<template>
  <div class="Home">
    <div class="Home__site Home__site--left">
      <div class="Home__site__content">
        <h1 class="Home__title-wrapper__title">
          Sprawdź czy
          <span class="Home__title-wrapper__title--bold">wygrałeś!</span>
        </h1>
        <h3 class="Home__title-wrapper__subtitle">
          W następnym kroku pojawi się tabela z wygranymi. Wyszukaj swoje imię i
          nazwisko, jeśli znajdujesz się na liście - znaczy, że WYGRAŁEŚ!
        </h3>
        <div class="Home__title-wrapper__separator"></div>

        <button @click="goToTable" class="Home__go-to-table">Sprawdź</button>
      </div>
    </div>
    <div class="Home__site Home__site--right">
      <note />
      <img
        :src="ModalCircleTop"
        alt="modal circle"
        class="Home__site__circle--bottom"
      />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import router from "@/router";

import ModalCircleTop from "@/assets/modal-circle-bottom.png";
import Note from "@/assets/svg/Note.vue";

import { enterAnim, leaveAnim } from "./animations";

export default {
  name: "Home",
  components: { Note },
  setup() {
    onMounted(() => {
      setTimeout(() => {
        enterAnim(false);
      }, 500);
    });

    const goToTable = () => {
      leaveAnim(true);
      setTimeout(() => {
        router.push("/table");
      }, 2100);
    };

    return {
      ModalCircleTop,
      goToTable,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
