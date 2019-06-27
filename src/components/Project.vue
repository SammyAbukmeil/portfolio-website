<template>
  <div class="skill w-full rounded shadow-xl m-2">
    <div class="p-5">
      <h4 v-bind:class="{ 'light-title': !lightTheme }" class="underline dark-title">{{ title }}</h4>
      <a target="_blank" :href="url">{{ url }}</a>
      <div v-if="tools" class="tools">
        <h5 v-bind:class="{ 'dark-title': !lightTheme }" class="mb-2 font-medium">What I worked on...</h5>
        <div class="my-10" v-for="(tool, index) in tools" :key="index">
          <p class="m-0 text-lg font-bold">{{ tool }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    title: String,
    url: String,
    tools: Array,
    lightTheme: ['lightTheme']
  }
}
</script>

<style scoped>
.light-title {
  color: #edf2f7;
}
.dark-title {
  color: #1f2b37;
}
</style>
