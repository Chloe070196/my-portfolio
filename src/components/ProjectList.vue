<script setup lang="ts">
import type { ProjectCardType } from '@/types';
import ProjectCard from './ProjectCard.vue';

const props = defineProps<{
    projects: ProjectCardType[]
}>()

const { projects } = props
</script>

<template>
    <section class="scrollable-wrapper">
        <ul class="scrollable">
            <ProjectCard v-for="project in projects" v-bind:key="project.title" :project-card="project"></ProjectCard>
        </ul>
    </section>
</template>
