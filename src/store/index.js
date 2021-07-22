import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        busRow:'ppppppp',
        addStatus:'xx',
    },
    getter: {
        doneTodos: (state, getters) => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        increment (state, payload) {
            state.count++
        },
        setBusRow(state, data) {
            console.log('-------vuex 中的setBusRow', data)
          state.busRow = data
        },
        setAddStatus(state, data) {
            console.log('-------vuex 中的setBusRow', data)
          state.addStatus = data
        },
    },
    actions: {
        addCount(context) {
            // 可以包含异步操作
            // context 是一个与 store 实例具有相同方法和属性的 context 对象
        }
    }
})
export default store