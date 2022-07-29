<template>
  <div class="d-flex bigCardContainer">

    <div class="d-flex bigCardType">
    <p> {{ type }}</p>
    </div>
    
    <div class="d-flex bigCardChart" v-if="type === 'Temperature'">
       <Charts />
    </div>
    <div class="d-flex bigCardChart" v-if="type === 'Humidity'">
       <Charts2 />
    </div>
        <div class="d-flex bigCardChart" v-if="type === 'Pressure'">
       <Charts3 />
    </div>
  </div>
</template>

<script>
import Charts from "../partials/Charts.vue";
import Charts2 from "../partials/Charts2.vue";
import Charts3 from "../partials/Charts3.vue";



export default {
props: ['type'],
  data() {
    return {
    };
  },
    components: {
    Charts,
    Charts2,
    Charts3
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