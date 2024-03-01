<script lang="ts" setup>
import { inject } from 'vue';
// @ts-ignore
const { global: { t } } = inject('i18n')
import type { TagType } from '@/types';

const props = defineProps<{
    tags: TagType
}>()
const { deployed, current, frontend, backend } = props.tags
</script>

<template>
    <section class="tag-list">
        <div v-if="current" class="tag">
            <p>{{ t('current') }}</p>
        </div>
        <div v-if="deployed" class="tag">
            <p>{{ t('deployed') }}</p>
        </div>
        <div v-if="frontend" class="tag">
            <p>front-end</p>
        </div>
        <div v-if="backend" class="tag">
            <p>back-end</p>
        </div>
    </section>
</template>

<style scoped>
.tag-list {
    display: grid;
    grid-template-columns: repeat(4, 70px);
    gap: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.267);
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