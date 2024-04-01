<template>
  <v-form v-model="valid">
    <v-container>
      <form action="">
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-text-field v-model="id" :rules="idRules" :counter="10" label="ID" required></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-text-field v-model="password" :rules="pwRules" :counter="10" label="PassWord" required></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="1">
            <v-btn text small @click="btnClick($event)">Login</v-btn>
          </v-col>
        </v-row>
      </form>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    valid: false,
    id: '',
    password: '',
    token: '',
    urlinfo: 'http://localhost:8000',
    result: '',
    idRules: [
      v => !!v || '아이디를 입력주세요',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    pwRules: [
      v => !!v || '비밀번호를 입력해주세요',
      v => v.length >= 8 || '8자리 이상 입력해주세요',
    ],
  }),
  methods: {
    btnClick($event) {
      if (this.id.length > 0 && this.password.length > 0) {
        if ($event.target.innerHTML == "Login") {
          axios.post(this.urlinfo + "/login", {
            userId: this.id,
            password: this.password
          })
            .then((res) => {
              alert(res.data.name + "님 환영합니다.");
              this.$router.push('/');
            })
            .catch((err) => {
              alert('에러 발생: ' + err);
            });
        }
      }
      this.id = '';
      this.password = '';
      this.result = '';
    },
  },
}
</script>