<template>
  <app-ui-wrapper>
    <button @click="toggleModal" class="Home__show-modal">toggleModal</button>
  </app-ui-wrapper>
  <app-modal
    :isVisible="visibleModal"
    :image="ModalImage"
    title="Gratulujemy!"
    text="Test końcowy został zaliczony. Możesz już pobrać swój imienny Certyfikat!"
    buttonText="Pobierz certyfikat za to szkolenie!"
    hasButton
    @close-modal="toggleModal"
  />
</template>

<script>
import { ref } from "vue";

import AppUiWrapper from "@/components/AppUiWrapper/AppUiWrapper.vue";
import AppModal from "@/components/AppModal/AppModal.vue";

import ModalImage from "@/assets/modal-image.png";

export default {
  name: "Home",
  components: {
    AppUiWrapper,
    AppModal,
  },
  setup() {
    const visibleModal = ref(true);
    const toggleModal = () => (visibleModal.value = !visibleModal.value);

    return {
      visibleModal,
      toggleModal,
      ModalImage,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
