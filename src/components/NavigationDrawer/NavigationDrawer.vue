<template>
  <v-card class="mx-auto custom-shadow" flat height="100%" width="256">
    <v-navigation-drawer dark color="primary" permanent>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="@/assets/profile.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{name}}</v-list-item-title>
            <v-list-item-subtitle><span class="mr-3">💪</span>{{ status }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider />

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
          <v-list-item-icon >
            <v-img :src="item.icon"></v-img>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <p class="pa-2 white--text text-center">
          ® {{new Date().getFullYear()}} Jens Vanhulst
        </p>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface INavItem {
  title: string;
  icon: string;
  link: string;
}

@Component({
})

export default class App extends Vue {
  @Prop({ type: String, required: true })
  public readonly name: string;

  @Prop({ type: String, required: true })
  public readonly status: string;

  iconPaths = {
    /* eslint-disable */
    home: require('@/assets/icons/home.svg'),
    about: require("@/assets/icons/info.svg"),
    skills: require("@/assets/icons/sliders.svg"),
    projects: require("@/assets/icons/briefcase.svg"),
    contact: require("@/assets/icons/phone-call.svg")
  };

  items: INavItem[] = [
    { title: 'Start', icon: this.iconPaths.home, link: '/' },
    { title: 'About me', icon: this.iconPaths.about, link: '/about' },
    { title: 'My Skills', icon: this.iconPaths.skills, link: '/skills' },
    { title: 'Projects', icon: this.iconPaths.projects, link: '/projects' },
    { title: 'Contact', icon: this.iconPaths.contact, link: '/contact' },
  ];
}
</script>
