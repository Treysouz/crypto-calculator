<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Crypto Calculator'
const description
  = 'A web app that takes in a USD amount as holdings and calculates the 70/30 split for BTC and ETH crypto currencies.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UApp>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
