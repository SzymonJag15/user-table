<template>
  <Transition name="fade">
    <div class="modal-background" v-if="isVisible">
      <div class="app-modal">
        <button @click="$emit('closeModal')" class="app-modal__close">x</button>
        <img
          :src="ModalCircleTop"
          alt="modal circle"
          class="app-modal__circle app-modal__circle--top"
        />
        <img
          :src="ModalCircleBottom"
          alt="modal circle"
          class="app-modal__circle app-modal__circle--bottom"
        />
        <div class="app-modal__content">
          <div class="app-modal__image">
            <img :src="image" alt="modal image" />
          </div>
          <div class="app-modal__text-wrapper">
            <h1 class="app-modal__text-wrapper__title" v-text="title" />
            <p class="app-modal__text-wrapper__text">{{ text }}</p>
            <button v-if="hasButton" class="app-modal__text-wrapper__button">
              {{ buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { watch } from "vue";

import ModalCircleTop from "@/assets/modal-circle-top.png";
import ModalCircleBottom from "@/assets/modal-circle-bottom.png";

export default {
  name: "AppModal",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    hasButton: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
    },
    title: {
      type: String,
      default: "Tytuł",
    },
    text: {
      type: String,
      required: false,
    },
    buttonText: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    watch(
      () => props.isVisible,
      () => {
        if (props.isVisible) {
          document.documentElement.style.overflow = "hidden";
          return;
        }
        document.documentElement.style.overflow = "auto";
      }
    );

    return {
      ModalCircleTop,
      ModalCircleBottom,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
