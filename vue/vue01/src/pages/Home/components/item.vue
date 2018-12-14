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
        /* 接受父组件传来的参数 */
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