<template>
  <div class="hello1">
    <div class="wrapper">
      <div class="title">
        <h1>Login Medic Or Nurse</h1>
      </div>
      <br>
       <br>
        <br>
        <br> 
      <form  @submit.prevent="loginHospital">
          <div class="contact-form2">
            <div class="input-fields2">
              <input type="text" class="input2"  placeholder="username" name="username" v-model="username"/>
              <input type="password"  class="input2" placeholder="password"  name="password"  v-model="password"/>
              <button type="submit" class="btn2">Enviar</button> 
            </div>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost:3000",
});
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async loginHospital() {
      try {
        instance
          .post("/loginh", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("jwt", response.data.token);
            this.$store.commit('setHospitalCrew',response.data)
            this.$router.push('/profilehos');
             
          })
          .catch((error) => {
            console.log(error);
            alert("erro")
             this.$router.push({
              path: "unauthorized",
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
}
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

.hello1 {
  background: url("../assets/back.jpg") no-repeat top center;
  background-size: cover;
  height: 100vh;
}

.wrapper {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 550px;
  background: #333 !important;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.wrapper .title h1 {
  color: #c5ecfd;
  text-align: center;
  margin-bottom: 25px;
   
}

.contact-form {
  display: flex;
}

.input-fields {
  display: flex;
  flex-direction: column;
  margin-right: 4%;
}

.input-fields,
.msg {
  width: 48%;
}

.input-fields .input,
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
  .contact-form {
    flex-direction: column;
  }
  .msg textarea {
    height: 80px;
  }
  .input-fields,
  .msg {
    width: 100%;
  }
}
</style>