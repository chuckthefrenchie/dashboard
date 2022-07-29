<template>
  <div class="d-flex smallCardContainer">
    <div class="d-flex smallCardType">
    <p> {{ type }}</p>
    </div>
    
    <div class="d-flex smallCardCaption">
        <!-- <p> {{ caption }}</p> -->
        <p> {{ selectedParkTempToday}} </p>
    </div>
  </div>
</template>

<script>
export default {
props: ['type', 'caption'],
  data() {
    return {
      selectedParkTempToday: ""
    };
  },
  mounted(){
    this.emitter.on("tempRightNow", (temp) => {
    this.selectedParkTempToday = temp.feels_like;
  });
  }
};
</script>

<style lang="scss" scoped>

.smallCardContainer{
    border: 0.5px solid #E8E8E8;
  height: 93px;
  width: 210px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      margin-right: 24px;
      flex-direction: column;
}

.smallCardType{
    border-bottom: 0.5px solid #E8E8E8;
    height: 28px;
    p{
        align-content: flex-start;
        margin-left: 12px;
    }
}

.smallCardCaption {
    justify-content: center;

    p{
        display: flex;
        margin-top: 12px;
        // align-self: center;
    }
}

</style>