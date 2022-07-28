<template>
  <div class="d-flex maps-layout">
<div class="d-flex leftPanel">
  
  <div class="d-flex leftPanel-title">
    <img src="@/assets/icons/tree-sticker.svg" />
    <p> Yosemity National park </p>
    </div>

  <div class="d-flex leftPanel-cards">
  <div class="d-flex leftPanel-card1">
  </div>
    <div class="d-flex leftPanel-card2">
  </div>
    <div class="d-flex leftPanel-card3">
  </div>
  </div>

<!-- create a reusable compoennt to insert each chart---> 

  <div class="d-flex leftPanel-bigCard">
    <!--add Weather component slot in here -->
  </div>

    <div class="d-flex leftPanel-bigCard">
    <!--add Weather component slot in here -->

  </div>

    <div class="d-flex leftPanel-bigCard">
    <!--add Weather component slot in here -->
  </div>

  </div>

<div class="d-flex rightPanel">
      <Map />
  </div>



    <!-- <div class="d-flex weather-container">
    <Weather />
    </div> -->

    <!-- <div class="d-flex charts-container">
    <Charts />
    </div> -->

    </div>
  <!-- </div> -->
</template>

<script>
import Map from "../components/maps/Map.vue";
import Weather from "../components/partials/Weather.vue";
import Charts from "../components/partials/Charts.vue";


export default {
  components: {
      Map,
      Weather,
      Charts
  },
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
  watch: {
  },
};
</script>
<style lang="scss" scoped>
.maps-layout {
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: relative;
}

.leftPanel{
  border: 1px solid green;
width: 50%;
margin: 24px 12px 24px 24px;
height: 970px;
border: 1px solid #E8E8E8;
display: flex;
box-shadow: 3px #E8E8E8;
flex-direction: column;
padding: 24px;
}

.leftPanel-title{
  align-items: center;
img {
  display: flex;
}
  p{
    font-size: 26px;
margin-top: 12px;

  }
}

.leftPanel-cards {
  margin-top: 12px;
}

.leftPanel-card1, .leftPanel-card2, .leftPanel-card3{
    border: 0.5px solid #E8E8E8;
  height: 93px;
  width: 210px;
}

.leftPanel-card2, .leftPanel-card3 {
margin-left: 24px;
}

.leftPanel-bigCard {
    border: 0.5px solid #E8E8E8;
  height: 218px;
  width: 676px;
  margin-top: 24px;
}
.rightPanel{
width: 50%;
flex-direction: column;
margin: 24px 24px 24px 12px;
height: 970px;
}

</style>