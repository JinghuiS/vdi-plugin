<template>aaa</template>
<script lang="ts" setup>
import { useDependency } from "vdi";
import { onMounted } from "vue";
import { HttpClient } from "../../module";

const http = useDependency(HttpClient);

onMounted(() => {
  http.get("https://api.github.com/users?since=100").then((res) => {
    console.log(res);
  });
});
</script>
