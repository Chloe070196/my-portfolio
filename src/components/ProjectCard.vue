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
        <div class="proj-info-wrapper">
            <div class="proj-descr-wrapper">
                <div>
                    <h3>{{ title }}</h3>
                    <ul class="inline-list">
                        <li v-for="item in stack" v-bind:key="item">
                            <h6>{{ item }}</h6>
                        </li>
                    </ul>
                </div>
                <p>{{ description }}</p>
            </div>
            <TagList :tags="tags"/>
            <a :href="gitHubLink">GitHub Repository</a>
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
    .proj-info-wrapper {
        position: relative;
        display: grid;
        grid-template-rows: 160px minmax(32px, 64px) 32px;
        gap: 4px;
    } 
    .proj-descr-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    a {
        position: absolute;
        bottom: 2px;
        left: 2px;
        font-weight: bold;
        font-size: 12px;
        color: rgb(53, 24, 87);
        background-color: rgb(255, 255, 205);
        padding: 2px;
        width: 110px;
    }
</style>