<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'App',
  // Aqui declaramos como nos vamos a mover, hacemos una funcion que al pulsar el boton nos mueva entre paginas
  setup() {
    const router = useRouter()
    const goToHome = () => {
      router.push('/Home')
    }
    return {
      goToHome,
    }
  },
  // methods: {
  //   goToLogin(){
  //   },
  // },
})
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
