<template>
    <div>
     <canvas id="temperatureChart" width="680" height="180"></canvas> 
    </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  components: {},
  data() {
    return {
      tempData: []
    };
  },
  mounted() {
  this.emitter.on("forecast", (forecast) => {

let one = forecast.data.list[0].main.feels_like;
// let three = forecast.data.list[2].main.feels_like;
// let five = forecast.data.list[4].main.feels_like;
// let seven = forecast.data.list[6].main.feels_like;
// let nine = forecast.data.list[8].main.feels_like;
// let ten = forecast.data.list[9].main.feels_like;

// this.tempData.push(one, three, five, seven, nine, ten);
// this.tempData.push(one, three, five, seven, nine, ten);
this.tempData.push(one);

console.log("DATA HERE", this.tempData)

  });

    this.initCharts();
  },
  methods: {
    initCharts() {
      const ctx = document.getElementById("temperatureChart");

      let temperature = this.tempData;

      const myChart1 = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "7/29 06:00",
            "7/29 12:00",
            "7/29 18:00",
            "7/30 00:00",
            "7/30 06:00",
            "7/30 09:00",
          ],
          datasets: [
            {
              label: "Temperature: ",
              data: [this.temperature, 28, 25, 19, 27, 32],
              data: temperature,
              borderColor: "#F93E60",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      myChart1;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>