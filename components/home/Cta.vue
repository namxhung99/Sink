<script setup>
// Define i18n to fix linter errors
useI18n();
</script>

<template>
  <div
    class="flex flex-col items-center max-w-4xl p-8 mx-auto my-12 text-center bg-black rounded-lg md:px-20 md:py-20"
  >
    <h2 class="text-4xl tracking-tight text-white md:text-6xl">
      {{ $t('home.cta.title') }}
    </h2>
    <p class="mt-4 text-lg text-slate-400 md:text-xl">
      {{ $t('home.cta.description') }}
    </p>
    <div class="flex mt-5">
      <HomeLink
        href="/dashboard"
        type="inverted"
        :title="$t('dashboard.title')"
      >
        {{ $t('dashboard.title') }}
      </HomeLink>
    </div>
  </div>
</template>
