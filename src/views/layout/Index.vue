<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
</script>

<template>
  <div>
    <el-container class="common-layout">
      <el-header class="header">
        <Header />
      </el-header>
      <el-container class="center">
        <el-aside width="200px" height="100%">
          <Sidebar />
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  display: flex;
}

.header {
  background-color: rgb(64, 158, 255);
}

.center {
  height: calc(100vh - 60px);
}
</style>