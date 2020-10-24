<template>
    <v-card-title class="justify-center heading">
        {{ left }}<span class="subheading ml-2">{{ right }}</span>
    </v-card-title>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Heading extends Vue {
    @Prop({ required: true, type: String })
    public readonly left!: string;

    @Prop({ required: true, type: String })
    public readonly right!: string;
}
</script>

<style scoped>
.heading {
    font-family: 'Archivo Black', sans-serif;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    color: #c5c6c7;
}

.subheading {
    color: #1f2833;
}
</style>
