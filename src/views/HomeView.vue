<template>
  <div class="ctn">
    <main class="main">
      <span class="words">这是一个由于上班太无聊而诞生的示例项目</span>
      <el-button type="primary" @click="goToDesign">开始设计表单</el-button>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
function goToDesign() {
  router.push('/design');
}
</script>

<style scoped>
.main {
  display: flex;
  width: 600px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.words {
  margin-bottom: 10px;
  font-size: 15px;
  color: #666;
}

.ctn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
