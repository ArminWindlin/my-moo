<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>My amazing Cows</h3>
    <div v-for="cow in cows"
         :key="cow.dateOfBirth"
         class="cow">
      {{cow.name}}
    </div>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            cows: []
        };
    },
    created() {
        console.log(this.$myGlobalVariable);
        fetch('http://localhost:3000/cow').then(response => response.json()).then(data => this.cows = data);
    }
};
</script>

<style scoped lang="scss">
  .cow {
    margin: 5px 0;
  }
</style>
