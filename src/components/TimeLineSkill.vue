<script lang="ts" setup>
import type { SkillType } from '@/types';
const props = defineProps<{
    skill: SkillType
}>()
const { name, descr } = props.skill
</script>

<template>
    <div>
        <h5>{{ name }}</h5>
        <p>{{ descr }}</p>
    </div>
</template>