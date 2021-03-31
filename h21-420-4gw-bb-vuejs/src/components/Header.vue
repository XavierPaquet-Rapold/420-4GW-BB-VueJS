<template>
  <header>
    <h1>{{ title }}</h1>
    <router-link to="/">
    <Button 
      v-show="addPage"
      :text= 'Ajout'
      :color= 'green'
    />
    </router-link>

    <router-link to="/add-event">
    <Button 
      v-show="homePage"
      :text= 'Ajout'
      :color= 'green'
    />
    </router-link>
  </header>
  
</template>

<script>
import Button from './Button'
export default {
  name: 'Header',
  props: {
    title: String,
  },
  components: {
    Button,
  },
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    },
    addPage() {
      if (this.$route.path === '/add-event') {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
