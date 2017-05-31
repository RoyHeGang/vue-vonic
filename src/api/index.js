import ResourceStore from './resources'

export default {
    getAllValues() {
        return ResourceStore.get('/Values')
    },
    getLoginInfo(payload) {
        return ResourceStore.post('/account/login', payload)
    }
}