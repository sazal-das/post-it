import {createStore} from 'vuex'

const store = createStore({
    state: {
        // State for all posts and single post
        allPosts: JSON.parse(localStorage.getItem("POSTS")) || [],
        singlePost: {}
    },
    actions: {
        // Action for create post
        createNewPost ({commit}, payload) {
            commit('SET_POST', payload)
        },
        // Action for delete post
        deletePost ({commit, state}, id) {
            // Filetr all posts with out the post which one user want to delete
            const posts = state.allPosts.filter((post) => Number(post.id) !== Number(id));
            // Call commit to set updated data on local storage and state
            commit('SET_POST', posts)
        },
        // Action for find selected post by id
        findSinglePost ({commit, state}, id) {
            const post = state.allPosts.find((post) => Number(post.id) === Number(id));
            commit('SET_SINGLE_POST', post)
        },
        // Action for update post by id
        updatePost ({commit, state}, payload) {
            // Here we change the old value of a post with new value using javascript map function
            const posts = state.allPosts.map((post) => {
                if (Number(post.id) === Number(payload.id)) {
                    post.title = payload.title;
                    post.description = payload.description;
                    return post;
                }
                return post;
            })
            commit('SET_POST', posts)
        }
    },
    mutations: {
        // Set posts on state
        SET_POST (state, payload) {
            state.allPosts = payload
            localStorage.setItem("POSTS", JSON.stringify(payload));
        },
        // Set single post on state
        SET_SINGLE_POST (state, payload) {
            state.singlePost = payload
        }
    },
    getters: {
        // Return all posts
        getAllPosts (state) {
            return state.allPosts
        },
        // Return single post
        getSinglePost(state) {
            return state.singlePost
        }
    },
    modules: {}
})

export default store;
