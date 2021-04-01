<template>
  <form @submit="onSubmit" class="change-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Modifier la tache" />
    </div>
    <div class="form-control">
      <label>Jour & Temps</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder= {{task.day}}
      />
    </div>
    <div class="form-control form-control-check">
      <label>Mettre un rappel</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Sauvegardez la tache" class="btn btn-block" />
  </form>
</template>

<script>
    export default {
    name: 'task',
    props: {
        task: Object,
    },
    }
</script>