window.onload=function(){
    //主页样式显示
    $("#app").css('display','block');//元素显示
   /* $("#app").html("<strong>"+data.name+"</strong>");*/
            //语录接口 接口来自 韩小韩
    $.post("https://api.vvhan.com/api/ian?type=json",{/*type:"f"*/},function(result){ //http://api.kieng.cn/inaword
        $("#wbk").html(result.ishan);
    });
        //获取qq头像昵称
    $.get("https://api.vvhan.com/api/qq",{qq:"26290976"},function(data){
        console.log(data);
        $("#imgDiv").html("<a  href=\"http://wpa.qq.com/msgrd?v=3&uin=26290976&site=qq&menu=yes\" target=\"_blank\">\n" +
            "            <img class=\"pic \" style=\"border-radius:50%;max-width:100%;max-height:100%;\" src=\"#\">\n" +
            "            </a>");
        $(".pic").attr("src",data.imgurl);
        $("#bt").html("<strong>"+data.name+"</strong>");

    });




    show_date_time();
}
//屏蔽鼠标右键
document.oncontextmenu = function () {
    alert("禁止右键！")
    return false;
}
document.onkeydown = function () {
    var e = window.event || arguments[0];
    //屏蔽F12
    if (e.keyCode == 123) {
        alert("禁止f12");
        return false;
        //屏蔽Ctrl+Shift+I
    } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
        alert("禁止Ctrl+Shift+I");
        return false;
        //屏蔽Shift+F10
    } else if ((e.shiftKey) && (e.keyCode == 121)) {
        alert("禁止Shift+F10");
        return false;
    }
};


function sjyy() {
    //语录接口 接口来自 韩小韩
    $.post("https://api.vvhan.com/api/ian?type=json",{/*type:"f"*/},function(result){ //http://api.kieng.cn/inaword
        $("#wbk").html(result.ishan);
    });
}
function show_date_time(){
    window.setTimeout("show_date_time()", 1000);
    BirthDay=new Date("11-03-2019 12:12:24");//建站日期
    today=new Date();
    timeold=(today.getTime()-BirthDay.getTime());
    sectimeold=timeold/1000
    secondsold=Math.floor(sectimeold);
    msPerDay=24*60*60*1000
    e_daysold=timeold/msPerDay
    daysold=Math.floor(e_daysold);
    e_hrsold=(daysold-e_daysold)*-24;
    hrsold=Math.floor(e_hrsold);
    e_minsold=(hrsold-e_hrsold)*-60;
    minsold=Math.floor((hrsold-e_hrsold)*-60);
    seconds=Math.floor((minsold-e_minsold)*-60);
    momk.innerHTML=daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒" ;
}
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove();
            });
    });
});
