<template>aaa</template>
<script lang="ts" setup>
import { useDependency } from "vdi";
import { onMounted } from "vue";
import { NgHttp } from "../../module";

const http = useDependency(NgHttp);

onMounted(() => {
  http.get("https://api.github.com/users?since=100").subscribe((res) => {
    console.log(res);
  });
});
</script>
