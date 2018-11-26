<template>
<div>
  <page></page>
</div>
</template>

<script>
// var file = window.location.hash.split('#')[1]
// var path = '@/pages' + file + '/index'
// var string = __import__(path)
console.log(string)
import page from '@/pages/page1/index'
// var page = require(path)@/pages/page1/index
// console.log( )
export default {
  name: 'HelloWorld',
  components: {page},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      page: this.$parent.$route.params.page
    }
  },
  mounted () {
    // console.log(this.$parent.$route.params.page)
  }
}
</script>
