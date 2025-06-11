<template>
  <div class="container">
    <h1>Добро пожаловать в Laravel + Vue!</h1>
    <p>Текущий IP: {{ currentIp }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIp: window.location.hostname
    }
  },
  mounted() {
    console.log('Приложение Vue запущено!');
  }
}
</script>
