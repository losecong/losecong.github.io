var musicList = [
  '../video/晚夜微风问海棠',
  '../video/半壶纱',
  '../video/精卫',
 ' ../video/记念',
  '../video/阿嬷'
  // 更多音乐文件...
];

// 获取音频播放器的 DOM 元素
var audioPlayer = document.getElementById('audioPlayer');

// 随机播放音乐的函数
function playRandomMusic() {
  // 生成一个随机索引
  var randomIndex = Math.floor(Math.random() * musicList.length);
  // 更新音频源的 src 属性为随机选择的音乐文件
  audioPlayer.src = musicList[randomIndex];
  // 播放音乐
  audioPlayer.play();
}
