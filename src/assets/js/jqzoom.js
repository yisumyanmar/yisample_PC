
// 获取要操作的元素
var smallbox = $('.small-box .mask')
var smallimg = $('.small-box img')
var square = $('.square')
var bigbox = $('.big-box')
var bigimg = $('.big-box img')
var imgs = $('.items img')

// 鼠标经过图片列表显示被选中，实现图片切换
//      for(var i = 0; i < imgs.length; i++){
//      	console.log(i)
//          imgs[i].onmouseover = function(){
//              for(var j = 0; j < imgs.length; j++){
//                  imgs[j].className = '';
//              }
//              this.className = 'active';
//
//              //改变对应的图片链接
//              smallimg.src = this.getAttribute('data-small');
//              bigimg.src = this.getAttribute('data-big');
//          };
//      }
$(function () {
  // 鼠标移入放大器显示并设置选中框的大小
  $('.small-box .mask').onmouseover(function () {
    $('.square').style.display = 'block'
    $('.big-box').style.display = 'block'
    // 位置w/smallimg.w = bigbox.w/bigimg.w
    //          $('.square').style.width = $('.big-box').offsetWidth * $('.small-box img').offsetWidth/$('.big-box img').offsetWidth + 'px';
    //          $('.square').style.height = $('.big-box').offsetHeight * $('.small-box img').offsetHeight/$('.big-box img').offsetHeight + 'px';
  })
  // 鼠标移出放大器隐藏
  $('.small-box .mask').mouseout(function () {
    $('.square').style.display = 'none'
    $('.big-box').style.display = 'none'
  })

  // 放大器移动
  // 获取鼠标的位置
  $('.small-box .mask').mousemove(function (ev) {
    var oEvent = ev || event
    var x = oEvent.offsetX - $('.square').offsetWidth / 2
    var y = oEvent.offsetY - $('.square').offsetHeight / 2

    if (x < 0) {
      x = 0
    }
    if (x > $('.small-box .mask').offsetWidth - $('.square').offsetWidth) {
      x = $('.small-box .mask').offsetWidth - $('.square').offsetWidth
    }
    if (y < 0) {
      y = 0
    }
    if (y > $('.small-box .mask').offsetHeight - $('.square').offsetHeight) {
      y = $('.small-box .mask').offsetHeight - $('.square').offsetHeight
    }

    // 给选中框定位
    $('.square').style.left = x + 'px'
    $('.square').style.top = y + 'px'

    // 给放大器定位  x/? = smallimg.w/bigimg.w
    $('.big-box img').style.top = -y * $('.big-box img').offsetWidth / $('.small-box img').offsetWidth + 'px'
    $('.big-box img').style.left = -x * $('.big-box img').offsetHeight / $('.small-box img').offsetHeight + 'px'
  })

  // 通过名称查找某个元素
  function $ (name) {
    return document.querySelector(name)
  }
  // 通过名称查找相同的一组数据
  function $all (name) {
    return document.querySelectorAll(name)
  }
})
