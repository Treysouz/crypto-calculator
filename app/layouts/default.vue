<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="flex flex-col min-w-80">
    <UHeader :toggle="false">
      <template #left>
        <NuxtLink to="/">
          <h1 class="text-xl sm:text-2xl font-medium">Crypto Calculator</h1>
        </NuxtLink>
      </template>
    </UHeader>
    <UMain>
      <slot />
    </UMain>
    <USeparator />
    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built by Tremayne Souza • © {{ currentYear }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/Treysouz/crypto-calculator"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </div>
</template>
