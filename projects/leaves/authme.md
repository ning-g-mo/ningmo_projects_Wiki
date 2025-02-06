# AuthMe登录插件配置说明

## 配置文件

AuthMe登录插件的配置文件为`config.yml`，位于插件根目录下。

```yaml
DataSource:
  # 你想使用哪种类型的数据库？
  # 可用值: SQLITE, MARIADB, MYSQL, POSTGRESQL
  backend: SQLITE
  # 启用数据库缓存系统，在bungeecord环境或网站集成时应禁用。
  caching: true
  # 数据库主机地址
  mySQLHost: 127.0.0.1
  # 数据库端口
  mySQLPort: '3306'
  # 通过SSL连接到MySQL数据库
  mySQLUseSSL: true
  # 验证服务器的证书。
  # 我们不建议将此选项设置为false。
  # 如果你知道自己在做什么，可以在自己风险下将此选项设置为false
  mySQLCheckServerCertificate: true
  # 授权客户端检索RSA服务器公钥。
  # 高级选项，如果你不知道这意味着什么，请忽略。
  mySQLAllowPublicKeyRetrieval: true
  # 连接到MySQL数据库的用户名
  mySQLUsername: authme
  # 连接到MySQL数据库的密码
  mySQLPassword: '12345'
  # 数据库名称，用于转换器或作为SQLITE数据库名称
  mySQLDatabase: authme
  # 数据库表
  mySQLTablename: authme
  # 用于排序数据的ID列
  mySQLColumnId: id
  # 用于存储或检查玩家昵称的列
  mySQLColumnName: username
  # 用于存储或检查玩家真实姓名的列
  mySQLRealName: realname
  # 用于存储玩家密码的列
  mySQLColumnPassword: password
  # 用于存储玩家密码盐值的列
  mySQLColumnSalt: ''
  # 用于存储玩家电子邮件的列
  mySQLColumnEmail: email
  # 用于存储玩家是否已登录的列
  mySQLColumnLogged: isLogged
  # 用于存储玩家是否有有效会话的列
  mySQLColumnHasSession: hasSession
  # 用于存储玩家TOTP密钥（用于双因素认证）的列
  mySQLtotpKey: totp
  # 用于存储玩家上次IP地址的列
  mySQLColumnIp: ip
  # 用于存储玩家最后一次登录时间的列名
  mySQLColumnLastLogin: lastlogin
  # 用于存储注册日期的列名
  mySQLColumnRegisterDate: regdate
  # 用于存储玩家注册时IP地址的列名
  mySQLColumnRegisterIp: regip
  # 用于存储玩家最后位置的X坐标
  mySQLlastlocX: x
  # 用于存储玩家最后位置的Y坐标
  mySQLlastlocY: y
  # 用于存储玩家最后位置的Z坐标
  mySQLlastlocZ: z
  # 用于存储玩家最后位置的世界名称
  mySQLlastlocWorld: world
  # 用于存储玩家最后位置的水平旋转角度（Yaw）
  mySQLlastlocYaw: yaw
  # 用于存储玩家最后位置的垂直旋转角度（Pitch）
  mySQLlastlocPitch: pitch
  # 用于存储玩家UUID的列名（可选）
  mySQLPlayerUUID: ''
  # 覆盖数据库连接池大小，默认为10
  poolSize: 10
  # 连接池中连接的最大生命周期，默认为1800秒
  # 你应该将此值设置为比MySQL服务器的wait_timeout至少小30秒
  maxLifetime: 1800
ExternalBoardOptions:
  # 用于存储玩家组别的列名
  mySQLColumnGroup: ''
  # -1 表示禁用。如果你想只允许已激活的玩家登录服务器，
  # 可以在此设置未激活用户的组别编号，这在某些论坛/CMS支持中是必需的
  nonActivedUserGroup: -1
  # 其他需要存储用户名的MySQL列（区分大小写）
  mySQLOtherUsernameColumns: []
  # BCrypt所需的log2轮数（如果你不知道这是什么，请不要更改）
  bCryptLog2Round: 12
  # 在phpBB安装过程中定义的表前缀
  phpbbTablePrefix: phpbb_
  # phpBB激活用户组ID；2 是phpBB默认的注册用户组
  phpbbActivatedGroupId: 2
  # 在IP Board安装过程中定义的表前缀
  IPBTablePrefix: ipb_
  # IP Board默认用户组ID；3 是IP Board默认的注册用户组
  IPBActivatedGroupId: 3
  # 在XenForo安装过程中定义的表前缀
  XFTablePrefix: xf_
  # XenForo默认用户组ID；2 是XenForo默认的注册用户组
  XFActivatedGroupId: 2
  # 在WordPress安装过程中定义的表前缀
  wordpressTablePrefix: wp_
settings:
  sessions:
    # 是否启用会话功能？
    # 如果启用，当玩家成功验证后，
    # 他的IP和昵称将被保存。
    # 下次玩家加入服务器时，如果他的IP
    # 和上次相同且超时未过期，则无需再次验证。
    enabled: false
    # 会话在多少分钟后过期？
    # 玩家的会话将在超时或IP更改后结束。
    timeout: 10
  # 消息语言，可用语言：
  # https://github.com/AuthMe/AuthMeReloaded/blob/master/docs/translations.md
  messagesLanguage: zhcn
  # 强制AuthMe挂钩到Vault而不是特定的权限处理系统。
  forceVaultHook: false
  # 日志级别：INFO, FINE, DEBUG。使用INFO用于常规消息，
  # FINE用于一些额外的详细信息（如密码错误），
  # DEBUG用于调试。
  logLevel: FINE
  # 默认情况下，我们异步调度与数据库通信的任务。如果你想让
  # 与数据库的典型通信同步进行，请将此设置为false。
  useAsyncTasks: true
  # 服务器名称，用于某些占位符。
  serverName: 我的服务器
  restrictions:
    # 未验证的玩家能否聊天？
    # 请注意，此功能还会阻止所有未列在下面列表中的命令。
    allowChat: false
    # 隐藏未验证玩家的聊天记录？
    hideChat: false
    # 未验证玩家允许使用的命令
    allowCommands:
    - /login
    - /log
    - /l
    - /register
    - /reg
    - /email
    - /captcha
    - /2fa
    - /totp
    # 每个IP允许的最大注册数
    # 值为0表示不限制注册数量！
    maxRegPerIp: 9
    # 最小允许的用户名长度
    minNicknameLength: 3
    # 最大允许的用户名长度
    maxNicknameLength: 16
    
    # 如果启用，每个加入以下列出世界的玩家
    # 在成功验证后将被传送到出生点，并覆盖退出位置。
    # 这不同于“teleportUnAuthedToSpawn”，后者在玩家
    # “从其他位置登录”时传送玩家。
    # 此设置可防止潜在的安全漏洞。
    ForceSingleSession: true
    ForceSpawnLocOnJoin:
      enabled: false
      # 需要强制出生点的世界名称
      # 区分大小写！
      worlds:
      - world
      - world_nether
      - world_the_end
    # 是否保存玩家退出时的位置？
    SaveQuitLocation: false
    # 要激活受限用户功能，需要
    # 启用此选项并配置AllowedRestrictedUser字段。
    AllowRestrictedUser: false
    # 受限用户功能将踢出以下列出的玩家
    # 如果他们的IP地址不符合定义的IP地址。名称不区分大小写。
    # 可以使用*作为通配符（例如127.0.0.*），或使用正则表达式前缀regex:127\.0\.0\..*
    # 示例：
    #     AllowedRestrictedUser:
    #     - playername;127.0.0.1
    #     - playername;regex:127\.0\.0\..*
    AllowedRestrictedUser: []
    # 是否禁止未知IP尝试使用受限用户名登录？
    banUnsafedIP: false
    # 未注册的玩家是否应立即被踢出？
    kickNonRegistered: false
    # 错误密码的玩家是否应被踢出？
    kickOnWrongPassword: true
    # 未登录的玩家是否应被传送到出生点？
    # 成功验证后，他们将被传送回正常位置。
    teleportUnAuthedToSpawn: false
    # 未注册的玩家是否可以移动？
    allowMovement: false
    # 失败登录或注册的玩家应在多少秒后被踢出？设置为0以禁用。
    timeout: 180
    # 允许玩家名称中的字符的正则表达式模式。
    allowedNicknameCharacters: '[a-zA-Z0-9_]*'
    # 未注册的玩家可以走多远？
    # 设置为0表示无限制半径。
    allowedMovementRadius: 100
    # 登录前是否保护玩家物品栏？需要ProtocolLib。
    ProtectInventoryBeforeLogIn: true
    # 登录前是否禁止Tab补全功能？需要ProtocolLib。
    DenyTabCompleteBeforeLogin: false
    # 玩家加入时是否显示其所有其他账户？
    # 权限：/authme.admin.accounts
    displayOtherAccounts: true
    # 出生点优先级；值：authme, essentials, cmi, multiverse, default
    spawnPriority: authme,essentials,cmi,multiverse,default
    # 每个IP允许的最大登录次数
    maxLoginPerIp: 0
    # 每个IP允许的最大加入次数
    maxJoinPerIp: 0
    # 如果设置为true，AuthMe将永远不会传送玩家！
    noTeleport: false
    # 密码中允许字符的正则表达式语法。默认[!-~]允许所有可见ASCII字符，
    # 推荐使用。详见http://asciitable.com
    # 可以在https://regex101.com测试你的正则表达式。
    allowedPasswordCharacters: '[!-~]*'
    minPasswordLength: 6
  GameMode:
    # 玩家加入时是否强制生存模式？
    ForceSurvivalMode: false
  unrestrictions:
    # 以下是AuthMe将忽略注册或登录的所有账户名称
    # 配置此选项需自行承担风险！！
    # 此选项增加了与BuildCraft和其他模组的兼容性。
    # 不区分大小写！示例：
    # UnrestrictedName:
    # - 'npcPlayer'
    # - 'npcPlayer2'
    UnrestrictedName: []
    # 以下是AuthMe将忽略注册或登录的所有物品栏名称
    # 配置此选项需自行承担风险！！
    # 此选项增加了与某些模组的兼容性。
    # 不区分大小写！示例：
    # UnrestrictedInventories:
    # - 'myCustomInventory1'
    # - 'myCustomInventory2'
    UnrestrictedInventories: []
  security:
    # 密码最小长度
    minPasswordLength: 5
    # 密码最大长度
    passwordMaxLength: 30
    # 可能的值：SHA256, BCRYPT, BCRYPT2Y, PBKDF2, SALTEDSHA512,
    # MYBB, IPB3, PHPBB, PHPFUSION, SMF, XENFORO, XAUTH, JOOMLA, WBB3, WBB4, MD5VB,
    # PBKDF2DJANGO, WORDPRESS, ROYALAUTH, ARGON2, CUSTOM（仅限开发者）。详见
    # https://github.com/AuthMe/AuthMeReloaded/blob/master/docs/hash_algorithms.md
    # 如果你使用ARGON2，请检查你的系统上是否有argon2 C库。
    passwordHash: SHA256
    # 如果密码检查失败，AuthMe还将尝试使用以下哈希方法进行检查。
    # 在从一种哈希方法切换到另一种时使用此设置。
    # AuthMe将更新密码为新哈希。示例：
    # legacyHashes:
    # - 'SHA1'
    legacyHashes: []
    # SALTED2MD5 MD5(MD5(password)+salt)的盐长度
    doubleMD5SaltLength: 8
    # 如果passwordHash设置为PBKDF2，则使用的轮数。默认为10000。
    pbkdf2Rounds: 10000
    # 防止使用不安全的密码；全部转换为小写！
    # 你应该始终将'help'设置为不安全密码，以避免可能的冲突。
    unsafePasswords:
    - '123456'
    - password
    - qwerty
    - '12345'
    - '54321'
    - '123456789'
    - help
  registration:
    # 是否在服务器上启用注册？
    enabled: true
    # 每隔X秒向玩家发送一条消息，
    # 提醒他们需要登录/注册。
    messageInterval: 5
    # 仅注册并登录的玩家可以玩游戏。
    # 请参阅限制部分的例外情况。
    force: true
    # 注册类型：PASSWORD 或 EMAIL
    # PASSWORD = 使用用户提供的密码注册账户；
    # EMAIL = 密码生成并发送到用户提供的电子邮件。
    # 更多信息请参阅 https://github.com/Authme/AuthmeReloaded/wiki/Registration
    type: PASSWORD
    # /register命令的第二个参数：NONE = 无第二个参数
    # CONFIRMATION = 必须重复第一个参数（密码或电子邮件）
    # EMAIL_OPTIONAL = 对于密码注册：第二个参数可以为空或包含电子邮件地址
    # EMAIL_MANDATORY = 对于密码注册：第二个参数必须是电子邮件地址
    secondArg: CONFIRMATION
    # 成功注册后是否强制踢出玩家？
    # 不要与下面的登录功能一起使用。
    forceKickAfterRegister: false
    # 成功注册后是否强制执行/login？
    forceLoginAfterRegister: false
  # 登录后是否显示欢迎消息（welcome.txt）？
  # 你可以在welcome.txt中使用颜色和一些替换字符串：
  # {PLAYER}: 玩家名称，{ONLINE}: 显示在线玩家数量，
  # {MAXPLAYERS}: 显示服务器槽位，{IP}: 玩家IP，{LOGINS}: 登录玩家数量，
  # {WORLD}: 玩家当前世界，{SERVER}: 服务器名称
  # {VERSION}: 获取当前Bukkit版本，{COUNTRY}: 玩家国家
  useWelcomeMessage: true
  # 是否广播欢迎消息给整个服务器或仅给玩家？
  # 设置为true广播给服务器或false仅给玩家。
  broadcastWelcomeMessage: false
  # 是否延迟加入消息并在玩家登录后显示？
  delayJoinMessage: false
  # 成功登录后发送的自定义加入消息，
  # 保持为空以使用原始消息。
  # 可用变量：
  # {PLAYERNAME}: 玩家名称（无颜色）
  # {DISPLAYNAME}: 玩家显示名称（带颜色）
  # {DISPLAYNAMENOCOLOR}: 玩家显示名称（无颜色）
  customJoinMessage: 欢迎{PLAYERNAME}加入服务器！
  # 是否移除未登录用户的离开消息？
  removeUnloggedLeaveMessage: false
  # 是否移除所有加入消息？
  removeJoinMessage: false
  # 是否移除所有离开消息？
  removeLeaveMessage: false
  # 登录/注册前是否添加失明药水效果？
  applyBlindEffect: false
  # 是否防止玩家使用不同的大小写登录？
  # 如果Xephi已注册，则Xephi可以登录，但不能使用XEPHI/xephi/XePhI。
  preventOtherCase: true
GroupOptions:
  # 是否在玩家登录前将其切换到定义的权限组？
  # 请参阅下方的详细说明。
  enablePermissionCheck: false
  # 这是一个非常重要的选项：如果已注册的玩家加入服务器，
  # AuthMe将把他切换到unLoggedInGroup。这可以防止所有主要漏洞。
  # 你可以通过这个特殊组设置权限插件，使其没有任何权限，
  # 或仅允许聊天权限（或发送私信等权限）。
  # 最好的方法是为此组设置少量权限，以便如果玩家试图利用账户，
  # 他们只能做你为该组定义的操作。
  # 请注意，组名区分大小写，所以'admin'不同于'Admin'。
  # 否则你的组将被清除，玩家将加入默认组[]！
  # 示例：registeredPlayerGroup: 'NotLogged'
  registeredPlayerGroup: ''
  # 类似于上述，未注册的玩家可以设置为以下
  # 权限组。
  unregisteredPlayerGroup: ''
Email:
  # 邮件SMTP服务器主机
  mailSMTP: smtp.gmail.com
  # 邮件SMTP服务器端口
  mailPort: 465
  # 仅影响25端口：启用TLS/STARTTLS？
  useTls: true
  # 发送邮件的电子邮件账户
  mailAccount: ''
  # 电子邮件账户密码
  mailPassword: ''
  # 电子邮件地址，当mailAccount不是账户的电子邮件地址时填写
  mailAddress: ''
  # 自定义发件人名称，替换邮件中的mailAccount名称
  mailSenderName: ''
  # 恢复密码长度
  RecoveryPasswordLength: 8
  # 邮件主题
  mailSubject: 您的新AuthMe密码
  # 类似于maxRegPerIP但针对电子邮件
  maxRegPerEmail: 1
  # 提醒玩家添加电子邮件？
  recallPlayers: false
  # 提醒调度器的延迟（分钟）
  delayRecall: 5
  # 黑名单这些电子邮件域名
  emailBlacklisted:
  - 10minutemail.com
  # 白名单仅这些电子邮件域名
  emailWhitelisted: []
  # 是否将新密码以图片形式发送？
  generateImage: false
  # OAuth2令牌
  emailOauth2Token: ''

Hooks:
  # 是否需要与Multiverse挂钩进行出生点检查？
  multiverse: true
  # 是否需要与BungeeCord挂钩？
  bungeecord: false
  # 注册/登录后将玩家发送到此BungeeCord服务器
  sendPlayerTo: ''
  # 是否需要在玩家加入时禁用Essentials SocialSpy？
  disableSocialSpy: false
  # 是否需要在玩家加入时强制执行Essentials /motd命令？
  useEssentialsMotd: false

Protection:
  # 启用基于国家和反机器人的一些服务器保护？
  enableProtection: false
  # 是否对已注册用户名应用保护？
  enableProtectionRegistered: true
  geoIpDatabase:
    # 启用GeoIp数据库
    enabled: true
    # 用于下载GeoIp数据库的MaxMind clientId，
    # 在https://www.maxmind.com/en/accounts/current/license-key获取。
    # EssentialsX项目有关于如何生成许可证密钥的有用教程：
    # https://github.com/EssentialsX/Wiki/blob/master/GeoIP.md
    clientId: ''
    # 用于下载GeoIp数据库的MaxMind licenseKey。
    licenseKey: ''
  # 允许加入服务器和注册的国家。对于国家代码，请参阅
  # https://dev.maxmind.com/geoip/legacy/codes/iso3166/
  # 使用“LOCALHOST”表示本地地址。
  # 请注意使用引号！
  countries:
  - US
  - GB
  - LOCALHOST
  # 不允许加入服务器和注册的国家
  # 请注意使用引号！
  countriesBlacklist:
  - A1
  # 是否需要启用自动反机器人系统？
  enableAntiBot: true
  # 间隔时间（秒）
  antiBotInterval: 5
  # 在自动反机器人系统启动前允许的最大登录人数
  antiBotSensibility: 10
  # 自动反机器人系统的持续时间（分钟）
  antiBotDuration: 10
  # 反机器人系统激活前的延迟（秒）
  antiBotDelay: 60
  quickCommands:
    # 玩家在加入过程后的指定时间内发出命令将被踢出
    denyCommandsBeforeMilliseconds: 1000

Purge:
  # 如果启用，AuthMe会自动清理旧的、未使用的账户
  useAutoPurge: false
  # 账户在多少天后应被清理
  daysBeforeRemovePlayer: 60
  # 在清理过程中是否需要删除player.dat文件？
  removePlayerDat: false
  # 在清理过程中是否需要删除Essentials/userdata/player.yml文件？
  removeEssentialsFile: false
  # 存储players.dat的世界
  defaultWorld: world
  # 在清理过程中是否需要删除LimitedCreative/inventories/player.yml, player_creative.yml文件？
  removeLimitedCreativesInventories: false
  # 在清理过程中是否需要删除AntiXRayData/PlayerData/player文件？
  removeAntiXRayFile: false
  # 是否需要删除权限？
  removePermissions: false

Security:
  SQLProblem:
    # 如果无法联系SQL数据库，是否停止服务器？
    # 注意：如果设置为false，AuthMe将自动禁用，服务器将不受保护！
    stopServer: true
  console:
    # 是否将AuthMe日志输出复制到单独的文件中？
    logConsole: true
  captcha:
    # 当玩家输入错误密码次数过多时启用验证码
    useCaptcha: false
    # 在要求验证码前允许的最大尝试次数
    maxLoginTry: 5
    # 验证码长度
    captchaLength: 5
    # 玩家登录尝试计数重置的时间（分钟）
    captchaCountReset: 60
    # 注册前是否需要验证码？
    requireForRegistration: false
  tempban:
    # 如果玩家输入错误密码次数过多，临时封禁其IP地址
    enableTempban: false
    # 用户在多少次登录失败后其IP地址将被临时封禁
    maxLoginTries: 10
    # IP地址被临时封禁的时间（分钟）
    # 默认：480分钟，或8小时
    tempbanLength: 480
    # 多少分钟后重置失败登录计数（按IP和用户名）
    # 默认：480分钟（8小时）
    minutesBeforeCounterReset: 480
    # 使用自定义命令代替内部封禁系统，为空则禁用。
    # 可用占位符：%player%，%ip%
    customCommand: ''
  recoveryCode:
    # 恢复代码的字符数（0表示禁用）
    length: 8
    # 恢复代码的有效时间（小时）
    validForHours: 4
    # 输入恢复代码的最大尝试次数
    maxTries: 3
    # 玩家在密码恢复后有多少时间可以更改密码而不登录（分钟）
    # 默认：2分钟
    passwordChangeTimeout: 2
  emailRecovery:
    # 用户在发送密码恢复邮件前需要等待的时间（秒）
    # 这防止攻击者滥用AuthMe的邮件功能。
    cooldown: 60
  privacy:
    # 使用/email show显示的邮件将部分隐藏
    # 例如（如果启用）：
    #   原始邮件：my.email@example.com
    #   隐藏邮件：my.***@***mple.com
    enableEmailMasking: false
    # 验证码过期时间（分钟）
    verificationCodeExpiration: 10

# 在用户登录之前，某些属性（如OP状态、飞行能力、行走/飞行速度）会被暂时移除。
# 用户登录后，我们将恢复之前保存的属性。
# 在本节中，您可以定义这些属性应如何处理。
# 更多信息请参阅 https://github.com/Authme/AuthmeReloaded/wiki/Limbo-players
limbo:
  persistence:
    # 除了将数据存储在内存中，您还可以定义数据是否以及如何持久化到磁盘。
    # 这在服务器崩溃时很有用，以便下次启动服务器时我们可以正确恢复诸如OP状态、飞行能力、行走/飞行速度等属性。
    # DISABLED: 不使用磁盘存储，
    # INDIVIDUAL_FILES: 每个玩家的数据保存在单独的文件中，
    # DISTRIBUTED_FILES: 根据UUID将玩家分布到不同的文件中，详见下文。
    type: INDIVIDUAL_FILES
    # 仅影响DISTRIBUTED_FILES持久化。分布式文件持久化通过根据UUID将玩家分配到不同的桶中来减少文件数量。
    # 此设置定义玩家应分布在多少个文件中。可能的值：ONE, FOUR, EIGHT, SIXTEEN, THIRTY_TWO, SIXTY_FOUR,
    # ONE_TWENTY 表示128, TWO_FIFTY 表示256。
    # 例如，如果您预计有100个未登录的玩家，设置为SIXTEEN将平均每个文件6.25个玩家（100 / 16）。
    # 注意：如果更改此设置，所有数据将被迁移。如果有大量数据，请仅在服务器重启时更改此设置，而不是使用/authme reload。
    distributionSize: SIXTEEN
  # 玩家是否允许飞行：RESTORE, ENABLE, DISABLE, NOTHING。
  # RESTORE：恢复玩家之前的属性。NOTHING：阻止AuthMe修改玩家的“允许飞行”属性。
  restoreAllowFlight: RESTORE
  # 恢复飞行速度：RESTORE, DEFAULT, MAX_RESTORE, RESTORE_NO_ZERO。
  # RESTORE：恢复玩家之前的飞行速度；
  # DEFAULT：始终设置为默认速度；
  # MAX_RESTORE：取玩家当前速度和之前速度的最大值；
  # RESTORE_NO_ZERO：类似于'restore'，但如果玩家的速度为0，则设置为默认速度。
  restoreFlySpeed: RESTORE_NO_ZERO
  # 恢复行走速度：RESTORE, DEFAULT, MAX_RESTORE, RESTORE_NO_ZERO。
  # 请参阅上述说明。
  restoreWalkSpeed: RESTORE_NO_ZERO

BackupSystem:
  # 备份的一般配置：如果为false，则不允许备份
  ActivateBackup: false
  # 每次服务器启动时创建备份
  OnServerStart: false
  # 每次服务器停止时创建备份
  OnServerStop: true
  # 仅限Windows：MySQL安装路径
  MysqlWindowsPath: C:\Program Files\MySQL\MySQL Server 5.1\

# 转换器设置：详见 https://github.com/Authme/AuthmeReloaded/wiki/Converters
Converter:
  Rakamak:
    # Rakamak文件名
    fileName: users.rak
    # Rakamak是否使用IP？
    useIP: false
    # Rakamak IP文件名
    ipFileName: UsersIp.rak
  CrazyLogin:
    # CrazyLogin数据库文件名
    fileName: accounts.db
  loginSecurity:
    # LoginSecurity：从SQLite转换；如果为false则使用MySQL
    useSqlite: true
    mySql:
      # LoginSecurity MySQL：数据库主机
      host: ''
      # LoginSecurity MySQL：数据库名称
      database: ''
      # LoginSecurity MySQL：数据库用户
      user: ''
      # LoginSecurity MySQL：数据库用户的密码
      password: ''
```
## 修改欢迎语

欢迎语是指玩家登录服务器时，AuthMe发送给他们的第一条消息。您可以修改欢迎语，以便更加个性化。

欢迎语的位置在配置文件的`welcome.txt`部分。
```txt
欢迎玩家{PLAYER}加入{SERVER}服务器！
文明游戏，人人有责。
祝您游戏愉快！

可以将此登录成功消息自定义，相对路径为plugins\AuthMe\welcome.txt

```
::: warning 注意
所使用的换行也会打印在游戏里，因此请不要在欢迎语中使用过多的换行符。
:::

## 更改玩家密码

输入以下命令来更改玩家密码：

```
/authme password <目标玩家ID> <新密码>
```

***更多的插件帮助请参阅[AuthMe Wiki](https://pluginscdtribe.github.io/wiki/authme/)***
