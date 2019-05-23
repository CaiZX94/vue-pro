<template>
  <div>
    <Breadcrumb :breadcrumbItem='breadcrumbItem'></Breadcrumb>
    <div class="main" v-scroll="scroll">
      <el-button type="primary" class="addBtn" @click="handleAdd">{{$t('message.addAdmin')}}</el-button>
      <el-button type="danger" class="addBtn" v-if="showDelAllBtn" @click="handleDel">{{$t('message.delete')}}</el-button>
      <!-- 新建表单 -->

      <div class="addForm">
        <el-dialog :title="$t('message.receivingAddress')" :visible.sync="showForm">
          <el-form :model="ruleForm" ref="form" :rules='rules'>
            <el-form-item prop="name">
              <el-input type="text" v-model="ruleForm.name" :placeholder="$t('message.name')" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="age" >
              <el-input v-model.number="ruleForm.age" :placeholder="$t('message.age')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-radio-group v-model="ruleForm.gender">
                <el-radio :label="$t('message.male')"></el-radio>
                <el-radio :label="$t('message.famale')"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item prop="date">
              <el-date-picker type="date" :placeholder="$t('message.date')" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item prop="address" >
              <el-input type="text" v-model="ruleForm.address" autocomplete="off" :placeholder="$t('message.address')"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="resetForm('ruleForm')">{{$t('message.reset')}}</el-button>
            <el-button @click="cancel">{{$t('message.cancle')}}</el-button>
            <el-button type="primary" @click="submitForm('form')">{{$t('message.confirm')}}</el-button>
          </div>
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
          ref="headRow"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          :label="$t('message.name')"
          width="120">
        </el-table-column>
        <el-table-column
          prop="age"
          :label="$t('message.age')"
          width="120">
        </el-table-column>
        <el-table-column
          prop="gender"
          :label="$t('message.gender')"
          width="120">
        </el-table-column>
        <el-table-column
          prop="date"
          :label="$t('message.date')"
          width="120">
        </el-table-column>
        <el-table-column
          prop="authType"
          :label="$t('message.role')"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          :label="$t('message.address')">
        </el-table-column>
        <el-table-column
          prop="operate"
          :label="$t('message.operate')"
          width="270">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleCopy(scope.$index, scope.row)">{{$t('message.copy')}}</el-button>
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">{{$t('message.edit')}}</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">{{$t('message.delete')}}</el-button>
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
      <div class="delOperateDialog">
        <el-dialog
          :title="$t('message.tip')"
          :visible.sync="dialogVisible"
          width="430px"
          >
          <span>{{operateInfo}}</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="confirmCancle">{{$t('message.cancle')}}</el-button>
            <el-button type="primary" @click="confirmDel">{{$t('message.confirm')}}</el-button>
          </span>
        </el-dialog>
      </div>

    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import {getFormatDate} from '@/utils/index.js'
import '../../assets/style/minix.scss'
export default {
  name: 'authManage',
  components: {
    Breadcrumb
  },
  directives: {
    bind: function (el, binding) {
      var ele = el
      ele.addEventListener('scroll', function () {
        var fun = binding.value
        fun(ele)
      })
    }
  },
  data () {
    let validateName = (rule, value, callback) => {
      let isRepeat = false
      this.tableData.map(item => {
        if (item.name === value) {
          isRepeat = true
        }
      })
      if (value === '') {
        callback(new Error('姓名不能为空！'))
      } else if (isRepeat && !this.isEdit) {
        callback(new Error('姓名已存在！'))
      } else {
        callback()
      }
    }
    return {
      background: true,
      breadcrumbItem: [
        {label: this.$t('message.home'), isHome: true},
        {label: this.$t('message.authManage')}
      ],
      tableData: [], // 表格数据
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
          { validator: validateName, required: true, trigger: 'blur' }
        ]
      },
      dialogFormVisible: false, // 删除数据时是否显示对话框
      showForm: false, // 是否显示表单对话框
      formLabelWidth: '120px',
      editIndex: '', // 编辑的数据索引
      isEdit: false, // 是否编辑
      showDelAllBtn: false, // 是否显示删除全部的按钮
      checkedLength: 0
    }
  },
  created () {
    this.getTableData()
  },
  methods: {
    // 初始化
    getTableData () {
      // 读取本地缓存数据 获取用户管理表格数据
      if (localStorage.getItem('mgrManageData')) {
        this.tableData = JSON.parse(localStorage.getItem('mgrManageData'))
      }
    },
    scroll (el) {
      console.log(el)
    },
    // 单选
    check (val) {
      this.checked = [...val]
      this.checkedLength = this.checked.length
      this.showDelAllBtn = this.checked.length !== 0
      console.log(this.checked, 12)
    },
    // 全选
    checkAll (val) {
      console.log(val.length, val)
      if (val.length - 1 !== 0) {
        this.$refs.multipleTable.toggleRowSelection()
        this.showDelAllBtn = true
      } else {
        this.$refs.multipleTable.clearSelection()
        this.showDelAllBtn = false
      }
    },
    // 新建 打开表单对话框
    handleAdd () {
      this.showForm = true
      this.resetForm()
    },
    // 删除多个
    handleDel () {

    },
    // 复制
    handleCopy (index, row) {
      this.tableData.push({
        name: row.name,
        age: row.age,
        gender: row.gender,
        date: row.date,
        address: row.address
      })
      localStorage.setItem('mgrManageData', JSON.stringify(this.tableData))
    },
    // 编辑
    handleEdit (index, row) {
      this.showForm = true
      this.ruleForm = {
        name: row.name,
        age: row.age,
        gender: row.gender,
        date: row.date,
        address: row.address
      }
      this.isEdit = true
      this.editIndex = index
    },
    // 删除单个
    handleDelete (index, row) {
      console.log(row)
      this.dialogVisible = true
      this.delIndex = index
      this.operateInfo = `确定删除用户[${row.name}]？`
    },
    // 打开删除单个对话框
    confirmDel () {
      this.tableData.splice(this.delIndex, 1)
      this.$message({
        showClose: true,
        message: '删除成功',
        type: 'success',
        duration: '1500'
      })
      this.dialogVisible = false
      localStorage.setItem('mgrManageData', JSON.stringify(this.tableData))
    },
    // 删除单个对话框关闭
    confirmCancle () {
      this.dialogVisible = false
    },
    // 确认添加用户
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.saveData()
        } else {
          return false
        }
      })
    },
    // 保存数据
    saveData () {
      this.showForm = false
      if (!this.isEdit) {
        this.tableData.push({
          name: this.ruleForm.name,
          age: this.ruleForm.age,
          gender: this.ruleForm.gender,
          date: this.ruleForm.date !== '' ? getFormatDate(new Date(this.ruleForm.date), 'yyyy-MM-dd') : '',
          authType: '普通管理员',
          address: this.ruleForm.address
        })
        // 数据缓存到本地
        localStorage.setItem('mgrManageData', JSON.stringify(this.tableData))
      } else {
        this.tableData[this.editIndex] = {
          name: this.ruleForm.name,
          age: this.ruleForm.age,
          gender: this.ruleForm.gender,
          date: this.ruleForm.date !== '' ? getFormatDate(new Date(this.ruleForm.date), 'yyyy-MM-dd') : '',
          authType: '普通管理员',
          address: this.ruleForm.address
        }
        this.isEdit = false
        localStorage.setItem('mgrManageData', JSON.stringify(this.tableData))
        // 读取数据
        this.getTableData()
        this.$message({
          showClose: true,
          message: '编辑成功',
          type: 'success',
          duration: '1500'
        })
      }
    },
    cancel () {
      this.showForm = false
      this.rules.name[0].required = false
      this.resetForm()
    },
    // 重置
    resetForm () {
      this.ruleForm = {
        name: '',
        age: '',
        gender: '',
        date: '',
        address: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  margin-top: 30px;
  width: 90%;
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
    .el-table__row{
      .cell{
        // @include  ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
  .delOperateDialog{
    /deep/ .el-dialog{
      .el-dialog__header,
      .el-dialog__body,
      .el-dialog__footer{
        line-height: 20px;
      }
      .el-dialog__header,{
        text-align: left;
      }
      .el-button{
        padding: 8px 15px
      }
    }
  }
  .addForm{
      /deep/ .el-dialog{
      max-width: 670px;
      min-width: 400px;
      .el-dialog__header,
      .el-dialog__footer{
        line-height: 0px;
      }
      .el-dialog__footer{
        text-align: center
      }
      .el-form{
        margin: 0 auto
      }
      .el-form-item:nth-of-type(3){
        text-align: left
      }
    }
  }

}
</style>
