<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { inject } from 'vue'
// @ts-ignore
const { global: { t } } = inject('i18n')
</script>

<template>
    <section id="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">{{ t('about') }}</RouterLink>
        <RouterLink to="/projects">{{ t('projects') }}</RouterLink>
    </section>
</template>

<style scope>
#navbar {
    padding: 12px 0 0 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 120px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.541);

}
a {
    color: rgb(255, 255, 205);
    border: 2px solid  rgba(53, 24, 87, 0);
    font-size: 22px;
    line-height: 26px;
    font-weight: bold;
    padding: 6px 12px 6px 6px;
    text-decoration: none;
    place-self: center;
    width: 100px;
}
#navbar a:hover {
    border: 2px solid rgba(255, 251, 198, 0.795);
    background-color: rgba(255, 251, 198, 0.048);
    box-shadow: inset 0 0 2px 2px rgba(255, 255, 255, 0.219);
}
#navbar a:focus {
    background-color: rgba(255, 251, 198, 0.795);
    color: rgb(53, 24, 87);
    transition-duration: 0.8s;
}
</style>
