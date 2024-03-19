<script lang="ts" setup>
import { inject } from 'vue';
// @ts-ignore
const { global: { t } } = inject('i18n')
</script>
<template>
    <h2>{{ t('stack') }}</h2>
    <section>
        <div class="six-rows">
            <h5>Languages</h5>
            <h5>Front-end</h5>
            <h5>Back-end</h5>
            <h5>Documentation</h5>
            <h5>IDE / tools</h5>
            <h5>Standards</h5>
        </div>
        <div class="six-rows">
            <div>
                <img src="..\assets\svg\js-official-svgrepo-com.svg" />
                <img src="..\assets\svg\typescript-officiaL-svgrepo-com.svg" />
            </div>
            <div>
                <img src="..\assets\svg\html-svgrepo-com.svg" title="html" alt="html-logo" />
                <img src="..\assets\svg\css-svgrepo-com.svg" title="css" alt="css-logo" />
                <img src="..\assets\svg\reactjs-svgrepo-com.svg" title="reactjs" alt="reactjs-logo" />
                <img src="..\assets\svg\vue-svgrepo-com.svg" title="vue" alt="vue-logo" />
            </div>
            <div>
                <img src="..\assets\svg\sql-svgrepo-com.svg" title="sql" alt="sql-logo" />
                <img src="..\assets\svg\pgsql-svgrepo-com.svg" title="pgsql" alt="pgsql-logo" />
                <img src="..\assets\svg\light-prisma-svgrepo-com.svg" title="prisma" alt="prisma-logo" />
                <img src="..\assets\svg\nestjs-svgrepo-com.svg" title="nestjs" alt="nestjs-logo" />
                <img src="..\assets\svg\expressjs-icon.svg" title="expressjs" alt="expressjs-logo" />
            </div>
            <div>
                <img src="..\assets\svg\swagger-svgrepo-com.svg" title="swagger" alt="swagger-logo" />
                <img src="..\assets\svg\markdown-svgrepo-com.svg" title="markdown" alt="markdown-logo" />
            </div>
            <div>
                <img src="..\assets\svg\vscode2-svgrepo-com.svg" title="vscode" alt="vscode-logo" />
                <img src="..\assets\svg\git-svgrepo-com.svg" title="git" alt="git-logo" />
                <img src="..\assets\svg\github-142-svgrepo-com.svg" title="github" alt="github-logo" />
                <img src="..\assets\svg\node-svgrepo-com.svg" title="node" alt="node-logo" />
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

.six-rows {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
}

p {
    padding-left: 32px;
    margin: 0;
}

img {
    height: 26px;
    width: 26px;
    margin: 4px;
}
</style>