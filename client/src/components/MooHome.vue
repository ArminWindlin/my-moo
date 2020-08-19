<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>My Cows</h3>
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
    props: {
        msg: String
    },
    created() {
        fetch('http://localhost:3000/cow').then(response => response.json()).then(data => this.cows = data);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cow {
    margin: 5px 0;
  }
</style>
