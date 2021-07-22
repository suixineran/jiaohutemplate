<template>
  <div class="right-comp">
    <div class="right-comp-div">
      {{ busRow }}
    </div>

    <el-button @click="addButton">添加</el-button>
    <el-button @click="editButton">编辑</el-button>
    <el-button @click="cancelButton">重置</el-button>
  </div>

</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "rightdetail",
  computed: {
    ...mapState({
      count: state => state.count,
      busRow: state => state.busRow,
      addStatus: state => state.addStatus,

    })
  },
  methods: {
    _detail(id) {
      this.xx.detai(id)
          .then(res => {

          })
    },
    _add(id) {
      this.xx.add(id)
          .then(res => {

          })
    },
    _edit(id) {
      this.xx.edit(id)
          .then(res => {

          })
    },
    //请求回来的数据 整理成页面展示的数据
    getViewData(res) {

    },

    addButton() {
      console.log('-addButton')
      //   添加成功怎么通知 兄弟组件？
      this.$store.commit('setAddStatus', {type: 'ADD'})
    },
    editButton() {
      console.log('-editButton')
      this.$store.commit('setAddStatus', {type: 'edit'})

    },
    cancelButton() {
      console.log('-cancelButton')
      // this._detail()
    },

  },

  watch: {
    busRow(val) {
      if (val.type === 'EDIT') {
        // this._detail(val.id)
      } else if (val.type === 'ADD') {

      }

    },
  }
}
</script>

<style scoped>
.right-comp {
  width: 100%;
  flex: 1;
}

.right-comp-div {
  height: 500px;
}

</style>