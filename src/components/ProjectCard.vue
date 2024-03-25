<script lang="ts" setup>
import type { ProjectCardType } from "../types/index"
import TagList from "./TagList.vue";
const props = defineProps<{
    projectCard: ProjectCardType,
}>()
const { title, stack, description, gitHubUrl, imgName, imageDescription, projectPath, tags } = props.projectCard
</script>
<template>
    <section>
        <div class="proj-info-wrapper">
            <div class="proj-descr-wrapper">
                <div>
                    <RouterLink :to="projectPath">
                        <h3>{{ title }}</h3>
                    </RouterLink>
                    <h4>STACK</h4>
                    <ul class="inline-list">
                        <li v-for="item in stack" v-bind:key="item">
                            <strong>{{ item }}</strong>
                        </li>
                    </ul>
                </div>
                <p>{{ description }}</p>
            </div>
            <TagList :tags="tags" />
            <a v-if="gitHubUrl.length" className="gitHubLink" :href="gitHubUrl" target="blank">GitHub Repository</a>
        </div>
        <RouterLink :to="projectPath">
            <div class="proj-img-wrapper">
                <img class="proj-img" :src="getImgUrl(imgName)" :alt="imageDescription" />
            </div>
            <div class="blur-img"><strong>View</strong></div>
        </RouterLink>
    </section>
</template>
<script lang="ts">
    function getImgUrl(imgName: string) {
        return `/png/${imgName}`
    }
</script>
<style scoped>

a {
    position: relative;
    width: 460px;
}
section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 12px;
}

.proj-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

.proj-img-wrapper {
    height: 280px;
    width: 460px;
    background-color: rgba(255, 255, 255, 0.411);
}

.blur-img {
    position: absolute;
    padding: 10px;
    height: 260px;
    width: 439px;
    top: 6px;
    left: 6px;
    background: linear-gradient(0.11turn, rgb(0, 0, 0, 0),rgba(0, 0, 0, 0, 0));
}

.blur-img > strong{
    position: absolute;
    visibility: hidden;
    top: 124px;
    left: 178px;
    font-size: 32px;
    color: rgba(255, 255, 255, 0.897);
}

.blur-img:hover {
    background: linear-gradient(0.11turn, rgb(0, 0, 0),rgba(0, 0, 0, 0.486));
    backdrop-filter: blur(1px);
    border: 1px solid white;
}

.blur-img:hover > strong {
    visibility: unset;
    transition:5s;
}

.proj-info-wrapper {
    position: relative;
    display: grid;
    grid-template-rows: 180px minmax(32px, 64px) 32px;
    padding-top: 12px;
    gap: 4px;
}

.proj-descr-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.proj-descr-wrapper a {
    display: grid;
    width: 280px;
    padding: 0;
}

.gitHubLink {
    position: absolute;
    bottom: 2px;
    left: 2px;
    font-weight: bold;
    font-size: 12px;
    color: rgb(53, 24, 87);
    background-color: rgb(255, 255, 205);
    padding: 2px;
    width: 110px;
}

li {
    list-style-type: none;
    line-height: 14px;
}

h4 {
    padding: 8px 0;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.671);
}

@media screen and (max-device-width : 720px) {
    section {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .proj-img-wrapper {
        height: 280px;
        width: 400px;
        background-color: rgba(255, 255, 255, 0.411);
    }

    .proj-info-wrapper {
        position: relative;
        display: grid;
        grid-template-rows: 160px minmax(32px, 64px) 32px;
        gap: 4px;
        width: 90vw;
    }

    .proj-descr-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    a {
        position: absolute;
        bottom: 2px;
        left: 2px;
        font-weight: bold;
        font-size: 12px;
        color: rgb(53, 24, 87);
        background-color: rgb(255, 255, 205);
        padding: 2px;
        width: 110px;
    }

    h4 {
        padding: 8px 0;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.671);
    }
}
</style>