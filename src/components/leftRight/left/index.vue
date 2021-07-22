<template>
  <div class="left-comp">
    <el-button @click="addButtonD">添加弹窗形式</el-button>
    <br>
    <el-button @click="addButtonI">添加页面内形式</el-button>
    <el-table
        border
        :data="tableData"
        style="width: 100%"
        @row-click="tableRowClick"
    >
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
      >
      </el-table-column>
      <el-table-column
          prop="address"
          :width="100"
          label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="handleEdit(scope.row, scope.$index)" type="text" size="small">编辑</el-button>
          <el-button @click.stop="handleDelete(scope.row, scope.$index)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Add
        :isShow.sync="showAdd"
        :dialogType.sync="dialogType"
        @updateList="updateList"
    />
  </div>
</template>

<script>
import Add from './Add'
import {mapState} from "vuex";

export default {
  name: "right",
  data() {
    return {
      showAdd: false,
      dialogType: {},
      tableData: [{
        date: '2016-05-02',
        name: '王小虎0',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎3',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }

  },
  computed: {
    ...mapState({
      count: state => state.count,
      busRow: state => state.busRow,
      addStatus: state => state.addStatus,
    })
  },
  methods: {
    _list() {
      this.api.xx.list
          .then(res => {

          })
    },
    _delete() {
      this.api.xx.deleteOne
          .then(res => {

          })
    },
    // 点击事件的回调
    tableRowClick(row, column, event) {
      row.type = 'EDIT'
      this.$store.commit('setBusRow', row)
    },
    addButtonD() {
      this.showAdd = true
      this.dialogType = {type: 'ADD'}
    },
    addButtonI() {
      let row = {}
      row.type = 'ADD'
      row.msg = '页面内添加方式：初始化各项数据'
      this.$store.commit('setBusRow', row)
      //   如果是页面内的 之前展示的详情，现在把数据 弄成 新建的初始值 type区分 是新添加 还是编辑
      //   在详情的界面 判断 是请求detail， 还是新增

    },
    // 添加组件的监听事件回调
    updateList() {
      let d = (new Date()).valueOf()
      let r = {id: 1, name: d}
      this.tableData.push(r)
    },
    handleEdit(row, index) {
      this.showAdd = true
      this.dialogType = {type: 'EDIT'}
    },
    handleDelete(row, index) {
      this.tableData.splice(index, 1)
    },
  },
  components: {
    Add,
  },
  watch: {
    // 如果用右侧页面内添加list的时候  触发 js 添加list的条数
    addStatus(val) {
      console.log()
      if (val.type === 'ADD') {
        this.updateList()
      }

    },
  },
}
</script>

<style scoped>
.left-comp {
  width: 420px;
  height: 100%;
}


</style>