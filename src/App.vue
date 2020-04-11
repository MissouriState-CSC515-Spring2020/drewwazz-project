<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'YoutubePage'}">Youtube Search</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'about', params: {id: 2}}">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'contact'}">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  background-image: url('./components/images/background3.jpg');
  background-size: cover;
  text-align: center;
}

</style>