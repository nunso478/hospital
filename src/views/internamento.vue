<template>
  <div class="hello2">
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



    <div class="wrapper1">
      <div class="title1">
        <h1>internamento</h1>
      </div>
      <br>
       <br>
        <br>
        <br> 
      <form @submit.prevent="Internment">
        <div class="contact-form1">
          <div class="input-fields1"> 
           <textarea type="text" class="input1" placeholder="exams"  name="exams" v-model="exams" />
           
            <br>
            <button type="submit" class="btn">Enviar</button>
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
      exams:""
       
    };
  },
  methods: {
    async Internment() {
      try {
        instance
          .post("/Internment", {
            exams: this.exams
            
          })
          .then((response) => {
            alert("ID Inserted")
            localStorage.setItem("jwt", response.data.token);
            this.$store.commit("setHospitalCrew", response.data);
            this.$router.push("/profilehos");
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
@import url("https://fonts.googleapis.com/css?family=Roboto");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: "Roboto", sans-serif;
}

.hello2 {
  background: url("../assets/review.jpg") no-repeat top center;
  background-size: cover;
  height: 87vh;
}

.wrapper1 {
  position: absolute;
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

.wrapper1 .title1 h1 {
  color: #c5ecfd;
  text-align: center;
  margin-bottom: 25px;
   text-align: left !important;
   margin-left: -25px;
}

.contact-form1 {
  display: flex;
}

.input-fields1 {
  display: flex;
  flex-direction: column;
  margin-right: 4%;
}
.input-fields1::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: #6f6fb6;
    clip-path: circle(28% at 5% 0);
}
.input-fields1,
.msg1 {
  width: 48%;
}

.input-fields1 .input1,
.msg textarea   {
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 2px solid #c5ecfd;
  padding: 10px;
  color: #c5ecfd;
  width: 100%;
  font-size: 19px;
}
.input-fields1 .input2,
.msg textarea   {
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 2px solid #c5ecfd;
  padding: 10px;
  color: #020202;
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
  .contact-form1 {
    flex-direction: column;
  }
  .msg textarea {
    height: 80px;
  }
  .input-fields1,
  .msg {
    width: 100%;
  }
}
</style>