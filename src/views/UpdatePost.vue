<template>
  <div class="container">
    <div class="header-container">
      <div>
        <button class="btn" @click="$router.back()">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div class="page-title">Update post</div>
    </div>
    <div class="form-section">
      <form @submit.prevent="onSubmit">
        <div class="label">Title:</div>
        <input v-model="title" type="text" placeholder="Post title" />

        <div style="margin-top: 5px" class="label">Description:</div>
        <textarea style="height: 180px" v-model="description" placeholder="Description"></textarea>

        <input type="submit" value="Update" />
      </form>
    </div>
  </div>
</template>

<script setup>
// Import necessary things
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

// Initialize store
const store = useStore();

// Initailize  router and route
const router = useRouter();
const route = useRoute();

// Get single post from getters
const singlePost = computed(() => store.getters.getSinglePost);

// Mounted function this will call before component rander
onMounted(() => {
  // Call action to get single post by id
  store.dispatch("findSinglePost", route.params.id);

  // Set title and description
  title.value = singlePost.value.title;
  description.value = singlePost.value.description;
});

// Initialize title and description
const title = ref("");
const description = ref("");

// Update post function
const onSubmit = () => {
  // Check title and description have data or not
  if (title.value.trim() === "" || description.value.trim() === "") {
    return;
  }

  // Make payload with changed data
  const payload = {
    id: route.params.id,
    title: title.value,
    description: description.value,
  };

  //Call  update post action
  store.dispatch("updatePost", payload);

  // Back to all posts page after update
  router.back();
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
}
.header-container {
  display: flex;
}
.page-title {
  color: #792c17;
  font-weight: bold;
  margin-top: 2px;
}
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 4px 6px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}
.btn:hover {
  background-color: RoyalBlue;
}
.form-section {
  text-align: left;
  padding: 20px 0;
}
.label {
  font-weight: bold;
}
input[type="text"],
textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>