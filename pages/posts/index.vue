<template>
  <div>
    <section class="posts-list">
      <PostPreview
        id="1"
        thumbnail="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"
        title="Hello There!"
        previewText="This is my first post!"
      />
      <PostPreview
        id="2"
        thumbnail="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"
        title="Hello There!"
        previewText="This is my second post!"
      />
      <PostPreview
        id="3"
        thumbnail="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"
        title="Hello There!"
        previewText="This is my third post!"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview,
  },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
