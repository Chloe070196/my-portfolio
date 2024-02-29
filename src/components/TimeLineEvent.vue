<script lang="ts" setup>
import type { OccupationType } from '@/types';
import TimeLineSkill from './TimeLineSkill.vue';
const props = defineProps<{
    occupation: OccupationType
}>()
const { title, location, organisation, qualification, description, skills } = props.occupation
</script>

<template>
    <section>
        <div>
            <h4>{{ organisation }}</h4>
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <p>{{ qualification }}</p>
            <p>{{ location }}</p>
        </div>
        <ul>
            <p>Skills</p>
            <li>
                <TimeLineSkill v-for="skill in skills" v-bind:key="skill.name" :skill="skill" />
            </li>
        </ul>
    </section>
</template>

<style scoped>
section {
    display: grid;
    grid-template-columns: 3fr 5fr;
    padding: 10px 20px;
}
</style>