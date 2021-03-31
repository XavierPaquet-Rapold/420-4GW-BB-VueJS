<template>
<ChangeTask :tasks="tasks"/>
</template>

<script>
import ChangeTask from '../components/ChangeTask'
export default {
  name: 'Home',
  components: {
    ChangeTask,
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    async fetchTasks() {
      const res = await fetch('api/tasks')
      const data = await res.json()
      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)
      const data = await res.json()
      return data
    },
  },
  async created() {
    this.tasks = await this.fetchTasks()
  },
}
</script>