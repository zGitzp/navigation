// 搜索并高亮文本
/* function searchAndHighlight() {
	var searchQuery = document.getElementById('searchText').value;
	if (searchQuery) {
		var found = window.find(searchQuery);
		if (found) { // 高亮搜索到的文本           
			var selection = window.getSelection();
			var range = selection.getRangeAt(0);
			var span = document.createElement('span');
			span.className = 'highlight';
			range.surroundContents(span);
		} else {
			alert('没有找到更多匹配项！');
		}
	}
} // 监听按键事件，实现连续搜索
document.getElementById('searchText').addEventListener('keyup', function(event) {
	if (event.key === 'Enter') {
		searchAndHighlight();
	}
}); */