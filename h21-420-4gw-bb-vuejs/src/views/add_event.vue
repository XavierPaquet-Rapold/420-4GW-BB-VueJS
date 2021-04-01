<template>
  <AddTask @add-task="addTask" />
</template>

<script>
import AddTask from '../components/AddTask'
export default {
  name: 'Add-event',
  components: {
    AddTask,
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })
      const data = await res.json()
      this.tasks = [...this.tasks, data]
        alert('Bravo la tache a été ajouter avec succès')
    }
    
}
}
</script>