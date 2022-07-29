<template>
  <div class="d-flex mapComponent">
    <div id="map" style="width: 880px; height: 80.5em"></div>

    <!-- <basemaps></basemaps> -->
  </div>
</template>

<script>
// import Basemaps from "@/components/partials/Basemaps.vue";

export default {
  components: {
    // Basemaps
  },
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    async initMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZGFyaWFrYm93bGFuIiwiYSI6ImNsNjFmZzJtYzAwbHAzY2x2Ymh5MHo5cmkifQ.cFVYBbygUv_arKBgFYdCZg";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/dariakbowlan/cl62x032p007514nx3xf9c7o7/draft", // CA-parks style
        center: [-113.0273, 37.2959],
        zoom: 5,
        projection: "globe",
      });
      map.on("style.load", () => {
        map.setFog({});
      });

      map.on("click", (event) => {
        const features = map.queryRenderedFeatures(event.point, {
          layers: ["ca-camping-parks"],
        });
        if (!features.length) {
          return;
        }
        const feature = features[0];

        const popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(`<h3>${feature.properties.title}</h3>`)
          .addTo(map);

        this.emitter.emit("pinDetailsOpened", feature);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  height: 100%;
  width: 100%;
}

.mapboxgl-map {
  height: 100%;
}
.mapComponent {
  flex-direction: column;
}
</style>
