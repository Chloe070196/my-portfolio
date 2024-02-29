<script lang="ts" setup>
import type { ProjectCardType } from "../types/index.ts"
import TagList from "./TagList.vue";
const props = defineProps<{
    projectCard: ProjectCardType
}>()
const { title, stack, description, gitHubLink, imageUrl, imageDescription, tags } = props.projectCard
</script>

<template>
    <section>
        <div class="project-info-wrapper">
            <h3>{{ title }}</h3>
            <ul class="inline-list">
                <li v-for="item in stack" v-bind:key="item">
                    <h4>{{ item }}</h4>
                </li>
            </ul>
            <p>{{ description }}</p>
            <a :href="gitHubLink">GitHub Repository</a>
            <TagList :tags="tags"/>
        </div>
        <div class="proj-img-wrapper">
            <img :href="imageUrl" :alt=" imageDescription"/>
        </div>
    </section>
</template>

<style scoped>
    section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        padding: 12px;
    }
    .proj-img-wrapper {
        height: 280px;
        width: 460px;
        background-color: rgba(255, 255, 255, 0.411);
    }
</style>