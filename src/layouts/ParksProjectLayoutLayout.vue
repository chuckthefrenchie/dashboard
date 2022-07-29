<template>
  <div class="d-flex maps-layout">
    <div class="d-flex leftPanel">
      <div class="d-flex leftPanel-title">
        <img src="@/assets/icons/tree-sticker.svg" />
        <p>{{ selectedParkName }}</p>
      </div>

      <div class="d-flex leftPanel-cards">
        <!--pass temp, humidity and presusre numbers to teh card HERE -->
        <small-card type="Tempature"></small-card>

        <small-card type="Humidity" caption="Humidity"></small-card>

        <small-card type="Pressure" caption="Pressure"></small-card>
      </div>

     <!-- create a reusable compoennt to insert each chart
       <div class="d-flex leftPanel-bigCard"> 
        add Weather component slot in here 
      </div>

      <div class="d-flex leftPanel-bigCard">
      </div>

      <div class="d-flex leftPanel-bigCard">
      </div>  -->

      <big-card type="Temperature" readings="Temperature"></big-card>

        <big-card type="Humidity" readings="Humidity"></big-card>

        <big-card type="Pressure" readingds="Pressure"></big-card>

    </div>

    <div class="d-flex rightPanel">
      <Map />
    </div>

    <div class="d-flex weather-container">
    <Weather />
    </div>

    <!-- <div class="d-flex charts-container">
    <Charts />
    </div> -->
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
    BigCard
  },
  data() {
    return {
      selectedParkName: "", 
      selectedParkTemperature: "test",
      selectedParkHumidity: "test",
      selectedParkPressure: "test"
    };
  },
  computed: {

  selectedParkName(){
    if(this.selectedParkName !== ""){
      return this.selectedParkName;
    }else {
      return "Please select a park from the map";
    }
  }
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

// .leftPanel-bigCard {
//   border: 0.5px solid #e8e8e8;
//   height: 218px;
//   width: 676px;
//   margin-top: 24px;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
// }
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