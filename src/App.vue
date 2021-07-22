<template>
  <div id="app">
    <leftRight class="left"
    />
  </div>
</template>

<script>
import leftRight from './components/leftRight'

export default {
  name: 'App',
  components: {
    leftRight,
  },
  mounted() {
    // console.log('-----------store', this.$store)
    // console.log('-----------store-state', this.$store.state)
  },
  methods: {}
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  width: 100%;
  height: 1000px;
  display: flex;
  border: 1px red solid;
}

.left {
  border: 1px solid green;
  height: 100%;
}

.right {
  border: 1px solid green;
  height: 100%;

}
</style>
