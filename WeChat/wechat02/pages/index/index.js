// pages/index/index.js
import {http} from "../../utils/http"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    totle:null
   
   },
   onLoad(){
     http("top250",this.handleData)
   },
   /* coming_soon */
   onReachBottom(){
     
     var len=this.data.movies.length;

     if(len<this.data.totle){
      wx.showLoading();
      http("top250?start="+length+"&count=20",this.handleData);

     }
       },

   handleData(res){
    var movies=[];
    var subjects=res.data.subjects;
    subjects.forEach(item => {
     // console.log(item);
     var imageUrl=item.images.large;
     var title=item.title.slice(0,6);
     var average=item.rating.average;
     var id =item.id;
     var temp={
       imageUrl,
       title,
       average,
       id
     };
     movies.push(temp)
   });  
  movies=this.data.movies.concat(movies)
  this.setData({
    movies,
    totle:res.data.totle
  })

  wx.hideLoading();
   }
 
})