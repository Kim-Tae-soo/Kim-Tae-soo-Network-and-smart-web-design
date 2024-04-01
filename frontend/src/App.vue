<template>
  <v-app>
    <v-main>
      <top />
      <router-view name="login"></router-view>
      <router-view name="join"></router-view>
      <router-view name="payments"></router-view>
      <router-view name="adminPhoto"></router-view>
      <router-view name="adminPayments"></router-view>
      <router-view name="Notice"></router-view>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Top from './components/Top';

export default {
  name: 'App',
  components: {
    Top,
  },
  data: () => ({
    
  }),
  created() {
 
    this.$socket.on('smart', (data) => {  
      alert(data.res + "사진이 저장되었습니다.");
    });
    this.$socket.on('rint', { data: "소켓 테스트 first Request" });
  }
};
</script>


