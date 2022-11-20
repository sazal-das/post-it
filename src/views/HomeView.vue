<template>
  <div class="container">
    <h2 class="page-title">Post-it</h2>
    <div class="content">
      <div v-if="!allPosts.length" class="no-item-msg">No avaiable posts</div>
      <div v-if="allPosts.length" class="context-list">
        <div v-for="post,index in allPosts" :key="index" class>
          <div class="item">
            <div class="btn-position">
              <button class="edit-btn" @click="onClickEditPost(post.id)">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="delete-btn" @click="onClickDeletePost(post.id)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
            <div class="item-title">{{post.title}}</div>
            <div class="item-description">
              <p>{{post.description}}</p>
            </div>
            <div class="btn-position">
              <button class="view-btn" @click="$router.push(`/view-post/${post.id}`)">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="add-post-btn">
        <button class="create-btn" @click="onClickAddPost">Add a post</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const allPosts = computed(() => store.getters.getAllPosts);

const onClickDeletePost = (id) => {
  store.dispatch("deletePost", id);
};
const onClickEditPost = (id) => {
  router.push(`/update-post/${id}`);
};

const onClickAddPost = () => {
  router.push({ name: "addPost" });
};
</script>
<style scoped>
.container {
  padding: 10px 50px;
}
.page-title {
  color: #792c17;
}
.content {
  margin-top: 40px;
}
.no-item-msg {
  font-weight: bold;
  color: grey;
}
.add-post-btn {
  margin-top: 30px;
}
.create-btn {
  background-color: #4caf50;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.create-btn:hover,
.create-btn:focus {
  background-color: #45a049;
}
.context-list {
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item {
  margin: 5px;
  border-radius: 10px;
  padding: 10px;
  background-color: #fef9b1;
  /* background-color: #ea95bb; */
  width: 250px;
}
.delete-btn {
  background-color: red;
  border: none;
  color: white;
  padding: 4px 6px;
  border-radius: 5px;
  font-size: 10px;
  cursor: pointer;
  margin-right: 10px;
}
.delete-btn:hover {
  background-color: rgb(178, 7, 7);
}
.edit-btn {
  background-color: grey;
  border: none;
  color: white;
  padding: 4px 6px;
  border-radius: 5px;
  font-size: 10px;
  cursor: pointer;
  margin-right: 10px;
}
.edit-btn:hover {
  background-color: rgb(81, 79, 79);
}
.btn-position {
  display: flex;
  justify-content: end;
}
.item-title {
  font-weight: bolder;
  font-size: 18px;
  display: flex;
  justify-content: center;
}
.item-description {
  margin-top: 4px;
  font-size: 14px;
  display: flex;
  justify-content: center;
}
p {
  display: -webkit-box;
  max-width: 200px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.view-btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 4px 6px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
}
.view-btn:hover {
  background-color: RoyalBlue;
}
</style>
