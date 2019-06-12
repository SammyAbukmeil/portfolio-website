<template>
  <div class="skill w-full rounded shadow-xl m-2">
    <div class="p-5">
      <h4 v-bind:class="{ 'light-title': !lightTheme }" class="underline dark-title">{{ title }}</h4>
      <p>{{ info }}</p>
      <div v-if="tools" class="tools">
        <h5 class="mb-2 font-medium">My tools of choice...</h5>
        <div class="my-10" v-for="(tool, index) in tools" :key="index">
          <p class="m-0 text-lg font-bold">{{ tool }}</p>
          <p class="m-0 text-sm">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit 
            amet orci. Aenean dignissim pellentesque felis.
          </p>
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
    info: String,
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
