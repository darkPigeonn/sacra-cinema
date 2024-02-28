<template>
    <div class="timeline">
        <div class="timeline-item">
            <div class="timeline-item-content">
            <span class="date">1 Januari 2024</span>
            <h2>Event 1</h2>
            <p>Deskripsi event 1.</p>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-item-content">
            <span class="date">15 Februari 2024</span>
            <h2>Event 2</h2>
            <p>Deskripsi event 2.</p>
            </div>
        </div>
        <!-- Tambahkan lebih banyak item sesuai kebutuhan -->
    </div>
</template>


<style lang="scss" scoped>
.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.timeline-content {
  max-width: 70%;
}

.timeline-date {
  font-size: 14px;
}

// Responsive styles
@media (max-width: 768px) {
  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .timeline-content {
    max-width: 100%;
  }
}


</style>