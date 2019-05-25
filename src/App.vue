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
      <div class="skill">
        <h4 class="text-underline">HTML</h4>
        <p>I started learning HTML...</p>
      </div>

      <div class="skill">
        <h4 class="text-underline">CSS</h4>
        <p>I started learning CSS...</p>
        <div class="tools">
          <h5>Tools:</h5>
          <p>Sass</p>
        </div>
      </div>
    </div>

    <div class="skill-row">
      <div class="skill">
        <h4 class="text-underline">JavaScript</h4>
        <p>I started learning JavaScript...</p>
        <div class="tools">
          <h5>Libraries:</h5>
          <p>Vue JS</p>
          <p>jQuery</p>
        </div>
      </div>

      <div class="skill">
        <h4 class="text-underline">PHP</h4>
        <p>I started learning PHP...</p>
        <div class="tools">
          <h5>Frameworks:</h5>
          <p>Laravel</p>
          <p>WordPress</p>
        </div>
      </div>
    </div>

    <div class="skill-row">
      <div class="skill">
        <h4 class="text-underline">Server Side</h4>
        <p>I started learning JavaScript...</p>
        <div class="tools">
          <h5>Frameworks:</h5>
          <p>Laravel</p>
          <p>WordPress</p>
        </div>
      </div>
    </div>

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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

.skill {
  flex-basis: 50%;
  max-width: 50%;
  border: 1px solid black;
  padding: 0 20px;
  margin: 10px 10px;
}

/*
  Utility Classes
*/

.text-center {
  text-align: center;
}

.text-underline {
  text-decoration: underline;
}

</style>
