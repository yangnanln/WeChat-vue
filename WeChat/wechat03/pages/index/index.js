// pages/index/index.js
import {MovieModel} from "../../models/MovieModel";
const movieModel =new MovieModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    total:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    /* http("top250",this.handleData) */

    movieModel.getTop250(res=>{
      this.handleData(res)
    })
  },

  onReachBottom(){
    var length=this.data.movies.length;
    if(length<this.data.total){
      wx.showLoading();
     /*  http("top250?start="+length+"&count=20",this.handleData); */
      movieModel.getOnBottom(length,res=>{
        this.handleData(res)
      })
    }
  },
onPullDownRefreash(){
  this.setData({
    movies:[]
  })
  movieModel.getTop250(res=>{
    this.handleData(res)
  })
},


  onPullDownRefreash(){
    this.setData({
      movies:[]
    })
    
  },

  handleData(res){
    var movies=[];
    var subjects=res.data.subjects;
    subjects.forEach(item => {
     //console.log(item);
     var imageUrl=item.images.large;
     var title=item.title.slice(0,6);
     var average=item.rating.average;
     var id =item.id;
    /*  console.log(id); */
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
   total:res.data.total
  })

  wx.hideLoading();
   }
   
 
})