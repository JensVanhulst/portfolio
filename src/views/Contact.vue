<template>
    <div>
        <heading class="pt-10" left="get in" right="Touch" />
        <v-container fill-height fluid class="action">
            <v-row justify="center">
                <v-col cols="3">
                    <v-card class=" custom-shadow" height="165px">
                        <v-card-text class="text-center">
                            <v-avatar class="border" color="transparent">
                                <v-icon dark color="primary">
                                    mdi-email-outline
                                </v-icon>
                            </v-avatar>
                        </v-card-text>
                        <v-card-subtitle class="text-center">
                            jens.vanhulst@student.pxl.be / vanhulstjens@gmail.com
                        </v-card-subtitle>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card class="custom-shadow" height="165px">
                        <v-card-text class="text-center">
                            <v-avatar class="border" color="transparent">
                                <v-icon dark color="primary">
                                    mdi-linkedin
                                </v-icon>
                            </v-avatar>
                        </v-card-text>
                        <v-card-subtitle class="text-center">
                            @jens-vanhulst-5622981b8
                        </v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    metaInfo() {
        return {
            title: 'Contact',
            titleTemplate: '%s | Jens Vanhulst',
            meta: [
                { name: 'description', content: 'Contact page for Jens Vanhulst portfolio' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
                { charset: 'UTF-8' },
                { name: 'author', content: 'Jens Vanhulst' },
            ],
        };
    },
})
export default class Contact extends Vue {}
</script>

<style scoped lang="scss">
.action {
    height: calc(100vh - 150px);
    width: 100%;
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

.border {
    border: 2px solid;
    border-color: #1f2833 !important;
}
</style>
