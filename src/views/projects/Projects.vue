<template>
      <div class="all-projects">
        <div class="modal" ref="modal">
      <div class="modal-header">
        <router-link :to="{name: 'Completed'}">
          <i class="fa-solid fa-xmark" @click="removeModal"></i>
        </router-link>
      </div>
      <div class="modal-body">
        Project status has changed!
      </div>
      <div class="modal-footer">
        <router-link :to="{name: 'Completed'}">
          <button @click="removeModal">OK</button>
        </router-link>
      </div>
    </div>
       <div class="single-project" v-for="project in projectsArr" :key="project.id" :project="project">
       <div class="project-title">
        <div class="arrow-icon"  ref="arrowIcon" @click="toggleDetails">
         <i class="fa-solid fa-chevron-down"></i>
        </div>
        <h4 class="title">{{project.title}}</h4>
        <div class="icons">
         <i class="fa-solid fa-trash-can" @click="deleteProject"></i>
         <router-link :to="{name: 'SingleProject', params: {id: project.id}}" style="color:#fff"><i class="fa-solid fa-pen" @click="editProject"></i></router-link>
         <i class="fa-solid fa-check" @click="toggleCompleted" ref="faCheck" v-if="project.completed" style="color: #9ec378"></i>
         <i class="fa-solid fa-check" @click="toggleCompleted" ref="faCheck" v-if="!project.completed"></i>
        </div>
      </div>
      <div class="project-details" ref="projectDetails">
         <div class="completed-div" ref="completedDiv" v-if="project.completed" style="background-color: #9ec378"></div>
         <div class="completed-div" ref="completedDiv" v-if="!project.completed"></div>
         <p>{{project.details}}</p>
         <p style="display:none">{{project.id}}</p>
         <p style="display:none" class="boolean-text">{{project.completed}}</p>
      </div>
     </div>
  </div>
</template>

<script>

  export default {
    props: ['project'],
    data(){
    return {
      projectsArr: [],
    }
  },

  methods: {
    toggleDetails(e){
      if(e.target.classList.contains('fa-chevron-down')){
        e.target.parentElement.classList.toggle('active')
        e.target.parentElement.parentElement.parentElement.children[1].classList.toggle('active')
      }
    },
    toggleCompleted(e){
      if(e.target.classList.contains('fa-check')){
        e.target.classList.add('completed')
        e.target.parentElement.parentElement.parentElement.children[1].children[0].classList.add('completed')

        this.$refs.modal.classList.add('active')

        let projectId = e.target.parentElement.parentElement.parentElement.children[1].children[2].textContent
        
        let booleanPar = e.target.parentElement.parentElement.parentElement.children[1].children[3].textContent
        
        fetch(`http://localhost:3000/projects/${projectId}`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: (booleanPar === 'false') ? JSON.stringify({completed: true}) : JSON.stringify({completed: false})
        })
      }
    },
    removeModal(){
       this.$refs.modal.classList.remove('active')
    },
    styleCompleted(){
      const booleanText = this.$el.querySelector('.boolean-text')
      console.log(booleanText)
    },
    getProjects(){
      fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => this.projectsArr = data)
      .catch(err => console.log(err.message))
    },
    deleteProject(e){
      let projectId = e.target.parentElement.parentElement.parentElement.children[1].children[2].textContent

      fetch(`http://localhost:3000/projects/${projectId}`, {method: 'DELETE'})

      e.target.parentElement.parentElement.parentElement.remove()
    },
    
  },

  mounted(){
    this.getProjects()
    this.styleCompleted()
  },
  }
</script>

<style>

</style>