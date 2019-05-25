<template>
  <div class="skill">
    <h4 class="text-underline">{{ title }}</h4>
    <p>{{ info }}</p>
    <div v-if="tools" class="tools">
      <h5>Tools:</h5>
      <div v-for="(tool, index) in tools" :key="index">
        <p>{{ tool }}</p>
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
    tools: Array
  }
}
</script>

<style scoped>
.skill {
  flex-basis: 50%;
  max-width: 50%;
  border: 1px solid black;
  padding: 0 20px;
  margin: 10px 10px;
}
</style>
