<template>
  <div class="d-flex app-container">
    <div class="main-content">
      <router-view class="router-view" />
    </div>
    <Sidebar />
  </div>
</template>

<script>
// import { bus } from "@/main";
import Sidebar from "../components/partials/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  }
};
</script>

<style lang="scss" scoped>
.app-container {
height: 100% !important;
width: 100% !important;
}

.main-content {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.router-view {
  height: 100%;
  width: 100%;
}

</style>
