<template>
  <div id="app">
    <v-layout row justify-center>
      <v-col>
        <v-btn text color="primary" v-on:click.native="addPhoto()">사진추가</v-btn>
      </v-col>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ dialogTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="사진번호" v-model="photoInfo.photoId" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="가격" v-model="photoInfo.amount" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="사진이름" v-model="photoInfo.name" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="사진정보" v-model="photoInfo.info" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="이미지주소" v-model="photoInfo.imgUrl" required></v-text-field>
                </v-flex>

              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="btnClick($event)">확인</v-btn>
            <v-btn color="blue darken-1" text @click="btnClick($event)">취소</v-btn>
            
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>


    <v-data-table :headers="headers" :items="items" class="elevation-1">
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.photoId }}</td>
          <td>{{ row.item.amount }}</td>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.info }}</td>
          <td>{{ row.item.imgUrl }}</td>
          <td class="text-xs-right">
            <v-btn small text color="primary" v-on:click.native="updatePhoto(row.item)">수정</v-btn>
            <v-btn small text color="primary" v-on:click.native="deletePhoto(row.item)">삭제</v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      urlinfo: 'http://localhost:8000',
      photoInfo: {
        photoId: null,
        amount: null,
        name: null,
        info: null,
        imgUrl: null
      },
      dialog: false,
      dialogTitle: null,

      headers: [
        { text: '사진번호', align: 'left', value: 'photoId' },
        { text: '가격', align: 'left', value: 'amount' },
        { text: '사진이름', align: 'left', value: 'name' },
        { text: '사진내용', align: 'left', value: 'info' },
        { text: '이미지주소', align: 'left', value: 'imgUrl' },
      ],
      items: []
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
    addPhoto() {
      this.dialog = true;
      this.dialogTitle = "추가";
    },
    updatePhoto(data) {
      this.dialog = true;
      this.dialogTitle = "수정";
      this.photoInfo.photoId = data.photoId;
      this.photoInfo.amount = data.amount;
      this.photoInfo.name = data.name;
      this.photoInfo.info = data.info;
      this.photoInfo.imgUrl = data.imgUrl;
    },
    deletePhoto(data) {
      this.dialog = true;
      this.dialogTitle = "삭제";
      this.photoInfo.photoId = data.photoId;
      console.log('deletePhoto : ' + data);
    },

    btnClick($event) {
      this.dialog = false;
      if ($event.target.innerHTML == "확인") {
        if (this.dialogTitle == "추가") {
          axios.post(this.urlinfo + "/" + "photos", {
            photoId: this.photoInfo.photoId,
            amount: this.photoInfo.amount,
            name: this.photoInfo.name,
            info: this.photoInfo.info,
            imgUrl: this.photoInfo.imgUrl
          })
            .then(() => {
              axios.get(this.urlinfo + "/" + "photos")
                .then((res) => {
                  this.items = res.data;
                  alert("사진이 추가되었습니다.");
                })
                .catch((err) => {
                  alert('에러 발생: ' + err);
                });

            })
            .catch((err) => {
              alert('에러 발생: ' + err);
            });
        }
        else if (this.dialogTitle == "수정") {
          axios.put(this.urlinfo + "/" + "photos" + "/" + this.photoInfo.photoId, {
            photoId: this.photoInfo.photoId,
            amount: this.photoInfo.amount,
            name: this.photoInfo.name,
            info: this.photoInfo.info,
            imgUrl: this.photoInfo.imgUrl
          })
            .then(() => {
              axios.get(this.urlinfo + "/" + "photos")
                .then((res) => {
                  this.items = res.data;
                  alert("업데이트 성공");
                })
                .catch((err) => {
                  alert('에러 발생: ' + err);
                });
            })
            .catch((err) => {
              alert('에러 발생: ' + err);
            });

        }
        else {
          axios.delete(this.urlinfo + "/" + "photos" + "/" + this.photoInfo.photoId, { data: { photoId: this.photoInfo.photoId } })
            .then((result) => {
              console.log("삭제 후" + result); 
              axios.get(this.urlinfo + "/" + "photos") 
                .then((res) => {
                  this.items = res.data;
                  alert("삭제 성공");
                })
                .catch((err) => {
                  alert(' 삭제 후 데이터 가져오는 중 에러 발생: ' + err); 
                });
            })
            .catch((err) => { alert('에러 발생: ' + err); });

        }
      }
      this.photoInfo.photoId = null;
      this.photoInfo.amount = null;
      this.photoInfo.name = null;
      this.photoInfo.info = null;
      this.photoInfo.imgUrl = null;
    }
  }
}
</script>
<style scoped>
div {
  margin: 0 5px 0 5px;
}
</style>