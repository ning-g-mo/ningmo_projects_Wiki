# 安装说明

## 前提条件

- 系统：Linux、Windows、MacOS
- Java：21以上版本
- cpu：主频建议3.5GHz以上
- 内存：4GB以上
- 网络：需要开放一个TCP端口和一个UDP端口

## 下载压缩包

先准备好7z等解压软件。

下载压缩包：[123云盘](https://www.123pan.com/s/zcTSVv-rrgO3.html)
::: tip 提示
先安装123云盘，再下载压缩包不需要付费，并且不限速。
:::

## 解压压缩包

解压压缩包到指定目录，
如果是windows系统，建议解压到D盘等数据盘，避免占用C盘空间。
面板服直接上传到服务器解压即可。

## 配置服务器环境（vps服务器）
### 配置环境变量（windows系统）

下载Java安装包，安装在数据盘。

### 配置环境变量（linux系统）

输入以下命令：

```
apt-get update
apt-get install openjdk-21-jdk
```
## 启动服务器

进入解压后的目录，输入以下命令：

```sell
#Linux系统
sh 启动服务器.sh
```
```
#Windows系统
sh 启动服务器.bat
```

## 启动脚本
windows系统启动脚本：
```bat
@echo off
setlocal
chcp 65001 >nul
:: 设置窗口标题
title 柠枺生电互通基础端

:: 显示欢迎信息
echo 欢迎使用柠枺生电互通基础端！
echo 请确保您已安装JAVA21环境。
echo 请设定服务器分配的内存大小,推荐4G以上。
echo 请设定服务器分配的内存大小,推荐4G以上。

:: 固定内存大小为4G
set JAVA_OPTS=-Xmx4G

:: 重启跳转点
:restart

:: 启动服务器
java %JAVA_OPTS% -jar leaves-1.21.3.jar nogui

:: 自动重启服务器
echo 服务器已关闭，是否重启？
echo (Y/N)
set choice=
set /p choice=
if /i "%choice%"=="Y" goto restart
if /i "%choice%"=="N" exit

:: 关闭窗口
exit
```
linux系统启动脚本：
```sh
#!/bin/bash

# 设置脚本名称
SCRIPT_NAME="柠枺生电互通基础端"

# 检查是否已安装Java 21

echo "请确保你使用的是Java 21环境。"

#提醒用户分配好内存了吗？
echo "分配好内存了吗？，设好可以删除或注释掉下面这一行。 "

# 启动服务器
java -Xmx4G -jar leaves-1.21.3.jar nogui

# 请按任意键继续
read -rsp $'按任意键继续...\n' -d ''
```

## 端口配置
### Java端口配置

打开服务器配置文件`server.properties`，找到`server-port`项，修改为你云服务器的端口号。
::: warning 注意
Java版端口协议为TCP
:::

```
server-port=25565
```

### 基岩版端口配置
打开服务器配置文件`plugins\Geyser-Spigot\config.yml`，找到`bedrock-port`项，修改为你为Java版设置的本地端口号，并在`remote-port`项中设置对外开放的基岩版端口。
::: warning 注意
基岩版端口协议为UDP
:::
```yaml
bedrock:
  # 监听连接的 IP 地址。
  # 通常情况下，只有在需要限制哪些 IP 可以连接到服务器时才应取消注释并更改此项。
  # address: 0.0.0.0
  # 监听连接的端口
  port: 25565
remote:
  # 远程（Java Edition）服务器的 IP 地址
  # 如果为 "auto"，对于独立版本，远程地址将设置为 127.0.0.1，
  # 对于插件版本，建议保持为 "auto"，以便 Geyser 自动配置地址、端口和认证类型。
  # 如果安装了 Floodgate，请保持为 "auto"。
  address: auto
  # 远程（Java Edition）服务器的端口
  # 对于插件版本，如果地址设置为 "auto"，端口也将跟随服务器的监听端口。
  port: 25565
```
::: danger 注意
更改端口后，请重启服务器。
:::




