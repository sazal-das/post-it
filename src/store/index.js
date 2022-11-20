import {createStore} from 'vuex'

const store = createStore({
    state: {
        allPosts: JSON.parse(localStorage.getItem("POSTS")) || [],
        singlePost: {}
    },
    actions: {
        createNewPost ({commit}, payload) {
            commit('SET_POST', payload)
        },
        deletePost ({commit, state}, id) {
            const posts = state.allPosts.filter((post) => Number(post.id) !== Number(id));
            commit('SET_POST', posts)
        },
        findSinglePost ({commit, state}, id) {
            const post = state.allPosts.find((post) => Number(post.id) === Number(id));
            commit('SET_SINGLE_POST', post)
        },
        updatePost ({commit, state}, payload) {
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
        SET_POST (state, payload) {
            state.allPosts = payload
            localStorage.setItem("POSTS", JSON.stringify(payload));
        },
        SET_SINGLE_POST (state, payload) {
            state.singlePost = payload
        }
    },
    getters: {
        getAllPosts (state) {
            return state.allPosts
        },
        getSinglePost(state) {
            return state.singlePost
        }
    },
    modules: {}
})

export default store;
