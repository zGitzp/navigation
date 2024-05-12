// 001 这部分为 base64 加密解密js代码
// 解密函数
function base64Decode(str) {
	var decodedString = atob(str);
	return decodeURIComponent(escape(decodedString));
}

// 解密链接和内容
//前面的 .aa 到 .ff 为示例代码，如要查看，请参照“自己写的成品”
//如果是id=“fqq”,那就在前面女加 #  比如下面的 #fqq
var elements = document.querySelectorAll('.aa a, .dd a, .cc, .ff, .jmfq, #fqq, #ffqq, #navm');

elements.forEach(function(element) {
	if (element.tagName === 'A') {
		var encodedUrl = element.getAttribute('href');
		var decodedUrl = base64Decode(encodedUrl);
		element.setAttribute('href', decodedUrl);
	} else {
		var encodedText = element.textContent;
		var decodedText = base64Decode(encodedText);
		element.textContent = decodedText;
	}
});

