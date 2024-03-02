<script lang="ts" setup>
import type { SkillType } from '@/types';
const props = defineProps<{
    skill: SkillType
}>()
const { name, descr } = props.skill
</script>

<template>
    <div>
        <strong>{{ name }}</strong>
        <p>{{ descr }}</p>
    </div>
</template>

<style scoped>
 div, h5, p {
    z-index: 0;
    margin: 0;
 }
 div {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 8px;
    padding: 2px;
    margin-bottom: 12px;;
 }
 strong {
    align-self: center;
 }

 p {
    font-size: 12px;
    line-height: 14px;
 }
</style>
