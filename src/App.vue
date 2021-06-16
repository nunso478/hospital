<template>
  <div class="hello">
    <nav>
      <label class="logo">Hospital  MedicTab</label>
      <ul v-if="($store.state.user.length==0)">
        <li><router-link to="/" class="active">Home</router-link></li>
        <li><router-link to="/About">About</router-link></li>
        <li><router-link to="/service">service</router-link></li>
      </ul>
      <button v-if="!($store.state.user.length==0)" @click="sair" class="btn2">sair</button>
      <label id="icon">
        <i class="fas fa-bars"></i>
      </label>
    </nav>
    <section></section>
    <router-view />
  </div>
</template>

<script>
export default {
  methods:{
      sair(){
        this.$store.commit('setUser',[])
        this.$router.push("/");
      }
  }
};
</script>

<style>
.btn2{
  /*
  width: 100%;
  display: flex;
  justify-content: right;
  padding: 10px 25px !important;
  text-decoration: none;
  color: rgb(214, 46, 46) !important;
  font-size: 20px !important;
  margin-left: 1000px;
  margin-right: 102px;*/
  padding: 5px;
  background: #19B3D3;
  text-decoration: none;
  float: right;
  margin-top: 15px;
  margin-right: 40px;
  border-radius: 2px;
  font-size: 25px;
  font-weight: 600;
  color: #fff;
  transition: 0.5s;
  /*transition-property:*/
}
.btn2:hover{
  background: #0d9DBB;
}
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}
.hello {
  font-family: monstserrat;
}
nav {
  height: 80px;
  width: 100%;
  background: #34495e;
  
}
label.logo {
  font-size: 35px;
  font-weight: bold;
  color: white;
  padding: 0 100px;
  line-height: 80px;
}
nav ul {
  float: right;
  margin-right: 40px;
 padding-right: 100px;
}
nav li {
  display: inline-block;
  margin: 0 8px;
  line-height: 80px;
}
nav a {
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  border: 1px solid transparent;
  padding: 7px 10px;
  border-radius: 3px;
}
a.active,
a:hover {
  border: 1px solid white;
  transition: 0.5s;
}
nav #icon {
  color: white;
  font-size: 30px;
  line-height: 80px;
  float: right;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
@media (max-width: 1048px) {
  label .logo {
    font-size: 32px;
    padding-left: 60px;
  }
  nav ul {
    margin-right: 20px;
  }
  nav a {
    font-size: 17px;
  }
}
@media (max-width: 909px) {
  nav #icon {
    display: block;
  }
  nav ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2f3640;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
  }
  nav li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav a {
    font-size: 20px;
  }
  a.active,
  a:hover {
    display: block;
    margin: 50px;
    line-height: 30px;
  }
  nav ul.show{
    left: 0;
  }
}
 
</style>