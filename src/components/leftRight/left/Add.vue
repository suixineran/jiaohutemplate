<template>
  <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="30%"
  >
    <span>这是一段信息----------{{ title }}</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitButton">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  props: ['isShow', 'dialogType'],
  data() {
    return {
      dialogVisible: false,
      title: '',
    };
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

    submitButton() {
      this.$emit('updateList')
      this.dialogVisible = false
    },
  },
  watch: {
    isShow(val) {
      this.dialogVisible = val
    },
    dialogVisible(val) {
      this.$emit('update:isShow', val)
      if (this.dialogType.type === 'EDIT') {

        this.title = '编辑'
      } else if (this.dialogType.type === 'ADD') {
        this.title = '添加'
      }
    }

  },
};
</script>
<style scoped>

</style>