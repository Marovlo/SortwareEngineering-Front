import request from '../utils/request'

export default {
    //注册的方法
    submitRegUser (userInfo) {
        return request({
            url: `/admin/acl/user/login`,
            method: 'post',
            data: userInfo
        })
    },

    //根据token获取用户信息
    getRegUserInfo () {
        return request({
            url: `/admin/acl/user/getMemberInfo`,
            method: 'get'
        })
    }

}