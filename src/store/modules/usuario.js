import api from "@/plugins/api";

export default {
    namespaced: true,
    state: {
        users: []
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload
        }
    },
    actions: {
        getUserList({ commit }) {
            api.get('users').then(result => {
                commit('setUsers', result.data.data)
            })
        }
    }
}