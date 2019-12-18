<template>
    <div>
        <iframe
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            v-if="lastUrl"
            :src="lastUrl"
            class="web-content"
        />
    </div>
</template>

<script>
export default {
  props: {
    lastUrl: {
        type: String
    }
  }
};
</script>

<style scoped>
.web-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>