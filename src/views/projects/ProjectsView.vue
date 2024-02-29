<script setup lang="ts">
import ProjectList from '@/components/ProjectList.vue';
import projects from './contents';
</script>

<template>
    <ProjectList :projects="projects"></ProjectList>
</template>