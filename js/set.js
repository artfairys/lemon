// 搜索框取消高
function blurWd() {
    $("body").removeClass("onsearch");
    //隐藏输入
    $(".wd").val("");
    //隐藏搜索建议
    $("#keywords").hide();
}

// 搜索建议提示
function keywordReminder() {
    var keyword = $(".wd").val();
    if (keyword != "") {
        $.ajax({
            url: 'https://suggestion.baidu.com/su?wd=' + keyword,
            dataType: 'jsonp',
            jsonp: 'cb', //回调函数的参数名(键值)key
            success: function (data) {
                //获取宽度
                $("#keywords").css("width", $('.sou').width());
                $("#keywords").empty().show();
                $.each(data.s, function (i, val) {
                    $('#keywords').append(`<div class="keyword" data-id="${i + 1}"><i class='iconfont icon-sousuo'></i>${val}</div>`);
                });
                $("#keywords").attr("data-length", data.s["length"]);
                $(".keyword").click(function () {
                    $(".wd").val($(this).text());
                    $("#search-submit").click();
                });
            },
            error: function () {
                $("#keywords").empty().show();
                $("#keywords").hide();
            }
        })
    } else {
        $("#keywords").empty().show();
        $("#keywords").hide();
    }
}

// 搜索框数据加载
function searchData() {
    var se_default = getSeDefault();
    var se_list = getSeList();
    var defaultSe = se_list[se_default];
    if (defaultSe) {
        $(".search").attr("action", defaultSe["url"]);
        $("#icon-se").attr("class", defaultSe["icon"]);
        $(".wd").attr("name", defaultSe["name"]);
    }

    // 判断窗口大小，添加输入框自动完成
    // var wid = $("body").width();
    // if (wid < 640) {
    //     $(".wd").attr('autocomplete', 'off');
    // } else {
    //     $(".wd").focus();
    //     focusWd();
    // }
}


// 设置-搜索引擎列表加载
function setSeInit() {
    var se_default = getSeDefault();
    var se_list = getSeList();
    var html = "";
    for (var i in se_list) {
        var tr = `<div class='se_list_div'><div class='se_list_num'>${i}</div>`;
        if (i === se_default) {
            tr = `<div class='se_list_div'><div class='se_list_num'>
            <i class='iconfont icon-home'></i></div>`;
        }
        tr += `<div class='se_list_name'>${se_list[i]["title"]}</div>
        <div class='se_list_button'>
        <button class='set_se_default' value='${i}' style='border-radius: 8px 0px 0px 8px;'>
        <i class='iconfont icon-home'></i></button>
        <button class='edit_se' value='${i}'>
        <i class='iconfont icon-xiugai'></i></button>
        <button class='delete_se' value='${i}' style='border-radius: 0px 8px 8px 0px;'>
        <i class='iconfont icon-delete'></i></button></div>
        </div>`;
        html += tr;
    }
    $(".se_list_table").html(html);
}






$(document).ready(function () {
    // 点击事件
    $(document).on('click', function (e) {
        // 选择搜索引擎点击
        if ($(".search-engine").is(":hidden") && $(".se").is(e.target) || $(".search-engine").is(":hidden") && $("#icon-se").is(e.target)) {
            if ($(".se").is(e.target) || $("#icon-se").is(e.target)) {
                //获取宽度
                $(".search-engine").css("width", $('.sou').width() - 30);
                //出现动画
                $(".search-engine").slideDown(160);
            }
        } else {
            if (!$(".search-engine").is(e.target) && $(".search-engine").has(e.target).length === 0) {
                $(".search-engine").slideUp(160);
            }
        }

        // 自动提示隐藏
        if (!$(".sou").is(e.target) && $(".sou").has(e.target).length === 0) {
            $("#keywords").hide();
        }
    });

    // 点击搜索引擎时隐藏自动提示
    $(document).on('click', '.se', function () {
        $('#keywords').toggle();
    });

    // 恢复自动提示
    $(document).on('click', '.se-li', function () {
        $('#keywords').show();
    });

    // 自动提示 (调用百度 api）
    $('.wd').keyup(function (event) {
        var key = event.keyCode;
        // 屏蔽上下键
        var shieldKey = [38, 40];
        if (shieldKey.includes(key)) return;
        keywordReminder();
    });

    // 点击自动提示的搜索建议
    $("#keywords").on("click", ".wd", function () {
        var wd = $(this).text();
        $(".wd").val(wd);
        $(".search").submit();
        //隐藏输入
        $(".wd").val("");
        $("#keywords").hide();
    });

    // 自动提示键盘方向键选择操作
    $(".wd").keydown(function (event) { //上下键获取焦点
        var key = event.keyCode;
        if ($.trim($(this).val()).length === 0) return;

        var id = $(".choose").attr("data-id");
        if (id === undefined) id = 0;

        if (key === 38) {
            /*向上按钮*/
            id--;
        } else if (key === 40) {
            /*向下按钮*/
            id++;
        } else {
            return;
        }
        var length = $("#keywords").attr("data-length");
        if (id > length) id = 1;
        if (id < 1) id = length;

        $(".keyword[data-id=" + id + "]").addClass("choose").siblings().removeClass("choose");
        $(".wd").val($(".keyword[data-id=" + id + "]").text());
    });
});