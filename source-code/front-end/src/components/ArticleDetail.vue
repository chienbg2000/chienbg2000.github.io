<template>
  <div class="post" v-if="post">
    <h1>{{ post.title }}</h1>
    <div class="image-container">
      <img class="post-image" :src="post.image" alt="Post Image">
    </div>
    <p class="post-date">{{ post.date }}</p>
    <div class="post-content" v-html="post.content"></div>
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      try {
        const slug = this.$route.params.slug;
        const response = await fetch(`${window.config.API}?type=postDetail&slug=${slug}`);
        if (response.ok) {
          const data = await response.json();
          this.post = data;
          document.querySelector('.post').style.animation = 'none';
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.post {
  text-align: left;
  margin: 50px auto;
  font-family: Arial, sans-serif;
  max-width: 800px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.post-image {
  max-height: 500px;
}

.post-date {
  color: #999;
  font-size: 16px;
  margin-bottom: 10px;
}

.post-content {
  font-size: 18px;
  margin-top: 20px;
}

button {
  background-color: #007BFF;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}
</style>
