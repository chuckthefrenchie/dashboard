<template>
  <div class="d-flex smallCardContainer">
    <div class="d-flex smallCardType">
      <p>{{ type }}</p>
    </div>
    <div class="d-flex smallCardCaption">
      <p v-if="type === 'Temperature'">{{ selectedParkTempToday }}</p>
      <p v-if="type === 'Humidity'">{{ selectedParkHumidityToday }}</p>
      <p v-if="type === 'Pressure'">{{ selectedParkPressureToday }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      selectedParkTempToday: "",
      selectedParkHumidityToday: "",
      selectedParkPressureToday: "",
    };
  },
  mounted() {
    this.emitter.on("tempRightNow", (temp) => {
      this.selectedParkTempToday = temp.feels_like;
      this.selectedParkHumidityToday = temp.humidity;
      this.selectedParkPressureToday = temp.pressure;
    });
  },
};
</script>

<style lang="scss" scoped>
.smallCardContainer {
  border: 0.5px solid #e8e8e8;
  height: 93px;
  width: 210px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  margin-right: 24px;
  flex-direction: column;
}

.smallCardType {
  border-bottom: 0.5px solid #e8e8e8;
  height: 28px;
  p {
    align-content: flex-start;
    margin-left: 12px;
  }
}

.smallCardCaption {
  justify-content: center;

  p {
    display: flex;
    margin-top: 12px;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>