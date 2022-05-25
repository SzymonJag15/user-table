<template>
  <app-ui-wrapper>
    <p>{{ title }}</p>
  </app-ui-wrapper>
</template>

<script>
import { ref } from "vue";

import AppUiWrapper from "@/components/AppUiWrapper/AppUiWrapper.vue";

export default {
  name: "Home",
  components: {
    AppUiWrapper,
  },
  setup() {
    const title = ref("test");

    return {
      title,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
