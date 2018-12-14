<template>
  <div id="home">
     
      
      <MovieItem v-for="(item,index) of movies " :key="index" :movie="item"></MovieItem>
  </div>
</template>
<script>
/* import {HTTP} from '../../models/HTTP';
    let http =new HTTP();*/
/* 导入 MovieModel */
import {MovieModel} from "../../models/MovieModel"
const movieModel =new MovieModel();
/* 1. 引入子组件*/
import MovieItem from "./components/item"
/* 导出 */
export default {
  /* 定义组件的时候 data必须是一个函数   */
  data(){
    return {
      /* 返回一个movies数组  */
      movies:[]
    }
  },
  /* 钩子函数  获取数据 */
  mounted(){
   movieModel.getTop250().then(res=>{
     
     var subjects=res.subjects;
     this.movies=subjects;
   })
  },
  /* 2. 注册 */
  components:{
    MovieItem
  }
};
</script>
<style scoped>
#home{
  display: flex;
  flex-wrap: wrap;
  padding:100px;
  justify-content: space-between;
}
</style>



