<template>
   <div class="add-project">
    <div class="modal" ref="modal">
      <div class="modal-header">
        <router-link :to="{name: 'Projects'}">
          <i class="fa-solid fa-xmark" @click="removeModal"></i>
        </router-link>
      </div>
      <div class="modal-body">
        Project is updated!
      </div>
      <div class="modal-footer">
        <router-link :to="{name: 'Projects'}">
          <button @click="removeModal">OK</button>
        </router-link>
      </div>
    </div>
    <form ref="myForm">
      <div class="form-control" ref="titleDiv">
      <label for="">Project Title:</label>
      <input type="text" ref="titleInput" v-model="title">
      </div>
      <div class="form-control">
        <label for="">Project Details:</label>
      <textarea ref="textArea" v-model="details"></textarea>
      </div>
    </form>
    <button ref="updateProjectBtn" class="add-project-btn" @click="updateProject">Update Project</button>
  </div>
</template>

<script>
import Projects from './Projects.vue'
  export default {
    components: { Projects },
    data(){
      return{
        id: this.$route.params.id,
        title: '',
        details: ''
      }
    },

    methods: {
      updateProject(e){
        this.$refs.modal.classList.add('active')

        let title = e.target.previousElementSibling.children[0].children[1].value
        let details = e.target.previousElementSibling.children[1].children[1].value
        
        fetch(`http://localhost:3000/projects/${this.id}`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title: title, details: details})
        })
      },
      removeModal(){
        this.$refs.modal.classList.remove('active')
      }
    },

    mounted(){
      fetch(`http://localhost:3000/projects/${this.id}`)
       .then(res => res.json())
       .then(data => {
        this.title = data.title
        this.details = data.details
       })
       .catch(err => console.log(err))
    }
  }
</script>

<style>

</style>