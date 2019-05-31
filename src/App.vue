<template>
  <div id="app" class="animated fadeIn delay-0.5s">

    <link v-if="this.lightTheme" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css">
    <link v-else rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css">

    <div class="dark-theme-button text-right">
      <button @click="switchTheme" v-bind:class="{ 'bg-gray-200': lightTheme, 'border-white border-solid': !lightTheme }" class="font-semibold p-2 py-3 border outline-none focus:outline-none rounded text-white border-black">
        <span class="dark-title" v-if="this.lightTheme">Switch to Dark Theme</span>
        <span class="light-title" v-else>Switch to Light Theme</span>
      </button>
    </div>
    <header class="text-center mb-10">
      <h1 v-bind:class="{ 'dark-title': lightTheme }" class="text-center">Sammy's Portfolio</h1>
      <h2 v-bind:class="{ 'dark-title': lightTheme }" class="text-center">Hello :) My name is Sammy Abukmeil, I'm a fullstack web developer.</h2>
    </header>
    <div class="intro shadow-xl p-5 pt-1 rounded bg-gray-200">
      <div class="pt-8 sm:flex">
        <div class="image-container text-center content-center">
          <img class="rounded-full main-image pb-2 w-full max-w-xs" 
                        alt="Picture of Sammy" 
                        src="./assets/sammy.png">
        </div>
        <div class="text-lg 2 sm:pl-10">
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
    <div class="skill-section intro shadow-xl p-5 rounded-lg bg-gray-200 mt-10">
      <h3 class="dark-title">My Skills</h3>
      <div class="skill-row flex flex-wrap">
        <Skill title="HTML"
                info="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut 
                turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere 
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor 
                mauris sit amet orci. Aenean dignissim pellentesque felis."/>
        <Skill title="CSS" 
              info="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut 
                turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere 
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor 
                mauris sit amet orci. Aenean dignissim pellentesque felis."
              v-bind:tools="['Sass']" />
      </div>
      <div class="skill-row flex flex-wrap">
        <Skill title="JavaScript" 
              info="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut 
                turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere 
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor 
                mauris sit amet orci. Aenean dignissim pellentesque felis."
              v-bind:tools="['Vue JS', 'jQuery']" />
        <Skill title="PHP" 
              info="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut 
                turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere 
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor 
                mauris sit amet orci. Aenean dignissim pellentesque felis."
              v-bind:tools="['Laravel', 'WordPress']" />
      </div>
      <div class="skill-row flex flex-wrap">
        <Skill title="Server Side" 
              info="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut 
                turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere 
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor 
                mauris sit amet orci. Aenean dignissim pellentesque felis."
              v-bind:tools="['AWS', 'Docker', 'Digital Ocean']" />
      </div>
    </div>

    <div class="shadow-xl p-5 rounded-lg bg-gray-200 mt-10">
      <h3 v-bind:class="{ 'dark-title': !lightTheme }">Projects I've worked on</h3>
      <div class="skill-row flex flex-wrap  ">
        <Skill title="Matilda"
                info="Donec nec justo eget felis facilisis fermentum. 
                      Aliquam porttitor mauris sit amet orci. Aenean 
                      dignissim pellentesque felis."/>
        <Skill title="School of Rock" 
              info="Donec nec justo eget felis facilisis fermentum. 
              Aliquam porttitor mauris sit amet orci. Aenean dignissim 
              pellentesque felis." />
      </div>
      <div class="skill-row flex flex-wrap  ">
        <Skill title="Harry Potter" 
              info="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis." />
        <Skill title="Lol" 
              info="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis." />
      </div>
      <div class="skill-row flex flex-wrap  ">
        <Skill title="Nice.." 
              info="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis." />
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
  },
  data () {
    return {
      lightTheme: true
    }
  },
  methods: {
    switchTheme: function() {
      if (this.lightTheme) {
        this.lightTheme = false;
      } else {
        this.lightTheme = true;
      }
    }
  }
}
</script>

<style>
body {
  max-width: 900px !important;
  transition: 250ms linear;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 10px 30px; 
  max-width: 900px;
  margin: auto;
}

.dark-title {
  color: #1f2b37;
}

.light-title {
  color: #edf2f7;
}

.dark-bg {
  background: #202b38;
}

@media screen and (min-width: 640px) {
      .main-image {
        min-width: 250px;
        max-width: 300px;
      }
}
</style>
