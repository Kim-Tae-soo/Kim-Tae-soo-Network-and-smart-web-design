<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <v-row justify="center">
                <v-card id=photoId>
                    <v-card-text>
                        <h1>
                            <p>* 구매 주의 안내 *</p>
                        </h1>
                        <h3>
                            <p>구매하시는 사진의 정보가 맞는지 확인 후 결제하기 버튼을 눌러주세요.</p>
                        </h3>   
                        <v-divider />
                        <p/>
                        <div>사진 번호 : {{ photoId }}</div>
                        <div>사진 이름 : {{ lectureName }}</div>
                        <div>사진 정보 : {{ info }}</div>
                        <div>가격 : {{ amount }}원</div>
                        <div>사진 주소 : {{ imgUrl }}</div>
                        <v-divider />
                    </v-card-text>
                   
                    <v-card-actions>
                        <v-btn text small @click="btnClick($event)">결제하기</v-btn>
                        <v-btn text small @click="btnClick($event)">결제완료</v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-layout>
    </v-container>
</template>
  
<script>

import axios from 'axios'; 

import { loadTossPayments } from '@tosspayments/sdk';


export default {
    data() {
        return {
            clientKey: 'test_ck_D4yKeq5bgrpxY9G0EvQrGX0lzW6Y',
            paymentsUrlInfo: '', 
            urlinfo: 'http://localhost:8000',

        }
    },
    computed: {
        photoId() {
            return this.$store.state.photoId;
        },
        amount() {
            return this.$store.state.amount;
        },
        lectureName() {
            return this.$store.state.lectureName;
        },
        info() {
            return this.$store.state.info;
        },
        imgUrl() {
            return this.$store.state.imgUrl;
        }
    },
    methods: {
        btnClick($event) {
            this.paymentsUrlInfo = '';
            if ($event.target.innerHTML == "결제하기") {
                loadTossPayments(this.clientKey).then(tossPayments => {
                    tossPayments.requestPayment("카드", {
                        amount: this.amount,
                        orderId: 'LzyqwMXssf844Bb5af43d=k344641', 
                        orderName: this.lectureName,
                        customerName: '김태수',
                        successUrl: 'http://localhost:8080/payments',
                        failUrl: 'http://localhost:8080/'
                    });
                })
            }

            else if ($event.target.innerHTML == "결제완료") {  
                this.paymentsUrlInfo = window.location.search;   
                axios.post(this.urlinfo + '/payments', {
                    paymentsUrlInfo: this.paymentsUrlInfo
                })
                    .then((res) => {
                        alert(res.data);
                        axios.post(this.urlinfo + '/payments/history', {
                            amount: res.data.totalAmount,
                            orderId: res.data.orderId,
                            paymentKey: res.data.paymentKey,
                            cardCompany: res.data.card.company,
                            cardType: res.data.card.cardType,
                            cardNumber: res.data.card.number,
                            photoId: this.$store.state.photoId,
                            lectureName: this.$store.state.lectureName,
                            imgUrl: this.$store.state.imgUrl,
                            info: this.$store.state.info,
                        })
                            .then((resdb) => {
                                alert(resdb.data.lectureName + " 사진이 성공적으로 결제되었습니다.");
                                this.$router.push('/');
                            }).catch((err) => {
                                alert('db업로드실패: ' + err);
                            });
                    }).catch((err) => {
                        alert('결제승인실패: ' + err);
                        console.log(err);
                    });
            }
        }
    },
}
</script>

