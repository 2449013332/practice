/**
 * 防抖函数:
   fn 是需要防抖处理的函数 
   delay 是时间间隔 
**/
function debounce(fn, delay) {
  // 通过闭包缓存一个定时器 id
  let timer;
  // 触发事件回调时执行这个返回函数
  return function () {
    // 如果已经设定过定时器就清空上一次的定时器
    if (timer) clearTimeout(timer);
    // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
