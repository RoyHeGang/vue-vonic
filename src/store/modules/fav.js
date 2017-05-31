/**
 * 收藏模块
 */
import * as types from '../types'
import api from '../../api'
import arrExt from '../../utils/arrayExt'

const state = {
    favList: [],
    favVideo: []
}

const mutations = {
    [types.M_FAV_FILL](state, payload) {
        state.favList = payload;
    },
    [types.M_FAV_ADD](state, payload) {
        state.favList.push(payload);
    },
    [types.M_FAV_DEL](state, payload) {
        arrExt.deleteItem(state.favList, item => item.id == payload.id);
    },
    [types.M_FAV_UPDATE](state, payload) {
        var item = arrExt.single(state.favList, fav => fav.id == payload.id);
        if (item != null) {
            // TODO:给项设置新名称
        }
    },
    [types.M_FAV_VIDEO_FILL](state, payload) {
        state.favVideo = payload;
    },
    [types.M_FAV_VIDEO_ADD](state, payload) {
        state.favVideo.push(payload);
    },
    [types.M_FAV_VIDEO_DEL_BY_VID](state, payload) {
        arrExt.deleteItem(state.favVideo, item => item.id == payload.id);
    },
    [types.M_FAV_VIDEO_DEL_BY_FID](state, payload) {
        arrExt.deleteItem(state.favVideo, item => item.fid = payload.fid);
    }
}

const getters = {

}

const actions = {

}

export default {
    state, mutations, getters, actions
}