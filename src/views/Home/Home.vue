<template>
  <div class="Home">
    <app-ui-wrapper>
      <div class="Home__title-wrapper">
        <h1 class="Home__title-wrapper__title">Lista użytkowników!</h1>
        <h3 class="Home__title-wrapper__subtitle">
          Poszukaj siebie! Jeśli znajdujesz się na liście, po wyszukaniu Twój
          rząd podświetli się! Spróbuj w siebie kliknąć! ;)
        </h3>
        <div class="Home__title-wrapper__separator"></div>
      </div>

      <input
        v-model.trim="searchString"
        placeholder="search"
        class="Home__search"
      />
      <app-table
        tableTitleLeft="Imię"
        tableTitleRight="Nazwisko"
        :items="users"
        @click-item="toggleModal"
      />
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
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";

import AppUiWrapper from "@/components/AppUiWrapper/AppUiWrapper.vue";
import AppModal from "@/components/AppModal/AppModal.vue";
import AppTable from "@/components/AppTable/AppTable.vue";

import { getUsers, addUserClass, removeUserClass } from "@/utils/users";
import { ACTIVE_ITEM_TABLE } from "@/consts/users";

import ModalImage from "@/assets/modal-image.png";

export default {
  name: "Home",
  components: {
    AppUiWrapper,
    AppModal,
    AppTable,
  },
  setup() {
    const users = ref([]);
    const searchString = ref("");
    const visibleModal = ref(false);

    onMounted(async () => {
      const { data } = await getUsers();
      users.value = data;
    });

    const toggleModal = () => (visibleModal.value = !visibleModal.value);

    watch(searchString, () => {
      users.value.filter((user) => {
        if (searchString.value === "") {
          removeUserClass(user.surname, ACTIVE_ITEM_TABLE);
          return;
        }
        if (user.surname.startsWith(searchString.value)) {
          addUserClass(user.surname, ACTIVE_ITEM_TABLE);
          return;
        }
        removeUserClass(user.surname, ACTIVE_ITEM_TABLE);
      });
    });

    return {
      visibleModal,
      toggleModal,
      ModalImage,
      users,
      searchString,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
