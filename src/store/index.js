import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[],
    hospitalCrew:[],
    patient:[]


  },
  mutations: {
    setUser(state,user){
      state.user = user
    },
    setHospitalCrew(state,hospitalCrew){
      state.hospitalCrew = hospitalCrew
    },
    setPatient(state,patient){
      state.patient = patient
    }
  },
  actions: {
  },
  modules: {
  }
})
