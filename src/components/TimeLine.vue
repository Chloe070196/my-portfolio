<script lang="ts" setup>
import TimeLineYear from './TimeLineYear.vue';
import { timeLine }from '../views/about/contents'
</script>

<template>
    <section class="scrollable-wrapper">
        <div class="scrollable">
            <TimeLineYear v-for="period in timeLine" v-bind:key="period.years" :period="period"/>
        </div>
    </section>
</template>


