<template>
  <div class="container">
    <div class="header-container">
      <div>
        <button class="btn" @click="$router.back()">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div class="page-title">Add new post</div>
    </div>
    <div class="form-section">
      <form @submit.prevent="onSubmit">
        <div class="label">Title:</div>
        <input v-model="title" type="text" placeholder="Post title" />

        <div style="margin-top: 5px" class="label">Description:</div>
        <textarea style="height: 180px" v-model="description" placeholder="Description"></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script setup>
// Import necessary things
import { ref, onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

// Get all posts form store
const allPosts = computed(() => store.getters.getAllPosts);

onMounted(() => {
  // Get id from localstorege. We will use this with every posts as unique data.
  id.value = localStorage.getItem("ID") || 0;
});

const router = useRouter();

const title = ref("");
const description = ref("");
const id = ref(0);

watch(id, (newVal) => {
  // check if id changed or not. If changed then update local storage id value.
  localStorage.setItem("ID", newVal);
});

// Create new post function
const onSubmit = () => {
  // Check title and description have value or not
  if (title.value.trim() === "" || description.value.trim() === "") {
    return;
  }
  // Make payload with post data to create
  const payload = {
    id: ++id.value, //Increament id value from previous value
    title: title.value,
    description: description.value,
  };
  // push new data into the allpost array
  allPosts.value.push(payload);
  // Call action to create all new post
  store.dispatch("createNewPost", allPosts.value);
  // Take user to all post page after create
  router.push("/");
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