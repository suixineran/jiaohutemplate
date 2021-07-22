<template>
  <div class="left-right">
    <left class="left"
    />
    <right class="right"
    />
  </div>
</template>

<script>
import right from './right'
import left from './left'

export default {
  /*
  * 用store
  * 左侧选择  右侧显示选中的信息  详细信息  用vuex 通知
  * 如果添加 不是弹窗的形式
  * 如果添加是弹窗形式
  * 左侧的添加,删除， 编辑， 有js 控制，
  * */
  components: {
    left,
    right,
  },
  methods: {}
}
</script>

<style>
.left-right {
  width: 100%;
  height: 1000px;
  display: flex;
  border: 1px red solid;
}

.left {
  border: 1px solid green;
  height: 100%;
}

.right {
  border: 1px solid green;
  height: 100%;
}
</style>
