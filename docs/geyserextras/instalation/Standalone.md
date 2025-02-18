# 作为独立版安装

::: tip 下载
- [**GitHub** | GeyserExtras-Extension.jar](https://github.com/GeyserExtras/GeyserExtras/releases/latest/download/GeyserExtras-Extension.jar)
:::

::: warning 注意
如果您使用此方法安装 GeyserExtras，则无需在后端服务器上安装 Geyser。
:::
## 安装
1. 首先设置 [Geyser-Standalone](https://geysermc.org/wiki/geyser/setup/?host=self&platform=standalone#general-setup--configuration)
2. 完成上述步骤后，请找到您的 Geyser 实例文件夹中的 `extensions/` 文件夹，并将 `GeyserExtras-Extension.jar` 放入其中。
3. 现在，请运行 Geyser Standalone，扩展程序应该能够正常运行！
## floodgate设置(可选)
::: info 信息
如果要使用模组化的服务器，并且希望与 GeyserExtras 一起使用 Floodgate，则建议您进行此设置！
:::
1. 在您的后端服务器上[安装 Floodgate](https://geysermc.org/wiki/floodgate/setup)，并将 Floodgate 插件文件夹根目录下的 `key.pem` 文件复制到 Geyser-Standalone 实例文件夹的根目录中。  
2. 将 Geyser-Standalone 的 `config.yml` 文件中的 `auth-type` 更改为 `floodgate`。  
3. 重启您的服务器，现在您应该可以使用基岩版账户登录了！


如果您的服务器日志如下所示：
```
[geyserextras] -------------GeyserExtras--------------
[geyserextras] Version: x.x.x
[geyserextras] Server Type: SERVER
[geyserextras] Platform Type: PLATFORM

...

[geyserextras] Done! (#.###s)
[geyserextras] ---------------------------------------
```
恭喜你设置成功！