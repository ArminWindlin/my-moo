<template>
  <div class="hello">
    <!-- HEADER -->
    <div class="header">
      <router-link :to="{name:'analyticsTest'}">
        <div>Analytics Test</div>
      </router-link>
    </div>

    <img alt="Vue logo" src="../assets/logo.png">

    <h3>My Amazing Cows</h3>
    <div v-for="cow in cows"
         :key="cow.dateOfBirth"
         class="cow">
      {{ cow.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      cows: [],
    };
  },
  created() {
    console.log(this.$myGlobalVariable);
    fetch(this.$api + 'cow').then(response => response.json()).then(data => this.cows = data);
  },
};
</script>

<style scoped lang="scss">
.cow {
  margin: 5px 0;
}

.header {
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px;
}
</style>
