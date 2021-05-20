import request from '../utils/request'

export default {
    //登录的方法
    submitLoginUser (userInfo) {
        return request({
            url: `/admin/acl/user/login`,
            method: 'post',
            data: userInfo
        })
    },

    //根据token获取用户信息
    getLoginUserInfo () {
        return request({
            url: `/admin/acl/user/getMemberInfo`,
            method: 'get'
        })
    }

}