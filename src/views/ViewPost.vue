<template>
  <div class="container">
    <div class="header-container">
      <div>
        <button class="btn" @click="$router.back()">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div class="page-title">Back to my posts</div>
    </div>
    <div class="content">
      <div class="item-title">{{singlePost.title}}</div>
      <div class="item-description">{{singlePost.description}}</div>
    </div>
  </div>
</template>

<script setup>
// Import necessary things
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

const route = useRoute();

// Get single post from getters
const singlePost = computed(() => store.getters.getSinglePost);

onMounted(() => {
  // Call action to get single post
  store.dispatch("findSinglePost", route.params.id);
});
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
.content {
  margin-top: 20px;
  background-color: #fef9b1;
  border-radius: 6px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.item-title {
  font-weight: bolder;
  font-size: 18px;
  display: flex;
  justify-content: center;
}
.item-description {
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
}
</style>