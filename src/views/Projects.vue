<template>
    <div>
        <heading class="py-10" left="My" right="Projects" />
        <v-container>
            <v-row justify="center">
                <sequential-entrance fromBottom>
                    <project-card :project="projects[0]" />
                    <project-card :project="projects[1]" />
                    <project-card :project="projects[2]" />
                </sequential-entrance>

                <sequential-entrance fromBottom>
                    <project-card :project="projects[3]" />
                    <project-card :project="projects[4]" />
                    <project-card :project="projects[5]" />
                </sequential-entrance>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ProjectCard from '@/components/ProjectCard.vue';
import { IProject } from '@/interfaces/ProjectCard';

@Component({
    components: { ProjectCard },
    metaInfo() {
        return {
            title: 'Projects',
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
export default class Projects extends Vue {
    projects: IProject[] = [
        {
            name: 'Website Art & Light house',
            technologies: ['wordpress', 'language-php'],
            links: [
                {
                    icon: 'mdi-eye',
                    link: 'https://www.artandlighthouse.be/',
                    text: 'Demo',
                },
            ],
            description:
                'Website for a local business that sells decoration and lighting in the region of Linter ',
            preview: 'artandlight.png',
            isInProd: false,
        },
        {
            name: 'Client managing webapp',
            technologies: [
                'vuejs',
                'vuetify',
                'language-javascript',
                'nodejs',
                'docker',
                'database',
            ],
            links: [
                {
                    icon: 'mdi-github',
                    link: 'https://github.com/ArtAndLightHouse/client-manager',
                    text: 'Source',
                },
            ],
            description:
                'All in one solution with a cash system, stock manager and analytics page. (demo on request) ',
            preview: 'client-manager.png',
            isInProd: false,
        },
        {
            name: 'Datapixel IOT dashboard',
            technologies: [
                'vuejs',
                'vuetify',
                'language-typescript',
                'nodejs',
                'docker',
                'database',
                'electron-framework',
            ],
            links: [
                {
                    icon: 'mdi-github',
                    link: 'https://github.com/JensVanhulst/3EAI-PEM-2021-Data-Pixel',
                    text: 'Source',
                },
            ],
            description:
                'A project made during my 3th year in ICT. It is a modular webapp to visualise sensor data.',
            preview: 'datapixel.png',
            isInProd: true,
        },
        {
            name: 'All things talk dashboard',
            technologies: [
                'vuejs',
                'vuetify',
                'language-typescript',
                'nodejs',
                'language-python',
                'database',
            ],
            links: [
                {
                    icon: 'mdi-eye',
                    link: 'https://att-dashboard.vercel.app/',
                    text: 'Demo',
                },
            ],
            description:
                'Webapp backed by flask to visualise and analyse all sensor data from the All things talk kit.',
            preview: 'att.png',
            isInProd: true,
        },
        {
            name: 'Portfolio website',
            technologies: ['vuejs', 'vuetify', 'language-typescript'],
            links: [
                {
                    icon: 'mdi-github',
                    link: 'https://github.com/JensVanhulst/portfolio',
                    text: 'Source',
                },
            ],
            description:
                'My personal website to show my projects and skills to other people. Build with Vuejs and vuetify.',
            preview: 'portfolio.png',
            isInProd: false,
        },
        {
            name: 'Industry 4.0 dashboard',
            technologies: [
                'vuejs',
                'vuetify',
                'language-typescript',
                'nodejs',
                'discord',
                'database',
            ],
            links: [],
            description:
                'A fullstack dashboard to communicate between twincat PLC`s on the industry 4.0 standard.',
            preview: 'empty.png',
            isInProd: true,
        },
    ];
}
</script>

<style scoped>
span {
    display: flex;
}
</style>
