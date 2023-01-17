<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/new-project">Add a New Project</router-link>
  </nav>

  <div class="home">
    <nav>
      <router-link to="/projects">View All</router-link>
      <router-link to="/completed">Completed</router-link>
      <router-link to="/ongoing">Ongoing</router-link>
    </nav>
</div>
  <router-view/>
</template>

<style>
:root {
  --blue-color: #33cccc;
  --red-color: #ff4646;
  --green-color: #9ec378;
  --black-color: #333;
  --white-color: #fff;
  --grey-color: #e5e8ec;
}

#app {
   font-family: 'Poppins', sans-serif;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

nav {
  margin-top: 3rem;
}

nav a {
  text-decoration: none;
  font-size: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  color: var(--black-color);
}

nav a.router-link-exact-active {
  color: var(--blue-color);
}

.home nav a {
  font-size: 1.2rem;
}
</style>
