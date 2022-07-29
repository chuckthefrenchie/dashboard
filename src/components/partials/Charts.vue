<template>
    <div>
      <!-- <canvas v-if="type === 'Temperature'" id="chart1" width="680" height="180"></canvas> -->
     <canvas id="chart" width="680" height="180"></canvas> 

      <!-- <canvas v-if="type === 'Humidity'" id="chart2" width="680" height="180"></canvas> -->
      <!-- <canvas v-if="type === 'Pressure'" id="chart3" width="680" height="180"></canvas> -->
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
      const ctx = document.getElementById("chart");

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
              label: "Temperature: ",
              data: [30, 28, 25, 19, 27, 32], //add temparature here
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
      myChart;


      //chart2 
      // const ctx2 = document.getElementById("chart2");

      // const myChart2 = new Chart(ctx2, {
      //   type: "line",
      //   data: {
      //     labels: [
      //       "7/27 03:00",
      //       "7/27 06:00",
      //       "7/27 09:00",
      //       "7/27 00:00",
      //       "7/28 06:00",
      //       "7/28 12:00",
      //     ],
      //     datasets: [
      //       {
      //         label: "Temperature: ",
      //         data: [30, 28, 25, 19, 27, 32],
      //         backgroundColor: [
      //           "rgba(255, 99, 132, 0.2)",
      //           "rgba(54, 162, 235, 0.2)",
      //           "rgba(255, 206, 86, 0.2)",
      //           "rgba(75, 192, 192, 0.2)",
      //           "rgba(153, 102, 255, 0.2)",
      //           "rgba(255, 159, 64, 0.2)",
      //         ],
      //         borderColor: [
      //           "rgba(255, 99, 132, 1)",
      //           "rgba(54, 162, 235, 1)",
      //           "rgba(255, 206, 86, 1)",
      //           "rgba(75, 192, 192, 1)",
      //           "rgba(153, 102, 255, 1)",
      //           "rgba(255, 159, 64, 1)",
      //         ],
      //         borderWidth: 1,
      //       },
      //     ],
      //   },
      //   options: {
      //     scales: {
      //       y: {
      //         beginAtZero: true,
      //       },
      //     },
      //   },
      // });
      // myChart2;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>