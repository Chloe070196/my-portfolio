<script setup lang="ts">
import type { ProjectCardType } from '@/types';
import ProjectCard from './ProjectCard.vue';

const props = defineProps<{
    projects: ProjectCardType[]
    }>()

const { projects } = props
</script>

<template>
    <section>
        <ul>
            <ProjectCard v-for="project in projects" v-bind:key="project.title" :project-card="project"></ProjectCard>
        </ul>
    </section>
</template>
