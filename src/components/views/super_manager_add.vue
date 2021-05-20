<template>
  <div class="main">
    <el-container style="height: 700px; border: 1px solid #eee">
      <el-aside
        width="300px"
        style="background-color: rgb(238, 241, 246); margin-left: 0px"
      >
        <el-menu :default-openeds="[]">
          <el-menu-item-group style="background-color: rgb(238, 241, 246)">
            <el-button type="primary" icon="el-icon-edit" @click="show()"
              >管理</el-button
            >
          </el-menu-item-group>
          <el-menu-item-group style="background-color: rgb(238, 241, 246)">
            <el-button type="primary" icon="el-icon-edit" @click="add()">新增</el-button>
          </el-menu-item-group>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: center; font-size: 12px" hei>
          <el-tag style="text-align: center; font-size: 20px">新增</el-tag>
        </el-header>

        <el-main style="width: 800px; text-align: center;">
          <el-form :model="form" label-width="200px" style="text-align: left">
                    <el-form-item label="用户名：" :label-width="formLabelWidth" style="text-align: left">
                      <el-input
                        v-model="form.username"
                        style="width: 500px"
                      ></el-input>
                      </el-form-item>
                    <el-form-item label="密码：" :label-width="formLabelWidth" style="text-align: left">
                      <el-input
                        v-model="form.password"
                        style="width: 500px"
                      ></el-input>
                      </el-form-item>
                    <el-form-item label="角色：" :label-width="formLabelWidth" style="text-align: left">
                      <el-select v-model="form.role" placeholder="请选择用户角色" style="width: 500px">
                        <el-option label="空调管理员" value="空调管理员"></el-option>
                        <el-option label="酒店管理员" value="酒店管理员"></el-option>
                        <el-option label="前台管理员" value="前台管理员"></el-option>
                        <el-option label="酒店经理" value="酒店经理"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <el-button
                    type="primary"
                    @click="handleSet()"
                    >确 定</el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  data() {
    return{
      form: {
        username:'',
        password:'',
        role: "", 
      },
    }
  },
  methods: {
    show() {
      window.location.href = "/#/super_manager_main";
    },
    add(){
        window.location.href = "/#/super_manager_add";
    },
    handleSet(){
      this.$message({
        //这里写新建用户的函数
        //create_new_user(username,password，role)
        //其中username为
            type: "success",
            message: this.form.username,
          });
    }
  },
};
</script>


<style>
.el-header {
  background-color: #aae4ff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
