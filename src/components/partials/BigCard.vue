<template>
  <div class="d-flex bigCardContainer">

    <div class="d-flex bigCardType">
    <p> {{ type }}</p>
    </div>
    
    <div class="d-flex bigCardCaption">
        <p> {{ readings }}</p>
    </div>
  </div>
</template>

<script>
export default {
props: ['type', 'readings'],
  data() {
    return {
    };
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