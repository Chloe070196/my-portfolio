
<script lang="ts" setup>
import TimeLineEvent from './TimeLineEvent.vue';
import type { PeriodType } from '@/types';
const props = defineProps<{
    period: PeriodType
}>()
const { period } = props
</script>

<template>
    <article>
        <h2>{{ period.years }}</h2>
        <section>
            <TimeLineEvent v-for="occupation in period.occupationList" v-bind:key="occupation.title" :occupation="occupation" />
        </section>
    </article>
</template>

<style scoped>
article {
    display: grid;
    grid-template-columns: 80px 1fr;
    padding: 10px 20px;
}
</style>