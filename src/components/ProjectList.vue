<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import projects from '../views/projects/contents';
</script>

<template>
    <section class="scrollable-wrapper">
        <ul class="scrollable">
            <ProjectCard v-for="project in projects" v-bind:key="project.title" :project-card="project"></ProjectCard>
        </ul>
    </section>
</template>
