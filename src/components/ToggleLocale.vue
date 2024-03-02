<script lang="ts" setup>
import { inject } from 'vue'
import { ref } from 'vue'
const i18n = inject('i18n')
let alternativeLocaleOption = ref("Site en français")
const toggleLocale = () => {
    // @ts-ignore
    if (i18n.global.locale === 'en') {
        // @ts-ignore
        i18n.global.locale = 'fr'
        alternativeLocaleOption.value = 'Switch to english'
        console.log(alternativeLocaleOption)
        return
    }
    // @ts-ignore
    if (i18n.global.locale === 'fr') {
        // @ts-ignore
        i18n.global.locale = 'en'
        alternativeLocaleOption.value = 'Site en français'
        console.log(alternativeLocaleOption)
    }
}
</script>

<template>
    <button @click="toggleLocale">{{ alternativeLocaleOption }}</button>
</template>

<style scoped>
button {
    position: fixed;
    top: 20px;
    left: 20px;
    color: rgb(53, 24, 87);
    width: fit-content;
    height: 26px;
    font-weight: bold;
    background-color: rgb(255, 255, 205);
    border: 0;
    z-index: 10;
}
</style> 