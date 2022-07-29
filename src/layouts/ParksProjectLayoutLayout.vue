<template>
  <div class="d-flex maps-layout">
    <div class="d-flex leftPanel">
      <div class="d-flex leftPanel-title">
        <img src="@/assets/icons/tree-sticker.svg" />
        <p>{{ selectedParkName }}</p>
      </div>

      <div class="d-flex leftPanel-cards">
        <small-card type="Temperature"></small-card>
        <small-card type="Humidity"></small-card>
        <small-card type="Pressure"></small-card>
      </div>

      <big-card type="Temperature"></big-card>
      <big-card type="Humidity"></big-card>
      <big-card type="Pressure"></big-card>
      
    </div>

    <div class="d-flex rightPanel">
      <Map />
    </div>

    <div class="d-flex weather-container">
      <Weather />
    </div>

  </div>
</template>

<script>
import Map from "../components/maps/Map.vue";
import Weather from "../components/partials/Weather.vue";
import Charts from "../components/partials/Charts.vue";
import SmallCard from "../components/partials/SmallCard.vue";
import BigCard from "../components/partials/BigCard.vue";

export default {
  components: {
    Map,
    Weather,
    Charts,
    SmallCard,
    BigCard,
  },
  data() {
    return {
      selectedParkName: "",
      selectedParkTemperature: "test",
      selectedParkHumidity: "test",
      selectedParkPressure: "test",
    };
  },
  computed: {
    selectedParkName() {
      if (this.selectedParkName !== "") {
        return this.selectedParkName;
      } else {
        return "Please select a park from the map";
      }
    },
  },
  mounted() {
    this.emitter.on("pinDetailsOpened", (feature) => {
      this.selectedParkName = feature.properties.title;
    });
  },
  methods: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
.maps-layout {
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: relative;
}

.leftPanel {
  border: 1px solid green;
  width: 50%;
  margin: 24px 12px 24px 24px;
  height: 970px;
  border: 1px solid #e8e8e8;
  display: flex;
  box-shadow: 3px #e8e8e8;
  flex-direction: column;
  padding: 24px;
}

.leftPanel-title {
  align-items: center;
  img {
    display: flex;
  }
  p {
    font-size: 26px;
    margin-top: 12px;
  }
}

.leftPanel-cards {
  margin-top: 12px;
}

.rightPanel {
  width: 50%;
  flex-direction: column;
  margin: 24px 24px 24px 12px;
  height: 970px;
}

.weather-container {
  display: none;
}
</style>