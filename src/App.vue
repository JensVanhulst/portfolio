<template>
    <v-app>
        <navigation-drawer name="Jens Vanhulst" />
        <v-main>
            <v-container class="pa-0 ma-0" fluid>
                <v-card id="content-cards" class="custom-shadow">
                    <vue-page-transition name="fade-in-right">
                        <router-view />
                    </vue-page-transition>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import NavigationDrawer from '@/components/NavigationDrawer/NavigationDrawer.vue';

@Component({
    components: { NavigationDrawer },
    metaInfo() {
        return {
            title: 'Home',
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
export default class App extends Vue {}
</script>

<style lang="scss">
body,
html {
    overflow: hidden;
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 20px !important;
}

.custom-shadow {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2) !important;
    border: none !important;
}

#content-cards {
    height: calc(100vh - 50px);
    min-height: calc(100vh - 50px);
    margin: 25px 25px 25px 50px;
    border-radius: 10px;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
}

.v-navigation-drawer__border {
    display: none !important;
}
</style>
