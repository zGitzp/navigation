1
[使用自带的安装工具（推荐）安装 proot 容器](https://doc.initencunter.com/docs/tutorial/termux/install_debian/)
使用 tmoe 安装

01 运行脚本
在 termux 终端输入

bash -c "$(curl -L https://gitee.com/mo2/linux/raw/2/2)"

2 更改镜像源
3.选择语言
选择 proot 容器
设置主题
设置 DNS 及时区  设置 DNS，随便选
启用一言
设置时区为上海，选择 yes
6 挂载目录
7 选择发行版本
选择 arm64 容器发行版本列表
选择 Debian: 致力于自由
选择启动 proot ,回车

2.7 开始安装 proot 容器
sudo 用户基本用不到，可选
退出及启动 proot 容器

你已成功安装了 debian-10-arm64，输入 exit 即可退出 proot 容器 下次启动只需要输入 debian


#如何区分会话是否处于 proot 容器内？
##方法 1 查看终端的提示符
当终端的提示符为“#”时，您的会话正处于 proot 容器

处于proot容器

如果提示符是“$”，您的会话不在 proot 容器

不处于proot容器

##方法 2 查看用户
如果用户显示的是 root，您的会话正处于 proot 容器

如果没有显示用户，您的会话不在 proot 容器

如何进入 proot 容器？
如果你是用 tmoe 安装的 proot 容器，那么你应该用 tmoe 来进入 proot 容器，输入命令 tmoe，打开 tmoe 菜单，根据提示启动
如果你是使用左侧发行版本选项安装的 proot 容器，那么在初始的目录下会生产一个启动脚本， 脚本通常以 arm64.sh 结尾
可以输入ls命令查看 启动脚本

启动示例 bash buster-arm64.sh 或者 ./buster-arm64.sh

#如何备份容器？
注意，该方法只适用于 termux 会话中， 若你的会话处于 proot 容器内，请先停止当前任务，输入exit退出 proot 容器

音量上键 选择 备份/恢复，在弹出的对话框中选择tar.gz

等待备份完成后，你将在你的手机的 /sdcard/xinhao/data 目录看到生成的恢复包，

你可以将此恢复包发送给你的朋友们

#如何恢复容器？
注意，该方法只适用于 termux 会话中， 若你的会话处于 proot 容器内，请先停止当前任务，输入exit退出 proot 容器

恢复前请先确保 你的恢复包处于 /sdcard/xinhao/data 目录

和备份操作一样，进入对话框，点击恢复项，选择一个恢复包，输入新的容器名称即可开始恢复

建议容器起名清晰明了，，否则容器多了你会分不清的； 不用的容器即使删除，释放手机存储空间





------------------------
#安装 python
pkg install python

验证是否安装py
python --version

#创建虚拟环境
创建一个虚拟环境是一个更灵活且推荐的方法，这样可以避免修改系统级别的Python环境，同时也不会受到系统包管理器的限制。以下是创建和使用虚拟环境的步骤：
安装python3-venv（如果尚未安装）

sudo apt install python3-venv

#创建虚拟环境
python3 -m venv myenv
这里的myenv是虚拟环境的名称，你可以根据需要自定义。

例如
## 安装QD-today
python3 -m venv qd

## 安装 青龙
## python3 -m venv qinglong

#激活虚拟环境
在Linux系统中，激活虚拟环境的命令如下：

source myenv/bin/activate

例如：
source qd/bin/activate
source qinglong/bin/activate

#在虚拟环境中安装包
现在你可以使用pip在虚拟环境中安装所需的包：

pip install -r requirements.txt


#退出虚拟环境
当你完成工作后，可以使用以下命令退出虚拟环境：

deactivate

--------------------
安装青龙

#安装node.js

##手动安装 Node.js
创建并移动到 Node 文件夹
mkdir /usr/local/node && cd /usr/local/node

##下载 Node.js 的压缩包
从 Node.js 官方网站下载适合 aarch64 架构的 Node.js 压缩包。
wget https://nodejs.org/dist/latest-v22.x/node-v22.14.0-linux-arm64.tar.gz

##解压压缩包
tar -xzf ./node-v22.14.0-linux-arm64.tar.gz

##配置环境变量
将以下内容添加到 /etc/profile 文件中，以确保 Node.js 的可执行文件路径被添加到系统路径中：
编辑 ~/.bashrc 文件，添加以下内容以配置环境变量：

echo 'export PATH=$PATH:/usr/local/node/node-v22.14.0-linux-arm64/bin' >> ~/.bashrc
 
 ##5：使配置生效
 source ~/.bashrc


##验证 Node.js 是否安装成功
node -v
npm -v


----------------------
[Linux安装青龙](https://qinglong.online/guide/getting-started/installation-guide/linux)
注意：建议使用纯净系统安装，避免系统原有数据丢失，需要自己安装 node/npm/python3/pip3

#安装青龙
回到~
cd ~

##激活青龙虚拟环境
source qinglong/bin/activate

#开始安装
npm install -g node-pre-gyp pnpm
npm install -g @whyour/qinglong
注意：如果网络不通，可以先下载，再安装
注意：可修改链接地址，我没有试过，但大概是这样
注意：git clone https://github.com/whyour/qinglong.git
注意：npm install qinglong
qinglong
# 根据提示增加环境变量 QL_DIR 和 QL_DATA_DIR
export QL_DIR=""
export QL_DATA_DIR=""
# 再次执行
qinglong


#开发
git clone https://github.com/whyour/qinglong.git
cd qinglong
cp .env.example .env
# 推荐使用 pnpm https://pnpm.io/zh/installation
npm install -g pnpm@8.3.1
pnpm install
pnpm start










#从源码安装python2.7
##下载源码
访问Python官方网站的下载页面，下载Python 2.7.x版本的源码压缩包：
wget https://www.python.org/ftp/python/2.7.18/Python-2.7.18.tgz
##解压源码
使用以下命令解压源码包：
tar -xvf Python-2.7.18.tgz
cd Python-2.7.18
##编译安装
在解压后的目录中，运行以下命令编译并安装Python 2.7：
./configure
make
sudo make install
##验证安装
安装完成后，使用以下命令验证Python 2.7是否安装成功：
python2.7 --version







