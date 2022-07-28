<template>
  <div class="d-flex sidebar">
    <div class="sideBarLightbox" v-if="isHovered"></div>
    <div
      class="d-flex sidebarClosed"
      :class="{ sidebarOpened: isHovered }"
      @mouseover="onNavBarHover()"
      @mouseleave="onNavBarHoverOff()"
    >
      <!-- Navigation -->
      <div class="d-flex sidebarTabs">

        <ul class="d-flex navbar-nav">
          <li class="d-flex nav-item">
            <router-link class="nav-link highlight-color" to="/parks-project">
            <div class="icon-container">
              <img src="@/assets/icons/tree-sticker.svg" />
            </div>
            <span>Parks projects</span>
            </router-link>
          </li>
          <li class="d-flex nav-item">
            <router-link class="nav-link highlight-color" to="/about">
            <div class="icon-container">
              <img src="@/assets/icons/wave.svg" />
            </div>
            <span>About</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    onNavBarHover: function () {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = setTimeout(() => (this.isHovered = true), 500);
    },
    onNavBarHoverOff: function () {
      clearTimeout(this.hoverTimeout);
      this.isHovered = false;
    },
    navToExplore() {
      this.$router.push({ path: 'about' });
    // this.emitter.emit("testing-new-emitter");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
    // border-left: 0.3px solid #E8E8E8;
    position: static;
    z-index: 10;
}
.nav-item {
    height: 42px;
    margin-bottom: 10px;
}
.navbar-brand, .nav-item {
  cursor: pointer;
}

.sidebarTabs {
  flex-direction: column;
  margin-left: 12px;
}
.navbar-nav {
  margin-top: 24em;
}

//LightBox
.sideBarLightbox {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
//   left: 180px !important;
  right: 180px !important;
  background-color: #1f2d3d;
  opacity: 0.5;
  display: block;
  z-index: 20;
}
.nav-item {
  flex-direction: row !important;
}

//Sidebars
.sidebarClosed {
  width: 60px !important;
  overflow: hidden;
  border-right: 1px solid gainsboro !important;
  &:hover {
    background-color: #fcfcfc;
  }
  .nav-item {
    // height: 40px;
    margin-left: 6px;
    span {
      display: none;
    }
  }
}

.sidebarOpened {
  width: 180px !important;
  border-right: none !important;
 .navbar-brand{
    margin-left: 60px;
 }
  .nav-item {
    width: 180px;
    img {
    // display: none;
    }
    span {
      display: flex;
    }
  }
  .nav-link {
    display: flex;
    flex-direction: row;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.01em;
    color: #6e84a3 !important;
    border-left: 3px solid transparent;
    opacity: 0.5 !important;
    cursor: pointer;

    .icon-container {
      margin-right: 12px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
