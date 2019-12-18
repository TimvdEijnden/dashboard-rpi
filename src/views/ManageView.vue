<template>
    <div>
        <h4>Add Url</h4>
        <url-form :addUrl="addUrl"/>
        <h4>Now Playing</h4>
        <h5><a :href="lastUrl">{{lastUrl}}</a></h5>

        <h4>All Urls</h4>
        <url-list :urls="urls"/>
    </div>
</template>

<script>
import UrlForm from "@/components/UrlForm";
import UrlList from "@/components/UrlList";
export default {
  props: {
    addUrl: {
      type: Function
    },
    lastUrl: {
        type: String
    },
    urls: {
        type: Array
    }
  },
  components: {
    UrlForm,
    UrlList
  }
};
</script>
