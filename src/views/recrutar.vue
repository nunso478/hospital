<template>
  <div class="body">
    <!--sidebar start-->
    <div class="siderbar">
      <center>
        <img src="../assets/adim.png" class="profile_image" alt="" />
        <h4>{{ $store.state.user.username }}</h4>
      </center>
      <router-link to="/profileadmi"><i class="fas fa-desktop"></i><span>home</span></router-link>
      <router-link to="/recrutar"><i class="fa fa-stethoscope"></i><span>Hospital recruitar</span></router-link>
    </div>
    <!--sidebar end-->
    <div class="content">
      <div class="container1">
        <div class="box-container1">       
          <div class="box1" >
            <span class="number1"><h3>Hospital Crew</h3></span>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <b-table striped hover :items="items"  head-variant="dark">
                <template v-slot:cell(actions)="data">
                  <b-button variant="primary" size="sm" @click="editar(data.id)">EDITAR</b-button>
                  <b-button variant="danger" size="sm" @click="deletar(data.id)">Remover</b-button>
                </template>
            </b-table>   
            <router-link to="/formulario">New Crew</router-link>
            <br>
             <br>
             <router-link to="/deletehos">delete Crew</router-link>
              <br>
             <br>
             <router-link to="/updateHos">UPDATE Crew</router-link>
            </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{key:'actions',
              label:'Açoes',
              sortable:true
      }],
    };
  },
  methods:{
      editCrew(data){
          console.log(data)
      },
     getmanager(){
     axios.get("http://localhost:3000/manager/HospitalCrew").then(
       res => {
         console.log(res);
         this.items = res.data
       }
     )
   }, 
 
  },
  mounted(){
     this.getmanager();
   }
};
</script>

<style >
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

</style>