<template>
    <div class="col-md-10 p-1 rounded position-relative">
        <canvas
            ref="gameCanvas"
            class="w-100 h-100 rounded"
            @wheel.prevent="handleWheelZoom"
        ></canvas>

        <div class="position-absolute top-0 end-0 mt-3 me-3 d-flex gap-2 bg-dark rounded-1 p-1">
            <button
                class="btn btn-dark border border-warning text-warning rounded-1 p-0 zoom-btn"
                @click="zoomIn"
            >+</button>

            <button
                class="btn btn-dark border border-warning text-warning rounded-1 p-0 zoom-btn"
                @click="zoomOut"
            >-</button>

            <button
                class="btn btn-dark border border-warning text-warning rounded-1 p-0 zoom-btn"
                @click="resetZoom"
            >↺</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scale: 1.0,
            minScale: 0.5,
            maxScale: 3.0,
            scaleStep: 0.1,
            ctx: null,
            canvas: null
        }
    },

    mounted() {
        this.canvas = this.$refs.gameCanvas;
        this.ctx = this.canvas.getContext('2d');
        this.initCanvas();
        window.addEventListener('resize', this.handleResize);
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
        initCanvas() {
            this.resizeCanvas();
            this.drawCanvas();
        },

        resizeCanvas() {
            const container = this.canvas.parentElement;
            this.canvas.width = container.clientWidth;
            this.canvas.height = container.clientHeight;
        },

        drawCanvas() {
            // Очищаем canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // Сохраняем текущее состояние
            this.ctx.save();

            // Применяем масштабирование
            this.ctx.scale(this.scale, this.scale);

            // Здесь ваша основная логика отрисовки
            // Например:
            this.ctx.fillStyle = '#3498db';
            this.ctx.fillRect(50, 50, 100, 100);

            // Восстанавливаем состояние
            this.ctx.restore();
        },

        handleResize() {
            this.resizeCanvas();
            this.drawCanvas();
        },

        handleWheelZoom(e) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -this.scaleStep : this.scaleStep;
            this.updateZoom(delta, e.offsetX, e.offsetY);
        },

        zoomIn() {
            this.updateZoom(this.scaleStep);
        },

        zoomOut() {
            this.updateZoom(-this.scaleStep);
        },

        resetZoom() {
            this.scale = 1.0;
            this.drawCanvas();
        },

        updateZoom(delta, mouseX, mouseY) {
            const oldScale = this.scale;
            this.scale = Math.min(Math.max(this.scale + delta, this.minScale), this.maxScale);

            if (mouseX && mouseY) {
                // Корректировка позиции при масштабировании колесом мыши
                const container = this.canvas.parentElement;
                const x = mouseX / container.clientWidth;
                const y = mouseY / container.clientHeight;

                const dx = (x - 0.5) * container.clientWidth * (1/oldScale - 1/this.scale);
                const dy = (y - 0.5) * container.clientHeight * (1/oldScale - 1/this.scale);

                // Здесь должна быть логика смещения содержимого (если нужно)
            }

            this.drawCanvas();
        }
    }
}
</script>

<style scoped>
.zoom-btn {
    width: 36px;
    height: 36px;
    line-height: 36px;
    font-size: 1.2rem;
    transition: all 0.2s;
}

.zoom-btn:hover {
    background-color: rgba(255, 153, 0, 0.3) !important;
}

canvas {
    background-color: #f0f0f0;
    display: block;
}
</style>
