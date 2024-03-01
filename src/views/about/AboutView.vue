<script lang="ts" setup>
import TimeLineVue from '../../components/TimeLine.vue';
import { timeLine } from './contents'
</script>
<template>
  <div class="dark-shadow-top"></div>
  <div class="shadow-top"></div>
  <div class="about">
    <TimeLineVue :timeLine="timeLine" />
  </div>
</template>