<script lang="ts" setup>
</script>
<template>
    <section>
        <h1>Chloé Zermatten</h1>
        <h2>{{ this.$t('softDev') }}</h2>
        <p>{{ this.$t('shortAbout') }}</p>
        <p>{{ this.$t('based') }}</p>
        <p>{{ this.$t('proficiency') }}</p>
    </section>
</template>

<style scoped>
h1 {
    font-size: 32px;
    line-height: 34px;
    padding: 0 0 20px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.541);
    margin-bottom: 5px;
}
</style>
