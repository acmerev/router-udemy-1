<template>
  <button> {{textBoton}}</button>
</template>

<script>
export default {
 props: {
     estado: Boolean,
 },
 computed: {
     textBoton() {
         return this.estado ? 'Aumentar' : 'Disminuir';
     }
 }
}
</script>
