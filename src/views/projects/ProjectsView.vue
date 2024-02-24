<script setup lang="ts">
import ProjectList from '@/components/ProjectList.vue';
import projects from './contents';
</script>

<template>
    <h1>projects</h1>
    <ProjectList :projects="projects"></ProjectList>
</template>