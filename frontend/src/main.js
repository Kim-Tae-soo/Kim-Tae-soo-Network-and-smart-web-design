import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import io from 'socket.io-client'
import Vuex from 'vuex'
import Persistedstate from 'vuex-persistedstate' 


const socket = io('http://localhost:8000')

Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() 
Vue.prototype.$socket = socket; 


const store = new Vuex.Store({
  state:{
    photoId: null,
    amount: null,
    lectureName : null,
    info : null,
    imgUrl : null
  },
 
  plugins:[Persistedstate({
    paths:["photoId","amount","lectureName","info","imgUrl"]
  })],

  mutations:{
    savePhotoId(state,id){
      state.photoId=id;
    },
    saveAmount(state,amount){
      state.amount=amount;
    },
    saveLectureName(state,lectureName){
      state.lectureName=lectureName;
    },
    saveLectureImageUrl(state,imgUrl){
      state.imgUrl = imgUrl;
    },
    saveLectureInfo(state,info){
      state.info = info;
    }
  }
  
})

new Vue({
  store, 
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
