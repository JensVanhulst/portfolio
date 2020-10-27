<template>
    <div>
        <heading class="pt-10" left="About" right="Me" />
        <v-container fill-height class="action">
            <v-row align="center">
                <v-col cols="6">
                    <v-img class="frame mx-auto" width="250px" src="@/assets/images/profile.jpg" />
                </v-col>
                <v-col cols="6">
                    <v-card-text>
                        <p>
                            Hi there 👋. My name is Jens Vanhulst. I'm studing Electronics ICT at
                            PXL Digitial. I'm especialy interested in fullstack web development and
                            Internet of Things. I love to integrate hardware with a full stack IOT
                            solution and I'm eager to learn new technologies. You can take a look at
                            my
                            <a color="primary" class="link" @click="$router.push('projects')"
                                >projects</a
                            >
                            !
                        </p>
                        <v-btn outlined>Download CV</v-btn>
                    </v-card-text>
                    <v-card-title>
                        Skills
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <skill-bar
                                v-for="(skill, i) in skills"
                                :color="skill.color"
                                :icon="skill.icon"
                                :percentage="skill.percentage"
                                :key="i"
                            />
                        </v-container>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SkillBar from '@/components/SkillBar.vue';
import { ISkill } from '@/interfaces/ProjectCard';

@Component({
    components: {
        SkillBar,
    },

    metaInfo() {
        return {
            title: 'About',
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
export default class ProjectCard extends Vue {
    skills: ISkill[] = [
        { icon: 'mdi-vuejs', color: 'light-green', percentage: 80 },
        { icon: 'mdi-react', color: 'light-blue', percentage: 40 },
        { icon: 'mdi-nodejs', color: 'light-green darken-4', percentage: 80 },
        { icon: 'mdi-language-c', color: 'light-blue darken-4', percentage: 50 },
        { icon: 'mdi-language-python', color: 'primary', percentage: 30 },
        { icon: 'mdi-language-javascript', color: 'yellow darken-2', percentage: 85 },
        { icon: 'mdi-language-css3', color: 'blue', percentage: 40 },
    ];
}
</script>

<style lang="scss" scoped>
.action {
    height: calc(100vh - 150px);
    width: 100%;
}
.frame {
    border-radius: 10px;
    box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.2) !important;
    border: none !important;
}

.link {
    text-decoration: underline;
}
</style>
