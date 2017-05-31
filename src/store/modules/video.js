/**
 * 视频模块
 */
import * as types from '../types'
import api from '../../api'
import arrExt from '../../utils/arrayExt'

const state = {
    videoList: [

    ]
}

const mutations = {
    [types.M_VIDEO_CLEAR_LIST](state) {
        state.videoList = [];
    },
    [types.M_VIDEO_APPEND_TO_LIST](state, payload) {
        state.videoList.concat(payload);
    },
    [types.M_VIDEO_DEL](state, payload) {
        arrExt.deleteItem(state.videoList, item => item.id == payload.id);
    },
    [types.M_VIDEO_SET_COVER](state, payload) {
        var item = arrExt.singleOrDefault(state.videoList, item => item.id == payload.id);
        //因为列表为临时列表可能找不到
        if (item != null) {
            var image = item.ImageList.filter(img => img.id == payload.cid)[0];
            // TODO:设置为封面
        }
    }
}


const getters = {

}

const actions = {

}

export default {
    state, mutations, getters, actions
}