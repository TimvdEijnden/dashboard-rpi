<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label>
        <input type="text" name="url" v-model="url"  pattern="https?://.+" required placeholder="Enter a valid url">
      </label>
      <input type="submit" value="Add url"/>
      <pre>Youtube URLs will be converted to embed URLs to allow playing inside an iframe.</pre>
    </form>
  </div>
</template>

<script>
function convertYoutubeToEmbed(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const query = url.split("?").pop();

  return match && match[2].length === 11
    ? `//www.youtube.com/embed/${match[2]}?autoplay=1&controls=0&${query}`
    : url;
}

export default {
  name: 'UrlForm',
  props: {
    addUrl: {
      type: Function
    }
  },
  data() {
    return {
      url: ''
    };
  },
  methods: {
    onSubmit() {
      if (this.url.trim().length > 5) {
        const url = this.url.trim();
        this.url = '';
        this.addUrl(convertYoutubeToEmbed(url));
      }
    }
  }
};
</script>
