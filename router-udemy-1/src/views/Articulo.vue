<template>
  <Titulo text = "Ruta con Parametros"/>
  <h2>
    parametro : {{$route.params.id}}
  </h2>
  <h3> {{articulo.title}} </h3>
  <p> {{articulo.id}} -- {{articulo.body}} </p>

</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
    components: {
        Titulo,
    },
    data() {
        return {
            articulo: {}
        }
    },
    methods: {
        async obtenerArticulo() {
              try {
                    const obj = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                    const articulo = await obj.json()
                    this.articulo = articulo

              } catch (error) {
                console.log(error)
              }
        }
    },
    created() {
        this.obtenerArticulo()
    }
}
</script>

<style>

</style>