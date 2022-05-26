<template>
  <table class="app-table">
    <thead>
      <tr class="app-table__header">
        <th>{{ tableTitleLeft }}</th>
        <th>{{ tableTitleRight }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.name"
        class="app-table__item"
        :id="item.surname"
        @click="checkClass(item.surname)"
        :ref="setItemRef"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.surname }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ACTIVE_ITEM_TABLE } from "@/consts/users";

export default {
  name: "AppTable",
  props: {
    tableTitleLeft: {
      type: String,
      default: "Tytuł",
    },
    tableTitleRight: {
      type: String,
      default: "Tytuł",
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(_, { emit }) {
    const itemRefs = [];
    const setItemRef = (el) => {
      if (el) itemRefs.push(el);
    };

    const checkClass = (item) => {
      const clickedElement = itemRefs.find((itemRef) => itemRef.id === item);
      const isActive = clickedElement.classList.contains(ACTIVE_ITEM_TABLE);

      if (isActive) emit("clickItem");
    };

    return {
      checkClass,
      setItemRef,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
