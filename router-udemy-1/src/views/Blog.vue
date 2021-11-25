<template>
  <Titulo texto="El Blog del Placeholder" />
  <button @click="consumirApi">Consumir Api</button>
  <div v-for="(item) in arrayBlog" :key="item.id" >
    <router-link :to="`/blog/${item.id}`" >
        {{item.title}}
       </router-link>
  </div>
</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
 components: {
   Titulo
 },
 data() {
    return {
      arrayBlog: []
    }
 },
 methods: {
      async consumirApi() {
       try {
         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
         const arr = await response.json()
        this.arrayBlog = arr
       } catch (error) {
         console.log(error)
        }
      },
  },
  created() {
        this.consumirApi()
      },
}
</script>

<style>
</style>