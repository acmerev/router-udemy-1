<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>  {{titulo}} </h1>
    <h1 :style="cambiacolor" >
    Este es un contador {{count}}   </h1>
    <button @click= "abonar"> Aumentar </button>
    <btndisminuir/>
    <hr>
    <BotonAccion  :estado="true"/>
    <BotonAccion  :estado="false"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Btndisminuir from '../components/Btndisminuir.vue'
import BotonAccion from '../components/BotonAccion.vue'
import { mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    Btndisminuir,
    BotonAccion
  },
  computed: {
    ...mapState(['titulo','count']),
    cambiacolor(){
      return [this.count > 10 ? 'color: green' : 'color: red']
    }
  },
  methods: {
    ...mapMutations(['increment','decrement']),
    ...mapActions(['abonar','retirar']),
  }
}
</script>
