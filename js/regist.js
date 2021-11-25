setInterval(function () {
    var endtime = new Date("2021/12/10");
    var date = new Date();
    var timer1 = endtime.getTime() - date.getTime();
    var date_r = date.getDate();
    date_r < 10 ? date_r = '0' + date_r : date_r = date_r;
    var h = date.getHours();
    h < 10 ? h = '0' + h : h = h;
    var m = date.getMinutes();
    m < 10 ? m = '0' + m : m = m;
    var s = date.getSeconds();
    s < 10 ? s = '0' + s : s = s;
    var timer1 = '离申请结束还有' + date_r + '天' + h + '时' + m + '分' + s + "秒";
    var p = document.getElementsByClassName('time')[0];
    p.innerHTML = timer1;

}, 1000);
function clk() {
    $.ajax({
        type: 'get',
        url: 'http://192.168.31.5:3000/play/new',
        success: function (res) {
            console.log(res);
            show(res)
        }
    })
}
function show(data) {
    $('.footer1>img')[0].src = data[0][0].img;
}