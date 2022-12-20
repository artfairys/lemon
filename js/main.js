"use strict";
/* JavaScript written by johnsonran.cn */
var oUl = document.getElementById('keywords')
const version = "20w10b26";
const LSPAge = parseInt((new Date().getTime() - new Date("2020-10-25").getTime()) / 86400000);
const consoleColor = "color: #70C000; ";
const consoleLineHeight = "line-height: 20px; ";
const consoleFontFamily = "font-family: 'Microsoft Yahei',PingFangSC-Regular,Helvetica,sans-serif,'等线'; "
const consoleStyle1 = consoleColor + consoleFontFamily + consoleLineHeight;
const consoleStyle2 = consoleFontFamily + consoleLineHeight;
console.log("\n%cRhythm Start Page %cVersion " + version + "\n%c欢迎来到旋律起始页！\n%c _       _____  __  __  ______ \n| |     |_   _||  \\/  ||  ____|\n| |       | |  | \\  / || |__   \n| |       | |  | |\\/| ||  __|  \n| |____  _| |_ | |  | || |____ \n|______||_____||_|  |_||______|\n\n%c起始页已上线 %c" + LSPAge + "%c 天\n%c© 2020 Rhythm. All Rights Reserved.\n", consoleStyle1, consoleStyle2, consoleStyle1, consoleColor, consoleStyle1, consoleStyle2, consoleStyle1, consoleStyle2);
const backend = "index.html";
const ua = navigator.userAgent.toLowerCase();
const isIpad = ua.indexOf("ipad") != -1;
const isIphone = !isIpad && ua.indexOf("iphone") != -1;
const isAndroid = ua.indexOf("android") != -1;
const isMobile = isIphone || isAndroid;
const isEdge = ua.indexOf("edge/") != -1;
const isSafari = ua.indexOf("safari/") != -1 && ua.indexOf("chrome/") == -1;
const ypoctonod = [window[atob("bG9jYXRpb24=")], "aHJlZg=="];
const localVersion = localStorage.getItem("localVersion");
const isNotFirstRun = !!localVersion;
var lastModified0 = "";
var username = "";
var birthday = "";
var thePopUp;
var popUpClosing = false;
var currentAddingNav;
var selectedKeyword = -1;
var currentDeletingNav;
var currentEditingNav;
let theTextArea;
let currentSearchEngine = localStorage.getItem("searchEngPref");
var bgPreference = localStorage.getItem("bgPreference");
var cusWallpaper = localStorage.getItem("cusWallpaper");
var autoClrSearchBar = localStorage.getItem("autoClrSearchBar") == "on";
var openInNew = localStorage.getItem("openInNew") == "on";
var autoFocus = localStorage.getItem("autoFocus") == "on";
var hitokoto = localStorage.getItem("hitokoto") == "on";
var reduceMotion = (isEdge || isSafari) ? true : localStorage.getItem("reduceMotion") == "on";
var navLinksBlurEf = localStorage.getItem("navLinksBlurEf") == "on";
var autoDarkMode = localStorage.getItem("autoDarkMode") == "on";
var browserWarning = false;
//let snowEf = localStorage.getItem("snowEf");
var pushClass;
var pushTitle;
var pushContent;
var pushStartTime;
var pushStopTime;
window.oncontextmenu = () => {
	return false;
};
window.onkeydown = event => {
	if ((event.ctrlKey || event.metaKey) && event.keyCode == 83) {
		return false;
	} else if (input0.style.opacity != "0" && cover1.style.display != "block") {
		input0.focus();
	}
};

input0.oncontextmenu = event => {
		showSearchMenu(event);
}
input0.onkeydown = event => {
	switch (event.keyCode) {
		case 13:
			search();
			return false;
		case 38:
			selectKeyword(-1);
			return false;
		case 40:
			selectKeyword(+1);
			return false;
	}
};
input0.onfocus = () => {
	if (autoClrSearchBar === false) {
		input0.select();
	}
	if (hitokoto === true) {
		quotebox.style.opacity = "1";
	}
	searchOptBox.style.display = "block";
	input0.classList.add("foucs");
	sees.classList.add("search");
	setTimeout(() => {
		searchOptBox.style.opacity = "1";
		searchOptBox.style.top = innerWidth > 600 ? "270px" : "155px";
	}, 100);
	if (innerWidth <= 600) {
		title.style.top = "30px";
	}
	if (bgPreference == "Live") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "scale(1.1)";
		}
		liveBgBox.style.filter = "blur(10px)";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "scale(1.1)";
		}
		bgbox.style.filter = "blur(10px)";
	}
	if (bgPreference == "Live2") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "scale(1.1)";
		}
		liveBgBox.style.filter = "blur(10px)";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "scale(1.1)";
		}
		bgbox.style.filter = "blur(10px)";
	}
	if (bgPreference == "Live3") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "scale(1.1)";
		}
		liveBgBox.style.filter = "blur(10px)";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "scale(1.1)";
		}
		bgbox.style.filter = "blur(10px)";
	}
	if (bgPreference == "Live4") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "scale(1.1)";
		}
		liveBgBox.style.filter = "blur(10px)";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "scale(1.1)";
		}
		bgbox.style.filter = "blur(10px)";
	}
};





function searchCut() {
				window.getSelection().toString();
				document.execCommand("cut");
				input0.focus();
			}
function searchCopy() {
				window.getSelection().toString();
				document.execCommand("copy");
				input0.focus();
			}
function searchPaste(e, obj) {
				try {
					navigator.clipboard.readText().then(clipText => input0.value = input0.value + clipText);
				} catch(err) {
					tipBoxCopyPaste.style.left = e.clientX + 3 + "px";
					tipBoxCopyPaste.style.top = e.clientY + 3 + "px";
					showMenu(tipBoxCopyPaste);
				}
				input0.focus();
			}
function Input_Blur() {
	if (autoClrSearchBar === true) {
		
	} else {
		window.getSelection().empty();
	}
	if (hitokoto === true) {
		quotebox.style.opacity = "0";
		quotebox.style.animation = "none";
	}
	keywords.style.display="none"
	searchOptBox.style.opacity = "0";
	searchOptBox.style.top = "";
	input0.classList.remove("focus");
	sees.classList.remove("search");
	document.getElementById("input0").value="";
	setTimeout(() => {
		searchOptBox.style.display = "none";
		searchOptBox.style.top = "";
	}, 250);
	if (innerWidth <= 600) {
		title.style.top = "100px";
		input0.style.top = "";
	}
	if (bgPreference == "Live") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "";
		}
		liveBgBox.style.filter = "";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "";
		}
		bgbox.style.filter = "";
	}
	if (bgPreference == "Live2") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "";
		}
		liveBgBox.style.filter = "";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "";
		}
		bgbox.style.filter = "";
	}
	if (bgPreference == "Live3") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "";
		}
		liveBgBox.style.filter = "";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "";
		}
		bgbox.style.filter = "";
	}
	if (bgPreference == "Live4") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "";
		}
		liveBgBox.style.filter = "";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "";
		}
		bgbox.style.filter = "";
	}
	hideKeyword();
}

function keydata(keys) {
	for (let i = 0; i < searchSuggestionContainer.s.length; i++) {
		const newDiv = document.createElement("div");
		newDiv.innerText = searchSuggestionContainer.s[i];
		newDiv.onclick = () => {
			input0.value = searchSuggestionContainer.s[i];
			search();
		};
		keyword.appendChild(newDiv);
	}
	if (hitokoto === true) {
		quotebox.style.opacity = "0";
	}
	keyword.style.height = ((searchSuggestionContainer.s.length + 1) * 30) + "px";
}



 var oInput = document.getElementById('input0')
        var oUl = document.getElementById('keywords')
        oInput.oninput = function () {
            var value = oInput.value;
            var oScript = document.createElement('script');
            oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=show';
            document.body.appendChild(oScript);
            if(value == 0){
				oUl.style.display = 'none';
				oUl.style.opacity = "0"
				setTimeout(() => oUl.style.height = "10px",250)
				setTimeout(() => oUl.style.height = "auto",260)
				// showGreeting("nh")
				
			}
        }

        function show(data) {
            var s = data.s;
            var str = '';
            if (s.length > 0) {
				oUl.style.height = "30px"
				setTimeout(() => oUl.style.height = 30*s.length+30+"px",250)
				oUl.style.opacity = "1"
                oUl.style.display = 'block';
                s.forEach(function (ele, index) {
                    str += '<a href="https://www.baidu.com/s?wd=' + ele + '"><div>' + ele + '</div></a>';
                })
				const strs = input0.value;
				const urls = "https://fanyi.baidu.com/#en/zh/" + strs;
				oUl.innerHTML = "<a href="+urls+" ><div class=\'advSuggest'\><i class=\'iconfont'\>&#xe8f6;</i><span id=\'advSuggestContent'\>"+"翻译:&nbsp;&nbsp;&nbsp;"+strs+"</span><span class=\'keyTip'\>Alt+Enter</span></div></a>"+str;
                
            }else {
                oUl.style.display = 'none';
            }

        }
function search() {
	const str = input0.value;
	const finalStr = encodeURIComponent(str.replace("翻译：", ""));
	let url;
	if (/^[a-z]+:\/\/[a-z0-9_\-\/.#?=%]+$/i.test(str)) {
		open(str);
		Input_Blur();
		return false;
	} else if (str.indexOf("翻译：") != -1) {
		url = "https://fanyi.baidu.com/#en/zh/" + finalStr;
	} else {
		switch (currentSearchEngine) {
			case 'baidu':
				url = "https://www.baidu.com/s?word=" + finalStr;
				break;
			case 'bing':
				url = "https://cn.bing.com/search?q=" + finalStr;
				break;
			case 'google':
				url = "https://www.google.com/search?q=" + finalStr;
				break;
			case 'duckduckgo':
				url = "https://duckduckgo.com/?q=" + finalStr;
				break;
			case 'yandex':
					url = "https://yandex.com/search/?text=" + finalStr;
				break;
			case 'f搜':
				url = "https://fsoufsou.com/search?q=" + finalStr;
				break;
			case '搜狗':
					url = "https://www.sogou.com/web?query=" + finalStr;
				break;
			case 'qihao':
					url = "https://www.so.com/s?q=" + finalStr;
				break;
		}
	}
	if (openInNew) {
		open(url)
	} else {
		location.href = url;
	}
	setTimeout(() => Input_Blur(), 50);
}



function selectKeyword(delta) {
	const children = keyword.getElementsByTagName("div");
	if (selectedKeyword + delta >= children.length) {
		selectedKeyword = 0;
	} else if (selectedKeyword + delta < 0) {
		selectedKeyword = children.length - 1;
	} else {
		selectedKeyword += delta;
	}
	for (let i = 0; i < children.length; i++) {
		children[i].classList.remove("focus");
	}
	children[selectedKeyword].classList.add("focus");
	input0.value = children[selectedKeyword].innerText;
}

function switchSearchEng(searchEng) {
	switch (searchEng) {
		case 'baidu':
			localStorage.setItem("searchEngPref", "baidu");
			currentSearchEngine = "baidu";
			baidu.classList.add("selected");
			bing.classList.remove("selected");
			google.classList.remove("selected");
			duckduckgo.classList.remove("selected");
			yandex.classList.remove("selected");
			fsou.classList.remove("selected");
			sogou.classList.remove("selected");
			qihao.classList.remove("selected");
			document.getElementById("iconSearchEng").innerHTML="&#xe651;";
			navlinkTranslate.href = "https://fanyi.baidu.com/";
			navlinkMap.href = "https://map.baidu.com/";
			navlinkImage.href = "https://image.baidu.com/";
			break;
		case 'bing':
			localStorage.setItem("searchEngPref", "bing");
			currentSearchEngine = "bing";
			bing.classList.add("selected");
			baidu.classList.remove("selected");
			google.classList.remove("selected");
			duckduckgo.classList.remove("selected");
			yandex.classList.remove("selected");
			fsou.classList.remove("selected");
			sogou.classList.remove("selected");
			qihao.classList.remove("selected");
			document.getElementById("iconSearchEng").innerHTML="&#xe608;";
			navlinkTranslate.href = "https://cn.bing.com/translator/";
			navlinkMap.href = "https://cn.bing.com/maps/";
			navlinkImage.href = "https://cn.bing.com/images/";
			break;
		case 'google':
			localStorage.setItem("searchEngPref", "google");
			currentSearchEngine = "google";
			google.classList.add("selected");
			baidu.classList.remove("selected");
			bing.classList.remove("selected");
			duckduckgo.classList.remove("selected");
			yandex.classList.remove("selected");
			fsou.classList.remove("selected");
			sogou.classList.remove("selected");
			qihao.classList.remove("selected");
			document.getElementById("iconSearchEng").innerHTML="&#xe624;";
			navlinkTranslate.href = "https://translate.google.cn/";
			navlinkMap.href = "https://www.google.com/maps/";
			navlinkImage.href = "https://www.google.com/imghp";
			break;
		case 'duckduckgo':
				localStorage.setItem("searchEngPref", "duckduckgo");
				currentSearchEngine = "duckduckgo";
				duckduckgo.classList.add("selected");
				baidu.classList.remove("selected");
				bing.classList.remove("selected");
				google.classList.remove("selected");
				yandex.classList.remove("selected");
				fsou.classList.remove("selected");
				sogou.classList.remove("selected");
				qihao.classList.remove("selected");
				document.getElementById("iconSearchEng").innerHTML="&#xeb82;";
				navlinkTranslate.href = "https://translate.google.cn/";
				navlinkMap.href = "https://www.google.com/maps/";
				navlinkImage.href = "https://www.google.com/imghp";
				break;
		case 'yandex':
					localStorage.setItem("searchEngPref", "yandex");
					currentSearchEngine = "yandex";
					yandex.classList.add("selected");
					baidu.classList.remove("selected");
					bing.classList.remove("selected");
					google.classList.remove("selected");
					duckduckgo.classList.remove("selected");
					fsou.classList.remove("selected");
					sogou.classList.remove("selected");
					qihao.classList.remove("selected");
					document.getElementById("iconSearchEng").innerHTML="&#xe600;";
					navlinkTranslate.href = "https://translate.yandex.com/";
					navlinkMap.href = "https://www.yandex.com/maps/";
					navlinkImage.href = "https://yandex.com/images/";
					break;
		case 'f搜':
					localStorage.setItem("searchEngPref", "f搜");
					currentSearchEngine = "f搜";
					fsou.classList.add("selected");
					baidu.classList.remove("selected");
					bing.classList.remove("selected");
					google.classList.remove("selected");
					duckduckgo.classList.remove("selected");
					yandex.classList.remove("selected");
					sogou.classList.remove("selected");
					qihao.classList.remove("selected");
					document.getElementById("iconSearchEng").innerHTML="&#xe601;";
					navlinkTranslate.href = "https://fsoufsou.com/translate";
					navlinkMap.href = "https://fsoufsou.com/maps";
					navlinkImage.href = "https://fsoufsou.com/images/";
					break;
		case '搜狗':
					localStorage.setItem("searchEngPref", "搜狗");
					currentSearchEngine = "搜狗";
					sogou.classList.add("selected");
					qihao.classList.remove("selected");
					baidu.classList.remove("selected");
					bing.classList.remove("selected");
					google.classList.remove("selected");
					duckduckgo.classList.remove("selected");
					fsou.classList.remove("selected");
					yandex.classList.remove("selected");
					document.getElementById("iconSearchEng").innerHTML="&#xeca8;";
					navlinkTranslate.href = "https://fanyi.sogou.com/";
					navlinkMap.href = "https://map.sogou.com/";
					navlinkImage.href = "http://pic.sogou.com/";
					break;
		case 'qihao':
					localStorage.setItem("searchEngPref", "qihao");
					currentSearchEngine = "qihao";
					qihao.classList.add("selected");
					sogou.classList.remove("selected");
					baidu.classList.remove("selected");
					bing.classList.remove("selected");
					google.classList.remove("selected");
					duckduckgo.classList.remove("selected");
					fsou.classList.remove("selected");
					yandex.classList.remove("selected");
					document.getElementById("iconSearchEng").innerHTML="&#xe602;";
					navlinkTranslate.href = "https://fanyi.so.com/";
					navlinkMap.href = "https://ditu.so.com/";
					navlinkImage.href = "https://image.so.com/";
					break;
	}
	input0.focus();
}
keyword.onclick = () => {
	setTimeout(() => Input_Blur(), 50);
}

function hideKeyword() {
	keyword.style.height = "0px";
	keyword.style.opacity = "0";
	setTimeout(() => {
		keyword.style.display = "none";
		keyword.innerHTML = "";
		keyword.style.height = "auto";
		keyword.style.opacity = "1";
	}, 250);
}
title.onclick = event => {
	if (navbox.style.display != "block") {
		searchBar.style.opacity = "0";
		Input_Blur();
		if (hitokoto === true) {
			quotebox.style.opacity = "0";
			quotebox.style.animation = "none";
		}
		if (bgPreference == "Live") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "scale(1.1)";
			}
			liveBgBox.style.filter = "blur(10px)";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "scale(1.1)";
			}
			bgbox.style.filter = "blur(10px)";
		}
		if (bgPreference == "Live2") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "scale(1.1)";
			}
			liveBgBox.style.filter = "blur(10px)";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "scale(1.1)";
			}
			bgbox.style.filter = "blur(10px)";
		}
		if (bgPreference == "Live3") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "scale(1.1)";
			}
			liveBgBox.style.filter = "blur(10px)";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "scale(1.1)";
			}
			bgbox.style.filter = "blur(10px)";
		}
		if (bgPreference == "Live4") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "scale(1.1)";
			}
			liveBgBox.style.filter = "blur(10px)";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "scale(1.1)";
			}
			bgbox.style.filter = "blur(10px)";
		}
		navbox.style.display = "block";
		btnSettings.style.display = "block";
		btnUser.style.display = "block";
		navchick.style.display="block"
		navchick2.style.display="block"
		navPageSwitchContainer.style.display="block"
		keywords.style.display="none"
		if (browserWarning === true) {
			btnWarn.style.display = "block";
		}
		if (bgPreference == "Bing") {
			btnLike.style.display = "block";
		}
		document.getElementById("tp-weather-widget").style.opacity = "0.5";
		document.getElementById("tp-weather-widget").style.pointerEvents = "auto";
	} else {
		navbox.onclick(event);
	}
}
title.onmouseenter = () => {
	title.style.transform = "scale(1.15)";
	setTimeout(() => title.style.transform = "scale(1.1)", 250);
}
title.onmouseleave = () => {
	title.style.transform = "scale(0.95)";
	setTimeout(() => title.style.transform = "scale(1)", 250);
}

navbox.onclick = event => {
	const obj = event.target;
	if (obj && obj.classList.contains("shouldNotFade") == false) {
		searchBar.style.opacity = "1";
		if (bgPreference == "Live") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "";
			}
			liveBgBox.style.filter = "";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "";
			}
			bgbox.style.filter = "";
		}
		if (bgPreference == "Live2") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "";
			}
			liveBgBox.style.filter = "";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "";
			}
			bgbox.style.filter = "";
		}
		if (bgPreference == "Live3") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "";
			}
			liveBgBox.style.filter = "";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "";
			}
			bgbox.style.filter = "";
		}
		if (bgPreference == "Live4") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "";
			}
			liveBgBox.style.filter = "";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "";
			}
			bgbox.style.filter = "";
		}
		keywords.style.opacity = "0";
		navbox.style.opacity = "0";
		btnSettings.style.opacity = "0";
		btnUser.style.opacity = "0";
		navchick.style.opacity="0"
		navPageSwitchContainer.style.opacity="0"
		btnLike.style.opacity = "0";
		navchick2.style.opacity="0"
		if (browserWarning === true) {
			btnWarn.style.opacity = "0";
		}
		setTimeout(() => {
			keywords.style.display = "none";
			btnUser.style.display = "none";
			navPageSwitchContainer.style.display="none"
			navbox.style.display = "none";
			navchick.style.display="none"
			btnSettings.style.display = "none";
			btnLike.style.display = "none";
			navchick2.style.display="none"
			if (browserWarning === true) {
				btnWarn.style.display = "none";
			}
			keywords.style.opacity = "";
			navbox.style.opacity = "";
			navPageSwitchContainer.style.opacity=""
			btnUser.style.opacity = "";
			btnSettings.style.opacity = "";
			btnLike.style.opacity = "";
			navchick.style.opacity=""
			navchick2.style.opacity=""
			if (browserWarning === true) {
				btnWarn.style.opacity = "";
			}
		}, 250);
		document.getElementById("tp-weather-widget").style.opacity = "0";
		document.getElementById("tp-weather-widget").style.pointerEvents = "none";
	}
	//alert(obj.id);
}
quotebox.oncontextmenu = cover.oncontextmenu = () => {
	if (menuSearch.style.opacity === "1") {
		hideMenu(menuSearch);
	}
	title.onclick();
}

function encodeData(data) {
	const array = [];
	for (const key in data) {
		data[key] && array.push(key + "=" + encodeURIComponent(data[key]));
	}
	return array.join("&");
}

function showAbout() {
 	pVersion.innerText = version;
 	if (!window.frmChangeLog) {
 	 	window.frmChangeLog = document.createElement("iframe");
 	 	frmChangeLog.id = "frmChangeLog";
 	 	frmChangeLog.title = "更新日志";
 	 	frmChangeLog.src = "changelog.html";
 	 	changeLog.appendChild(frmChangeLog);
 	 }
 	showPop(popAbout);
 }

function navboxScale0() {
	navbox1.style.transform = "scale(0.9)";
	navbox2.style.transform = "scale(0.9)";
}
function navboxScale1() {
	navbox1.style.transform = "scale(1)";
	navbox2.style.transform = "scale(1)";
}

function navclick2(){
if (navbox1.style.left != "0px") {
		nacpa2.classList.remove("current");
		nacpa.classList.add("current");
		navboxScale0();
		setTimeout(() => {
			navbox1.style.left = "0px";
			navbox2.style.left = "100%";
		}, 250);
		setTimeout(() => navboxScale1(), 500);
	}
}
function navclick(){
 	if (navbox2.style.left != "0px") {
 		nacpa.classList.remove("current");
 		nacpa2.classList.add("current");
 		navboxScale0();
 		setTimeout(() => {
 			navbox1.style.left = "-100%";
 			navbox2.style.left = "0px";
 		}, 250);
 		setTimeout(() => navboxScale1(), 500);
 	}
}
function showPop(thePopUp) {
	cover1.style.display = "block";
	thePopUp.style.display = "block";
	if (reduceMotion === false) {
		const btnClose = thePopUp.getElementsByClassName("btnClose")[0];
		if (btnClose && !btnClose.onmouseenter) {
			btnClose.onmouseenter = function () {
				if (reduceMotion === false) {
					//this.style.transform = "translate(8px,-6px) scale(1.1)";
					thePopUp = this.parentNode;
					thePopUp.style.transform = "rotate3d(1,1,0,5deg)";
				}
			};
			btnClose.onmouseleave = function () {
				if (reduceMotion === false) {
					//this.style.transform = "";
					if (popUpClosing == false) {
						thePopUp.style.transform = "none";
					}
				}
			};
		}
		setTimeout(() => {
			cover1.style.opacity = "1";
			thePopUp.style.opacity = "1";
			thePopUp.classList.add("showPop");
			setTimeout(() => {
				thePopUp.style.transform = "none";
				thePopUp.classList.remove("showPop");
			}, 350);
		}, 100);
	} else {
		cover1.style.opacity = "1";
		thePopUp.style.transition = "all 0s";
		thePopUp.style.transform = "none";
		thePopUp.style.transition = "all 0.25s";
		setTimeout(() => thePopUp.style.opacity = "1", 25);
	}
}

function closePop(obj) {
	popUpClosing = true;
	//obj.style.display="none";
	//thePopUp=obj.parentNode;
	cover1.style.opacity = "0";
	obj.style.opacity = "0";
	if (reduceMotion === false) {
		obj.style.transform = "rotate3d(1,1,0,20deg)";
	}
	setTimeout(() => {
		cover1.style.display = "none";
		obj.style.display = "none";
		if (reduceMotion === false) {
			obj.style.transform = "rotate3d(1,1,0,90deg)";
		}
		popUpClosing = false;
	}, 350);
}
btnBrowse.onclick = () => {
	inputImg.value = "";
	inputImg.click();
};
inputImg.onchange = event => {
	const reader = new FileReader();
	reader.onload = () => {
		try {
			localStorage.setItem("cusWallpaper", reader.result);
		} catch (err) {
			alert("由于浏览器限制，请选择小于 4MB 的图片喔");
			return;
		}
		cusWallpaper = reader.result;
		bgPreBoxInCus.classList.remove("unset");
		bgPreBoxInCus.style.backgroundImage = "url(" + cusWallpaper + ")";
		changeWp(document.getElementById("bgPreBoxCus"));
	}
	reader.readAsDataURL(event.target.files[0]);
};

function changeWp(obj) {
	switch (obj.id) {
		case 'bgPreBoxCus':
			if (cusWallpaper) {
				liveBgBox.style.display = "none";
				liveBgBox.pause();
				bgbox.src = cusWallpaper;
				bgbox.style.opacity = "1";
				bgPreBoxInCus.classList.add("selected");
				bgPreBoxIn1.classList.remove("selected");
				bgPreBoxIn2.classList.remove("selected");
				bgPreBoxIn3.classList.remove("selected");
				bgPreBoxIn4.classList.remove("selected");
				bgPreBoxIn5.classList.remove("selected");
				bgPreBoxIn6.classList.remove("selected");
				bgPreBoxInBing.classList.remove("selected");
				bgPreBoxInLive.classList.remove("selected");
				bgPreBoxInLive2.classList.remove("selected");
				bgPreBoxInLive3.classList.remove("selected");
				bgPreBoxInLive4.classList.remove("selected");
				localStorage.setItem("bgPreference", "Custom");
				bgPreference = "Custom";
			}
			break;
		case 'bgPreBoxD1':
			//document.body.style.backgroundImage = "url(images/BG_A_Default_1.jpg)";
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = "assets/images/Default1.jpg";
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn1.classList.add("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxIn4.classList.remove("selected");
			bgPreBoxIn5.classList.remove("selected");
			bgPreBoxIn6.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Default");
			bgPreference = "Default";
			break;
		case 'bgPreBoxD2':
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = "assets/images/Default2.jpg";
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn2.classList.add("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxIn4.classList.remove("selected");
			bgPreBoxIn5.classList.remove("selected");
			bgPreBoxIn6.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Default2");
			bgPreference = "Default2";
			break;
		case 'bgPreBoxD3':
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = "assets/images/Default3.jpg";
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn3.classList.add("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn4.classList.remove("selected");
			bgPreBoxIn5.classList.remove("selected");
			bgPreBoxIn6.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Default3");
			bgPreference = "Default3";
			break;
		case 'bgPreBoxD4':
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = "assets/images/Default4.jpg";
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn4.classList.add("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxIn5.classList.remove("selected");
			bgPreBoxIn6.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Default4");
			bgPreference = "Default4";
			break;
		case 'bgPreBoxD5':
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = "assets/images/Default5.jpg";
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn5.classList.add("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxIn4.classList.remove("selected");
			bgPreBoxIn6.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Default5");
			bgPreference = "Default5";
			break;
		case 'bgPreBoxD6':
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = "assets/images/Default6.jpg";
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn6.classList.add("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxIn4.classList.remove("selected");
			bgPreBoxIn5.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Default6");
			bgPreference = "Default6";
			break;
		case 'bgPreBoxBing':
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = "https://www.yangshangzhen.com/bing/wallpaper";
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxIn4.classList.remove("selected");
			bgPreBoxIn5.classList.remove("selected");
			bgPreBoxIn6.classList.remove("selected");
			bgPreBoxInBing.classList.add("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Bing");
			bgPreference = "Bing";
			break;
		case 'bgPreBoxLive':
			liveBgBox.src = "assets/videos/Live1.mp4";
			liveBgBox.style.display = "block";
			liveBgBox.play();
			setTimeout(() => liveBgBox.style.opacity = "1", 50);
			bgbox.style.opacity = "0";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxIn4.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.add("selected");
			bgPreBoxInLive2.classList.remove("selected");
			bgPreBoxInLive3.classList.remove("selected");
			bgPreBoxInLive4.classList.remove("selected");
			localStorage.setItem("bgPreference", "Live");
			bgPreference = "Live";
			break;
		case 'bgPreBoxLive2':
			liveBgBox.src = "assets/videos/Live2.mp4";
			liveBgBox.style.display = "block";
			liveBgBox.play();
			setTimeout(() => liveBgBox.style.opacity = "1", 50);
			bgbox.style.opacity = "0";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxIn4.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			bgPreBoxInLive2.classList.add("selected");
			bgPreBoxInLive3.classList.remove("selected");
			bgPreBoxInLive4.classList.remove("selected");
			localStorage.setItem("bgPreference", "Live2");
			bgPreference = "Live2";
			break;
		case 'bgPreBoxLive3':
			liveBgBox.src = "assets/videos/Live3.mp4";
			liveBgBox.style.display = "block";
			liveBgBox.play();
			setTimeout(() => liveBgBox.style.opacity = "1", 50);
			bgbox.style.opacity = "0";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxIn4.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			bgPreBoxInLive2.classList.remove("selected");
			bgPreBoxInLive3.classList.add("selected");
			bgPreBoxInLive4.classList.remove("selected");
			localStorage.setItem("bgPreference", "Live3");
			bgPreference = "Live3";
			break;
		case 'bgPreBoxLive4':
			liveBgBox.src = "assets/videos/Live4.mp4";
			liveBgBox.style.display = "block";
			liveBgBox.play();
			setTimeout(() => liveBgBox.style.opacity = "1", 50);
			bgbox.style.opacity = "0";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxIn4.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			bgPreBoxInLive2.classList.remove("selected");
			bgPreBoxInLive3.classList.remove("selected");
			bgPreBoxInLive4.classList.add("selected");
			localStorage.setItem("bgPreference", "Live4");
			bgPreference = "Live4";
			break;
	}
}

function getPostData(data) {
	const formData = new FormData();
	for (const key in data) {
		data[key] && formData.append(key, data[key]);
	}
	return {
		body: formData,
		method: "POST"
	};
}

function likeClick() {
	btnLike.classList.add("rebound");
	//setTimeout(() => btnLike.classList.remove("rebound"), 700);
	fetch(backend + "like", getPostData({
		action: "updateLikedCount"
	})).then(response => {
		if (response.ok) {
			return response.text();
		}
	}).then(data => {
		if (data) {
			if (data === "liked") {
				alert("已经点过喜欢啦");
			} else {
				numLiked.innerText = data;
			}
		}
	});
}





 
// windowAddMouseWheel();
// 	function windowAddMouseWheel() {
// 	    var scrollFunc = function (e) {
// 	        e = e || window.event;
// 	    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
// 		    if (e.wheelDelta > 10) { //当滑轮向上滚动时
// 			    pCaptionBar.classList.remove("scrolled")
// 		    }
// 		    if (e.wheelDelta < 0) { //当滑轮向下滚动时
// 		        pCaptionBar.classList.add("scrolled")
// 		    }
// 	    } else if (e.detail) {  //Firefox滑轮事件
// 		    if (e.detail> 0) { //当滑轮向上滚动时
// 			    alert("滑轮向下滚动");
// 		    }
// 		    if (e.detail< 0) { //当滑轮向下滚动时
// 			alert("滑轮向上滚动");
// 		    }
// 	    }
// 	};
// 				    //给页面绑定滑轮滚动事件
// 	if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
// 		document.addEventListener('DOMMouseScroll', scrollFunc, false);
// 	}
// 					//其他浏览器直接绑定滚动事件
// 	window.onmousewheel = document.onmousewheel = scrollFunc;
// 	}



function currentTime() {
	//var vWeek,vWeek_s,vDay;
	//vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	let minutes = date.getMinutes();
	//seconds = date.getSeconds();
	//vWeek_s = date.getDay();
	//titleText.innerText = year + "年" + month + "月" + day + "日" + "\t" + hours + ":" + minutes +":" + seconds + "\t" + vWeek[vWeek_s] ;
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	titleText.innerText = hours + ":" + minutes;
	return year + "年" + month + "月" + day + "日 " + hours + ":" + minutes;
}
setInterval(currentTime, 1000);

btnWarn.onmouseenter = () => {
	showMenu(tipBoxBrowser);
}
tipBoxBrowser.onmouseleave = () => {
	if (tipBoxBrowser.style.opacity === "1") {
		hideMenu(tipBoxBrowser);
	}
}

window.onclick = () => {
				if (menuUser.style.opacity === "1") {
					hideMenu(menuUser);
				}
				if (menuSettings.style.opacity === "1") {
					hideMenu(menuSettings);
				}
				if (menuSearchEng.style.opacity === "1") {
					hideMenu(menuSearchEng);
				}
				if (menuUser.style.opacity === "1") {
					hideMenu(menuUser);
				}
				if (menuQuote.style.opacity === "1") {
					hideMenu(menuQuote);
				}
				if (menuSearch.style.opacity === "1") {
					hideMenu(menuSearch);
				}
			}

function btnSettingsClick() {
				if (menuSettings.style.opacity === "1") {
					hideMenu(menuSettings);
				} else {
					showMenu(menuSettings);
				}
			}

function chickbut(){
				if (menuQuote.style.opacity === "1") {
					hideMenu(menuQuote);
				} else {
					menuQuote.style.left = event.clientX - 200 + "px";
					menuQuote.style.top = event.clientY + 3 + "px";
					showMenu(menuQuote);
				}
}

function btnuser() {
				if (menuUser.style.opacity === "1") {
					hideMenu(menuUser);
				} else {
					showMenu(menuUser);
				}
			}

function btnck() {
				if (menuSearchEng.style.opacity === "1") {
					hideMenu(menuSearchEng);
				} else {
					menuSearchEng.style.left = event.clientX + 3 + "px";
					menuSearchEng.style.top = event.clientY + 3 + "px";
					showMenu(menuSearchEng);
				}
			}

function showMenu(theMenu) {
	theMenu.style.display = "block";
	setTimeout(() => {
		theMenu.style.opacity = "1";
		theMenu.style.transform = "scale(1.05)";
	}, 50);
	setTimeout(() => theMenu.style.transform = "scale(1)", 300);
}

function hideMenu(theMenu) {
	theMenu.style.transform = "scale(0.5)";
	theMenu.style.opacity = "0";
	setTimeout(() => theMenu.style.display = "none", 250);
}

function editBtnClick(editItem) {
	switch (editItem) {
		case 'username':
			btnEditUsername.style.display = "none";
			inputEditUsername.style.display = "inline-block";
			btnUpdateUsername.style.display = "inline-block";
			break;
		case 'birthday':
			btnEditBirthday.style.display = "none";
			inputEditBirthday.style.display = "inline-block";
			btnUpdateBirthday.style.display = "inline-block";
			break;
	}
}

function showGreeting(username, otherText) {
	if (greetingBox.style.display != "block") {
		if (otherText === "") { //otherText!=undefined || otherText!=""
			const time = new Date().getHours();
			if (time > 21 || time < 4) {
				greeting.innerText = "晚安，" + username;
			}
			if (time >= 4 && time < 9) {
				greeting.innerText = "早安，" + username;
			}
			if (time === 9) {
				greeting.innerText = "早上好，" + username;
			}
			if (time > 9 && time < 12) {
				greeting.innerText = "上午好，" + username;
			}
			if (time === 12) {
				greeting.innerText = "中午好，" + username;
			}
			if (time > 12 && time < 15) {
				greeting.innerText = "午安，" + username;
			}
			if (time >= 15 && time < 18) {
				greeting.innerText = "下午好，" + username;
			}
			if (time === 18) {
				greeting.innerText = "傍晚好，" + username;
			}
			if (time > 18 && time <= 21) {
				greeting.innerText = "晚上好，" + username;
			}
		} else {
			greeting.innerHTML = otherText;
		}
		greetingBox.style.display = "block";
		setTimeout(() => {
			greeting.style.opacity = "1";
			greeting.style.top = "0px";
		}, 50);
		setTimeout(() => {
			greeting.style.opacity = "0";
			greeting.style.top = "-100px";
		}, 3000);
		setTimeout(() => greetingBox.style.display = "none", 3500);
	}
}

function setAutoClrSearchBar() {
	if (chkAutoClrSearchBar.checked == true) {
		autoClrSearchBar = false;
		localStorage.setItem("autoClrSearchBar", "off");
	} else {
		autoClrSearchBar = true;
		localStorage.setItem("autoClrSearchBar", "on");
	}
}

function setOpenInNew() {
	if (chkOpenInNew.checked == true) {
		openInNew = false;
		localStorage.setItem("openInNew", "off");
	} else {
		openInNew = true;
		localStorage.setItem("openInNew", "on");
	}
}

function setAutoFocus() {
	if (chkAutoFocus.checked == true) {
		autoFocus = false;
		localStorage.setItem("autoFocus", "off");
	} else {
		autoFocus = true;
		localStorage.setItem("autoFocus", "on");
	}
}

function setHitokoto() {
	if (chkHitokoto.checked == true) {
		hitokoto = false;
		localStorage.setItem("hitokoto", "off");
		quotebox.style.display = "none";
	} else {
		hitokoto = true;
		localStorage.setItem("hitokoto", "on");
		quotebox.style.display = "block";
	}
}

function setReduceMotion() {
	if (chkReduceMotion.checked == true) {
		reduceMotion = false;
		localStorage.setItem("reduceMotion", "off");
	} else {
		reduceMotion = true;
		localStorage.setItem("reduceMotion", "on");
	}
}

function setNavLinksBlurEf() {
	if (chkNavLinksBlurEf.checked == true) {
		navLinksBlurEf = false;
		localStorage.setItem("navLinksBlurEf", "off");
		navboxCustom.classList.remove("blurEf");
	} else {
		navLinksBlurEf = true;
		localStorage.setItem("navLinksBlurEf", "on");
		navboxCustom.classList.add("blurEf");
	}
}

function setAutoDarkMode() {
 	if (chkAutoDarkMode.checked == true) {
 		autoDarkMode = false;
 		localStorage.setItem("autoDarkMode", "off");
 		removeCss("styles/dark.css");
 		//frmChangeLog.contentWindow.removeCss("styles/dark-log.css");
 	} else {
 		autoDarkMode = true;
 		localStorage.setItem("autoDarkMode", "on");
 		loadCss("styles/dark.css");
 		//frmChangeLog.contentWindow.loadCss("styles/dark-log.css");
 	}
 	 if ("undefined" != typeof frmChangeLog) {
 	 	frmChangeLog.src = "changelog.html";
 	 }
 }

function loadCss(href) {
	let addSign = true;
	const links = document.getElementsByTagName("link");
	for (let i = 0; i < links.length; i++) {
		if (links[i] && links[i].href && links[i].href.indexOf(href) != -1) {
			addSign = false;
		}
	}
	if (addSign) {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = href;
		document.head.appendChild(link);
	}
}

function removeCss(href) {
	const links = document.getElementsByTagName("link");
	for (let i = 0; i < links.length; i++) {
		if (links[i] && links[i].href && links[i].href.indexOf(href) != -1) {
			links[i].parentNode.removeChild(links[i]);
		}
	}
}

function getTopNotification() {
	fetch(backend + "push?action=get").then(response => {
		if (response.ok) {
			return response.json();
		}
	}).then(pushInfo => {
		if (pushInfo) {
			pushClass = pushInfo[0].classification;
			pushTitle = pushInfo[0].title;
			pushContent = pushInfo[0].content;
			pushStartTime = pushInfo[0].pushStartTime;
			pushStopTime = pushInfo[0].pushStopTime;
			const oldPushClass = localStorage.getItem("pushClass");
			const oldPushTitle = localStorage.getItem("pushTitle");
			const oldPushContent = localStorage.getItem("pushContent");
			const oldPushStartTime = localStorage.getItem("pushStartTime");
			const oldPushStopTime = localStorage.getItem("pushStopTime");
			localStorage.setItem("pushClass", pushClass);
			localStorage.setItem("pushTitle", pushTitle);
			localStorage.setItem("pushContent", pushContent);
			localStorage.setItem("pushStartTime", pushStartTime);
			localStorage.setItem("pushStopTime", pushStopTime);
			if (oldPushStopTime) {
				if (oldPushClass != pushClass || oldPushTitle != pushTitle || oldPushContent != pushContent || oldPushStartTime != pushStartTime || oldPushStopTime != pushStopTime) {
					processTopNotification();
				}
			} else {
				processTopNotification();
			}
		}
	});
}

function processTopNotification() {
	pushClass = localStorage.getItem("pushClass");
	pushTitle = localStorage.getItem("pushTitle");
	pushContent = localStorage.getItem("pushContent");
	pushStartTime = localStorage.getItem("pushStartTime");
	pushStopTime = localStorage.getItem("pushStopTime");
	if (pushStopTime) {
		const nowTime = new Date();
		pushStartTime = new Date(pushStartTime);
		pushStopTime = new Date(pushStopTime);
		if (nowTime.getTime() > pushStartTime.getTime() && nowTime.getTime() < pushStopTime.getTime()) {
			switch (pushClass) {
				case '0':
					topNotificationBar.classList.add("class0");
					break;
				case '1':
					topNotificationBar.classList.add("class1");
					break;
				case '2':
					topNotificationBar.classList.add("class2");
					break;
			}
			marqueeTitle.innerText = pushTitle;
			marqueeText.innerText = pushContent;
			showTopNbar();
		}
	}
}

function showTopNbar() {
	topNotificationBar.style.display = "block";
	marqueeBar.start();
	setTimeout(() => {
		topNotificationBar.style.top = "0";
		bodyBox.style.top = "50px";
		bodyBox.style.height = "calc(100% - 50px)";
		navbox.style.top = "50px";
		navbox.style.height = "calc(100% - 50px)";
	}, 50);
}
btnClosetopNBar.onclick = () => {
	topNotificationBar.style.top = "-50px";
	bodyBox.style.top = "0";
	bodyBox.style.height = "100%";
	navbox.style.top = "0";
	navbox.style.height = "100%";
	setTimeout(() => {
		marqueeBar.stop();
		topNotificationBar.style.display = "none";
	}, 250);
}

function showSearchMenu(event) {
	menuSearch.style.left = event.clientX + 3 + "px";
	menuSearch.style.top = event.clientY + 3 + "px";
	const selectedText = window.getSelection().toString();
	if (selectedText) {
		searchMenuCut.classList.remove("disabled");
		searchMenuCopy.classList.remove("disabled");
	} else {
		searchMenuCut.classList.add("disabled");
		searchMenuCopy.classList.add("disabled");
	}
	showMenu(menuSearch);
}


function loadJs(src, load, error) {
	const newScript = document.createElement("script");
	newScript.src = src;
	newScript.onload = load;
	newScript.onerror = error;
	document.body.appendChild(newScript);
}
/*function setSnowEf()
{
	if(chkSnowEf.checked==true){
		snow.style.opacity="0";
		snow.style.display="none";
		snowEf="off";
		localStorage.setItem("snowEf", "off");
	}else{
		snow.style.display="block";
		setTimeout(function(){
			snow.style.opacity="1";
		},100);
		snowEf="on";
		localStorage.setItem("snowEf", "on");
	}
}*/
if (ypoctonod[0][atob(ypoctonod[1])].indexOf(atob("aW5kZXguaHRtbA==")) == -1) {   //BASE64
	ypoctonod[0][atob(ypoctonod[1])] = atob("aW5kZXguaHRtbA==");   //BASE64
} else {
	ypoctonod.length = 0;
}
if (isEdge) {
	input0.style.transition = "none";
}
if (!currentSearchEngine) {
	currentSearchEngine = "baidu";
}
switchSearchEng(currentSearchEngine);
if (cusWallpaper) {
	bgPreBoxInCus.classList.remove("unset");
	bgPreBoxInCus.style.backgroundImage = "url(" + cusWallpaper + ")";
}
if (!bgPreference) {
	localStorage.setItem("bgPreference", "Default");
	bgPreference = "Default";
}
switch (bgPreference) {
	case 'Custom':
		bgbox.src = cusWallpaper;
		bgPreBoxInCus.classList.add("selected");
		break;
	case 'Default':
		bgbox.src = "assets/images/BG_A_Default_1.jpg";
		bgPreBoxIn1.classList.add("selected");
		break;
	case 'Default2':
		bgbox.src = "assets/images/BG_A_Default_2.jpg";
		bgPreBoxIn2.classList.add("selected");
		break;
	case 'Default3':
		bgbox.src = "assets/images/BG_A_Default_3.jpg";
		bgPreBoxIn3.classList.add("selected");
		break;
	case 'Default4':
		bgbox.src = "assets/images/BG_A_Default_4.jpg";
		bgPreBoxIn4.classList.add("selected");
		break;
	case 'Default5':
		bgbox.src = "assets/images/BG_A_Default_5.jpg";
		bgPreBoxIn5.classList.add("selected");
		break;
	case 'Default6':
		bgbox.src = "assets/images/BG_A_Default_6.jpg";
		bgPreBoxIn6.classList.add("selected");
		break;
	case 'Bing':
		bgbox.src = "https://www.yangshangzhen.com/bing/wallpaper";
		bgPreBoxInBing.classList.add("selected");
		break;
	case 'Live':
		liveBgBox.src = "assets/videos/Live1.mp4";
		liveBgBox.style.display = "block";
		setTimeout(() => liveBgBox.style.opacity = "1", 50);
		bgPreBoxInLive.classList.add("selected");
		break;
	case 'Live2':
		liveBgBox.src = "assets/videos/Live2.mp4";
		liveBgBox.style.display = "block";
		setTimeout(() => liveBgBox.style.opacity = "1", 50);
		bgPreBoxInLive2.classList.add("selected");
		break;
	case 'Live3':
		liveBgBox.src = "assets/videos/Live3.mp4";
		liveBgBox.style.display = "block";
		setTimeout(() => liveBgBox.style.opacity = "1", 50);
		bgPreBoxInLive3.classList.add("selected");
		break;
	case 'Live4':
		liveBgBox.src = "assets/videos/Live4.mp4";
		liveBgBox.style.display = "block";
		setTimeout(() => liveBgBox.style.opacity = "1", 50);
		bgPreBoxInLive4.classList.add("selected");
		break;
}
bgbox.onload = () => {
	bgbox.style.display = "block";
	setTimeout(() => bgbox.style.opacity = "1", 50);
	setTimeout(() => cover.style.opacity = "1", 100);
}
fetch("https://v1.hitokoto.cn/?c=d&c=h&c=i&c=j&encode=json").then(response => response.json()).then(data => {
	document.getElementsByClassName("quote-content")[0].innerText = "「 " + data["hitokoto"] + " 」";
	document.getElementsByClassName("quote-author")[0].innerText = "——" + data["from"];
});
if (localVersion && localVersion.substring(0, 6) != version.substring(0, 6)) {
	//showPop(popWelcome);
	showGreeting("", "欢迎回来~你的起始页刚刚更新到了<span class='links1' onclick='showAbout()'>最新版本</span>。");
}
localStorage.setItem("localVersion", version);
navbox0.addEventListener("wheel", navboxScroll, {
	passive: true
});
window["ThinkPageWeatherWidgetObject"] = "tpwidget";
window["tpwidget"] || (window["tpwidget"] = function () {
	(window["tpwidget"].q = window["tpwidget"].q || []).push(arguments)
});
window["tpwidget"].l = +new Date();
tpwidget("init", JSON.parse(atob("eyJmbGF2b3IiOiJzbGltIiwibG9jYXRpb24iOiJXUzdHUUJSTlI2VjgiLCJnZW9sb2NhdGlvbiI6ImVuYWJsZWQiLCJsYW5ndWFnZSI6ImF1dG8iLCJ1bml0IjoiYyIsInRoZW1lIjoiY2hhbWVsZW9uIiwiY29udGFpbmVyIjoidHAtd2VhdGhlci13aWRnZXQiLCJidWJibGUiOiJlbmFibGVkIiwiYWxhcm1UeXBlIjoiYmFkZ2UiLCJjb2xvciI6IiNGRkZGRkYiLCJ1aWQiOiJVRTE3RDRDOTkxIiwiaGFzaCI6IjEwNWJmNmE3ZjYxZjQ3NDk1ZjNiYjU2OTNlYmUzNmRlIn0=")));   //BASE64
tpwidget("show");
marqueeBar.stop();
getTopNotification();
/*if(!snowEf){
	snowEf="on";
	localStorage.setItem("snowEf", "on");
	chkSnowEf.checked=true;
}
snow.style.display="block";
if(snowEf==="on"){
	chkSnowEf.checked=true;
	setTimeout(function(){
		snow.style.opacity="1";
	},100);
}else{
	snow.style.display="none";
	chkSnowEf.checked=false;
}*/
chkAutoClrSearchBar.checked = autoClrSearchBar;
chkOpenInNew.checked = openInNew;
chkAutoFocus.checked = autoFocus;

chkHitokoto.checked = hitokoto;
chkReduceMotion.checked = reduceMotion;
chkNavLinksBlurEf.checked = navLinksBlurEf;
chkAutoDarkMode.checked = autoDarkMode;
if (autoFocus === false) {
	Input_Blur();
	searchOptBox.style.display = "none";
	input0.blur();
}
if (hitokoto === false) {
	quotebox.style.display = "none";
}
if (navLinksBlurEf === true) {
	navboxCustom.classList.add("blurEf");
}
if (autoDarkMode) {
	loadCss("styles/dark.css");
}



