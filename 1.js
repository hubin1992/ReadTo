var promId;
var doSignUrl = "//hd" + cookieDomain + "/promotion/signIntegral/website/sign/doSign.do";
var getSignIntegralInfoUrl = "//hd" + cookieDomain + "/promotion/signIntegral/website/sign/getSignIntegralInfo.do";
var doExchangeUrl = "//hd" + cookieDomain + "/promotion/signIntegral/website/sign/doExchange.do";
var signInitUrl = "//prom.mobile" + cookieDomain + "/wap/promotion/promscms/salevD9FSZ3LrcU.jsp";
var acScrollTime = null;
var acShareState = 0;
$.fn.scrollForever = function(e) { var t = { placeholder: 0, dir: "left", container: "ul", inner: "li", speed: 1e3, delayTime: 0, continuous: true, num: 1 }; var n = $.extend({}, t, e); var a = n.placeholder; var i = n.dir; var r = n.speed; var l = n.Time; var o = n.num; var s = n.delayTime; return this.each(function() { var e = $(this); var t = e.find(n.container); var l = t.find(n.inner); var c = l.length; var d, g;

    function u() { if (n.continuous) { if (i == "left") { d = l.outerWidth() * c;
          t.css("width", 2 * d);
          l.clone().appendTo(t) } else if (i == "top") { d = l.outerHeight() * c;
          t.css("height", 2 * d);
          l.clone().appendTo(t) } } else { if (i == "left") { a = a != 0 ? a : l.outerWidth() * o;
          d = l.outerWidth() * (c + 1);
          t.css("width", d) } else if (i == "top") { a = a != 0 ? a : l.outerHeight() * o;
          d = l.outerHeight() * (c + 1);
          t.css("height", d) } } } u();

    function m() { if (n.continuous) { if (i == "left") { g = e.scrollLeft(); if (g >= d) { e.scrollLeft(0) } else { e.scrollLeft(g + 1) } } else if (i == "top") { g = e.scrollTop(); if (g >= d) { e.scrollTop(0) } else { e.scrollTop(g + 1) } } } else { if (i == "left") { t.animate({ marginLeft: "-" + a }, r, function() { t.css({ marginLeft: 0 }).find(n.inner + ":lt(" + o + ")").appendTo(t) }) } else if (i == "top") { t.animate({ marginTop: "-" + a }, r, function() { t.css({ marginTop: 0 }).find(n.inner + ":lt(" + o + ")").appendTo(t) }) } } } var h = n.continuous == true ? 20 : 2e3;
    s = s == 0 ? h : s;
    clearInterval(acScrollTime);
    acScrollTime = setInterval(m, s);
    e.hover(function() { clearInterval(acScrollTime) }, function() { acScrollTime = setInterval(m, s) }) }) };
var util = { trim: function(e) { return e.replace(/(^\s*)|(\s*$)/g, "") }, strToArr: function(e, t) { return e.split(t) }, fitPlaceholder: function() { if ($.browser.version && $.browser.version < 10) { var e = document.getElementsByTagName("input"),
        t = "placeholder" in document.createElement("input"),
        n = function(e) { var t = e.getAttribute("placeholder"),
            n = e.defaultValue; if (n == "") { e.value = t } e.onfocus = function() { if (e.value === t) this.value = "" };
          e.onblur = function() { if (e.value === "") this.value = t } }; if (!t) { for (var a = 0, i = e.length; a < i; a++) { var r = e[a],
            l = r.getAttribute("placeholder"); if (r.type === "text" && l) { n(r) } } } } }, double12Toast: function(e) { var t = document.createElement("div");
    t.className = e.elName + " double12model"; if (e.conTextTip) { t.className += " double12modelTip" } var n = document.createElement("div");
    n.className = "close btn"; var a = document.createElement("div");
    a.className = "model-title";
    a.innerHTML = e.title || "确定"; var i = document.createElement("div");
    i.className = "model-container"; var r = document.createElement("div");
    r.className = "model-container-text-error";
    r.innerHTML = e.conTextError || ""; var l = document.createElement("div");
    l.className = "model-container-text"; var o = document.createElement("span");
    o.innerHTML = e.conTextL || "";
    o.className = "model-container-text-l"; var s = document.createElement("span");
    s.innerHTML = e.conTextR || "";
    s.className = "model-container-text-r"; var c = document.createElement("div");
    c.className = "model-container-subtext";
    c.innerHTML = e.conTextTip || ""; var d = document.createElement("div");
    d.className = "model-container-subtext";
    d.innerHTML = e.subcontent || ""; var g = document.createElement("div");
    g.className = "model-dbshare"; var u = document.createElement("div");
    u.className = "model-dbshare-text";
    u.innerHTML = "扫码到移动端赚分享翻倍积分哦~"; var m = document.createElement("a");
    m.setAttribute("href", e.urlLink || "");
    m.setAttribute("target", "_blank");
    m.setAttribute("data-code", "201812qu-4");
    m.className = "model-container-urltext";
    m.innerHTML = e.urltext || ""; var h = document.createElement("div");
    h.className = "model-foot"; var f = document.createElement("button");
    f.className = "btn";
    f.innerHTML = e.btnText || "确定"; var p = document.createElement("div");
    p.className = "double12model-bg";
    t.style.left = document.body.clientWidth / 2 - 190 + "px";
    p.style.width = document.body.clientWidth + "px";
    p.style.height = document.body.clientHeight + "px";
    t.appendChild(n);
    t.appendChild(a);
    t.appendChild(i);
    i.appendChild(r);
    i.appendChild(l);
    l.appendChild(o);
    l.appendChild(s);
    i.appendChild(c);
    i.appendChild(d);
    i.appendChild(m); if (e.urlShare && e.urlShare == 1) { i.appendChild(g);
      i.appendChild(u) } t.appendChild(h);
    h.appendChild(f);
    document.body.appendChild(p);
    document.body.appendChild(t) }, confirmClick: function(e) { this.double12Toast(e); var t = $(".double12model"); var n = $(".double12model-bg"); var a = null;
    a = setTimeout(function() { n.css("dispaly", "block");
      t.addClass("double12model-slide");
      clearTimeout(a) }, 300); var i = t.find(".btn");
    this.modelBtnClick({ btn: i, arr: [n, t], callback: e.callback }) }, hasModelFlag: false, modelBtnClick: function(e) { var t = this;
    e.btn.bind("click", function() { for (var n = 0; n < e.arr.length; n++) { e.arr[n].remove() } t.hasModelFlag = false;
      e.callback && e.callback() }) }, alert: function(e) { e.title = e.title || "提示";
    e.elName = e.elName || "sign_success_2";
    e.conTextL = e.conTextL || "";
    e.conTextError = e.conTextError || "返回数据错误！";
    e.conTextR = e.conTextR || "";
    e.btnText = e.btnText || "确定";
    e.subcontent = e.subcontent || "";
    this.confirmClick(e) }, calender: function(e) { var t = util.strToArr(e.startTime, "-")[0]; var n = util.strToArr(e.startTime, "-")[1]; var a = util.strToArr(e.startTime, "-")[2]; var i = util.strToArr(e.endTime, "-")[0]; var r = util.strToArr(e.endTime, "-")[1]; var l = util.strToArr(e.endTime, "-")[2]; var o = util.strToArr(e.changeStartTime, "-")[0]; var s = util.strToArr(e.changeStartTime, "-")[1]; var c = util.strToArr(e.changeStartTime, "-")[2]; var d = util.strToArr(e.changeEndTime, "-")[0]; var g = util.strToArr(e.changeEndTime, "-")[1]; var u = util.strToArr(e.changeEndTime, "-")[2]; var m = document.getElementById(e.id);
    m.innerHTML = ""; var h = new Date;
    h.setMonth(n - 1);
    h.setDate(1); var f = new Date(parseInt(t), parseInt(n), 0); var p = f.getDate(); var v = h.getDay(); if (v == 0) v = 7; for (var x = 0; x < v; x++) { var T = document.createElement("li");
      T.className = "blank";
      m.appendChild(T) } for (var x = 0; x < a - 1; x++) { var T = document.createElement("li"); var b = document.createElement("div");
      b.className = "date";
      T.appendChild(b);
      b.innerHTML = n + "月"; var C = document.createElement("div");
      C.className = "date-before";
      T.appendChild(C);
      C.innerHTML = x + 1;
      m.appendChild(T) } var h = new Date; if (n == r) { for (var x = a - 1; x < l; x++) { var T = document.createElement("li"); var D = document.createElement("div");
        D.className = "date";
        T.appendChild(D);
        D.innerHTML = n + "月" + (x + 1) + "日";
        T.className = "sign-day"; if (parseInt(h.getDate()) == x + 1) { T.className += " sign-day-click" } if (x + 1 >= c && x + 1 <= u) { T.className += " exchange-sign-day" } m.appendChild(T) } } else { for (var x = a - 1; x < p; x++) { var T = document.createElement("li"); var D = document.createElement("div");
        D.className = "date";
        T.appendChild(D);
        D.innerHTML = n + "月" + (x + 1) + "日";
        T.className = "sign-day"; if (s == n) { if (s == g) { if (x + 1 >= c && x + 1 <= u) { T.className += " exchange-sign-day" } } else { if (x + 1 >= c && x + 1 <= p) { T.className += " exchange-sign-day" } } } else {} if (parseInt(h.getDate()) == x + 1) { T.className += " sign-day-click" } m.appendChild(T) } for (var x = 0; x < l; x++) { var T = document.createElement("li"); var D = document.createElement("div");
        D.className = "date";
        T.appendChild(D);
        D.innerHTML = r + "月" + (x + 1) + "日";
        T.className = "sign-day"; if (s == n) { if (s < g) { if (x + 1 <= u) { T.className += " exchange-sign-day" } } } else { if (x + 1 >= c && x + 1 <= u) { T.className += " exchange-sign-day" } } if (parseInt(h.getDate()) == x + 1) { T.className += " sign-day-click" } m.appendChild(T) } } var h = new Date(parseInt(i), parseInt(r) - 1, parseInt(l)); var I = h.getDay(); var y = new Date(parseInt(i), parseInt(r), 0); var $ = y.getDate(); if (I < 6) { for (var x = 0; x < 7 - I - 1; x++) { var T = document.createElement("li"); var k = document.createElement("div");
        k.className = "date";
        T.appendChild(k);
        k.innerHTML = r + "月"; var S = document.createElement("div");
        S.className = "date-after";
        T.appendChild(S);
        S.innerHTML = x + 1 + (l - 0); if (x + 1 + (l - 0) <= $) { m.appendChild(T) } } } }, login: function(e) { if (loginData.loginStatus && loginData.loginStatus < 3) { $.ajax({ url: stageJsServer + "/gmlib/unit/g/1.0.0/g.min.js", dataType: "script", cache: true, success: function() { g.login(function() { e() }) } }) } } };

function signInitDataFn() 
{ $.ajax({ url: signInitUrl, type: "get", dataType: "JSONP", success: function(e) { e = JSON.parse(e); if (e.isSuccess != "Y") { util.alert({ conTextError: e.remark || "系统繁忙，稍后再试" }); return false } var t = e.templetList; 
var n, a, i; var r = "",l = ""; 
for (var o = 0; o < t.length; o++) { 
  if (t[o].templetCode == "floorPhotoTemplet") 
  { n = t[o] } 
  else if (t[o].templetCode == "imgTxtTemplet") { a = t[o].imgTxtTemplet.imgTxtList } else { i = t[o].textMarkTemplet.textMarkList } } promId = n.subTitleName; for (var o = 0; o < a.length; o++) { r += "<p>" + a[o].txtTitle + "</p>" } $(".ac-more-content").html(r); for (var o = 0; o < i.length; o++) { l += "<p>" + i[o].text + "</p>" } $(".exchange-rules").html(l);
      getSignIntegralInfo(getSignIntegralInfoUrl, promId, "#calender", "#countDetails") }, error: function() { util.confirmClick({ elName: "sign_fail", title: "签到失败", conTextError: data.remark || "过会儿再试试~" });
      util.hasModelFlag = true } }) }

function getSignIntegralInfo(e, t, n, a) { var n = $(n); var a = $(a);
  i();

  function i() { $.ajax({ url: e, type: "get", dataType: "JSONP", data: { promId: t }, success: function(e) { if (e.state == "no_start") { util.alert({ conTextError: "活动还未开始！" }) } else if (e.state == "end") { $(".ac-container").html("");
          $(".ac-container").addClass("ac-container-end") } else if (e.state == "no_login" || e.state == "success") { a.show();
          util.calender({ id: "calender", startTime: e.startDate, endTime: e.endDate, changeStartTime: e.exchangeStartDate, changeEndTime: e.exchangeEndDate }); var t = n.find(".sign-day"); if (e.exchangeState && e.exchangeState == 1 && e.exchangeData && e.exchangeData.length) { var i = "";
            $(".exchange-list ul").html(""); for (var r = 0; r < e.exchangeData.length; r++) { i += "<li>" + e.exchangeData[r] + "</li>" } $(".exchange-list ul").append(i);
            $(".exchange-list").show();
            $(".exchange-list").scrollForever({ continuous: false, dir: "top", container: "ul", inner: "li", delayTime: 3e3 }) } else { $(".exchange-list").hide() } if (e.userSignState == 1) { $("#signBtn").removeClass("signedBtn").addClass("signBtnClick").html("立即签到");
            $(".sign-day-click").removeClass("sign-day-click-no").addClass("signBtnClick") } else { $("#signBtn").addClass("signedBtn").removeClass("signBtnClick").html("今日已签到");
            $(".sign-day-click").addClass("sign-day-click-no").removeClass("signBtnClick");
            $("#signBtn").unbind("click");
            $(".sign-day-click").unbind("click") } $(".signed-days").find(".day").html(e.signDays);
          $(".exchange-points").find(".points").html(e.userIntegral); if (e.userIntegral > 10) { $(".exchange-points").find(".cur-yuan").html("您可兑换<span class='yuan'>" + e.exchangeAmount + "</span>元代金券哦") } else { $(".exchange-points").find(".cur-yuan").html("每10积分可以兑换1元代金券哦") } $(".exchange-points").find(".yuan").html(e.exchangeAmount); if (e.exchangeState && e.exchangeState == 1) { $(".exchange-btn").removeClass("cantexchange-btn");
            $(".exchange-btn").addClass("canexchange-btn") } else { $(".exchange-btn").addClass("cantexchange-btn");
            $(".exchange-btn").removeClass("canexchange-btn") } $(".cantexchange-btn").find(".exchange-input").attr({ placeholder: "兑换时间未到", disabled: "disabled" });
          $(".canexchange-btn").find(".exchange-input").attr({ placeholder: "请输入兑换的积分数量", disabled: false });
          $(".cantexchange-btn").find(".exBtn").unbind("click"); if (e.signDateData && e.signDateData.length && e.signDateData.length == t.length) { var l = e.signDateData; var o = new Date; var s = o.getFullYear(); var c = o.getMonth(); var d = o.getDate(); for (var r = 0; r < l.length; r++) { if (l[r].signState == "2") { var g = new Date(util.strToArr(l[r].signDate, "-")[0], util.strToArr(l[r].signDate, "-")[1] - 1, util.strToArr(l[r].signDate, "-")[2]); var u = new Date(util.strToArr(e.exchangeStartDate, "-")[0], util.strToArr(e.exchangeStartDate, "-")[1] - 1, util.strToArr(e.exchangeStartDate, "-")[2]); if (g.getTime() >= u.getTime()) { t.eq(r).addClass("exchange-signed-day");
                  t.eq(r).removeClass("signed-day") } else { t.eq(r).addClass("signed-day");
                  t.eq(r).removeClass("exchange-signed-day") } } else { var g = new Date(util.strToArr(l[r].signDate, "-")[0], util.strToArr(l[r].signDate, "-")[1] - 1, util.strToArr(l[r].signDate, "-")[2]); var u = new Date(parseInt(s), parseInt(c), parseInt(d)); if (g.getTime() < u.getTime()) { if (t.eq(r).hasClass("exchange-sign-day")) { t.eq(r).addClass("exchange-signnot-day") } else { t.eq(r).addClass("signnot-day") } } } } } else { util.alert({ conTextError: "返回数据错误！" });
            $("#signBtn").unbind("click");
            $("#calender").html(""); for (var r = 0; r < 21; r++) { $("#calender").append("<li></li>") } } if (e.shareState) { if (e.shareState == 1) { acShareState = 1 } else { acShareState = 2 } } var m = a.find(".count-details-list");
          m.removeClass("count-box-empty");
          m.html(""); var h = a.find(".count-box"); if (e.state == "no_login") { h.hide();
            a.hide() } else { h.show();
            a.show() } if (e.integralDetailData && e.integralDetailData.length > 0) { var f = e.integralDetailData; for (var r = 0; r < f.length; r++) { m.append("<li><div>" + f[r].operateDate + "</div><div>" + (f[r].operateType == 1 ? "签到" : f[r].operateType == 2 ? "兑换" : "分享") + "</div><div>" + (f[r].operateType == 1 || f[r].operateType == 3 ? "+" : "-") + f[r].operateIntegral + "</div></li>") } if (f.length < 4) { for (var r = 0; r < 4 - f.length; r++) { m.append("<li><div></div><div></div><div></div></li>") } } } else { m.html("您还未获得积分，赶快去签到赚积分吧~");
            m.addClass("count-box-empty") } a.find(".count-fen-all").html(e.cumulativeIntegral);
          a.find(".count-fen").html(e.exchangeIntegral) } } }) } }

function signFn(e, t, n) { getSignIntegralInfo(getSignIntegralInfoUrl, n, "#calender", "#countDetails"); if (!util.hasModelFlag) { $.ajax({ url: t, type: "get", dataType: "JSONP", data: { promId: n }, success: function(e) { if (e.state == "no_login") { util.login(function() { window.location.reload() }) } else if (e.state == "success") { var t = "",
            a = 0; if (acShareState == 1) { t = "sign_success sign_success_share";
            a = 1 } else { t = "sign_success";
            a = 2 } util.confirmClick({ elName: t, title: "签到成功", conTextL: "恭喜您获得 ", conTextR: e.signIntegral + "积分", subcontent: "(10积分可兑换1元优惠券)", urlShare: a, callback: function() { getSignIntegralInfo(getSignIntegralInfoUrl, n, "#calender", "#countDetails") } });
          util.hasModelFlag = true } else if (e.state == "already_signin") { util.confirmClick({ elName: "sign_fail", title: "签到失败", conTextError: e.remark || "你没有次数了~" });
          util.hasModelFlag = true } else { util.confirmClick({ elName: "sign_fail", title: "签到失败", conTextError: e.remark || "过会儿再试试~" });
          util.hasModelFlag = true } }, error: function() { util.confirmClick({ elName: "sign_fail", title: "签到失败", conTextError: data.remark || "过会儿再试试~" });
        util.hasModelFlag = true } }) } else { return false } }

function exChangeFn(e, t, n, a) { $.ajax({ url: t, type: "get", dataType: "JSONP", data: { promId: n, exchangeIntegral: a }, success: function(t) { if (t.state == "no_login") { util.login(function() { e.trigger("click") }) } else if (t.state == "success") { util.confirmClick({ title: "兑换成功", elName: "sign_success_2", conTextL: "恭喜您获得 ", conTextR: t.couponValue + "元优惠券", conTextTip: t.couponFullDiscount && "（消费满" + t.couponFullDiscount + "元可用）", subcontent: t.couponDescription, urltext: "立即查看优惠券", urlLink: "//myhome" + cookieDomain + "/member/gomeMyCoupon", callback: function() { $(".exchange-input").val("");
            util.fitPlaceholder();
            getSignIntegralInfo(getSignIntegralInfoUrl, n, "#calender", "#countDetails") } }) } else { util.confirmClick({ title: "兑换失败", elName: "sign_fail", conTextError: t.remark || "请稍后再试~" }) } }, error: function() { util.confirmClick({ title: "兑换失败", elName: "sign_fail", conTextError: data.remark || "请稍后再试~" }) } }) } $(function() { $(".exchange-head-link").find("a").attr("href", "//myhome" + cookieDomain + "/member/gomeMyCoupon"); var e = $(".ac-container").parent().parent(); var t = e.parent(); var n = t.parent();
  e.css("cssText", "width: auto !important; margin: 0px auto; overflow: hidden;");
  t.css("cssText", "width: auto !important; margin: 0px auto; overflow: hidden;");
  $(".ui-draggable, .ui-sortable").css("cssText", "width: auto !important; margin: 0px auto; overflow: hidden;");
  util.fitPlaceholder();
  $("#calender").html(""); for (var a = 0; a < 21; a++) { $("#calender").append("<li></li>") } signInitDataFn();
  $(".exchange-input").bind("keyup onafterpaste", function() { var e = $(this).val(); if (e == 0) e = ""; var t = $(".exchange-points").find(".points").html(); if (parseInt(e) > parseInt(t)) e = t; if (parseInt(e) > 10) e = e.substring(0, e.length - 1) + "0";
    e = e.replace(/\D/g, "").substring(0, 5);
    $(this).val(e) });
  $(".exchange-input").bind("focus", function() { $(".change-popBox").hide() });
  $(".exchange-btns").find(".exBtn").bind("click", function() { var e = $(this);
    $(".change-popBox").hide(); if (loginData.loginStatus && loginData.loginStatus < 3) { $.ajax({ url: stageJsServer + "/gmlib/unit/g/1.0.0/g.min.js", dataType: "script", cache: true, success: function() { g.login(function() { $(".exchange-input").val("");
            getSignIntegralInfo(getSignIntegralInfoUrl, promId, "#calender", "#countDetails") }) } }) } else { var t = $(".exchange-input").val(); var n = $(".exchange-btns").find(".change-popBox"); if (!t.length) { n.find(".content1").html("请输入您想要兑换的积分数量");
        n.find(".content2").html("");
        n.show() } else { if (parseInt(t) < 10) { n.find(".content1").html("最少10积分起兑");
          n.find(".content2").html("继续加油积攒您的积分吧");
          n.show() } else if (t == $(".exchange-input").attr("placeholder")) { n.find(".content1").html("请输入您想要兑换的积分数量");
          n.find(".content2").html("");
          n.show() } else { exChangeFn(e, doExchangeUrl, promId, t) } } } });
  $(".change-popBox").find(".popBtn").bind("click", function() { $(".change-popBox").hide() }) });
window.onload = function() { $(".signBtnClick").on("click", function() { signFn($(this), doSignUrl, promId) }) };