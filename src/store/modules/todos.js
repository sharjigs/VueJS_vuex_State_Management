import axios from 'axios';

const state = {
    todos:[]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos( { commit } ) {
        const response =  await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );

        commit('setTodo', response.data)
    },

    async addTodo( { commit }, title ) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{ title, completed: false});

        commit('addNewTodo', response.data)
    }
};

const mutations = {
    
    setTodo: (state, todos) => (state.todos = todos) ,
    addNewTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
    state,
    getters,
    actions,
    mutations
}