document.getElementById("submitBtn").addEventListener("click", function() {
  // 读取剪贴板数据
  navigator.clipboard.readText()
    .then(function(clipboardData) {
      // 将数据提交到飞书机器人的Webhook
      var webhookUrl = "https://open.feishu.cn/open-apis/bot/v2/hook/5fc813da-55a6-43b8-ab1f-2214f6ede6f7"; // 替换为你的飞书机器人Webhook URL
      var requestData = {
		  "msg_type": "post",
		  "content": {
		      "post": {
		          "zh_cn": {
		              "title": "签到提醒",
		              "content": [
		                  [{
		                      "tag": "text",
		                      "text": clipboardData
		                  }]
		              ]
		          }
		      }
		  }
        
      };

      fetch(webhookUrl, {
        method: "POST",
		mode: 'no-cors', // 嵌入 mode: 'no-cors'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      })
      .then(function(response) {
        // 处理提交结果
        if (response.ok) {
          console.log("提交成功");
        } else {
          console.error("提交失败");
        }
      })
      .catch(function(error) {
        console.error("提交出错:", error);
      });
    })
    .catch(function(error) {
      console.error("读取剪贴板数据出错:", error);
    });
});
