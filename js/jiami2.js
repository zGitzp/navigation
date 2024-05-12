// 002 这部分为点击链接输入密码，跳转到新链接的 js 代码
var password = "1024"; // 替换为所需密码
var attempts = 0;

function checkPassword() {
	var enteredPassword = prompt("请输入密码"); //提示用户输入密码

	if (enteredPassword === password) {
		window.open("./index-h.html", "_blank"); // 替换为所需链接
	} else {
		attempts++;
		if (attempts === 6) {
			alert("密码不正确,请重试或使用提示词：10");
		} else {
			alert("密码不正确,请再试一次");
		}
	}
}