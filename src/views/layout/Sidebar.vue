<template>
  <el-menu default-active="2" class="el-menu-cpn" @open="handleOpen" @close="handleClose" :router="true">
    <el-menu-item v-for="route in validRoutes" :key="route.path" :index="route.path">
      <el-icon>
        <IconMenu />
      </el-icon>
      {{ route.meta.title }}
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const validRoutes = ref([])
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const genSideBar = () => {
  // 获取所有路由配置
  const routes = router.getRoutes()
  console.log("routes", routes)
  // 过滤出需要显示在侧边栏的路由
  validRoutes.value = routes.filter(route => route.meta && route.meta.inSideMenu);
  console.log("validRoutes", validRoutes.value)
}

onMounted(() => {
  genSideBar()
})

</script>

<style>
.el-menu-cpn {
  height: 100%;
}
</style>