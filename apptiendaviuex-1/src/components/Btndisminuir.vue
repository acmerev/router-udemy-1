<template>
  <button @click= "retirar(10)">Disminuir</button>
</template>

<script>

import { mapActions } from 'vuex'
export default {
 methods: {
     ...mapActions(['retirar'])
 }
}
</script>

<style>

</style>