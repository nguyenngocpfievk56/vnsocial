// Thực hiện các tác vụ liên kết tới bên ngoài
// Nhận tác động từ bên ngoài -> truyền vào cho mutation -> update state

import axios from 'axios';

const login = (context, params) => {
	axios.post('/api/auth/login', params)
		.then((res) => {
			context.commit('SET_USER', { user: res.data.user })
		})
		.catch((err) => {
			console.log(err)
		})
}

const logout = (context, params) => {
	context.commit('CLEAR_USER')
}

const getUserInfo = (context, params) => {
	axios.post('/api/user/info', params)
		.then((res) => {
			context.commit('SET_USER', { user: res.data.user })
		})
		.catch((err) => {
			console.log(err)
		})
};

const updateInfo = (context, params) => {
	context.commit('SET_IS_LOADING', { isLoading: true })
	axios.post('/api/user/update', params)
		.then((res) => {
			context.commit('SET_USER', { user: res.data })
			context.commit('SET_IS_LOADING', { isLoading: false })
		})
		.catch((err) => {
			console.log(err)
			context.commit('SET_IS_LOADING', { isLoading: false })
		})
};

export default {
	getUserInfo,
	login,
	logout,
	updateInfo
};
