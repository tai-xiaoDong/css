let html = document.querySelector('#html');//通过css选择器找到这个元素
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人
* 接下来我要演示一下我的前端功底
* 首先我要准备一个div
**/
#div1{
    border:1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把div变成一个八卦图
* 注意看好了
* 首先，把div变成一个圆
**/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0,5);
    border: none;
}
/*八卦是阴阳形成的
* 一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
     rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);

}
/*加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform: transLateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform: transLateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%,
     rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = '';//缓存屏幕上显示的代码
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            //如果是回车就不照抄
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
            //如果不是回车就照搬
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 999999)
        if (n < string.length - 1) {
            //不是最后一个
            n += 1;
            step();
        }
    }, 50);
};
//每过一秒n的值变大1，并且重新插入span标签显示
//加入了if判断，可以控制什么时候终止step的执行
//由于setTimeout只会执行一次，所以将step放进来嵌套使用
step();
// setInterval(() => {
//     n = n + 1;
//     demo.innerHTML - string.substring(0, n)
// }, 400);




