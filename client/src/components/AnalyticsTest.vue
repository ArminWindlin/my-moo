<template>
  <div class="hello">
    <router-link :to="{name:'home'}">
      <div>Back</div>
    </router-link>
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Analytics Test</h3>
    <button @click="triggerEvent">Trigger event</button>
  </div>
</template>

<script>
export default {
  name: 'AnalyticsTest',
  data() {
    return {
      cows: [],
    };
  },
  methods: {
    triggerEvent() {
      console.log('event triggered');
      this.$gtag.event('aaa', {
        'event_category': 'bbb',
        'event_label': 'ccc',
      });
    },
  },
  created() {
    this.$gtag.pageview({
      page_path: '/ana',
    });
    this.$gtag.screenview({
      screen_name: 'ascreen',
    });
    this.$gtag.event('hhhh', {
      'event_category': 'bbb',
      'event_label': 'ccc',
    });
    this.$gtag.event('xxx');
  },
};
</script>

<style scoped lang="scss">
.cow {
  margin: 5px 0;
}
</style>
