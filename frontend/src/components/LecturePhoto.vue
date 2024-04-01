<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="(item, index) in items" :key="index">

        <v-card>
          <v-img aspect-ratio="2" v-bind:src=item.imgUrl>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-text>
            <div>사진 번호 : {{ item.photoId }}</div>
            <div>사진 이름 : {{ item.name }}</div>
            <div>사진 가격 : {{ item.amount }}원</div>
            <div>사진 정보 : {{ item.info }}</div>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <v-btn small text @click="btnClick(index)">구매하기</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      urlinfo: 'http://localhost:8000',
      items: [],
    }
  },
  created() {
    axios.get(this.urlinfo + "/photos")
      .then((res) => {
        console.log(res.data);
        this.items = res.data;
      })
      .catch((err) => {
        alert('에러 발생: ' + err);
      });
  },
  methods: {
    btnClick(index) {
      clearInterval
      this.$store.commit('saveAmount', this.items[index].amount);
      this.$store.commit('saveLectureName', this.items[index].name);
      this.$store.commit('saveLectureImageUrl', this.items[index].imgUrl);
      this.$store.commit('saveLectureInfo', this.items[index].info);
      this.$router.push('/Payments');
    },
  }
}
</script>