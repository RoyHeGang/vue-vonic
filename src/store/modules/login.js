/**
 * 登录模块
 */
import * as types from '../types'
import api from '../../api'

const state = {
    user: null
}

const mutations = {
    [types.M_LOGIN_SET_USER](state, payload) {
        state.user = payload;
    },
    [types.M_LOGIN_CLEAR_USER](state) {
        state.user = {};
    }
}

const getters = {

}

const actions = {
    [types.A_LOGIN_IN]({ commit, rootState }, payload) {

        return new Promise((resolve, reject) => {
            api.getLoginInfo(payload).then(response => {
                var data = response.data;

                if (data.isSuccess) {
                    commit(types.M_LOGIN_SET_USER, {
                        userName: data.userName,
                        id: data.id
                    })
                } else {
                    $dialog.alert({
                        theme: rootState.theme,
                        content: data.errorMsg
                    })
                }
                resolve(data.isSuccess);
            });
        })

    }
}

export default {
    state, mutations, getters, actions
}