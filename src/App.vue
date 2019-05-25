<template>
  <div id="app">
    <div class="dark-theme-button text-right">
      <button class="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 outline-none rounded">
        Toggle Dark Theme
      </button>
    </div>
    
    <header class="text-center">
      <h1 class="text-center">Sammy's Portfolio</h1>
      <h2 class="text-center">Hello :) My name is Sammy Abukmeil, I'm a fullstack web developer.</h2>
    </header>

    <div class="intro shadow-xl p-10">
      <h3>A little about me</h3>

      <div class="intro-text flex">
        <img class="h-56 w-56 rounded-full" alt="Picture of Sammy" src="./assets/sammy.png">
        <div class="intro-text px-10">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </p>
        </div>
      </div>
    </div>

    <div class="skill-section intro shadow-xl p-10">
      <h3>My Skills</h3>

      <div class="skill-row flex">

        <Skill title="HTML"
                info="I started learning HTML..."/>

        <Skill title="CSS" 
              info="I started learning CSS..."
              v-bind:tools="['Sass']" />

      </div>

      <div class="skill-row flex">

        <Skill title="JavaScript" 
              info="I started learning JavaScript..."
              v-bind:tools="['Vue JS', 'jQuery']" />

        <Skill title="PHP" 
              info="I started learning PHP..."
              v-bind:tools="['Laravel', 'WordPress']" />

      </div>

      <div class="skill-row flex">
        <Skill title="Server Side" 
              info="I started learning Server Side..."
              v-bind:tools="['AWS', 'Docker', 'Digital Ocean']" />
      </div>
    </div>

  </div>
</template>

<script>
import Skill from './components/Skill.vue'

export default {
  name: 'app',
  components: {
    Skill
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 10px 30px; 
}

.dark-theme-button button {
  padding: 20px 10px;
}

.text-underline {
  text-decoration: underline;
}

</style>
