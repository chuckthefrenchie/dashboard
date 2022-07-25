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
        <a class="d-flex navbar-brand mb-4" @click="navToExplore">
          <span>
            <img
              src="@/assets/icons/default-icon.svg"
              style="height: 38px; width: 48px"
              class="navbar-brand-img mx-auto"
              alt="..."
            />
          </span>
        </a>
        <ul class="d-flex navbar-nav">
          <li class="d-flex nav-item">
            <div class="icon-container">
              <img src="@/assets/icons/default-icon.svg" />
            </div>
            <span>About</span>
          </li>
          <li class="d-flex nav-item">
            <div class="icon-container">
              <img src="@/assets/icons/default-icon.svg" />
            </div>
            <span>Charts</span>
          </li>
          <li class="d-flex nav-item">
            <div class="icon-container">
              <img src="@/assets/icons/default-icon.svg" />
            </div>
            <span>Map</span>
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
      console.log("nav clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  cursor: pointer;
}

.sidebarTabs {
  flex-direction: column;
  margin-left: 12px;
}
.navbar-nav {
  margin-top: 20em;
}

//LightBox
.sideBarLightbox {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 180px !important;
  background-color: #1f2d3d;
  opacity: 0.5;
  display: block;
  z-index: 100000;
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
    height: 40px;
    span {
      display: none;
    }
  }
}

.sidebarOpened {
  width: 180px !important;
  border-right: none !important;

  .nav-item {
    width: 150px;
    span {
      display: flex;
    }
  }
  .nav-link {
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
