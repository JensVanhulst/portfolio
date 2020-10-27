<template>
    <v-container fill-height fluid class="action">
        <v-row class="mx-5" align="center">
            <v-col cols="12">
                <v-card-title class=" justify-center heading">
                    Hello, my name is
                </v-card-title>
                <v-card-title class=" mt-0 pt-0 justify-center  heading subheading">
                    Jens Vanhulst
                </v-card-title>
                <v-card-subtitle class="mt-2 text-center">
                    Electronics-ICT student at PXL Digital
                </v-card-subtitle>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    metaInfo() {
        return {
            title: 'Home',
            meta: [
                { name: 'description', content: 'Contact page for Jens Vanhulst portfolio' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
                { charset: 'UTF-8' },
                { name: 'author', content: 'Jens Vanhulst' },
            ],
        };
    },
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
.action {
    height: calc(100vh - 50px);
    width: 100%;
    background-image: url('../assets/images/axiom-pattern.png');
    background-repeat: repeat;
}

.heading {
    font-family: 'Archivo Black', sans-serif;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    color: #c5c6c7;
}

.subheading {
    color: #1f2833;
}
</style>
