<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
   <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import AddTask from '../components/AddTask'
export default {
  name: 'AddTask',
  props: {
    showAddTask: Boolean,
  },
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
    }
    
}
}
</script>