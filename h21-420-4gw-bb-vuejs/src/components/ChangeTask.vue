<template>
  <form class="change-form" name="form">
    <div class="form-control">
      <label>Tâche</label>
      <input 
        type="text" 
        name="text" 
        :value = "task.text" 
      />
    </div>
    <div class="form-control">
      <label>Jour et heure</label>
      <input
        type="text"
        name="day"
        :value= "task.day"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Mettre un rappel</label>
      <input 
        type="checkbox" 
        name="reminder"
      />
    </div>
    <label>Les modifications ne seront pas apportées, puisque nous n'avons pas eu le temps de le faire</label>
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
  export default {
    name: 'ChangeTask',
    props: {
        task: Object,
    },
  }
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>