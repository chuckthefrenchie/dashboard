<template>
  <div class="d-flex app-container">
    <Sidebar />
        <div class="main-content">
      <router-view class="router-view" />
    </div>
  </div>
</template>

<script>
// import Sidebar from "@/components/partials/Sidebar";
// import { bus } from "@/main";
import Sidebar from "../components/partials/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      isLoggedIn: false,
    //   changeWidth: false
    };
  },
  created() {
    // this.isLoggedIn = this.$route.name != "login";
  },
//   watch: {
//     "$route.name": function(routeName) {
//       this.isLoggedIn = routeName != "login";
//     },
//   },
};
</script>

<style lang="scss" scoped>
.app-container {
height: 100% !important;
width: 100% !important;
// border: 1px solid red;
}

.main-content {
  height: 100%;
//   width: calc(100% - 80px);
//   margin-left: 80px;
  overflow: hidden;
}

.router-view {
  height: 100%;
  width: 100%;
}

</style>
