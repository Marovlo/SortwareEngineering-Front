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
            <el-button type="primary" icon="el-icon-edit" @click="add()"
              >新增</el-button
            >
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: center; font-size: 12px">
          <el-tag style="text-align: center; font-size: 20px">管理</el-tag>
        </el-header>

        <el-main style="width: 800px">
          <el-table :data="tableData" stripe="true">
            <el-table-column prop="id" label="ID" width="200"></el-table-column>
             <el-table-column prop="username" label="用户名" width="200"></el-table-column>
            <el-table-column
              prop="role"
              label="角色"
              width="200"
            ></el-table-column>

            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button
                  @click="handleDelete(scope.$index, scope.row)"
                  type="text"
                  size="small"
                  >删除</el-button
                >
                <el-button
                  @click="handleModify(scope.$index, scope.row)"
                  type="text"
                  size="small"
                  >修改</el-button
                >
                <el-dialog
                  title="编辑用户"
                  :visible.sync="dialogFormVisible"
                  :modal-append-to-body="false"
                  width="500px"
                  top="200px"
                >
                  <el-form :model="form" label-width="80px">
                    <el-form-item label="ID" :label-width="formLabelWidth">
                      <el-input
                        v-model="form.id"
                        disabled='true'
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="用户名" :label-width="formLabelWidth">
                      <el-input
                        v-model="form.username"
                      ></el-input>
                      </el-form-item>
                    <el-form-item label="角色" :label-width="formLabelWidth">
                      <el-select v-model="form.role" placeholder="请选择用户角色">
                        <el-option label="空调管理员" value="空调管理员"></el-option>
                        <el-option label="酒店管理员" value="酒店管理员"></el-option>
                        <el-option label="前台管理员" value="前台管理员"></el-option>
                        <el-option label="酒店经理" value="酒店经理"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false"
                      >取 消</el-button
                    >
                    <el-button
                      type="primary"
                      @click="handleSet(scope.$index, scope.row)"
                      >确 定</el-button
                    >
                  </div>
                </el-dialog>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
export default {
  created()
  {

  },
  data() {
    // request 函数 查询所有用户
    return {
      modify_info:{
        index:'',
        row:''
      },
      // return 用户列表 格式和下面相同
      tableData: [
        {
          id: "123",
          username:"lty",
          role: "空调管理员",
        },
        {
          id: "456",
          username:"lty",
          role: "酒店管理员",
        },
        {
          id: "789",
          username:"lty",
          role: "前台管理员",
        },
        {
          id: "000",
          username:"lty",
          role: "酒店经理",
        },
        {
          id: "xxx",
          username:"lty",
          role: "酒店经理",
        },
      ],
      dialogFormVisible: false, //弹出层默认为关闭
      //弹出层中的表单
      form: {
        id: "",
        username:'',
        role: "", 
      },
    };
  },
  methods: {
    show() {
      window.location.href = "/#/super_manager_main";
    },
    add() {
      window.location.href = "/#/super_manager_add";
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(index, 1);

          // TODO 在这里加入删除用户的操作，需要删除的用户名为row.id

          // remove_user_by_id(row.id);

          this.$message({
            type: "success",
            message: row.id,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    handleModify(index, row) {
      this.dialogFormVisible = true; //开启弹出层
      // 对弹出层中的表单赋值
      this.form.id = row.id;
      this.modify_info.index=index;
      this.modify_info.row=row;
      this.form.username=row.username;
      this.form.role = row.role;
    },
    handleSet(index, row)
    {
      this.dialogFormVisible=false;
      //这里写一个接口 modify_by_id(id,new_username,new_role)
      //其中，id为this.form.id, new_username=this.form.username, new_role=this.form.new_role
      this.$message({
            type: "success",
            message: this.form.id+' '+this.form.username+' '+this.form.role,
          });
        
    }
  },
};
</script>


<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
