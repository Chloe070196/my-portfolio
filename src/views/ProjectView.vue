<script setup lang="ts">
import ProjectList from '@/components/ProjectList.vue';
const projects = [{title: "project 1", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ex, neque exercitationem in nobis dolore porro ratione nostrum aliquam at magnam, vitae perspiciatis possimus? Aspernatur eos perspiciatis natus eius cum."}, {title: "project 1", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ex, neque exercitationem in nobis dolore porro ratione nostrum aliquam at magnam, vitae perspiciatis possimus? Aspernatur eos perspiciatis natus eius cum."}, {title: "project 1", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ex, neque exercitationem in nobis dolore porro ratione nostrum aliquam at magnam, vitae perspiciatis possimus? Aspernatur eos perspiciatis natus eius cum."}, {title: "project 1", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ex, neque exercitationem in nobis dolore porro ratione nostrum aliquam at magnam, vitae perspiciatis possimus? Aspernatur eos perspiciatis natus eius cum."}]
</script>

<template>
    <h1>projects</h1>
    <ProjectList :projects="projects"></ProjectList>
</template>