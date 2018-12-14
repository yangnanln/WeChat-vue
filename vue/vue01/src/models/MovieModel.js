import {HTTP} from "./HTTP";
class MovieModel extends HTTP{
    getTop250(){
        return this.request({
            url:"top250"
        })
    }
}
export {MovieModel}