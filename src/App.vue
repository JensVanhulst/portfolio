<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <navigation-drawer name="Jens Vanhulst" status="Focussing"/>
        </v-col>
        <v-col cols="10">
          <vue-page-transition name="fade-in-right">
            <router-view/>
          </vue-page-transition>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import NavigationDrawer from '@/components/NavigationDrawer/NavigationDrawer.vue';

@Component({
  components: { NavigationDrawer },
})

export default class App extends Vue {

}
</script>

<style lang="scss">

.heading {
  font-family: 'Archivo Black', sans-serif;
  font-size: 65px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}

.subheading {
  color: #1F2833;
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 20px !important;
}

.custom-shadow {
  box-shadow: 0 6px 20px rgba(255, 0, 0, 0.2) !important;
  border: none !important;
}

.v-navigation-drawer__border {
  display: none !important;
}
</style>
