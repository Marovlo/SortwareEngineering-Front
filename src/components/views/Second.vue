
<template>
    
  <div class="main">     
    <div class="title">      <a class="active">登录注册界面</a>     </div>  
    <div class="sign-up-container">
            <el-form ref="userForm" :model="user">
                <el-form-item class="input-prepend restyle" prop="mobile">
                    
          <div>
                        <el-input
              type="text"
              placeholder="账户名"
              v-model="user.username"
            />
                        <i class="iconfont icon-phone" />           
          </div>
                  </el-form-item
        >

                <el-form-item
          class="input-prepend"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
                    
          <div>
                        <el-input
              type="password"
              placeholder="密码"
              v-model="user.password"
            />
                        <i class="iconfont icon-password" />           
          </div>
                  </el-form-item
        >

        <el-row>
          <el-button-group> 
            <el-button align=right class="btn2">
                      <input
                type="button"
                class="sign-up-button"
                value="注册"
                @click="submitReg()"
            />
                    
            </el-button>
                   
            <el-button align=left class="btn1">
                      <input
                type="button"
                class="sign-in-button"
                value="登录"
                @click="submitLogin()"
            />
                    
            </el-button>
          </el-button-group>
        </el-row>
              </el-form
      >
          
    </div>
      
  </div>
</template>

<script>
import "@/assets/css/sign.css";
//import "~/assets/css/iconfont.css";

import cookie from "js-cookie";
import loginApi from "@/api/login";
import regApi from "@/api/reg"

export default {
  layout: "sign",

  data() {
    return {
      //封装登录手机号和密码对象
      user: {
        username: "",
        password: "",
        type:""
      }, //用户信息
      loginInfo: {},
      regInfo:{}
    };
  },

  methods: {
    //登录的方法
    submitLogin() {
      this.user.type = "1"; //登录
      loginApi.submitLoginUser(this.user).then(
        (response) => {
        console.log(response);
        console.log(Object.keys(response.data.data).length);
        if(Object.keys(response.data.data).length!=0)
        {
          this.loginInfo = response.data.data.user;
          cookie.set("guli_ucenter", "Done", { domain: "localhost" }); // TODO 将用户信息导入cookie // console.log('&&&&&&&&&&&&&&' + this.loginInfo) // console.log('************Done..........' + cookie.get('guli_ucenter')) // 跳转页面
          alert("登录成功");
          // window.location.href = "/#/manager";
        }else{
          alert("登录失败");
        }
      });
    },
    //注册的方法
    submitReg() {
      this.user.type = "0";  //注册
      regApi.submitRegUser(this.user).then(
        (response) => {
        this.regInfo = response.data.data.user;  //如何处理
        alert("注册成功");
      });        
    }
  },
};
</script>
<style>
/* .el-form-item__error  {
    z-index: 9999999;
} */
.btn1{
    text-align: center;
}
.btn2{
    text-align: center;
}
</style>