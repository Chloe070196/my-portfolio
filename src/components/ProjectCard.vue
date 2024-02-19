<script lang="ts" setup>
import type { ProjectCardType } from "../types/index.ts"
const props = defineProps<{
    projectCard: ProjectCardType
}>()
const { title, description } = props.projectCard
</script>

<template>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
</template>
