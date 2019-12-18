<template>
    <div class="url-list">
        <ul>
            <li v-for="url in urls" :key="url.id">
                <a :href="url.url">{{url.url}}</a>
            </li>
        </ul>
        <strong>{{lastUrl}}</strong>
    </div>
</template>

<script>
export default {
  props: {
    urls: {
      type: Array
    },
    lastUrl: {
        type: String
    }
  }
};
</script>

<style scoped>
.url-list {
    display: flex;
    justify-content: center;
}

 ul {
     list-style: none;
     text-align: left;
 }
</style>