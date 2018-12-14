# 		一、Hello World

### 1.1 导包

~~~html
 <script src="https://cdn.bootcss.com/vue/2.5.18-beta.0/vue.js"></script>
~~~

### 1.2 div

~~~HTML
 <div id="app">
        <!-- @click  点击事件 -->
        <p @click="handle">{{msg}}</p>
        
    </div>
~~~

### 1.3 script

~~~js
	<script>
        /* new Vue   new个一个Vue的实例 */
        var vm=new Vue({
            /* 挂载点 */
            el:"#app",
            /* 数据  作用域 在挂载点里面 */
           
            data:{
                msg:"hello world"
            },
            methods:{
                handle(){
                   this.msg="change"
                }
            },
            template:""
        })
    </script>
~~~

# 二、模板

~~~js
<div id="app"></div>

<script>
        new Vue({
            el:"#app",
            data:{
                msg:"hello"
            },
            /* 挂载点中的内容就是模板 */
            template:"<p @click='handle'>{{msg}}</p>",
            methods:{
                handle(){
                    console.log(1)
                }
            }
        })
</script>
~~~

# 三、v-if

在div中

~~~html
<div id="app">

        <p v-if="isShow" :style="color">hello</p>
        
        <button @click="handle">切换</button>
    </div>
~~~

在scripe中

~~~js
<script>
        new Vue ({
            el:"#app",
            data:{
                isShow:false,
                color:{
                    background:"red"
                }
            },
            methods:{
                handle(){
                    this.isShow=!this.isShow
                }
            }
        })
    </script>
~~~

# 四、v-html和v-text

~~~html
<body>
    <div id="app">
        <h1 v-html="msg"></h1>
        <h1 v-text="msg"></h1>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                msg:"<p>hello</p>"
            }
        })
    </script>
</body>
~~~

# 五、计算属性

~~~html
<div id="app">
        {{sum}}
    </div>

    <script>
        var vm=new Vue({
            el:"#app",
            data:{
                num1:10,
                num2:20,
                
            },
            computed:{ // computed  计算
                sum(){
                    return this.num1+this.num2
                }
            },
            updated(){  //当数值改变的时候触发的方法
                console.log(this.sum)
            }
        })
    </script>
~~~

# 六、watch



~~~html
<body>
    <div id="app">
        <!-- {{sum()}} -->
        {{sum}}
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                num1:10,
                num2:20,

                sum:30,
                
            },
            /* 监听 data里面的某个值改变的时候触发 */
            watch:{
                num1(){
                    this.sum=this.num1+this.num2
                },//es6的语法
                num2:function(){
                    this.sum=this.num1+this.num2
                }
            }
           /*  methods:{
                sum:function(){
                    return this.num1+this.num2
                }
            } */
        })
    </script>
</body>
~~~

# 七、get,set

~~~html
<body>
    <div id="app">
        <p @click="handle">{{sum}}</p>
    </div>
    <script>
        var vm=new Vue({
            el:"#app",
            data:{
                num1:10,
                num2:20
            },
            computed:{
                sum:{
                    get(){
                        return this.num1+this.num2
                    },
                    set(value){
                        var arr=value.split(" ");
                        this.num1=arr[0]+"num1";
                        this.num2=arr[1]
                    }
                }
            },
            methods:{
                handle(){
                    this.sum="w d"
                }
            }
        })

        
    </script>

</body>
~~~

# 八、样式绑定

### 8.1

~~~html
<body>
    <div id="app">
          <!-- :class  动态类名， isShow 为true时，class值为show  显示样式        -->
        <p :class="{show:isShow}" @click="handle"> hello</p>
    </div>
    <script>
    
        var vm=new Vue({
            el:"#app",
            data:{
                isShow:false,
            },
            methods:{
                handle(){
                    this.isShow=!this.isShow
                }
            }
        })
    </script>

</body>

<style>
        .show{
            background: red
        }
</style>
~~~

### 8.2

~~~html
<body>
    <div id="app">
         <!-- 这里可以使用多个class名 -->
        <p :class="[isShow]" @click="handle">hello</p>
    </div>
    <script>
    
        var vm=new Vue({
            el:"#app",
            data:{
                isShow:"show",
                /* two:"two" */
            },
            methods:{
                handle(){
                    this.isShow=(this.isShow=="show")?"":"show"
                }
            }

        })
    </script>
</body>

<style>
        .show{
            color:red
        }
</style>
~~~

# 九、for

~~~html
<body>
    <div id="app">
        <!-- 对于数组，item 渲染的是值，index渲染的是 下标 -->
        <div v-for="(item,index) of arr">

            {{item}}--->{{index}}
        </div>
        <!-- 对于对象来说  item 渲染的是值，index渲染的是属性名 -->
        <div v-for="(item,index) of obj">

                {{item}}--->{{index}}
            </div>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                arr:[1,2,3],
                obj:{name:"Lucy",age:20,sex:"male"}
            }
        })
    </script>
</body>
~~~

# 十、获取接口中的数据

利用ajax 获取数据  ，vue不推荐使用ajax

~~~html
 <div id="app">

            <div class="item" v-for="(item,index) of movies ">
                <img :src="item.imgUrl" alt="">
                <h6>{{item.title}}</h6>
            </div>
</div>


  <script>
           new Vue({
               el:"#app",
               data:{
                   movies:[]
               },
               /* 钩子函数  在发送请求后，拿回数据 */
               mounted(){
                   $.ajax({
                       url:"https://douban.uieee.com/v2/movie/top250",
                        type:"GET",
                        dataType:"jsonp",
                        success:res=>{// res 全部的json数据
                            var subjects=res.subjects;  //获取 json数据中的subjects数据  是个数组
                            var movies=[]
                            subjects.forEach(res=>{   //遍历每一个subjects数据获取  title imageUrl
                                var title=res.title;
                                var imgUrl=res.images.small;  
                                var temp={   //将  title和imageUrl 放到temp对象中
                                    title,
                                    imgUrl
                                }
                                movies.push(temp); //将temp放到movies数组中
                            })
                            console.log(movies);
                            this.movies=movies  //将movies的值赋给  data中的movies
                        }
                        
                    
                   })
               }
           })
       </script>


<style>
        *{margin: 0;padding: 0}
        .item img{
            width: 100px;
        }
        .item{
            margin-top: 10px;
        }
        #app{
            width: 398px;
            margin-left: auto;
            margin-right: auto;

            display: flex;
            flex-wrap: wrap;
            justify-content: space-between

        }
        
    </style>
~~~



# 十一、scroll

~~~HTML
<body>
    <div id="app">
        <div class="navbar" :style="filter">
            导航
        </div>

        <div class="container"></div>
    </div>
    <script>
    
        new Vue({
            el:"#app",
            data:{
                filter:{
                    opacity:0
                }
            },
            mounted(){
                var self=this;
                window.onscroll=function(){
                    /* 获取滚动条的位置 scroll 滚动 */
                    var top=document.documentElement.scrollTop
                    var opacity=top/200;
                    if(opacity>=1){
                        opacity=1
                    }
                    
                    console.log(opacity)
                    /* 这里不能直接用this.opacity  this在这里指代的是window  所以在前面讲this赋给self */
                    self.filter.opacity=opacity
                }
            }
        })
        
    </script>
</body>

<style>
        *{margin: 0;padding: 0}
        .navbar{
            height: 80px;
            text-align: center;
            background: pink;

            position: fixed;
            width: 100%;
            left: 0;
            right: 0;
        }
        .container{
            height:2000px ;
        }
    </style>
~~~

# 十二、组件

### 12.1组件基础

~~~html
<div id="app">
        <!-- 3. 使用组件 -->
        <item :word="word"></item>
    </div>
    <script>
        /* 1. 定义组件 */
        var item={
            /* 通过Prop 向子组件传递数据  在下面的模板中就能使用该数据
            一个组件默认可以拥有人任意数量的prop ，任何值都可以传递给prop
            在组件实例中访问这个值，就像访问data中的数据一样 */
            props:{
                word:{
                    type:String
                }
            },
            /* 定义组件的时候，data选项必须是一个函数，
            因此每一个实例可以维护一份被返回对象的独立的拷贝
             */
            data(){
                return{
                    msg:"hello world"
                }
            },
            /* 模板   根元素
                每个组件必须只有一个根元素  可以将模板中的内容包裹在一个父元素中

            */
            template:"<div>{{msg}}{{word}}</div>"
        }

        new Vue({
            el:"#app",
            data:{
                word:"vue hen niu bi "
            },
            /* 2. 注册组件   局部注册  在其子组件中不可用*/
            components:{
                item
            },
            
        })
    </script>
~~~

### 12.2 父组件向子组件传参

~~~html
<body>
    <div id="app">
        <item :word="word"></item>
    </div>

    <script>
        /* 父组件向子组件传参 */
        var item={

            props:{
                /* 接受父组件传过来的参数 */
                word:{
                    type:String
                }
            },
            data(){
                return {
                    msg:"hello"
                }
            },
            template:"<div>{{msg}}{{word}}</div>"
        }

        new Vue({
            el:"#app",
            data:{
                word:"你好呀"
            },
            components:{
                item
            }
        })
    </script>
</body>
~~~

### 12.3 子组件向父组件传参

~~~html
<body>
    <div id="app">
        <!-- 在子组件中获取事件名  定义函数 -->
       <item @handle="handleClick"></item>
    </div>
       
    <script>

        var item = {
            data(){
                return {
                    msg:"孩子啊"
                }
            },
            template:"<div @click='handleClick'>{{msg}}</div>",
            methods:{
                /* 定义方法，将子组件的数据传入父组件 */
                handleClick(){
                    /* 给父组件自定义一个时间，向父组件传参 
                        this.$emit  作用就是触发自定义事件
                        子组件可以使用$emit触发父组件的自定义事件
                    */
                    this.$emit("handle",this.msg)
                }
            }
        }
        new Vue({
            el:"#app",
            components:{
                item
            },
            methods:{
                /* 定义函数，options是获取到的子组件的数据 */
                handleClick(options){
                    console.log(options)
                }
            }
        })
    </script>
</body>
~~~

# 十三、使用vue temp 实现一个小实例

### 13.1 获取vue模板

导入模板到vc-code，在vc-code中命令行输入 npm i  安装依赖

再输入npm run  serve 运行项目

### 13.2 models 下的HTTP.js

~~~js
import axios from "axios-jsonp-pro"
// 如果需要跨越使用 import axios from 'axios-jsonp-pro'
var baseURL = 'https://douban.uieee.com/v2/movie/';
class HTTP {
    request({
        url,
        method = "jsonp",
        data = {},
        params = {}
    }) {
        return axios({
            method,
            url:baseURL+url,
            data,
            params
        });
    }
}
export {
    HTTP
}
~~~

### 13.3medels 下的MovieModel.js

~~~js
import {HTTP} from "./HTTP";
class MovieModel extends HTTP{
    getTop250(){
        return this.request({
            url:"top250"
        })
    }
}
export {MovieModel}
~~~

### 13.4 创建components文件

创建字子组件

~~~vue
<template>
    <div>
        <div class="container">

        
            <img :src="movie.images.small"/>
            <p>{{movie.title}}</p>
        </div>
    </div>
</template>


<script>
    export default{
        name:"MovieItem",
        props:{
            movie:{
                type:Object
            }
        }
    }
</script>
<style scoped>
    .container img{
        width:200px;
    }
    .container{
    margin-top:20px;
}
</style>
~~~

### 13.5父组件

home.vue

~~~vue
<template>
  <div id="home">
     
      
      <MovieItem v-for="(item,index) of movies " :key="index" :movie="item"></MovieItem>
  </div>
</template>
<script>
/* import {HTTP} from '../../models/HTTP';
    let http =new HTTP();*/
import {MovieModel} from "../../models/MovieModel"
const movieModel =new MovieModel();
/* 1. 引入 */
import MovieItem from "./components/item"

export default {

  data(){
    return {
      movies:[]
    }
  },
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

~~~

# 十四 vue中的路由怎么实现

### 14.1  新建一个跳转页面

这里以跳转Detail.vue 为例

### 14.2 注册

在`router.js`中对要跳转的页面进行注册

如果路由页面要传值，也要在path中注册

~~~js
import Home from '@/pages/Home/Home.vue';
import Detail from "@/pages/Detail.vue";

 routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      /* 配置 */
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ],
~~~

### 14.3通过事件跳转到对应的页面

~~~vue
//假设在item.vue页面跳转
<div  @click="handleClick"></div>

methods:{
            handleClick(){
                var id=this.movie.id
                /* 传入id */
                this.$router.push('/detail/'+id)
            }
        }
~~~



### 14.4在跳转页面接受传递过来的参数

~~~vue

 mounted(){
         
            var id=this.$route.params.id;
           
            moviemodel.getDetail(id).then(res=>{
               var title=res.title;
               var imgUrl=res.images.small;

               this.title=title;
               this.imgUrl=imgUrl
            })

        }
~~~























