<template>
  <div class="ongoing">
    <div class="all-projects">
      <div class="single-project" v-for="project in projects" :key="project.title">
      <div class="project-title" v-if="!project.completed">
        <h4 class="title">{{project.title}}</h4>
      </div>
      <div class="project-details active" ref="projectDetails" v-if="!project.completed">
         <div class="completed-div"></div>
         <p>{{project.details}}</p>
      </div>
     </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      projects: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err))
  }
}
</script>

<style>

</style>