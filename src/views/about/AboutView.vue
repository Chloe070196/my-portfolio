<script lang="ts" setup>
import TimeLineVue from '../../components/TimeLine.vue';
import { timeLine } from './contents'
</script>
<template>
  <div class="about">
    <TimeLineVue :timeLine="timeLine"/>
  </div>
</template>