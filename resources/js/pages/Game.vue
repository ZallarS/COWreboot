<template>
    <div class="container-fluid p-0 h-100 d-flex flex-column"> <!-- Добавлены flex-стили -->
        <!-- Верхний блок -->
        <div class="row bg-dark mx-0 g-0 flex-shrink-0"> <!-- flex-shrink-0 чтобы не сжимался -->
            <div class="col-12 p-0">
                <div class="text-end pe-0 pe-sm-3 pe-md-5">
                    <!-- Первая иконка -->
                    <a href="#" class="btn p-0 me-2"> <!-- me-2 для отступа между иконками -->
                        <img src="https://img.icons8.com/?size=100&id=zdIFdFRVDRbV&format=png&color=FFFFFF"
                             class="img-fluid"
                             style="width: 56px; height: 56px;">
                    </a>

                    <!-- Вторая иконка -->
                    <a href="#" class="btn p-0">
                        <img src="https://img.icons8.com/?size=100&id=qIyxkIKTPPRV&format=png&color=FFFFFF"
                             class="img-fluid"
                             style="width: 56px; height: 56px;">
                    </a>
                </div>
            </div>
        </div>

        <!-- Нижние блоки (Canvas + правые блоки) -->
        <div class="row mx-0 g-0 flex-grow-1"> <!-- flex-grow-1 для растягивания -->
            <!-- Основной canvas -->
            <div class="col p-0 position-relative h-100"> <!-- h-100 для заполнения высоты -->
                <GameCanvas class="w-100 h-100" />
            </div>
        </div>
    </div>
</template>

<script>
import GameCanvas from '@/components/GameCanvas.vue'

export default {
    components: {
        GameCanvas
    }
}
</script>

<style>
/* Основные стили для всего приложения */
html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>

