<template>
  <v-form v-model="valid">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-text-field v-model="name" :rules="nameRules" :counter="10" label="이름" required></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-text-field v-model="birth" :rules="birthRules" :counter="6" label="생년월일" required></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-text-field v-model="id" :rules="idRules" :counter="10" label="아이디" required></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-text-field v-model="password" :rules="pwRules" :counter="10" label="비밀번호" required></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="1">
          <v-btn text small @click="btnClick($event)">회원가입하기</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    valid: false,
    name: '',
    birth: '',
    id: '',
    password: '',
    urlinfo: 'http://localhost:8000',
    nameRules: [
      v => !!v || '이름을 입력주세요',
      v => v.length <= 15 || '15자리 이하 입력해주세요',
    ],
    idRules: [
      v => !!v || '아이디를 입력주세요',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    pwRules: [
      v => !!v || '비밀번호를 입력해주세요',
    ],
    birthRules: [
      v => !!v || '생년월일을 입력주세요',
      v => v.length == 6 || '6자리로 입력해주세요',
    ],
  }),
  methods: {
    btnClick($event) {
      if ($event.target.innerHTML == "회원가입하기") {
        axios.post(this.urlinfo + '/users', {
          name: this.name,
          birth: this.birth,
          userId: this.id,
          password: this.password
        })
          .then((res) => {// eslint-disable-line no-unused-vars
            alert("회원가입이 성공적으로 완료되었습니다.");
            this.$router.push('/'); 
          })
          .catch((err) => {
            alert('에러 발생: ' + err);
          });
      }
      this.name = '';
      this.birth = '';
      this.id = '';
      this.result = '';
    },
  },
}
</script>