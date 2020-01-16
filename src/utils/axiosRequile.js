import axios from "axios";

var req = axios.create({
  baseURL: "http://net-music.penkuoer.com/",
  timeout: 15000
});
// -----------------------------登录注册--------------------------------------
//获取用户详情
export function getMusicuserdetail(id) {
  return req({ method: "get", url: "user/detail", params: { uid: id } });
}
//----------------------------------------------------------------------------------

// --------------------------歌曲相关内容的获取--------------------------------------
// 获取音乐 url
export function getMusicurl(id) {
  return req({ method: "get", url: "/song/url", params: { id: id } });
}
// 获取歌曲详情,歌名，歌手名，歌曲id
export function getMusicdetail(id) {
  return req({ method: "get", url: "/song/detail", params: { ids: id } });
}
//获取榜单歌曲列表
export function getMusictoplist(id) {
  return req({ method: "get", url: "/top/list", params: { idx: id } });
}
//获取歌曲评论
export function getMusiccommentmusic(id) {
  return req({ method: "get", url: "comment/music", params: { id: id } });
}
//获取歌词
export function getMusiclyric(id) {
  return req({ method: "get", url: "/lyric", params: { id: id } });
}
