<template>
  <div class="dashboard-container">

    <el-row type="flex" class="row-bg">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>系统信息</span>
        </div>
        <div>

          <div>系统:{{ system_info.system + system_info.release }}</div>

          <div>CPU：{{ system_info.cpu }}</div>
          <div>python：{{ system_info.python }}</div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>内存信息</span>
        </div>
        <div>

          <div>used：{{ ~~(system_memory.used / (1024 * 1024 * 1024)) }}/{{ ~~(system_memory.total / (1024 * 1024 * 1024))
          }}</div>
          <div>percent：{{ system_memory.percent }}%</div>
          <div>swap：{{ ~~(system_memory.swap.used / (1024 * 1024 * 1024)) }}/{{ ~~(system_memory.total / (1024 * 1024 *
              1024))
          }}</div>
        </div>
      </el-card>
    </el-row>

    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { system } from '@/api/system'
import { system_memory } from '@/api/system_memory'
export default {
  name: 'Dashboard',
  data() {
    return {
      system_info: {},
      system_memory: {}
    }
  },
  computed: {
    // ...mapGetters([
    //   'name'
    // ]
    // ),  
  },
  created() {
    system().then(res => {
      console.log('system', res)
      this.system_info = res.data
    })
    system_memory().then(res => {
      console.log('system_memory', res)
      this.system_memory = res.data
    })
  }



}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>
