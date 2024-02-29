<script lang="ts" setup>
import TimeLineYear from './TimeLineYear.vue';
import type { PeriodType } from '@/types';
const props = defineProps<{
    timeLine: PeriodType[]
}>()
const { timeLine }= props
</script>

<template>
    <section class="scrollable-wrapper">
        <div class="scrollable">
            <TimeLineYear v-for="period in timeLine" v-bind:key="period.years" :period="period"/>
        </div>
    </section>
</template>
