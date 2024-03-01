<script lang="ts" setup>
import { inject } from 'vue';
const { global: { t } } = inject('i18n')
</script>
<template>
    <h2>{{ t('stack') }}</h2>
    <section>
        <div class="five-rows">
            <h5>Front-end</h5>
            <h5>Back-end</h5>
            <h5>Documentation</h5>
            <h5>IDE / tools</h5>
            <h5>Standards</h5>
        </div>
        <div class="five-rows">
            <div>
                <p>HTML, CSS, JS, TS</p>
                <p>React, Vue.js</p>
                <p>Tailwind, i18n</p>
            </div>
            <div>
                <p>JS, TS, SQL</p>
                <p>Express.js, Prisma</p>
                <p>PostgreSQL</p>

            </div>
            <div>
                <p>MD, YML</p>
                <p>mermaid</p>
            </div>
            <div>
                <p>VS Code, Git/ Git bash, Node.js</p>
                <p>Github</p>
            </div>
            <div>
                <p>conventional commits, DRY, SOLID, KISS </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
h2 {
    padding-left: 20px;
}
section {
    display: grid;
    grid-template-columns: 3fr 5fr;
    padding: 6px 20px;
}
.five-rows {
    display: grid;
    grid-template-rows: repeat(5, 70px);
}
p {
    padding-left: 32px;
    margin: 0;
}
</style>