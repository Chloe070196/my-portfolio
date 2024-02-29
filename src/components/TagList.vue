<script lang="ts" setup>
import type { TagType } from '@/types';

const props = defineProps<{
    tags: TagType
}>()
const { deployed, current, frontEnd, backend } = props.tags
</script>

<template>
    <section>
        <div v-if="current" class="tag">
            <p>current</p>
        </div>
        <div v-if="deployed" class="tag">
            <p>deployed</p>
        </div>
        <div v-if="frontEnd" class="tag">
            <p>front-end</p>
        </div>
        <div v-if="backend" class="tag">
            <p>back-end</p>
        </div>
    </section>
</template>

<style scoped>
section {
    display: grid;
    grid-template-columns: repeat(4, 70px);
    gap: 20px;
    width: fit-content;
}

.tag {
    display: grid;
    width: 70px;
    height: fit-content;
    background-color: rgba(255, 255, 255, 0.082);
    border-radius: 6px;
}
.tag > p {
    place-self: center;
    font-size: 14px;
    padding: 0;
}
</style>