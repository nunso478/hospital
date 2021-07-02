<template>
  <div class="body">
    <!--sidebar start-->
    <div class="siderbar">
      <center>
        <img src="../assets/crew.jpg" class="profile_image" alt="" />
        <h4>{{ $store.state.Crew.username }}</h4>
      </center>
        <router-link to="/profilehos"><i class="fas fa-desktop"></i><span>home</span></router-link>
        <router-link to="/medication"><i class="fas fa-pills"></i><span>Medicamentos</span></router-link>
        <router-link to="/internamento"><i class="fas fa-procedures"></i><span>Internamento</span></router-link>
    </div>
    <!--sidebar end-->
    <div class="wrapper2">
      <div class="title2">
        <h1>UPDATE Medication</h1>
      </div>

      <form @submit.prevent="UPDATEMedication">
        <div class="contact-form2">
          <div class="input-fields2">
            <input
              type="number"
              class="input2"
              placeholder="id_medication"
              name="id_medication"
              v-model="id_medication"
            />
            <br />
            <input
              type="text"
              class="input2"
              placeholder="name"
              name="Name"
              v-model="Name"
            />
            <input
              type="text"
              class="input2"
              placeholder="Number_Register"
              name="Number_Register"
              v-model="Number_Register"
            />
            <input
              type="text"
              class="input2"
              placeholder="id_Patient"
              name="id_Patient"
              v-model="id_Patient"
            />
            <button type="submit" class="btn2">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost:3000/hospital",
});
export default {
  data() {
    return {
      id_medication:"",
      Name:"",
      Number_Register:"",
      id_Patient:""
    };
  },
  methods: {
    async UPDATEMedication() {
      try {
        instance
          .put("/Medication/" + this.id_medication, {
            Name: this.Name,
            Number_Register: this.Number_Register,
            id_Patient: this.id_Patient,
           
          })
          .then((response) => {
            
              alert("ID UPDATE");
              localStorage.setItem("jwt", response.data.token);
              this.$store.commit("setHospitalCrew", response.data);
            
          })
          .catch((error) => {
            console.log(error);
            this.$router.push({
              name: "unauthorized",
              params: {
                message: error.response.data.message,
              },
            });
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background-image: url("../assets/back.jpg");
  background-size: cover;
  height: 87vh;
}
.siderbar {
  background: #2f323a;
  padding-top: 30px;
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
}
.siderbar .profile_image {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
}
.siderbar h4 {
  color: #ccc;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;
}
.siderbar a {
  color: rgb(184, 182, 182);
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  font-size: 20px;
}
.siderbar a:hover {
  background: #19b3d3;
}
.siderbar i {
  padding-right: 10px;
}
.content {
  margin-left: 200px;
}
.content1 {
  margin-left: 200px;
}
.container1 {
  min-height: 10vh;
  padding: 20px 9%;
  padding-bottom: 80px;
}
.container1 .title {
  text-align: center;
  color: var(--primary-text-bg-color);
  font-size: 50px;
  padding: 15px 0;
  text-transform: uppercase;
}
.container1 .box-container1 {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.container1 .box-container1 .box1 {
  flex: 1 1 300px;
  text-align: center;
  background: var(--secondary-bg-color);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(221, 97, 97, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.container1 .box-container1 .box1 img {
  font-size: 40px;
  height: 80px;
  width: 80px;
  line-height: 80px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin: 10px 0;
  color: var(--primary-text-bg-color);
}
.container1 .box-container1 .box1::before {
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
.container1 .box-container1 .box1 .number1 {
  position: absolute;
  top: 5px;
  left: 15px;
  font-weight: bolder;
  font-size: 50px;
  color: #fff;
}
h3 {
  color: rgb(25, 25, 34);
}
.wrapper2 {
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 550px;
  background: #333 !important;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.wrapper2 .title2 h1 {
  color: #c5ecfd;
  text-align: center;
  margin-bottom: 25px;
}

.contact-form2 {
  display: flex;
}

.input-fields2 {
  display: flex;
  flex-direction: column;
  margin-right: 4%;
}

.input-fields2,
.msg {
  width: 48%;
}

.input-fields2 .input2,
.msg textarea {
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 2px solid #c5ecfd;
  padding: 10px;
  color: #c5ecfd;
  width: 100%;
  font-size: 19px;
}

.msg textarea {
  height: 212px;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #c5ecfd;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #c5ecfd;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: #c5ecfd;
}

.btn {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 25px;
  text-decoration: none;
  color: rgb(224, 224, 224) !important;
  font-size: 20px !important;
}
@media screen and (max-width: 600px) {
  .contact-form2,
  .wrapper2 {
    flex-direction: column;
  }
  .msg textarea {
    height: 80px;
  }
  .input-fields2,
  .msg {
    width: 100%;
  }
}
</style>