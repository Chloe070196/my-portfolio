<script lang="ts" setup>
import type { ProjectCardType } from "../types/index.ts"
import TagList from "./TagList.vue";
const props = defineProps<{
    projectCard: ProjectCardType
}>()
const { title, stack, description, gitHubUrl, imageUrl, imageDescription, tags } = props.projectCard
</script>

<template>
    <section>
        <div class="proj-info-wrapper">
            <div class="proj-descr-wrapper">
                <div>
                    <h3>{{ title }}</h3>
                    <h4>STACK</h4>
                    <ul class="inline-list">
                        <li v-for="item in stack" v-bind:key="item">
                            <strong>{{ item }}</strong>
                        </li>
                    </ul>
                </div>
                <p>{{ description }}</p>
            </div>
            <TagList :tags="tags"/>
            <a :href="gitHubUrl">GitHub Repository</a>
        </div>
        <div class="proj-img-wrapper">
            <img class="proj-img" :src="imageUrl" :alt=" imageDescription"/>
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
    .proj-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
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
    h4 {
        padding: 8px 0;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.671);
    }

    @media screen and (max-device-width : 720px) {
    section {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: 1fr;
        gap: 12px;
    }
    .proj-img-wrapper {
        height: 280px;
        width: 400px;
        background-color: rgba(255, 255, 255, 0.411);
    }
    .proj-info-wrapper {
        position: relative;
        display: grid;
        grid-template-rows: 160px minmax(32px, 64px) 32px;
        gap: 4px;
        width: 90vw;
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
    h4 {
        padding: 8px 0;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.671);
    }
    }
</style>