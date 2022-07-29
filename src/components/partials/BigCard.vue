<template>
  <div class="d-flex bigCardContainer">

    <div class="d-flex bigCardType">
    <p> {{ type }}</p>
    </div>
    
    <div class="d-flex bigCardChart" v-if="type === 'Temperature'">
       <TemperatureChart />
    </div>
    <div class="d-flex bigCardChart" v-if="type === 'Humidity'">
       <HumidityChart />
    </div>
        <div class="d-flex bigCardChart" v-if="type === 'Pressure'">
       <PressureChart />
    </div>
  </div>
</template>

<script>
import TemperatureChart from "../partials/TemperatureChart.vue";
import HumidityChart from "./HumidityChart.vue";
import PressureChart from "./PressureChart.vue";



export default {
props: ['type'],
  data() {
    return {
    };
  },
    components: {
    TemperatureChart,
    HumidityChart,
    PressureChart
  },
};
</script>

<style lang="scss" scoped>

.bigCardContainer {
  border: 0.5px solid #e8e8e8;
  height: 218px;
  width: 676px;
  margin-top: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  flex-direction: column;;
}
.bigCardType{
    width: 100%;
    border-bottom: 0.5px solid #E8E8E8;
    height: 28px;
    p{
        align-content: flex-start;
        margin-left: 12px;
    }
}
</style>