<template>
  <div class="container">
    <h1>Laravel + Vue на Ubuntu</h1>
    <p>Локальный IP сервера: {{ serverIp }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serverIp: window.location.hostname
    }
  }
}
</script>
