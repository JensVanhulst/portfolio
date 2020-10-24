<template>
    <v-row align="center">
        <v-col class="ma-0 pa-0" cols="1">
            <v-icon :color="color">{{ icon }}</v-icon>
        </v-col>
        <v-col class="ma-0 pa-0" cols="10">
            <v-progress-linear color="primary" height="10" rounded :value="value" />
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SkillBar extends Vue {
    @Prop({ required: true, type: String })
    public readonly icon!: string;

    @Prop({ required: true, type: String })
    public readonly color!: string;

    @Prop({ required: true, type: Number })
    public readonly percentage!: number;

    value = 0;

    mounted() {
        setTimeout(() => {
            this.value = this.percentage;
        }, 100);
    }
}
</script>

<style scoped></style>
