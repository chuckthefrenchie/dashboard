<template>
  <div class="d-flex weatherComponent">
    <!-- <h5>Weather Today:</h5>

    <p>Temperature: {{ pinWeatherTempToday }}</p>
    <p>Humidity: {{ pinWeatheHumidityToday }}</p>
    <p>Pressure: {{ pinWeatherPressureToday }}</p>

    <span></span>

    <h5>Weather Tomorrow:</h5>

    <p>Temperature: {{ pinWeatherTempTmrw }}</p>
    <p>Humidity: {{ pinWeatheHumidityTmrw }}</p>
    <p>Pressure: {{ pinWeatherPressureTmrw }}</p>

    <span></span>

    <h5>Weather Day After Tomorrow:</h5>

    <p>Temperature: {{ pinWeatherTempAfterTmrw }}</p>
    <p>Humidity: {{ pinWeatheHumidityAfterTmrw }}</p>
    <p>Pressure: {{ pinWeatherPressureAfterTmrw }}</p>

    <span></span> -->
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";

export default {
  components: {},
  data() {
    return {
      testWeatherData: "",
      pinLat: "36.31069878418269",
      pinLng: "-112.313232421875",

      //clean up this code
      pinWeatherTempToday: "",
      pinWeatherPressureToday: "",
      pinWeatheHumidityToday: "",

      pinWeatherTempTmrw: "",
      pinWeatherPressureTmrw: "",
      pinWeatheHumidityTmrw: "",

      pinWeatherTempAfterTmrw: "",
      pinWeatherPressureAfterTmrw: "",
      pinWeatheHumidityAfterTmrw: "",
    };
  },
  mounted() {
    this.initWeather();

    this.emitter.on("pinDetailsOpened", (feature) => {
      console.log("PIN DETAILS", feature.geometry.coordinates[0]);
      this.pinLng = feature.geometry.coordinates[0];
      this.pinLat = feature.geometry.coordinates[1];
      this.initWeather();
    });
  },
  computed: {
    //   tempFeelsLike() {
    //       return this.testWeatherData.main.feels_like ;
    //   }
  },
  methods: {
    async initWeather() {
      let lng = this.pinLng;
      let lat = this.pinLat;

      // const options = {
      //     method: "GET",
      //     url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a98082f9fd259683143a78b781c9bd7c`,
      //   };

      // axios
      // .request(options)
      // .then(function (response) {
      //   console.log("RESPONSE PLZ", response.data);
      //   return response.data;
      // })
      // .catch(function (error) {
      //   console.error(error);
      // });

      const response1  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a98082f9fd259683143a78b781c9bd7c`);

      const response2 = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&cnt=10&appid=a98082f9fd259683143a78b781c9bd7c`
      );


      if (response1) {
        // this.pinWeatherTempToday = response.data.list[0].main.feels_like;
        // this.pinWeatheHumidityToday = response.data.list[0].main.humidity;
        // this.pinWeatherPressureToday = response.data.list[0].main.pressure;

        // this.pinWeatherTempTmrw = response.data.list[5].main.feels_like;
        // this.pinWeatheHumidityTmrw = response.data.list[5].main.humidity;
        // this.pinWeatherPressureTmrw = response.data.list[5].main.pressure;

        // this.pinWeatherTempAfterTmrw = response.data.list[9].main.feels_like;
        // this.pinWeatheHumidityAfterTmrw = response.data.list[9].main.humidity;
        // this.pinWeatherPressureAfterTmrw = response.data.list[9].main.pressure;

        console.log("WEATHER RESPONSE today: ", response1.data.main);
        this.emitter.emit("tempRightNow", response1.data.main);

      }


      if (response2) {
        // this.pinWeatherTempToday = response.data.list[0].main.feels_like;
        // this.pinWeatheHumidityToday = response.data.list[0].main.humidity;
        // this.pinWeatherPressureToday = response.data.list[0].main.pressure;

        // this.pinWeatherTempTmrw = response.data.list[5].main.feels_like;
        // this.pinWeatheHumidityTmrw = response.data.list[5].main.humidity;
        // this.pinWeatherPressureTmrw = response.data.list[5].main.pressure;

        // this.pinWeatherTempAfterTmrw = response.data.list[9].main.feels_like;
        // this.pinWeatheHumidityAfterTmrw = response.data.list[9].main.humidity;
        // this.pinWeatherPressureAfterTmrw = response.data.list[9].main.pressure;

        console.log("WEATHER RESPONSE forecast: ", response2.data);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.weatherComponent {
  flex-direction: column;
}
</style>
