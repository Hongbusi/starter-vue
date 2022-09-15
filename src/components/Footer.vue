<script setup lang="ts">
import { Github, Moon, Sunny } from '@hongbusi/icons-vue'
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav class="text-xl mt-6">
    <button class="mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
      <Icon>
        <Moon v-if="isDark" />
        <Sunny v-else />
      </Icon>
    </button>

    <a class="mx-2" rel="noreferrer" href="https://github.com/Hongbusi/starter-vue" target="_blank" title="GitHub">
      <Icon>
        <Github />
      </Icon>
    </a>
  </nav>
</template>
