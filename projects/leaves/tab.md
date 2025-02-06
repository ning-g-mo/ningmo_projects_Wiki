# tab插件侧边栏与tab页配置

### 主配置文件

```yaml
# 配置文件头部和尾部显示内容
header-footer:
  enabled: true  # 启用头部和尾部显示
  header:  # 头部显示内容
  - <#FFFFFF>&m                                                </#FFFF00>  # 使用颜色代码和格式化字符创建分隔线
  - '&3&l我的服务器'  # 显示服务器名称，使用颜色和粗体格式
  - '&7&l>> %animation:Welcome%&3 &l%player%&7&l! &7&l<<'  # 欢迎信息，包含动画和玩家名字
  - '&7在线玩家: &f%online%'  # 显示在线玩家数量
  - '&6在线管理: &e%staffonline%'  # 显示在线管理员数量
  - ''  # 空行用于分隔
  footer:  # 尾部显示内容
  - '%animation:time%'  # 显示时间动画
  - '&2延迟: %ping%'  # 显示玩家延迟
  - '&7&l 内存使用: %memory-used% MB / %memory-max% MB'  # 显示服务器内存使用情况
  - ''  # 空行用于分隔
  - <#FFFFFF>&m                                                </#FFFF00>  # 使用颜色代码和格式化字符创建分隔线
  disable-condition: '%world%=disabledworld'  # 禁用条件，当世界名为 disabledworld 时禁用

# 按世界配置的头部和尾部显示内容
per-world:
  world1:
    header:
    - an example of world with custom  # 自定义世界1的头部内容
    footer:
    - header/footer and prefix/suffix  # 自定义世界1的尾部内容
  world2;world3:
    header:
    - This is a shared header for  # 共享头部内容
    - world2 and world3  # 适用于 world2 和 world3

# 按服务器配置的头部显示内容
per-server:
  server1:
    header:
    - an example of server with custom header  # 自定义服务器1的头部内容

# 玩家列表名称格式化设置
tablist-name-formatting:
  enabled: true  # 启用玩家列表名称格式化
  anti-override: true  # 防止被其他插件覆盖
  disable-condition: '%world%=disabledworld'  # 禁用条件，当世界名为 disabledworld 时禁用

# 记分板团队设置
scoreboard-teams:
  enabled: true  # 启用记分板团队
  enable-collision: true  # 启用碰撞检测
  invisible-nametags: false  # 不显示隐身标签
  anti-override: true  # 防止被其他插件覆盖
  sorting-types:  # 排序类型
  - GROUPS:owner,admin,mod,helper,builder,vip,default  # 按组排序
  - PLACEHOLDER_A_TO_Z:%player%  # 按字母顺序排序
  case-sensitive-sorting: true  # 区分大小写排序
  can-see-friendly-invisibles: false  # 是否可以看到友好隐身玩家
  disable-condition: '%world%=disabledworld'  # 禁用条件，当世界名为 disabledworld 时禁用

# 玩家列表目标值设置
playerlist-objective:
  enabled: true  # 启用玩家列表目标值
  value: '%ping%'  # 显示玩家延迟
  fancy-value: '&7延迟: %ping%'  # 格式化的延迟显示
  disable-condition: '%world%=disabledworld'  # 禁用条件，当世界名为 disabledworld 时禁用

# 名字下方目标值设置
belowname-objective:
  enabled: true  # 启用名字下方目标值
  disable-condition: '%world%=disabledworld'  # 禁用条件，当世界名为 disabledworld 时禁用
  fancy-value-default: NPC  # 默认显示 NPC
  fancy-value: '&c%health%'  # 格式化的健康值显示
  value: '%health%'  # 显示玩家健康值
  title: '&c血量'  # 标题为血量

# 防止观众效果
prevent-spectator-effect:
  enabled: false  # 禁用防止观众效果

# BOSS栏设置
bossbar:
  enabled: false  # 禁用BOSS栏
  toggle-command: /bossbar  # 切换命令
  remember-toggle-choice: false  # 不记住切换选择
  hidden-by-default: false  # 默认不隐藏

# 记分板设置
scoreboard:
  enabled: true  # 启用记分板
  toggle-command: /sb  # 切换命令
  remember-toggle-choice: false  # 不记住切换选择
  hidden-by-default: false  # 默认不隐藏
  use-numbers: true  # 使用数字
  static-number: 0  # 静态数字
  delay-on-join-milliseconds: 0  # 加入时延迟毫秒数
  scoreboards:  # 记分板内容
    scoreboard-1.20.3+:
      title: <#E0B11E>我的服务器</#FF0000>  # 记分板标题
      display-condition: '%player-version-id%>=765;%bedrock%=false'  # 显示条件
      lines:  # 记分板行内容
      - '&7%date%'  # 显示日期
      - '%animation:MyAnimation1%'  # 动画
      - '* &a信息&7'  # 信息标题
      - '* &e在线&7:||%online%'  # 在线人数
      - '* &etps&7:||%tps%'  # TPS
      - '* &b延迟&7:||%player_ping%&8ms'  # 延迟
      - '* &b世界&7:||%wav%'  # 当前世界
      - '* &b官群&7:||QQ群号'  # 官方QQ群号
      - '||&7&l%animation:MyAnimation1%'  # 动画分隔线
    scoreboard:
      title: <#E0B11E>我的服务器</#FF0000>  # 记分板标题
      lines:  # 记分板行内容
      - '&7%date%'  # 显示日期
      - '||&7&l%animation:MyAnimation1%'  # 动画分隔线
      - '* &a信息&7'  # 信息标题
      - '* &e在线&7:||%online%'  # 在线人数
      - '* &etps&7:||%tps%'  # TPS
      - '* &b延迟&7:||%player_ping%&8ms'  # 延迟
      - '* &b世界&7:||%wav%'  # 当前世界
      - '* &b官群&7:||QQ群号'  # 官方QQ群号
      - '||&7&l%animation:MyAnimation1%'  # 动画分隔线

# 布局设置
layout:
  enabled: false  # 禁用布局
  direction: COLUMNS  # 方向为列
  default-skin: mineskin:1753261242  # 默认皮肤ID
  enable-remaining-players-text: true  # 启用剩余玩家文本
  remaining-players-text: '... and %s more'  # 剩余玩家文本
  empty-slot-ping-value: 1000  # 空槽位延迟值
  layouts:  # 布局内容
    default:
      fixed-slots:  # 固定槽位
      - '1|&3Website&f:'  # 网站标题
      - 2|&bmyserver.net  # 网站地址
      - '3|&8&m                       '  # 分隔线
      - '4|&3Name&f:'  # 名称标题
      - 5|&b%player%  # 玩家名
      - '7|&3Rank&f:'  # 等级标题
      - '8|Rank: %group%'  # 玩家等级
      - '10|&3World&f:'  # 世界标题
      - 11|&b%world%  # 当前世界
      - '13|&3Time&f:'  # 时间标题
      - 14|&b%time%  # 当前时间
      - '21|&3Teamspeak&f:'  # Teamspeak 标题
      - 22|&bts.myserver.net  # Teamspeak 地址
      - '23|&8&m                       '  # 分隔线
      - '41|&3Store&f:'  # 商店标题
      - 42|&bshop.myserver.net  # 商店地址
      - '43|&8&m                       '  # 分隔线
      groups:  # 玩家分组
        staff:  # 管理员组
          condition: permission:tab.staff  # 条件为拥有 tab.staff 权限
          slots:  # 槽位范围
          - 24-40
        players:  # 玩家组
          slots:  # 槽位范围
          - 44-80

# 延迟欺骗设置
ping-spoof:
  enabled: false  # 禁用延迟欺骗
  value: 0  # 欺骗值

# 占位符设置
placeholders:
  date-format: yyyy-MM-dd  # 日期格式
  time-format: '[HH:mm:ss / h:mm a]'  # 时间格式
  time-offset: 0  # 时间偏移量
  register-tab-expansion: false  # 不注册TAB扩展

# 占位符输出替换设置
placeholder-output-replacements:
  '%essentials_vanished%':
    'yes': '&7| Vanished'  # 如果玩家隐身，则显示 "Vanished"
    'no': ''  # 否则不显示任何内容

# 条件设置
conditions:
  nick:
    conditions:
    - '%player%=%essentials_nickname%'  # 如果玩家名等于 Essentials 昵称
    true: '%player%'  # 显示玩家名
    false: ~%essentials_nickname%  # 否则显示 Essentials 昵称

# PlaceholderAPI 刷新间隔设置
placeholderapi-refresh-intervals:
  default-refresh-interval: 500  # 默认刷新间隔
  '%server_uptime%': 1000  # 服务器运行时间刷新间隔
  '%server_tps_1_colored%': 1000  # TPS 刷新间隔
  '%server_unique_joins%': 5000  # 独立加入次数刷新间隔
  '%player_health%': 200  # 玩家健康值刷新间隔
  '%player_ping%': 1000  # 玩家延迟刷新间隔
  '%vault_prefix%': 1000  # Vault 前缀刷新间隔
  '%rel_factionsuuid_relation_color%': 1000  # Factions 关系颜色刷新间隔

# 按权限分配组
assign-groups-by-permissions: false  # 不按权限分配组

# 主要组查找列表
primary-group-finding-list:
- Owner  # 所有者
- Admin  # 管理员
- Mod  # 模版
- Helper  # 助手
- default  # 默认

# 权限刷新间隔
permission-refresh-interval: 1000  # 权限刷新间隔为1秒

# 调试模式
debug: false  # 关闭调试模式

# MySQL 设置
mysql:
  enabled: false  # 禁用MySQL
  host: 127.0.0.1  # 数据库主机
  port: 3306  # 数据库端口
  database: tab  # 数据库名称
  username: user  # 数据库用户名
  password: password  # 数据库密码
  useSSL: true  # 使用SSL连接

# 按世界配置的玩家列表
per-world-playerlist:
  enabled: false  # 禁用按世界配置的玩家列表
  allow-bypass-permission: false  # 不允许绕过权限
  ignore-effect-in-worlds:  # 忽略效果的世界列表
  - ignoredworld
  - build
  shared-playerlist-world-groups:  # 共享玩家列表的世界组
    lobby:
    - lobby1
    - lobby2
    minigames:
    - paintball
    - bedwars

# 全局玩家列表设置
global-playerlist:
  enabled: false  # 禁用全局玩家列表
  display-others-as-spectators: false  # 不将其他玩家显示为观众
  display-vanished-players-as-spectators: true  # 将隐身玩家显示为观众
  isolate-unlisted-servers: false  # 不隔离未列出的服务器
  spy-servers:  # 监控服务器列表
  - spyserver1
  - spyserver2
  server-groups:  # 服务器组
    lobbies:
    - lobby1
    - lobby2
    group2:
    - server1
    - server2
  update-latency: false  # 不更新延迟

# 使用 Bukkit 权限管理器
use-bukkit-permissions-manager: false  # 不使用 Bukkit 权限管理器

# 使用在线 UUID 在 TAB 列表中
use-online-uuid-in-tablist: true  # 使用在线 UUID

# 启用 RedisBungee 支持
enable-redisbungee-support: true  # 启用 RedisBungee 支持
```
### 关于占位符支持
::: warning 注意
PlaceholderAPI 是必须的，否则你的大部分占位符不会生效。
:::
玩家和服务器相关占位符支持方法，你可以运行以下两个命令:
```
/papi ecloud download player
/papi ecloud download server
```
***更多的占位符请参考 [PlaceholderAPI](https://wiki.placeholderapi.com/) 文档。***  
***更多的配置请参考 [TAB 文档](https://cn.bing.com/search?q=tab%E6%8F%92%E4%BB%B6wiki&setmkt=zh-CN&PC=EMMX01&form=L2MT2E&scope=web#)***