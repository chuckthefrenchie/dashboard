<template>
    <div>
     <canvas id="pressureChart" width="680" height="180"></canvas> 
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
      const ctx = document.getElementById("pressureChart");

      const myChart2 = new Chart(ctx, {
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
              label: "Pressure: ",
              data: [1035, 1019, 1015, 999, 1010, 1045], //add pressure stats here
            borderColor: "#60A54F",
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
      myChart2;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>