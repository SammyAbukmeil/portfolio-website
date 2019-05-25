<template>
  <div id="app">
    <div class="dark-theme-button">
      <button>Toggle Dark Theme</button>
    </div>
    
    <header class="text-center">
      <h1 class="text-center">Sammy's Portfolio</h1>
      <h2 class="text-center">Hello :) My name is Sammy Abukmeil, I'm a fullstack web developer.</h2>
    </header>

    <div class="intro">
      <div class="intro-text">
        <h3>A little about me</h3>
        <p>I started coding...</p>
      </div>

      <img class="headshot" alt="Picture of Sammy" src="./assets/sammy.png">
    </div>

    <h3>My Skills</h3>

    <div class="skill-row">

      <Skill title="HTML"
              info="I started learning HTML..."/>

      <Skill title="CSS" 
            info="I started learning CSS..."
            v-bind:tools="['Sass']" />
    </div>

    <div class="skill-row">
      <Skill title="JavaScript" 
            info="I started learning JavaScript..."
            v-bind:tools="['Vue JS', 'jQuery']" />

      <Skill title="PHP" 
            info="I started learning PHP..."
            v-bind:tools="['Laravel', 'WordPress']" />
    </div>

    <div class="skill-row">

      <Skill title="Server Side" 
            info="I started learning Server Side..."
            v-bind:tools="['AWS', 'Docker', 'Digital Ocean']" />
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

.headshot {
  width: 200px;
}

.dark-theme-button {
  text-align: right;
}

.dark-theme-button button {
  padding: 20px 10px;
}

.skill-row {
  display: flex;
}

/*** Utility Classes ***/

.text-center {
  text-align: center;
}

.text-underline {
  text-decoration: underline;
}

</style>
