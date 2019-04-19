<template>
  <div>
    <Breadcrumb :breadcrumbItem='breadcrumbItem'></Breadcrumb>
    <div class="main">
      <el-button type="primary" class="addBtn" @click="handleAdd">新建</el-button>
      <!-- 新建表单 -->

      <div class="addForm">
        <el-dialog title="新建用户" :visible.sync="dialogFormVisible">
          <el-form :model="ruleForm" :inline="false" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="name" >
              <el-input type="text" v-model="ruleForm.name" placeholder="姓名" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="age" >
              <el-input v-model.number="ruleForm.age" placeholder="年龄"></el-input>
            </el-form-item>
            <el-form-item>
              <el-radio-group v-model="ruleForm.gender">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item prop="date">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item prop="address" >
              <el-input type="text" v-model="ruleForm.address" autocomplete="off" placeholder="地址"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <!-- <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div> -->
        </el-dialog>
      </div>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        border
        stripe
        ref="multipleTable"
        @select="check"
        @select-all="checkAll"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          width="150">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          width="150">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="authType"
          label="权限类型"
          width="150">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作"
          width="170">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        class="page"
        background='background'
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>

      <!-- 对话框 -->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="430px"
        >
        <span>{{operateInfo}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="confirmCancle">取 消</el-button>
          <el-button type="primary" @click="confirmDel">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
export default {
  name: 'authManage',
  components: {
    Breadcrumb
  },
  data () {
    let validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('姓名不能为空！'))
      } else {
        callback()
      }
    }

    return {
      background: true,
      breadcrumbItem: [
        {label: '首页', isHome: true},
        {label: '用户管理'}
      ],
      tableData: [
        {
          name: '王小虎1',
          age: '23',
          gender: '男',
          date: '2016-05-02',
          authType: '普通用户',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎2',
          age: '23',
          gender: '男',
          date: '2016-05-02',
          authType: '普通用户',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎3',
          age: '23',
          gender: '男',
          date: '2016-05-02',
          authType: '普通用户',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎4',
          age: '23',
          gender: '男',
          date: '2016-05-02',
          authType: '普通用户',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎5',
          age: '23',
          gender: '男',
          date: '2016-05-02',
          authType: '普通用户',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎6',
          age: '23',
          gender: '男',
          date: '2016-05-02',
          authType: '普通用户',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎7',
          age: '23',
          gender: '男',
          date: '2016-05-02',
          authType: '普通用户',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎8',
          age: '23',
          gender: '男',
          date: '2016-05-02',
          authType: '普通用户',
          address: '上海市普陀区金沙江路 1518 弄'
        } ],
      checked: [],
      operateInfo: '', // 编辑，删除操作的提示文本信息
      dialogVisible: false,
      delIndex: '', // 被删除的索引
      ruleForm: {
        name: '',
        age: '',
        gender: '',
        date: '',
        address: ''
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ]
      },
      dialogFormVisible: false
    }
  },
  methods: {
    // 选择某一行
    check (val) {
      this.checked = [...val]
      console.log(this.checked, 123)
    },
    // 全选
    checkAll (val) {
      console.log(val, this.checked, this.checked.length, 'ffff')
      if (this.checked.length !== 0) {
        this.$refs.multipleTable.clearSelection()
      } else {
        this.$refs.multipleTable.toggleRowSelection()
      }
    },
    // 新建
    handleAdd () {
      this.dialogFormVisible = true
    },
    // 编辑
    handleEdit (index, row, type) {
      console.log(index, row)
      this.handleClose(index)
    },
    // 删除
    handleDelete (index, row) {
      console.log(row)
      this.dialogVisible = true
      this.delIndex = index
      this.operateInfo = `确定删除用户[${row.name}]？`
    },
    // 打开对话框
    confirmDel () {
      this.tableData.splice(this.delIndex, 1)
      this.$message({
        showClose: true,
        message: '删除成功',
        type: 'success'
      })
      this.dialogVisible = false
    },
    // 对话框关闭
    confirmCancle () {
      this.dialogVisible = false
    },
    // 确认新建
    submitForm () {

    },
    // 重置
    resetForm () {

    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  margin-top: 30px;
  width: 1400px;
  .addForm{
    .el-form{
      width: 350px;
    }
  }
  /deep/ .el-table{
    .el-table__header-wrapper:not(.is-scrolling-none){
      height: 74px ;
      line-height: 50px ;
      font-size: 17px;
      border-bottom: 1px solid #EBEEF5;
    }
    .el-table__body-wrapper{
      .el-table__row{
        .cell{
          line-height: 30px;
        }
      }
    }
  }
  .page{
    margin-top: 30px;
    /deep/ button{
      background-color: #fff;
    }
    /deep/ .el-pager{
      li{
        background-color: #fff;
      }
    }
  }
  .addBtn{
    float: left;
    margin-bottom: 20px
  }
  /deep/ .el-dialog{
    .el-dialog__header,
    .el-dialog__body,
    .el-dialog__footer{
      position: relative;
    }
    .el-dialog__header{
      height: 20px;
      span{
        position: absolute;
        top: 18px;
        left: 28px
      }
    }
    .el-dialog__body{
      height: 50px;
      span{
        position: absolute;
        top: -27px;
        left: 68px;
        font-size: 17px;
      }
    }
    .el-dialog__footer{
      height: 50px;
      span{
        button{
          position: absolute;
          top: -11px;
        }
        .el-button--default{
          left: 130px
        }
        .el-button--primary{
          left: 204px
        }
      }
    }
  }
}
</style>
