<template>
  <section class="section">
    <div class="container">
      <h1>{{ t.notFound.title }}</h1>
      <p><RouterLink class="link" :to="to('home')">{{ t.notFound.back }} →</RouterLink></p>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../lang.js'

const { t, to } = useLang()
</script>
