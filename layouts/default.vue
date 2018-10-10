<template>
  <div>
    <b-container>
      <Navbar :projects="loadedProjectsStore"/>
      <nuxt/>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Vuex from "vuex";

export default {
  components: {
    Navbar
  },
  computed: {
    loadedProjectsStore() {
      // return this.$store.getters.projects;
      return false;
    }
  }
};
</script>