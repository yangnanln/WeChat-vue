var base_url="http://t.yushu.im/v2/movie/";
class HTTP{
    request({url,dara={},method="GET",success}){
        wx.request({
            url: base_url+url,
            header: {
                'Content-Type': 'application/json'
            },
            success: (res)=> {
                success(res)
            }
        })
    }
}
export {HTTP};