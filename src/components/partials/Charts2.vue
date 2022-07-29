<template>
    <div>
     <canvas id="chart2" width="680" height="180"></canvas> 
    </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  // props: ['type'],
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const ctx = document.getElementById("chart2");

      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "7/27 03:00",
            "7/27 06:00",
            "7/27 09:00",
            "7/27 00:00",
            "7/28 06:00",
            "7/28 12:00",
          ],
          datasets: [
            {
              label: "Humidity: ",
              data: [30, 28, 25, 19, 27, 32], //add temparature here
         borderColor: 'rgb(75, 192, 192)',
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
      myChart;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>