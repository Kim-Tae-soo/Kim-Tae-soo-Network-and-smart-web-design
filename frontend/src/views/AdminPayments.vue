<template>
  <div id="app">
    <v-data-table :headers="headers" :items="items" class="elevation-1">
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.orderId }}</td>
          <td>{{ row.item.orderName }}</td>
          <td>{{ row.item.amount }}</td>
          <td>{{ row.item.customerName }}</td>
          <td>{{ row.item.cardCompany }}</td>
          <td>{{ row.item.cardNumber }}</td>
          <td>{{ row.item.cardType }}</td>
          <td>{{ row.item.photoId }}</td>
          <td>{{ row.item.userId }}</td>
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
      paymentsInfo: {
        orderId: null,
        orderName: null,
        amount: null,
        customerName: null,
        cardCompany: null,
        cardNumber: null,
        cardType: null,
        photoId: null,
        userId: null
      },
      dialog: false,
      dialogTitle: null,

      headers: [
        { text: 'Order ID', align: 'left', value: 'orderId' },
        { text: 'Photo Name', align: 'left', value: 'orderName' },
        { text: 'Photo Price', align: 'left', value: 'amount' },
        { text: 'User Name', align: 'left', value: 'customerName' },
        { text: 'CardCompany', align: 'left', value: 'cardCompany' },
        { text: 'CardNumber', align: 'left', value: 'cardNumber' },
        { text: 'CardType', align: 'left', value: 'cardType' },
        { text: 'Photo ID', align: 'left', value: 'photoId' },
        { text: 'User ID', align: 'left', value: 'userId' },
      ],
      items: []
    }
  },
  created() {
    axios.get(this.urlinfo + "/adminPayments")
      .then((res) => {
        console.log(res.data); 
        this.items = res.data;
      })
      .catch((err) => {
        alert('에러 발생: ' + err);
      });
  },
}

</script>
<style scoped>
div {
  margin: 0 5px 0 5px;
}
</style>