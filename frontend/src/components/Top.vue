<template>
    <v-card class="overflow-hidden" color="black">
        <v-container>
            <v-row>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-col sm="2" cols="1">
                    <v-toolbar-title>
                        <router-link to="/">
                            <font color="White">PHOTO GALLERY</font>
                        </router-link>
                    </v-toolbar-title>
                </v-col>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-col cols="1">
                    <v-btn small text to="/login">
                        <font color="White">Login</font>
                    </v-btn>
                </v-col>
                <v-col cols="1">
                    <v-btn small text to="/join">
                        <font color="White">Join</font>
                    </v-btn>
                </v-col>
                <v-col>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn text small color="black" dark v-bind="attrs" v-on="on">
                                <font color="White">Menu</font>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in category" :key="index">
                                <v-list-item-title @click="btnClick">{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>

export default {

    data: () => ({
        category: [
            { title: 'Photo management' },
            { title: 'Buy List' },
            { title: 'Important Notice' }
        ],
    }),
    methods: {
        btnClick($event) {
            if ($event.target.innerHTML == "Photo management") {
                this.$router.push('/adminPhoto');
            }
            else if ($event.target.innerHTML == "Buy List") {
                this.$router.push('/adminPayments');
            }
            else if ($event.target.innerHTML == "Important Notice") {
                this.$router.push('/Notice');
            }
        },
    }
}
</script>
