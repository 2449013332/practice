<template>
  <div>{{ padZero(minutes) }}:{{ padZero(seconds) }}</div>
</template>

<script>
export default {
  data() {
    return {
      minutes: 0,
      seconds: 0,
    };
  },
  methods: {
    padZero(num) {
      return num.toString().padStart(2, "0");
    },
    getTime() {
      setInterval(() => {
        if (this.seconds == 59) {
          this.minutes++;
          this.seconds = -1;
          this.seconds++;
        } else {
          this.seconds++;
        }
      }, 300);
    },
  },
  created() {
    this.getTime();
  },
};
</script>

<style>
</style>