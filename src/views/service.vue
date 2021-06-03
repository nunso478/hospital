<template>
  <div :class="{ 'theme-dark': nightMode }">
    <div class="container">
      <div
        id="theme-toggler"
        class="fas fa-moon"
        v-if="nightMode"
        @click="nightMode = !nightMode"
      ></div>
      <div
        id="theme-toggler"
        class="fas fa-sun"
        v-else
        @click="nightMode = !nightMode"
      ></div>

      <h3 class="title">our services</h3>
      <div class="box-container">
        <div class="box">
          <span class="number"><h3>patient</h3></span>
          <img src="../assets/patient.png" alt="" />

          <p>Internamento no hospital,
             realizar analise,
             se necessario faz-se operações
            </p>
          <a href="/" class="borde">View</a>
        </div>
        <div class="box">
          <span class="number"><h3>H. Crew</h3></span>
          <img src="../assets/crew.jpg" alt="" />

          <p>National Emergency Institute Medic and Nurse</p>
          <a href="/" class="borde">View</a>
        </div>
        <div class="box">
          <span class="number"><h3>admin</h3></span>
          <img src="../assets/adim.png" alt="" />

          <p>Admin Hospital is a government administration</p>
          <a href="/" class="borde">View</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      nightMode: false,
    };
  },
  watch: {
    nightMode: function () {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap");
:root {
  --primary-bg-color: #eee;
  --secondary-bg-color: #fff;
  --primary-text-bg-color: #666;
  --secondary-text-bg-color: #999;
}

* {
  font-family: "Nunito", sans-serif;
  margin: 0;
  box-sizing: border-box;
  transition: all 0.2s linear;
}
.container {
  min-height: 100vh;
  padding: 20px 9%;
  padding-bottom: 80px;
}
.container .title {
  text-align: center;
  color: var(--primary-text-bg-color);
  font-size: 50px;
  padding: 15px 0;
  text-transform: uppercase;
}
.container .box-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.container .box-container .box {
  flex: 1 1 300px;
  text-align: center;
  background: var(--secondary-bg-color);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 0;
}
.container .box-container .box i {
  font-size: 40px;
  height: 80px;
  width: 80px;
  line-height: 80px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin: 10px 0;
  color: var(--primary-text-bg-color);
}
.container .box-container .box img {
  font-size: 40px;
  height: 80px;
  width: 80px;
  line-height: 80px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin: 10px 0;
  color: var(--primary-text-bg-color);
}
.container .box-container .box h3 {
  font-size: 25px;
  color: var(--primary-text-bg-color);
}
.container .box-container .box p {
  font-size: 18px;
  color: var(--secondary-text-bg-color);
  padding: 5px;
}
.container .box-container .box .number {
  position: absolute;
  top: 5px;
  left: 15px;
  font-weight: bolder;
  font-size: 50px;
  color: #fff;
}
.container .box-container .box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  transition: 0.3s linear;
  background: #6f6fb6;
  clip-path: circle(28% at 5% 0);
}
.container .box-container .box:hover::before {
  clip-path: circle(100%);
}
.container .box-container .box:hover > * {
  color: #fff;
}
#theme-toggler {
  position: fixed;
  top: 15px;
  right: 25px;
  padding: 15px 20px;
  font-size: 30px;
  background: var(--secondary-bg-color);
  color: var(--primary-text-bg-color);
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
#theme-toggler:hover {
  background: #42b530;
  color: #fff;
}
.theme-dark {
  color: #efef;
  background: #222;
}
.theme-dark .container .box {
  --primary-bg-color: #222;
  --secondary-bg-color: #333;
  --primary-text-bg-color: #fff;
  --secondary-text-bg-color: #eee;
}

@media (max-with: 768px) {
  .container {
    padding: 80px 20px;
  }
  .container .title {
    font-size: 35px;
  }
}
.borde {
  background: #222;
  border: #222;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 25px;
  text-decoration: none;
  color: red;
}
</style>