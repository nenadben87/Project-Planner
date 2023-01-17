<template>
  <div class="add-project">
    <form ref="myForm">
      <div class="form-control" ref="titleDiv">
      <label for="">Project Title:</label>
      <input type="text" ref="titleInput">
      </div>
      <div class="form-control">
        <label for="">Project Details:</label>
      <textarea ref="textArea"></textarea>
      </div>
    </form>
    <button ref="addProjectBtn" class="add-project-btn" @click="addProject">Add Project</button>
  </div>
</template>

<script>
export default {
   data(){
    return {
      completedPr: false,
    }
   },
   
   methods: {
    addProject(){

      if(this.$refs.titleInput.value === '' || this.$refs.textArea.value === ''){
        const message = document.createElement('div')
        message.className = 'message'
        message.textContent = 'Please fill up all fields'
        message.style.backgroundColor = '#ff4646'
        this.$refs.myForm.insertBefore(message,this.$refs.titleDiv)

        setTimeout(() => {message.remove()},3000)
      } else {
        let prTitle = this.$refs.titleInput.value
        let prDetails = this.$refs.textArea.value
      
      let project = {
        title: prTitle,
        details: prDetails,
        completed: false
      }

      fetch('http://localhost:3000/projects',{
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(project)
      })

      this.$refs.titleInput.value = ''
      this.$refs.textArea.value = ''

        const message = document.createElement('div')
        message.className = 'message'
        message.textContent = 'Project is added to the list'
        message.style.backgroundColor = '#9ec378'
        this.$refs.myForm.insertBefore(message,this.$refs.titleDiv)

        setTimeout(() => {message.remove()},3000)
      }
      
        
    }
   },

   mounted(){
    
   }
}
</script>

<style>

</style>