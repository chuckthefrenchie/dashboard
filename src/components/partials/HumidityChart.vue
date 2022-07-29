<template>
    <div>
     <canvas id="humidityChart" width="680" height="180"></canvas> 
    </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const ctx = document.getElementById("humidityChart");

      const myChart3 = new Chart(ctx, {
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
              data: [60, 73, 65, 71, 57, 75], //add humidity stats here
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
      myChart3;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>