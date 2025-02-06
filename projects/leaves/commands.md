# 常用指令

## 目录
1. [基础指令](#基础指令)
2. [家相关指令](#家相关指令)
3. [传送相关指令 (tpa)](#传送相关指令-tpa)
4. [服务端假人/bot](#服务端假人bot)
5. [假人插件 /fakeplayer](#假人插件-fakeplayer)
6. [随机传送](#随机传送)
7. [领地相关指令](#领地相关指令)
8. [禁用物品相关指令](#禁用物品相关指令)
9. [玩家备份相关指令](#玩家备份相关指令)

---

## 基础指令

| 指令 | 描述 |
| --- | --- |
| `/home` | 打开家表单（基岩版使用 `/homegui`） |

---

## 家相关指令

| 指令 | 描述 |
| --- | --- |
| `/sethome <家名>` | 设置家 |
| `/delhome <家名>` | 删除家 |
| `/home <玩家名> <共享的家名>` | 传送到共享的家 |

---

## 传送相关指令 (tpa)

| 指令 | 描述 |
| --- | --- |
| `/tpa <玩家名>` | 请求传送（基岩版使用 `/tpgui`） |
| `/tpahere <玩家名>` | 传送玩家到你身边 |
| `/tpaccept <玩家名>` | 接受传送请求 |
| `/tpdeny <玩家名>` | 拒绝传送请求 |
| `/tpall` | 传送所有在线玩家到你身边 |
| `/tpallhere` | 传送所有在线玩家到你身边 |
| `/tpahereall` | 所有假人传送到你身边 |

---

## 服务端假人/bot

| 指令 | 描述 |
| --- | --- |
| `/bot create <假人名> (皮肤)` | 创建假人 |
| `/bot remove <假人名>` | 删除假人 |

**文档链接:** [假人插件文档](https://docs.leavesmc.org/zh_Hans/leaves/reference/fakeplayer)

---

## 假人插件 /fakeplayer

| 指令 | 描述 |
| --- | --- |
| `/fp spawn` | 召唤假人 |
| `/fp kill` | 杀死假人 |
| `/fp killall` | 杀死服务器所有假人 (OP) |
| `/fp select` | 选中假人 |
| `/fp selection` | 查看选中假人 |
| `/fp list` | 查看已召唤的假人 |
| `/fp distance` | 查看与假人的距离 |
| `/fp drop` | 丢弃手上一个物品 |
| `/fp dropstack` | 丢弃手上整组物品 |
| `/fp dropinv` | 丢弃背包所有物品 |
| `/fp skin` | 复制玩家皮肤 |
| `/fp invsee` | 查看假人背包 |
| `/fp sleep` | 睡觉 |
| `/fp wakeup` | 起床 |
| `/fp status` | 查看假人状态 |
| `/fp respawn` | 让死亡的假人复活 |
| `/fp tp` | 传送到假人身边 |
| `/fp tphere` | 让假人传送到你身边 |
| `/fp tps` | 与假人交换位置 |
| `/fp set` | 更改假人的配置 |
| `/fp config` | 更改默认假人配置 |
| `/fp expme` | 吸收假人经验值 |
| `/fp attack` | 攻击假人 |
| `/fp mine` | 挖掘 |
| `/fp use` | 使用/交互/放置 |
| `/fp jump` | 跳跃 |
| `/fp stop` | 停止所有行为 |
| `/fp turn` | 转身 |
| `/fp look` | 看向指定位置 |
| `/fp move` | 移动 |
| `/fp ride` | 骑乘 |
| `/fp sneak` | 潜行 |
| `/fp sprint` | 疾跑 |
| `/fp swap` | 交换主副手物品 |
| `/fp hold` | 手持对应快捷栏物品 |
| `/fp cmd` | 执行假人命令 |
| `/fp reload` | 重载配置文件 (OP) |

**注:** 假人是一个模拟玩家，可以被任何指令识别（如 kick, tp, ban 等等）。

---

## 随机传送

| 指令 | 描述 |
| --- | --- |
| `/rtp` | 随机传送 |

---

## 领地相关指令

**Q: 怎么圈地?**

A: 默认圈地工具是木锄头，在保护的地方选择对角线的两个点（如左上方和右下方），然后在其中一个点用圈地工具左键，在另一个点用右键，输入指令 `/res create <领地名字>` 即可圈地。或者在保护地方中心输入指令 `/res auto <领地名字> <圈地大小>` 进行圈地。

---

## 禁用物品相关指令

| 指令 | 描述 |
| --- | --- |
| `/banitem add <actions> [-m materials] [-w worlds] [message]` | 禁止当前世界的当前物品（无元数据） |
| `/banitem check [delete]` | 查看所有库存中包含黑名单物品的玩家列表 |
| `/banitem mi` | 物品管理 |
| `/banitem load <filename>` | 加载特定配置文件 |
| `/banitem log` | 激活日志模式 |
| `/banitem reload/rl` | 重新加载配置文件 |
| `/banitem remove [-m materials] [-w worlds]` | 移除/解禁手上的物品 |

---

## 玩家备份相关指令

| 指令 | 描述 |
| --- | --- |
| `/pld help` | 查看帮助 |

---