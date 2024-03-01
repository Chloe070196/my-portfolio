<script setup lang="ts">
import ProjectList from '@/components/ProjectList.vue';
import projects from './contents';
</script>

<template>
    <div class="dark-shadow-top"></div>
    <div class="shadow-top"></div>
    <ProjectList :projects="projects"></ProjectList>
</template>