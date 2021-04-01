<template>
  <ChangeTask :task="task"/>
</template>

<script>
import ChangeTask from '../components/ChangeTask'
export default {
  name: 'Modifier évènement',
  components: {
    ChangeTask,
  },
  data() {
    return {
      task: Object,
    }
  },
  methods: {
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)
      const data = await res.json()
      return data
    },
  },
  async created() {
    this.task = await this.fetchTask(this.$route.params.id)
  },
  async changeTask(task) {
      console.log(task)
  }
}
</script>