import { createStore } from 'vuex'
import api from '@/plugins/api'

const store = createStore({
    state () {
        return {
            user: {},
            logado: false,
            token: ''
        }
    },
    getters: {
        getUser(state) {
            return state.user
        },
        userLogado(state) {
            return state.logado
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setToken(state, payload) {
            state.token = payload
        },
        setLogado(state, payload) {
            state.logado = payload
        },
        logoutUser(state) {
            state.user = {};
            state.logado = false
            state.token = ''
        },
    },
    actions: {
        logar({ commit }, payload) {
            api.post('/login', payload).then(result => {
                    if (result.status == 200) {
                        commit('setUser', result.data.user)
                        commit('setToken', result.data.access_token)
                        commit('setLogado', true)
                        return
                    }

                    commit('logoutUser')
                })
                .catch(erro => console.log(erro))
        }
    }
})

export default store