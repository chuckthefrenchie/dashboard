<template>
  <div class="d-flex about-layout">
    <div class="d-flex leftPanel">
    <img class="daria-gh" src="@/assets/icons/daria-gh.svg" />
    <img class="daria-memoji" src="@/assets/icons/daria-memoji.svg" />
    </div>

    <div class="d-flex rightPanel">
       <div class="d-flex aboutTitle">
           <img src="@/assets/icons/wave.svg" />
           <p> About </p>
           </div>

   <div class="d-flex rightPanel-content">
<div class="d-flex about-small">
       <p>About</p>
</div>
<div class="d-flex about-description">
       <p class="d-flex about-hi">Hi, I am Daria</p>
       <p class="d-flex about-details">
           I built this micro-app in order to display my ability to use a few totally rad technologies: 
        </p>
        <ul>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>Vuex</li>
            <li>APIs</li>
            <li>Mapbox</li>
            <li>Chart.js</li>
            <li>Figma</li>
            </ul>
</div>
<div class="d-flex rightPanel-footer">
    <p>This project was built in two day, so please be gentle.</p>
    <p>Этот проект был построен за два дня, поэтому пожалуйста будьте аккуратны.</p>
    </div>
       </div>
    </div>
    </div>
  <!-- </div> -->
</template>

<script>
// import { bus } from "@/main";

export default {
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
  watch: {
  },
};
</script>
<style lang="scss" scoped>
.about-layout {
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: relative;
}
.content-container {
   display: flex;
   height: 100%;
   width: 100%;
 }

.leftPanel {
width: 50%;
margin: 24px 12px 24px 24px;
height: 970px;
border: 1px solid #E8E8E8;
display: flex;
box-shadow: 3px #E8E8E8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
.daria-gh{
    display: flex;
    height: 100%;
width: 100%;
position: relative;
z-index: 1;
}
.daria-memoji{
    display: flex;
height: 421px;
width: 421px;
position: absolute;
z-index: 5;
margin-left: 8em;
margin-top: 16em;
}
}

.rightPanel {
width: 50%;
flex-direction: column;
margin: 24px 24px 24px 12px;
height: 970px;
// display: block !important;
// box-shadow: 5px black !important;
.rightPanel-content{
border: 1px solid #E8E8E8;
height: 100% !important;
flex-direction: column !important;
margin-top: 26px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

}
.about-small{
    border-bottom: 1px solid #E8E8E8;
    height: 28px;
    color: #7C7C7C;
p {
margin-left: 12px;
text-align: center;
}
}

// .about-title{
//     margin-bottom: 10px;
// }
.about-hi {
 font-size: 26px;
//  font-family: "ArgentPixelCF";
}
.about-description{
    flex-direction: column;
    font-size: 26px;
    //  font-family: "ArgentPixelCF";
     margin-top: 62px;
     margin-left: 22px;
     height: 29em;
    ul {
      list-style-type: none;
    }
}

.aboutTitle{
height: 40px;
width: 40px;
font-size: 36px;
}
.rightPanel-footer{
flex-direction: column;
font-size: 18px;
color: #C2C2C2;
line-height: 8px;
margin-left: 20px;
}
}

</style>