<template>
<div>
    <!-- {{tableData}} -->
<ul v-for="(item,index) in tableData" :key="index">
<li>
    {{item.data}}
</li>
</ul>
</div>
    
</template>

<script>
export default {
    props: ["tableData"],
};
</script>

<style>
</style>
