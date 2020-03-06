<template>
  <div id="app">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <ul>
          <li v-for="(item, key) in post" :key="key">{{ key }} : {{ item }}</li>
        </ul>
      </li>
    </ul>
    <div>{{ posts }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["loadPost"])
  },
  computed: {
    ...mapGetters(["posts"])
  },
  mounted() {
    this.loadPost();
  }
};
</script>
