<template>
  <v-card color="secondary" flat class="mx-auto custom-shadow"  height="94vh" >
    <v-card-title class="justify-center heading">
      My <span class="subheading"> Projects</span>
    </v-card-title>
    <v-card-text>
      <v-tabs v-model="tab" centered icons-and-text >
        <v-tabs-slider/>
        <v-tab href="#tab-1" >
          Web development
        </v-tab>
        <v-tab href="#tab-2">
          Electronics
        </v-tab>
      </v-tabs>
      <v-container>
        <v-row>
          <v-tabs-items v-model="tab" class="justify-center">
            <v-tab-item :value="'tab-1'">
              <v-row class="text-center justify-center">
                <v-col>
                  <v-card width="250px">
                    hello
                  </v-card>
                </v-col>
                <v-col>
                  <v-card width="250px">
                    hello
                  </v-card>
                </v-col>
                <v-col>
                  <v-card width="250px">
                    hello
                  </v-card>
                </v-col>
                <v-col>
                  <v-card width="250px">
                    hello
                  </v-card>
                </v-col><v-col>
                <v-card width="250px">
                  hello
                </v-card>
              </v-col>

              </v-row>
            </v-tab-item>
            <v-tab-item :value="'tab-2'">
              <v-row class="text-center justify-center">
                tab2
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Projects extends Vue {
  tab = 1
}
</script>
