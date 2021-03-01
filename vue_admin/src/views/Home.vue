<template>
<div><button @click="chuxian">123</button>{{this.$store.state.user.userName}}</div>
</template>

<script>
// @ is an alias to /src
// import 'normalize.css/normalize.css'
import "@/assets/css/base.css";
export default {
  name: "Home",
  data() {
    return {
      loginconst: {
        username: "",
        password: "",
      },
    };
  },
  components: {},
  methods: {

    chuxian(){
      console.log(this.$store.state.user.userName)
    }
  },
};
</script>
<style  scoped>

</style>
