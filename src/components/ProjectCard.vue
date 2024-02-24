<script lang="ts" setup>
import type { ProjectCardType } from "../types/index.ts"
const props = defineProps<{
    projectCard: ProjectCardType
}>()
const { title, stack, description, gitHubLink, imageUrl, imageDescription } = props.projectCard
</script>

<template>
    <h3>{{ title }}</h3>
    <ul class="inline-list">
        <li v-for="item in stack" v-bind:key="item">
            <h4>{{ item }}</h4>
        </li>
    </ul>
    <p>{{ description }}</p>
    <img :href="imageUrl" :alt=" imageDescription"/>
    <a :href="gitHubLink">GitHub Repository</a>
</template>
