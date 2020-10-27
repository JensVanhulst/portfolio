<template>
    <v-col cols="auto">
        <v-card class="custom-shadow card-outter" max-width="300" height="400">
            <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate />
            </template>

            <v-img height="150" :src="require(`../assets/images/projects/${project.preview}`)" />

            <v-card-title class="pb-0">{{ project.name }}</v-card-title>

            <v-card-text class="mb-0 pb-0">
                <v-chip-group column>
                    <div v-for="item in project.links" :key="item.name">
                        <v-chip
                            @click="openLink(item.link)"
                            rounded
                            outlined
                            small
                            color="primary"
                            dark
                            v-if="item.text === 'Demo'"
                        >
                            <v-icon left>
                                {{ item.icon }}
                            </v-icon>
                            {{ item.text }}
                        </v-chip>
                        <v-chip
                            @click="openLink(item.link)"
                            rounded
                            outlined
                            small
                            color="primary"
                            dark
                            v-if="item.text === 'Source'"
                        >
                            <v-icon left size="18">
                                {{ item.icon }}
                            </v-icon>
                            {{ item.text }}
                        </v-chip>
                    </div>

                    <v-chip
                        rounded
                        outlined
                        small
                        color="yellow darken-4"
                        dark
                        v-if="project.isInProd"
                    >
                        in progress
                    </v-chip>
                </v-chip-group>
            </v-card-text>

            <v-card-text>
                <div>
                    {{ project.description }}
                </div>
            </v-card-text>
            <v-spacer />

            <v-divider class="mx-4" />

            <v-card-actions class="card-actions">
                <v-icon class="mx-1" v-for="(icon, i) in project.technologies" :key="i">
                    {{ `mdi-${icon}` }}
                </v-icon>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IProject } from '@/interfaces/ProjectCard';
import { PropType } from 'vue';

@Component
export default class ProjectCard extends Vue {
    @Prop({ required: true, type: Object as PropType<IProject> })
    public readonly project!: string;

    openLink = (link: string) => {
        window.open(link);
    };
}
</script>

<style scoped>
.card-outter {
    position: relative;
    padding-bottom: 70px;
}
.card-actions {
    position: absolute;
    bottom: 10px;
}
</style>
