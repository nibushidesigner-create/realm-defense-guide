const heroes = [
  {
    id: "fee",
    name: "Fee",
    role: "远程/召唤",
    tier: "A",
    unlock: "世界 1 第 1 关，免费，R0",
    active: "Feral Spirit",
    tags: ["新手核心", "召唤狼", "防空补伤"],
    stats: { damage: 76, control: 50, survive: 46, support: 58 },
    summary: "前期最稳定的远程英雄，靠安全输出和狼群补位处理漏怪。R3 后攻速提升明显，后期 R7 可围绕 Connie 等羁绊继续发挥。",
    notes: [
      "站在覆盖两段路线的位置，让普攻和狼群都能拖住主火力区。",
      "飞行怪多的关卡不要让 Fee 被地面怪牵制，靠后站更稳。",
      "新手可优先升到 R1-R3，后期再考虑 R7 羁绊玩法。",
    ],
  },
  {
    id: "lancelot",
    name: "Lancelot",
    role: "前排/治疗",
    tier: "B+",
    unlock: "世界 1 第 5 关，免费，R0",
    active: "Holy Shield",
    tags: ["承伤", "护盾", "守家"],
    stats: { damage: 48, control: 42, survive: 86, support: 72 },
    summary: "免费前排，能用护盾和治疗稳住路线。主线推进时价值在于给塔争取输出时间，世界 4 的守护目标关尤其有用。",
    notes: [
      "站在交叉路口或出口前弯道，不要在入口过早吃满伤害。",
      "护盾留给 Boss 进主火力区、敌方远程开火或守护目标掉血时。",
      "如果缺坦克，R1-R3 的收益很实在，但不用把所有资源压在他身上。",
    ],
  },
  {
    id: "masamune",
    name: "Masamune",
    role: "机动/补漏",
    tier: "B",
    unlock: "世界 1 第 7 关，1500 宝石，R1",
    active: "Teleport Blast",
    tags: ["瞬移", "分身", "快节奏"],
    stats: { damage: 74, control: 46, survive: 58, support: 38 },
    summary: "跑图快、复活快，适合多路线补漏。低阶偏脆，真正好用需要更高觉醒支撑。",
    notes: [
      "用来处理侧路和漏怪，不要长期顶在主路当坦克。",
      "世界 3-4 的分路图比单线图更能体现价值。",
      "若宝石紧张，通常优先 Efrigid、Mabyn 或后续核心英雄。",
    ],
  },
  {
    id: "connie",
    name: "Connie",
    role: "召唤/控场",
    tier: "S",
    unlock: "世界 1 第 9 关，1500 宝石，R1；世界 4 可转 Necro Connie",
    active: "Summon Bunnies",
    tags: ["兔子墙", "减速", "后期主线核心"],
    stats: { damage: 78, control: 88, survive: 62, support: 82 },
    summary: "普通 Connie 前期偏弱，转为 Necro Connie 后是主线最强泛用英雄之一，兔子能同时承担阻挡、减速和吸引火力。",
    notes: [
      "世界 4 拿到 Necro Connie 相关条件后优先推进，她会显著降低世界 5-7 难度。",
      "Boss 关用兔子吃高伤害、挡冲锋、引导 Boss 停在塔下。",
      "与 Fee R7、Hogan R6 等召唤相关羁绊有后期玩法。",
    ],
  },
  {
    id: "hogan",
    name: "Hogan",
    role: "近战/召唤",
    tier: "B",
    unlock: "世界 1 第 11 关，1500 宝石，R1",
    active: "Bacon Toss",
    tags: ["宠物", "近战", "后期天赋"],
    stats: { damage: 62, control: 44, survive: 70, support: 50 },
    summary: "低阶表现平淡，核心价值主要在后期高觉醒和召唤羁绊。新手期不建议早买。",
    notes: [
      "如果已经投入，至少拉到可用觉醒再上场，否则容易被远程和范围伤害压制。",
      "Bacon 可帮忙分担目标，但别指望它解决整波敌人。",
      "世界 7 解锁 Hogan R7 后，后期收藏和特定阵容价值提高。",
    ],
  },
  {
    id: "bolton",
    name: "Bolton",
    role: "法术/眩晕",
    tier: "C+",
    unlock: "世界 1 第 12 关，1500 宝石，R1",
    active: "Lightning Bolt",
    tags: ["闪电", "单点控制", "羁绊件"],
    stats: { damage: 58, control: 66, survive: 38, support: 44 },
    summary: "能打眩晕和法术伤害，但整体强度偏旧。通常作为羁绊或锦标赛祝福英雄考虑，不适合作为第一个投入核心。",
    notes: [
      "不要让他暴露在敌方远程火力下，站位尽量靠后。",
      "如果需要冰冻/控场，Efrigid 的泛用性明显更高。",
      "有 Koi、Yan 等羁绊时才更值得回头培养。",
    ],
  },
  {
    id: "smoulder",
    name: "Smoulder",
    role: "飞行/范围",
    tier: "A",
    unlock: "世界 1 第 5 关后商店，3000 宝石，R2",
    active: "Inferno",
    tags: ["火焰", "空中单位", "群伤"],
    stats: { damage: 86, control: 54, survive: 60, support: 42 },
    summary: "会飞的范围输出，面对成团敌人和飞行怪很舒服。R4-R5 后空中减速与眩晕价值更明显。",
    notes: [
      "技能等敌人重叠后再放，打零散怪会浪费爆发。",
      "世界 2-3 飞行压力较大时表现不错。",
      "若已买 Efrigid，Smoulder 也能用于开启世界 1 挑战。",
    ],
  },
  {
    id: "obsidian",
    name: "Obsidian",
    role: "近战/范围控",
    tier: "C",
    unlock: "世界 1 第 5 关后商店，3000 宝石，R2",
    active: "Earth Explosion",
    tags: ["地震", "召唤", "慢速"],
    stats: { damage: 50, control: 60, survive: 74, support: 35 },
    summary: "技能看起来有控制，但移动慢、泛用性低，主线和后期都不优先。",
    notes: [
      "除非为了挑战解锁或特定羁绊，不建议早买。",
      "分路和快怪关表现差，常常来不及补位。",
      "如果已经拥有，尽量让他守固定窄口，不要频繁移动。",
    ],
  },
  {
    id: "efrigid",
    name: "Efrigid",
    role: "冰冻/控场",
    tier: "S",
    unlock: "世界 1 第 5 关后商店，3000 宝石，R2",
    active: "Frost Orb",
    tags: ["冰冻", "减速", "首购推荐"],
    stats: { damage: 74, control: 96, survive: 52, support: 78 },
    summary: "新手最推荐首购之一。R4 后技能循环更强，能把关键波次固定在塔的火力区内。",
    notes: [
      "主线推进优先拉到 R4，世界 3-5 的高压波次会轻松很多。",
      "不要站得太靠前，避免被毒、远程和范围伤害打断节奏。",
      "Boss 关把冰冻留给 Boss 进入单体塔/镜塔/核心火力区后。",
    ],
  },
  {
    id: "mabyn",
    name: "Mabyn",
    role: "恐惧/控场",
    tier: "A-",
    unlock: "世界 1 第 5 关后商店，3000 宝石，R2",
    active: "Jack Drop",
    tags: ["恐惧", "陷阱", "早期强"],
    stats: { damage: 62, control: 84, survive: 56, support: 66 },
    summary: "低阶就有不错的控制，适合早期补控和拖怪。后期天赋成长一般，不建议无脑高投。",
    notes: [
      "让她站在主坦后面，利用恐惧把敌人送回塔区。",
      "和 Narlax 拉怪、Smoulder 爆发、Efrigid 冰冻都能形成控制链。",
      "如果只为开世界 2 挑战，买了可以先不深度觉醒。",
    ],
  },
  {
    id: "sethos",
    name: "Sethos",
    role: "坦克/毒",
    tier: "B",
    unlock: "世界 3 第 50 关，6000 宝石，R4",
    active: "Burrow Blitz",
    tags: ["钻地", "毒", "分路坦"],
    stats: { damage: 66, control: 58, survive: 82, support: 44 },
    summary: "世界 3-4 主线能用的坦克，但 6000 宝石成本高，长期性价比一般。",
    notes: [
      "缺坦时能顶住多路压力，但通常不如继续强化 Lancelot 或等 Leif/Necro Connie。",
      "钻地适合处理毒远程和漏怪，但别让他单扛所有范围伤害。",
      "更多用于挑战解锁、收藏和特定祝福周。",
    ],
  },
  {
    id: "helios",
    name: "Helios",
    role: "支援/塔辅",
    tier: "A",
    unlock: "世界 3 第 60 关，6000 宝石，R4",
    active: "Flame On",
    tags: ["加速", "治疗", "塔强化"],
    stats: { damage: 68, control: 46, survive: 72, support: 90 },
    summary: "本体不靠单刷取胜，核心是加速、治疗和强化塔/队友。高难 Realm Siege 和后期主线很吃香。",
    notes: [
      "与 Efrigid R4、Necro Connie、Yan/Leif 等组成稳定推进队。",
      "世界 6 这类塔伤很重要的地图，Helios 的 Empower 价值更高。",
      "如果当前队伍伤害不足，先补核心输出再买她。",
    ],
  },
  {
    id: "yan",
    name: "Yan",
    role: "辅助/传送",
    tier: "S",
    unlock: "世界 4 第 90 关，7500 宝石，R5",
    active: "Decrepify",
    tags: ["加速", "传送", "节奏核心"],
    stats: { damage: 54, control: 76, survive: 54, support: 96 },
    summary: "高阶辅助，能放大 Koi、Helios、Connie、塔位和控制链价值。单独上场不如成型队伍明显。",
    notes: [
      "把加速给能改变战局的英雄或塔，不要浪费在低价值召唤物上。",
      "Boss 关配合单体塔/爆发英雄，等 Boss 进入核心区域再开节奏。",
      "资源足够后是长期值得拥有的支援英雄。",
    ],
  },
  {
    id: "narlax",
    name: "Narlax",
    role: "聚怪/位移",
    tier: "A+",
    unlock: "世界 4 第 110 关，7500 宝石，R5",
    active: "Void Teleport",
    tags: ["拉怪", "聚怪", "组合技"],
    stats: { damage: 70, control: 90, survive: 66, support: 70 },
    summary: "核心不是站桩，而是把敌人拉回高伤区域。配合 Raida、Mabyn、Smoulder、Shamiko 等可打出强控爆发。",
    notes: [
      "拉怪后立刻接眩晕、恐惧、冰冻或范围爆发。",
      "世界 5 多敌人、多范围塔时，拉怪价值很高。",
      "不要把他当纯坦克用，拉完要调整位置。",
    ],
  },
  {
    id: "leif",
    name: "Leif",
    role: "坦克/塔辅",
    tier: "A",
    unlock: "世界 5 第 130 关，7500 宝石，R5",
    active: "Forge Weapon",
    tags: ["高生存", "武器强化", "主线坦"],
    stats: { damage: 78, control: 52, survive: 94, support: 74 },
    summary: "主线推进非常可靠的坦克兼增益英雄，尤其适合世界 5-6 的高压地面战。",
    notes: [
      "如果没有 Necro Connie，Leif 会明显改善世界 5 体验。",
      "让他站在蘑菇、神社或其他治疗/加速范围内，续航更稳定。",
      "传奇模式因一波制和觉醒机制，表现不一定等同普通主线。",
    ],
  },
  {
    id: "caldera",
    name: "Caldera",
    role: "变身/坦克",
    tier: "B",
    unlock: "世界 5 第 140 关，3000 宝石，R2",
    active: "Lava Transformation",
    tags: ["岩浆", "高阶坦", "Boss"],
    stats: { damage: 72, control: 42, survive: 92, support: 32 },
    summary: "需要较高觉醒才舒服，低阶主线并不突出。特定 Boss、锦标赛或高阶账号可发挥。",
    notes: [
      "世界 5 解锁后不要因为便宜就立刻投入，先看队伍是否缺坦。",
      "与 Leif 等后期英雄存在羁绊价值。",
      "低阶时遇到远程、飞行和控制波次会很吃力。",
    ],
  },
  {
    id: "azura",
    name: "Azura",
    role: "魅惑/控制",
    tier: "A",
    unlock: "世界 6 第 170 关，3000 宝石，R2",
    active: "Sakura Power",
    tags: ["魅惑", "净化", "控场"],
    stats: { damage: 64, control: 88, survive: 58, support: 82 },
    summary: "擅长处理高威胁敌人与召唤物，能用魅惑改变前线压力。世界 6 后段和世界 7 部分关卡有价值。",
    notes: [
      "用魅惑单位吃远程火力或拦住高威胁敌人。",
      "避免让自动效果误触某些不该被打的目标或隐形机制。",
      "与 Necro Connie 一起能给后期关卡提供大量安全垫。",
    ],
  },
  {
    id: "raida",
    name: "Raida",
    role: "突进/眩晕",
    tier: "S",
    unlock: "世界 6 第 180 关，3000 宝石，R2",
    active: "Baberu-Taimu Shoki Bash",
    tags: ["冲锋", "雷电", "Boss补伤"],
    stats: { damage: 92, control: 78, survive: 76, support: 48 },
    summary: "后期强力英雄，突进、眩晕和闪电能处理大量复杂局面。R6 后价值更完整。",
    notes: [
      "与 Narlax 的拉怪组合非常经典，先聚怪再冲锋打控与伤害。",
      "对飞行、Boss 和漏怪都有贡献，是后期优先培养目标之一。",
      "别让他孤身冲进连续眩晕或高伤敌群，技能后要拉回安全区。",
    ],
  },
  {
    id: "koizuul",
    name: "Koizuul",
    role: "变身/爆发",
    tier: "S",
    unlock: "世界 6 第 190 关，3000 宝石，R2",
    active: "Tremor Splash",
    tags: ["龙形态", "大范围", "后期核心"],
    stats: { damage: 96, control: 76, survive: 84, support: 54 },
    summary: "后期顶级英雄，鱼形态抗压，龙形态清场。需要 Yan、Helios、Shamiko 等加速/节奏支援才能更快进入强势窗口。",
    notes: [
      "Boss 前攒好龙形态，不要把变身浪费在低压波次。",
      "与 Yan、Helios、Shamiko 组合能显著提升循环。",
      "世界 6 主线刚解锁时未必立刻无敌，但长期优先级很高。",
    ],
  },
  {
    id: "shamiko",
    name: "Shamiko",
    role: "音乐/控制",
    tier: "A+",
    unlock: "世界 6 第 200 关，3000 宝石，R2",
    active: "Bard Song",
    tags: ["手动节奏", "睡眠/恐惧", "高上限"],
    stats: { damage: 52, control: 94, survive: 50, support: 90 },
    summary: "操作型辅助，强度依赖觉醒和手动节奏。会用时能在 Boss、锦标赛和后期挑战里提供极强控制。",
    notes: [
      "R4 后再认真练手感，乱点技能会浪费关键控制窗口。",
      "和 Koi、Raida、Narlax 等爆发/聚怪英雄非常契合。",
      "主线普通推进不必急买，但后期账号值得培养。",
    ],
  },
  {
    id: "cyra",
    name: "Cyra",
    role: "女神/爆发",
    tier: "S",
    unlock: "世界 7 开启二选一或第 210 关，3000 宝石，R2",
    active: "Photon Launch",
    tags: ["无敌窗口", "对空近战", "爆发"],
    stats: { damage: 94, control: 66, survive: 86, support: 46 },
    summary: "光之女神，主动技能带短暂无敌和爆发，能处理地面与飞行目标。高觉醒后持续战斗力大幅提高。",
    notes: [
      "用 Photon Launch 躲开 Boss 技能或切入后排，而不是只当普通伤害。",
      "与 Elara 的 R7 联动让后期爆发更完整。",
      "世界 7 高压图可作为主输出或处理危险飞行单位。",
    ],
  },
  {
    id: "elara",
    name: "Elara",
    role: "女神/聚怪",
    tier: "S",
    unlock: "世界 7 开启二选一或第 210 关，3000 宝石，R2",
    active: "Cosmic Flux",
    tags: ["拉怪", "恐惧", "减伤"],
    stats: { damage: 84, control: 94, survive: 82, support: 70 },
    summary: "暗之女神，主动能聚怪并恐惧，后续裂隙提供减速和范围压制。更偏控场与队伍保护。",
    notes: [
      "把敌人拉回 Rho、Gamma、Volari 或队友爆发范围内。",
      "面对世界 7 快速/塔锁敌人时，聚怪要接后续控制，不然容易反冲出口。",
      "R6 后女神形态持续，控场稳定性提升很大。",
    ],
  },
  {
    id: "osan",
    name: "Osan",
    role: "毒/辅助",
    tier: "A+",
    unlock: "世界 7 第 220 关，3000 宝石，R3",
    active: "Disorienting Slam",
    tags: ["隐身", "毒池", "Broto"],
    stats: { damage: 76, control: 82, survive: 68, support: 80 },
    summary: "靠隐身、毒和 Broto 辅助控制。尽量保持远程状态，让毒雷和 EMP 持续发挥。",
    notes: [
      "不要让 Osan 长时间陷入近战，否则会少放毒雷。",
      "Broto 的毒泡能短控强敌，适合打断高威胁目标。",
      "R6 隐身队友、R7 复活队友让后期容错更高。",
    ],
  },
  {
    id: "jett",
    name: "Jett",
    role: "远程/机械坦",
    tier: "A+",
    unlock: "世界 7 第 230 关",
    active: "Blaster Barrage",
    tags: ["L.A.G.", "飞行阻挡", "过热"],
    stats: { damage: 88, control: 72, survive: 82, support: 64 },
    summary: "后期机械英雄，L.A.G. 能扛多个目标，尤其能拦截飞行单位；主动技能提供范围爆发。",
    notes: [
      "L.A.G. 会在 Jett 当前所在位置复活，移动 Jett 可以调整复活点。",
      "飞行压力大的世界 7 图，Jett 的阻挡能力很珍贵。",
      "R7 可在 Boss 爆发或群控方向二选一，按关卡需求切换。",
    ],
  },
];

const worldGuides = [
  {
    id: "w1",
    world: "世界 1",
    short: "Pridefall",
    name: "Pridefall Kingdom",
    start: 1,
    end: 20,
    threats: ["基础推进", "飞行", "快跑", "召唤"],
    towers: ["Archer：便宜防空与持续输出", "Barracks：低成本阻挡", "Wizard：加速与传送", "Cannon：只在密集窄口少量使用"],
    unlocks: ["5 关获得 Lancelot", "10 关开启 Daily Trial 与传奇", "20 关开启世界 2"],
    plan: {
      opening: "开局用 Archer 覆盖主路，Barracks 放在弯道或交叉口，不要把金币平均铺到远离火力区的位置。",
      core: "Fee 靠后输出，Lancelot 守主路；飞行多时补 Archer，地面漏怪多时补 Barracks/Wizard 传送。",
      late: "最后两波优先升级主火力区，技能留给快怪、成团怪或出口前漏怪。",
    },
    specials: {
      10: {
        name: "10 关：传奇模式门槛",
        threat: "混合波次",
        core: "这是从教学进入正式关卡的检查点，重点是把 Archer 和 Barracks 的责任分开。",
        steps: ["入口放 Archer 清小怪，出口前放 Barracks 防漏。", "Fee 清飞行和后排，Lancelot 只守最容易漏的路线。", "不要急着造 Cannon，金币优先给已经覆盖主路的塔。"],
      },
      20: {
        name: "20 关：世界 1 收官",
        threat: "Boss",
        core: "用 Barracks 与 Lancelot 拖住 Boss，让 Archer/Wizard 在长时间内反复输出。",
        steps: ["主火力区放在 Boss 会停留最久的弯道。", "Barracks 分散一点，避免一次范围伤害清空阻挡。", "Fee 的召唤用于补漏，不要和 Lancelot 完全站在同一点。"],
      },
    },
  },
  {
    id: "w2",
    world: "世界 2",
    short: "Fjordgaard",
    name: "Fjordgaard",
    start: 21,
    end: 40,
    threats: ["飞行", "快跑", "诅咒", "高护甲"],
    towers: ["Thor：主力塔，North Wind 减速很关键", "Mead Hall：强力阻挡，升级可刷新兵", "Axe：便宜防空", "Dragon：用 Terrify 做出口回推"],
    unlocks: ["21 关开启锦标赛", "22 关开启 Forge", "31 关开启 Shattered Realms", "40 关开启世界 3/Arcade/Realm Siege"],
    plan: {
      opening: "优先在交叉路口做 Thor + Mead Hall 的组合，Axe 只在飞行压力明显时补。",
      core: "Heretic 的诅咒很烦，让召唤物或兵先吃技能，英雄不要站在同一个点被连锁影响。",
      late: "快怪和飞行混波时，出口前 Dragon Terrify 或 Mead Hall 补一道保险。",
    },
    specials: {
      30: {
        name: "30 关：Yeti Boss",
        threat: "Boss",
        core: "Boss 会远程丢雪球，英雄和 Mead Hall 兵不要堆成一团。",
        steps: ["建 5-7 个 Mead Hall 分散吃远程目标。", "主路放数个 Thor 并点 North Wind，Axe Totem 补群伤。", "英雄用 Efrigid/Mabyn/Smoulder 这类 AoE 或控制更稳。"],
      },
      40: {
        name: "40 关：Mammoth Rider",
        threat: "Boss",
        core: "打法接近 30 关，但 Boss 远程炸弹更容易清掉聚堆单位。",
        steps: ["Mead Hall 与英雄分散站，避免炸弹一次清空前线。", "Thor 的 North Wind 覆盖 Boss 行进路线。", "利用地图可点击金币点补经济，再把钱投入主火力区。"],
      },
    },
  },
  {
    id: "w3",
    world: "世界 3",
    short: "Sunstorm",
    name: "Sunstorm Sands",
    start: 41,
    end: 80,
    threats: ["中毒", "飞行", "快跑", "高护甲"],
    towers: ["Spear：世界 3 主力，Crawler 延迟很强", "Necro：1-3 座放在击杀区", "Mirror：Boss/单体火力，配合 Blind", "Genie：贵，但 Polymorph 可救漏怪"],
    unlocks: ["50 关解锁 Sethos", "60 关解锁 Helios 与世界 3 挑战", "80 关开启世界 4"],
    plan: {
      opening: "优先升级 Spear 并布置 Crawler，主击杀区放 1 座 Necro。",
      core: "毒与远程敌人会惩罚脆皮站位，远程英雄靠后，近战只在塔区内接敌。",
      late: "Boss 关补 Mirror，普通关不要为了贵塔牺牲 Spear/Crawler 的覆盖。",
    },
    specials: {
      50: {
        name: "50 关：Sethos Boss",
        threat: "Boss",
        core: "Boss 物理抗性高，中心路口需要 Crawler、Mirror 和法术英雄共同处理。",
        steps: ["中心上下放 Mirror，右侧放 Necro，其余以 Spear + Crawler 为主。", "Crawler 往中心集结，帮英雄拖住 Boss。", "Fee R1、Lancelot R1、Efrigid 是低成本稳定组合。"],
      },
      60: {
        name: "60 关：Helios Boss",
        threat: "飞行 Boss",
        core: "Boss 是飞行单位，移动到固定点施法，英雄站错位置会被高伤技能秒掉。",
        steps: ["主线仍以 Spear/Crawler 与 Necro 稳怪，别全造地面单体塔。", "英雄保持远程安全距离，避免站在 Boss 停靠点正下方。", "可在 Boss 停靠点附近补 Genie 或可防空输出。"],
      },
      70: {
        name: "70 关：Pharaoh Guardian",
        threat: "双 Boss",
        core: "最后会激活两座守卫，必须每条路都有阻挡和单体火力。",
        steps: ["每条路各放 Necro + Mirror，其他位置用 Spear/Crawler 延迟。", "带两个能接地面 Boss 的单位，Lancelot + Mabyn/Fee/Efrigid 都可。", "技能不要提前交空，等守卫进入塔区后连控。"],
      },
      80: {
        name: "80 关：Pharaoh 收官",
        threat: "Boss",
        core: "先压低 Pharaoh，再处理复活守卫与第二阶段推进。",
        steps: ["中路前四个塔位优先放 Mirror，Boss 站桩期间尽快压血。", "两侧继续用 Spear/Crawler 和 Necro 延迟守卫。", "如果输出慢，就把 Boss 第二阶段继续拉在 Mirror 范围内。"],
      },
    },
  },
  {
    id: "w4",
    world: "世界 4",
    short: "Cloudveil",
    name: "Caelum Cloudveil",
    start: 81,
    end: 120,
    threats: ["净化", "飞行", "传送", "陨石"],
    towers: ["Pyromancer：核心塔，Cleanse 覆盖越早越好", "Boomerang：Slow 用来控大群", "Avian Knight：出口保险", "Mana Blaster：贵，少量使用"],
    unlocks: ["90 关解锁 Yan", "约 100 关可准备 Necro Connie", "110 关解锁 Narlax", "120 关开启世界 5"],
    plan: {
      opening: "先做 Pyromancer Cleanse 覆盖，再补 Boomerang Slow，不要四种塔平均升级。",
      core: "世界 4 的负面状态、传送和敌方增益很多，净化塔比单纯伤害塔更重要。",
      late: "Boss 拉人或陨石落下后，立刻把英雄拖到 Cleanse 覆盖区。",
    },
    specials: {
      90: {
        name: "90 关：Yan Boss",
        threat: "传送 Boss",
        core: "Yan 会分阶段加速、传送、减防并开传送门，Cleanse 是关键。",
        steps: ["每隔一个塔位先点 Pyromancer Cleanse，保证地图大部分区域可净化。", "每座 Pyromancer 先有 1 层 Wisp，再考虑继续升级。", "底部十字路口放 2-4 个 Avian Knight 或 Boomerang Slow 兜底。"],
      },
      100: {
        name: "100 关：Narlax Boss 初战",
        threat: "拉人 Boss",
        core: "Narlax 会全图拉人并造成范围伤害，拉完必须把英雄移出 Boss 身边。",
        steps: ["主要造 Pyromancer Cleanse，少量 Boomerang Slow 分布在路线关键点。", "Lancelot 很适合吃伤和保护队友，脆皮被拉后马上拖走。", "Avian Knight 容易被 Boss 范围伤害清掉，少建或只做出口保险。"],
      },
      110: {
        name: "110 关：Narlax Boss 再战",
        threat: "拉人/换塔位",
        core: "Boss 出现后会改变部分塔位位置，提前按最终位置准备塔。",
        steps: ["预判塔位移动，右侧路角和底部出口优先准备 Cleanse/Slow。", "拉人后把英雄点到 Cleanse 下，不要站在 Boss 范围内硬扛。", "敌人更多，必须同时保证 2-4 个 Slow 和足够 Cleanse。"],
      },
      120: {
        name: "120 关：守护神龛",
        threat: "陨石/守护",
        core: "没有常规 Boss，难点是保护神龛、处理大量敌人和陨石打断。",
        steps: ["神龛附近先做 Cleanse + Slow，剩余塔位再补 Pyromancer 伤害。", "Lancelot/Helios 能治疗或保护神龛，Efrigid/Mabyn/Connie 控场很稳。", "最后一波小陨石密集，脆皮英雄移出主路线。"],
      },
    },
  },
  {
    id: "w5",
    world: "世界 5",
    short: "Tartarus",
    name: "Tartarus",
    start: 121,
    end: 160,
    threats: ["隐身", "滚动", "飞行", "高血量"],
    towers: ["Mushroom：1-3 座核心控场/治疗/致盲", "Geargrinder：处理飞行和 Myrk 远程", "Dwarf：挡 Pango 和漏怪", "Blunderbuss：窄口破甲与地面 AoE"],
    unlocks: ["130 关解锁 Leif", "140 关解锁 Caldera", "160 关开启世界 6"],
    plan: {
      opening: "每条路线至少准备阻挡或召唤，Pango/Lava Pango 需要撞上单位才好处理。",
      core: "主火力区围绕 Mushroom 布置，Geargrinder 补飞行和远程，Dwarf 做关键阻挡。",
      late: "敌人数量大，Narlax 拉怪、Connie 兔子墙、Efrigid 冰冻都能把塔伤放大。",
    },
    specials: {
      130: {
        name: "130 关：Leif Boss",
        threat: "Boss",
        core: "Leif 会追最近英雄，击杀后去铁砧强化；绝不能让他频繁升级。",
        steps: ["最佳解法是用 Necro Connie/Connie 召唤物不断吃 Boss 攻击。", "没有 Connie 时，用 Lancelot、Sethos、Narlax 等较硬英雄轮流拖住。", "塔以 Geargrinder + Mushroom 为主，弱队伍可在 Boss 停留点补 Dwarf。"],
      },
      140: {
        name: "140 关：Caldera Boss",
        threat: "冰冻 Boss",
        core: "Caldera 近似免伤，必须在冰冻状态或用百分比伤害窗口处理。",
        steps: ["Efrigid R4 是最稳核心，Freeze 药水也能补关键窗口。", "Boss 被冻住后集中技能和塔火力，不要把冰冻浪费在小怪。", "注意地图裂缝刷 Lava Snail，出口前要留补漏单位。"],
      },
      150: {
        name: "150 关：传送猎杀 Boss",
        threat: "传送 Boss",
        core: "Boss 会追脆皮并在地面裂开处现身，提前把坦克拉过去接。",
        steps: ["带至少一个可靠坦克或 Necro Connie。", "观察 Boss 传送前动作，把脆皮移走，让坦克接住落点。", "用 Dwarf 补主路，避免坦克忙 Boss 时地面怪直接冲线。"],
      },
      160: {
        name: "160 关：Ancient Tree",
        threat: "全图眩晕",
        core: "Boss 全程干扰，最后入场；长程攻击、Pixie 和全图眩晕会持续打乱施法。",
        steps: ["中路放 2 个 Mushroom 做治疗/控制核心。", "至少带一名强坦，推荐 Connie + Leif/Narlax/Lancelot 等组合。", "飞行压力不能忽视，Blunderbuss/Geargrinder 要能覆盖中后段。"],
      },
    },
  },
  {
    id: "w6",
    world: "世界 6",
    short: "Okakoku",
    name: "Okakoku",
    start: 161,
    end: 200,
    threats: ["眩晕", "飞行", "塔辅", "自爆"],
    towers: ["Taiko：红鼓路线优先，AoE 眩晕极强", "Crossbow：Shuriken 路线主输出", "Shrine：Speed/Miko 经济与加速", "Samurai：后段接自爆/掩护"],
    unlocks: ["170 关解锁 Azura", "180 关解锁 Raida", "190 关解锁 Koizuul", "200 关解锁 Shamiko 与世界 7"],
    plan: {
      opening: "Wave 0 尽量用 Shrine/Miko 做经济，之后集中升级 1-2 个高质量 Taiko 或 Shuriken。",
      core: "世界 6 是塔伤世界，Helios/Yan/Leif 这类塔辅和加速英雄价值很高。",
      late: "191-200 的面具/自爆敌人需要召唤物、Samurai 或 Azura/Connie 来吃目标。",
    },
    specials: {
      170: {
        name: "170 关：Rokujo Boss",
        threat: "Boss/塔辅",
        core: "红鼓 + Shuriken 的组合比单纯堆 Shuriken 更稳，最后 Boss 会强化敌人。",
        steps: ["前期用 Shrine/Miko 赚金币，再做红 Taiko 眩晕核心。", "Shuriken 集中升级 1-2 座，不要平均铺满低级塔。", "Connie + Yan + Efrigid/Leif 这类控场塔辅队很稳。"],
      },
      180: {
        name: "180 关：Raijin Boss",
        threat: "小 Boss 追击",
        core: "小 Boss 会在英雄/士兵处生成，若到出口直接失败。",
        steps: ["可以少用英雄和 Samurai，减少小 Boss 生成风险；或大量 Samurai 专门拦截。", "Boss 第一次死亡后塔会失效，立刻卖塔重建。", "新加入的 Raida 要移位，避免小 Boss 在危险位置生成。"],
      },
      190: {
        name: "190 关：Koizuul Boss",
        threat: "生存 Boss",
        core: "Boss 不能正常击杀，会自己慢慢掉血，目标是撑到它倒下。",
        steps: ["Wave 0 等待可点击金币点，尽量拿足经济再开波。", "英雄远离 Boss 近战范围，选择在出口或桥边处理小怪。", "高等级 Taiko/Shuriken 与 Speed Shrine 负责拖时间。"],
      },
      200: {
        name: "200 关：Gashadokuro Boss",
        threat: "Boss/自爆",
        core: "整体比 190 更好处理，但所有 W6 机制都会出现。",
        steps: ["用 Connie/召唤物/Samurai 吃面具自爆目标。", "塔升级范围要能打到 Boss，别只顾出口防线。", "Connie + Koi/Raida + Yan/Helios/Shamiko 这类组合很稳。"],
      },
    },
  },
  {
    id: "w7",
    world: "世界 7",
    short: "Elysium",
    name: "Sphere of Elysium",
    start: 201,
    end: 240,
    threats: ["塔锁", "粘液", "隐身", "高血量"],
    towers: ["Rho Thrower：可靠对空对地，后期可看隐身", "Gamma Sentry：慢速、藤蔓与变种控制", "Volari Perch：清除粘液与防空", "Crystal Keep：地面阻挡/标记联动"],
    unlocks: ["开启世界 7 可在 Cyra/Elara 中选一位", "210 关解锁另一位女神与 Hogan R7", "220 关解锁 Osan", "230 关解锁 Jett", "231-240 已加入游戏版本"],
    plan: {
      opening: "Rho 与 Gamma 先保证稳定输出和控速，Volari Perch 覆盖英雄站位用于清粘液。",
      core: "Eta Sentry 会锁塔，Tin Slime 会减速减伤；尽量把危险敌人拦在塔区前半段。",
      late: "世界 7 更吃高觉醒英雄。Cyra/Elara/Osan/Jett 与 Connie、Raida、Koi 等可构成后期队伍。",
    },
    specials: {
      210: {
        name: "210 关：Malhog Boss",
        threat: "Boss/女神解锁",
        core: "世界 7 第一个大节点，Boss 与粘液机制会同时考验净化、控场和后排安全。",
        steps: ["Volari Perch 覆盖英雄区域，及时移除 Slimed 负面。", "Rho/Gamma 放在 Boss 和快怪都会经过的路线。", "带 Connie 或女神系英雄提供额外阻挡与爆发窗口。"],
      },
      220: {
        name: "220 关：Osan 解锁节点",
        threat: "隐身/毒",
        core: "敌方隐身、粘液和高血量叠加，必须靠可反隐/净化/持续控制稳住。",
        steps: ["Rho 后续升级可处理隐身，Gamma 用来减速快怪。", "Volari 的净化覆盖英雄，不要让近战长期带 Slimed。", "Osan/Elara 这类控场英雄可把高威胁敌人拉回塔区。"],
      },
      230: {
        name: "230 关：Jett 解锁节点",
        threat: "Boss/飞行",
        core: "后期世界 7 的英雄要求明显提高，飞行阻挡和高爆发都很重要。",
        steps: ["Rho 与 Volari 保证防空，Gamma 控住快速地面单位。", "Jett 或 Cyra/Elara 可处理飞行与高压点；Connie 负责额外阻挡。", "技能集中交给 Boss 或会锁塔/快速冲线的敌人。"],
      },
      240: {
        name: "240 关：世界 7 终局",
        threat: "终局高压",
        core: "231-240 属于后期追加关，默认按高血量、高控制、高英雄练度来准备。",
        steps: ["优先保证 Rho/Gamma/Volari 三件套：输出、控速、清负面都不能缺。", "队伍建议至少有一个高觉醒主输出、一个控场/召唤、一个支援或净化位。", "不要追求初见三星；先过关拿塔升级，再回头补满星更现实。"],
      },
    },
  },
];

const threatAdvice = {
  基础推进: "先补满主路线覆盖，再升级核心塔；英雄技能只用来救漏怪或保护前线。",
  飞行: "飞行怪不吃地面阻挡，优先补对空塔和远程英雄，出口前再放一层保险。",
  快跑: "快怪怕连续控制，减速、传送、恐惧、Crawler 或出口阻挡要形成两段以上。",
  召唤: "召唤怪会稀释目标，范围伤害和聚怪比单点输出更重要。",
  诅咒: "让召唤物或士兵先吃诅咒，主力英雄站在第二线。",
  高护甲: "物理/法术抗性高的敌人要换伤害类型，或用破甲、百分比伤害、冰冻窗口处理。",
  中毒: "毒和远程会惩罚脆皮，远程英雄靠后，近战只在火力区内接敌。",
  净化: "负面状态多的世界，净化覆盖优先于堆低级伤害塔。",
  传送: "传送会破坏防线，出口前必须有补漏塔或英雄，主力不要全压入口。",
  陨石: "陨石会打断站位，脆皮英雄分散并离开主路线，治疗/护盾英雄价值高。",
  隐身: "隐身敌人需要反隐塔、范围伤害或召唤物试探，别把全部输出压在看不见目标的单体塔上。",
  滚动: "Pango 类敌人需要单位拦截；每条路至少留一个士兵、召唤物或坦克。",
  高血量: "高血量敌人要延长停留时间，聚怪、减速、破甲和单体塔集中在同一区域。",
  眩晕: "敌人会打断近战，关键英雄站在控制范围边缘，技能留到眩晕后重整防线。",
  塔辅: "塔是主输出时，优先升级少数关键塔，再用 Helios/Yan/Leif 放大。",
  自爆: "自爆敌人需要召唤物或低成本士兵吃目标，英雄不要站在爆炸中心。",
  塔锁: "会锁塔的敌人要提前拦住，尽量在它接近主火力区前打掉或控制。",
  粘液: "Slimed 会减速并降伤，Volari/净化覆盖和远程安全站位很关键。",
  Boss: "Boss 关不要平均铺塔，把单体输出、减速和英雄技能集中在 Boss 停留最久的位置。",
  "飞行 Boss": "飞行 Boss 需要可对空输出，近战英雄主要负责清地面和保护后排。",
  "双 Boss": "双 Boss 要分路承伤，每条路都要有阻挡、单体塔和至少一个技能窗口。",
  "拉人 Boss": "被拉后立刻拖走英雄，站回净化或治疗范围，避免所有单位聚成一团。",
  "传送 Boss": "观察 Boss 传送目标，把坦克移动到落点，让脆皮离开裂地或范围伤害。",
  "全图眩晕": "全图眩晕要求提前布塔，别把胜负完全压在手动技能上。",
  "小 Boss 追击": "生成小 Boss 的机制会惩罚站位，减少无意义士兵或准备多层拦截。",
  "生存 Boss": "目标是拖够时间，经济、减速和防线修复比瞬间爆发更重要。",
  "Boss/自爆": "Boss 和自爆同时出现时，召唤物吃自爆，主输出集中打 Boss。",
  "Boss/女神解锁": "以净化、对空和控制为核心，技能留给 Boss 或锁塔敌人。",
  "隐身/毒": "反隐、净化和持续控制一起用，避免英雄被毒和隐身单位消耗。",
  "Boss/飞行": "防空和 Boss 爆发必须同时存在，优先让对空塔覆盖终点前长路线。",
  终局高压: "后期终局关更看练度，先以通关和拿升级为目标，再回头追三星。",
};

function createLevels() {
  return worldGuides.flatMap((world) => {
    const result = [];
    for (let level = world.start; level <= world.end; level += 1) {
      const special = world.specials[level];
      const offset = level - world.start;
      const phaseIndex = Math.floor(offset / 10) + 1;
      const phase = offset % 10 >= 7 ? "高压推进" : offset % 10 >= 4 ? "混合波次" : "基础推进";
      const threat = special?.threat || world.threats[offset % world.threats.length];
      const keyAdvice = threatAdvice[threat] || world.plan.core;

      result.push({
        id: `level-${level}`,
        worldId: world.id,
        level,
        phaseIndex,
        world: world.world,
        name: special?.name || `${level} 关：${world.short} 第 ${phaseIndex} 段 ${phase}`,
        threat,
        difficulty: special ? "节点/Boss" : phase,
        core: special?.core || `${world.name} 的第 ${phaseIndex} 段，重点是围绕主火力区处理「${threat}」压力。`,
        steps: special?.steps || [world.plan.opening, keyAdvice, world.plan.late],
      });
    }
    return result;
  });
}

const levels = createLevels();

const builds = {
  starter: {
    title: "新手推进阵容",
    intro: "目标是稳定过图和降低操作压力，优先选择能清线、能阻挡、能处理飞行怪的组合。",
    heroes: ["fee", "lancelot", "efrigid"],
    focus: "Fee 负责安全输出和防空，Lancelot 站在出口前或交叉口兜底，Efrigid 把快怪和厚血怪冻在主火力区。",
    rotation: ["开局先确认哪条路最容易漏怪，Fee 靠后覆盖两段路线。", "Lancelot 不抢入口，等敌人进入塔区后再接怪。", "Efrigid 的 Frost Orb 留给快怪、飞行混波或 Boss 进塔区。"],
    bestFor: ["世界 1-3 主线", "缺少高阶英雄的新账号", "普通三星推进"],
    alternatives: ["Mabyn 可替 Efrigid 做恐惧控场。", "Smoulder 可替 Fee 处理密集飞行和群怪。", "Connie 未转 Necro 前不要过度依赖。"],
    towerFocus: "W1 用 Archer/Barracks，W2 用 Thor + Mead Hall，W3 用 Spear + Crawler。",
    columns: [
      ["核心", "Fee + Lancelot + Efrigid"],
      ["替换", "Mabyn 可替 Efrigid 做早期控场"],
      ["适用", "世界 1-3 主线推进"],
    ],
  },
  control: {
    title: "控场稳血阵容",
    intro: "用减速、冰冻、恐惧和召唤物把敌人留在塔区，适合精英怪、快跑怪和分路压力大的地图。",
    heroes: ["connie", "efrigid", "mabyn"],
    focus: "Necro Connie 用兔子造临时防线，Efrigid 冰冻关键波，Mabyn 恐惧把敌人推回塔区。",
    rotation: ["先把兔子放在敌人会重叠的位置，不要铺在入口浪费阻挡时间。", "Efrigid 冻住厚血怪或快怪后，立刻让范围塔和主输出集火。", "Mabyn 的恐惧接在 Narlax 拉怪或 Efrigid 冰冻后，能形成二段控。"],
    bestFor: ["世界 4-5 普通/传奇", "分路压力", "快怪和厚血怪混波"],
    alternatives: ["Yan 可替 Mabyn，提升队伍和塔的节奏。", "Narlax 可替 Mabyn，适合需要拉回敌人的地图。", "Azura 可在世界 6 后替换控制位。"],
    towerFocus: "W4 优先 Pyromancer Cleanse + Boomerang Slow，W5 围绕 Mushroom 和 Geargrinder 建主火力区。",
    columns: [
      ["核心", "Necro Connie + Efrigid + Mabyn/Yan"],
      ["打法", "先铺控制，再把技能留给高压波"],
      ["适用", "世界 4-5 普通和传奇"],
    ],
  },
  boss: {
    title: "Boss 处理阵容",
    intro: "把单体爆发、团队增益和前排拖延集中到 Boss 停留区，避免技能分散在小怪波次。",
    heroes: ["connie", "raida", "yan"],
    focus: "Connie 负责挡 Boss 和吃技能，Raida 打眩晕与爆发，Yan 把加速和节奏给最能改变战局的英雄或塔。",
    rotation: ["开局不要把技能交给低压小怪，先把金币集中在 Boss 会停留最久的位置。", "Boss 进火力区后先用 Connie/前排固定位置，再接 Raida 或 Koi 爆发。", "Yan 的加速要给 Raida/Koi/关键塔，别浪费在即将消失的召唤物上。"],
    bestFor: ["50、60、80、130、140、190、200", "单体 Boss", "需要爆发窗口的关卡"],
    alternatives: ["Koi 可替 Raida 做主爆发。", "Leif/Lancelot 可替 Connie 做硬坦。", "Narlax 可替 Yan，把 Boss 或精英怪拉回火力区。"],
    towerFocus: "Boss 图不要平均铺塔，优先单体塔、减速塔和 Boss 会重复经过的路线。",
    columns: [
      ["核心", "Connie + Koi/Raida + Yan/Helios"],
      ["替换", "Lancelot/Leif/Narlax 按 Boss 机制补位"],
      ["适用", "50、60、80、130、140、190、200 等节点"],
    ],
  },
  w6: {
    title: "后期塔辅阵容",
    intro: "世界 6 和高难 Realm Siege 往往靠塔输出，英雄要负责加速、增伤、控场和保护塔区。",
    heroes: ["connie", "helios", "yan"],
    focus: "Connie 负责吃自爆和挡怪，Helios 强化核心塔，Yan 让关键塔和英雄进入更快循环。",
    rotation: ["Wave 0 能攒经济就先攒，尽早做 Shrine/Miko 或核心塔升级。", "Helios 的 Empower 交给红 Taiko、Shuriken 或 Boss 火力塔。", "Connie 兔子用来吃 Mask/自爆目标，不要让主英雄站在爆炸中心。"],
    bestFor: ["世界 6", "塔伤占比高的 Realm Siege", "191-200 自爆/面具压力"],
    alternatives: ["Leif 可替 Yan，提供前排和塔辅。", "Shamiko 可替 Helios，提升手动控制上限。", "Efrigid 可替 Yan，给低练度账号更稳的冰冻。"],
    towerFocus: "红 Taiko 控场，Shuriken 主输出，Speed Shrine 提节奏，Samurai 负责后段保险。",
    columns: [
      ["核心", "Connie + Efrigid + Helios/Yan/Leif"],
      ["塔位", "红 Taiko、Shuriken、Speed Shrine"],
      ["适用", "世界 6、塔伤占比高的关卡"],
    ],
  },
  w7: {
    title: "世界 7 阵容",
    intro: "世界 7 更吃高觉醒和机制应对：净化粘液、打塔锁敌人、处理飞行和高血量单位缺一不可。",
    heroes: ["elara", "osan", "jett"],
    focus: "Elara 聚怪和恐惧，Osan 用毒与 Broto 控高威胁目标，Jett/L.A.G. 处理飞行阻挡和机械前排。",
    rotation: ["Volari Perch 先覆盖英雄站位，避免 Slimed 长时间降低输出。", "Elara 把塔锁敌人和快怪拉回 Rho/Gamma 范围后，立刻接 Gamma 减速或英雄控制。", "Jett 的 L.A.G. 复活点跟随 Jett，移动 Jett 可以调整飞行阻挡位置。"],
    bestFor: ["201-240", "粘液/塔锁/飞行混合压力", "后期补三星"],
    alternatives: ["Cyra 可替 Elara 做爆发和飞行处理。", "Raida 可替 Osan 做冲锋眩晕。", "Connie 仍然是低风险补位核心。"],
    towerFocus: "Rho 负责可靠输出，Gamma 负责控速和藤蔓，Volari 负责清粘液与防空，Crystal Keep 用于地面阻挡。",
    columns: [
      ["核心", "Cyra/Elara/Osan/Jett + Connie"],
      ["补强", "Raida、Koi、Yan、Helios 按练度选择"],
      ["适用", "201-240 关与后期补三星"],
    ],
  },
};

const uiText = {
  en: {
    title: "Realm Defense Guide Database",
    brandAria: "Realm Defense guide home",
    brandSub: "Guide Database",
    navAria: "Primary navigation",
    languageAria: "Language switcher",
    navHeroes: "Heroes",
    navLevels: "Stages",
    navTowers: "Towers",
    navBuilds: "Lineups",
    heroEyebrow: "Hero growth · Stage tactics · Tower rhythm",
    heroTitle: "Realm Defense Guide Database",
    heroIntro: "Covers 24 heroes, 7 worlds, and 240 campaign stages, with practical positioning, tower upgrades, and skill timing.",
    heroPrimary: "View Stage Guides",
    heroSecondary: "Analyze Heroes",
    briefAria: "Featured guide note",
    briefLabel: "Recommended Read",
    briefTitle: "Identify enemy lanes first, then choose control heroes and tower upgrade order.",
    briefBody: "New players should raise stable wave-clear and control heroes first, then add single-target burst and Boss tools later.",
    heroesTitle: "Hero Ability Analysis",
    heroesIntro: "Pick a hero to view unlocks, active skill, role, strong scenarios, skill value, and upgrade priority.",
    heroSearchLabel: "Search heroes",
    heroSearchPlaceholder: "Type a hero, role, or keyword",
    roleFilterLabel: "Role filter",
    allRoles: "All roles",
    heroListAria: "Hero list",
    levelsTitle: "Stage Guides",
    levelsIntro: "Stages 1-240 all have guide entries; Boss and milestone stages include deeper positioning, tower, and skill-timing notes.",
    worldFilterLabel: "World",
    allWorlds: "All worlds",
    threatFilterLabel: "Threat",
    allThreats: "All threats",
    levelSearchLabel: "Search stages",
    levelSearchPlaceholder: "e.g. 170, Boss, flying, World 3",
    towersTitle: "World & Tower Overview",
    towersIntro: "Each world has different tower mechanics. First define the main kill zone, then spend gold where enemies stay in range longer.",
    buildsTitle: "Lineup Planning",
    buildsIntro: "Different maps ask different questions: flying enemies, bulky waves, split lanes, and Boss burst each need different hero combinations.",
    buildTabStarter: "Starter Push",
    buildTabControl: "Control & Safety",
    buildTabBoss: "Boss Handling",
    buildTabW6: "Late Tower Support",
    buildTabW7: "World 7",
    footerTitle: "Realm Defense Guide Database",
    sourcesLabel: "Sources:",
    sourceHeroes: "Hero data",
    sourceWorlds: "World unlocks",
    sourceMaps: "Map images",
    sourceVersions: "Version history",
    emptyHeroes: "No matching heroes found.",
    emptyLevels: "No matching stages found.",
    mapAlt: (level) => `Stage ${level} map`,
    mapPending: "Map image pending",
    lineupHeroes: "Core heroes",
    lineupPlan: "Game plan",
    lineupTiming: "Execution rhythm",
    lineupBestFor: "Best for",
    lineupAlternatives: "Flexible swaps",
    towerFocus: "Tower focus",
    unlock: "Unlock",
    activeSkill: "Active skill",
    fieldSep: ": ",
    icon: "icon",
    pushTier: "Campaign tier",
    showingLevels: (shown, filtered, total) => `Showing ${shown} / ${filtered} guides in this world (${total} total)`,
    loadMore: "Load more stages",
    stage: "Stage",
    stats: { damage: "Damage", control: "Control", survive: "Survival", support: "Support" },
  },
  zh: {
    title: "Realm Defense 攻略资料库",
    brandAria: "Realm Defense 攻略资料库首页",
    brandSub: "攻略资料库",
    navAria: "主导航",
    languageAria: "语言切换",
    navHeroes: "英雄",
    navLevels: "关卡",
    navTowers: "防御塔",
    navBuilds: "阵容",
    heroEyebrow: "英雄养成 · 关卡打法 · 塔位节奏",
    heroTitle: "Realm Defense 攻略资料库",
    heroIntro: "覆盖 24 位英雄、7 个世界和 240 个战役关卡，快速找到可执行的站位、升塔和技能释放节奏。",
    heroPrimary: "查看关卡攻略",
    heroSecondary: "分析英雄能力",
    briefAria: "今日攻略摘要",
    briefLabel: "推荐阅读",
    briefTitle: "优先确认敌人路线，再决定控场英雄与塔位升级顺序。",
    briefBody: "新手先养稳定清线和控场英雄，后期再补单体爆发与Boss处理。",
    heroesTitle: "英雄能力解析",
    heroesIntro: "选择英雄查看解锁条件、主动技能、定位、强势场景、技能价值和养成优先级。",
    heroSearchLabel: "搜索英雄",
    heroSearchPlaceholder: "输入英雄名、定位或关键词",
    roleFilterLabel: "定位筛选",
    allRoles: "全部定位",
    heroListAria: "英雄列表",
    levelsTitle: "关卡攻略",
    levelsIntro: "1-240 关均有攻略条目；Boss 与节点关提供更细的站位、塔位和技能节奏。",
    worldFilterLabel: "世界",
    allWorlds: "全部世界",
    threatFilterLabel: "难点",
    allThreats: "全部难点",
    levelSearchLabel: "搜索关卡",
    levelSearchPlaceholder: "例如：170、Boss、飞行、世界 3",
    towersTitle: "世界与防御塔总览",
    towersIntro: "每个世界的塔机制都不同，核心思路是先确定主火力区，再把金币集中到能延长敌人停留时间的位置。",
    buildsTitle: "阵容搭配思路",
    buildsIntro: "不同地图换的是“问题答案”：飞行怪、厚血怪、分路压力和Boss爆发分别需要不同英雄组合。",
    buildTabStarter: "新手推进",
    buildTabControl: "控场稳血",
    buildTabBoss: "Boss 处理",
    buildTabW6: "后期塔辅",
    buildTabW7: "世界 7",
    footerTitle: "Realm Defense 攻略资料库",
    sourcesLabel: "参考：",
    sourceHeroes: "英雄资料",
    sourceWorlds: "世界解锁",
    sourceMaps: "地图图片",
    sourceVersions: "版本记录",
    emptyHeroes: "没有找到匹配的英雄。",
    emptyLevels: "没有找到匹配的关卡。",
    mapAlt: (level) => `第 ${level} 关地图`,
    mapPending: "地图待补",
    lineupHeroes: "核心英雄",
    lineupPlan: "阵容思路",
    lineupTiming: "操作节奏",
    lineupBestFor: "适用场景",
    lineupAlternatives: "替换方案",
    towerFocus: "塔位重点",
    unlock: "解锁",
    activeSkill: "主动技能",
    fieldSep: "：",
    icon: "图标",
    pushTier: "推进评级",
    showingLevels: (shown, filtered, total) => `当前世界显示 ${shown} / ${filtered} 个攻略（共 ${total} 关）`,
    loadMore: "加载更多关卡",
    stage: "第",
    stats: { damage: "输出", control: "控制", survive: "生存", support: "辅助" },
  },
};

const roleText = {
  "远程/召唤": "Ranged / Summon",
  "前排/治疗": "Frontline / Healing",
  "机动/补漏": "Mobile / Leak control",
  "召唤/控场": "Summon / Control",
  "近战/召唤": "Melee / Summon",
  "法术/眩晕": "Magic / Stun",
  "飞行/范围": "Flying / Area damage",
  "近战/范围控": "Melee / Area control",
  "冰冻/控场": "Freeze / Control",
  "恐惧/控场": "Fear / Control",
  "坦克/毒": "Tank / Poison",
  "支援/塔辅": "Support / Tower buff",
  "辅助/传送": "Support / Teleport",
  "聚怪/位移": "Pull / Displacement",
  "坦克/塔辅": "Tank / Tower buff",
  "变身/坦克": "Transform / Tank",
  "魅惑/控制": "Charm / Control",
  "突进/眩晕": "Dash / Stun",
  "变身/爆发": "Transform / Burst",
  "音乐/控制": "Music / Control",
  "女神/爆发": "Goddess / Burst",
  "女神/聚怪": "Goddess / Pull",
  "毒/辅助": "Poison / Support",
  "远程/机械坦": "Ranged / Mech tank",
};

const threatText = {
  基础推进: "Basic push",
  飞行: "Flying",
  快跑: "Fast runners",
  召唤: "Summons",
  诅咒: "Curse",
  高护甲: "High armor",
  中毒: "Poison",
  净化: "Cleanse",
  传送: "Teleport",
  陨石: "Meteors",
  隐身: "Stealth",
  滚动: "Rolling enemies",
  高血量: "High HP",
  眩晕: "Stun",
  塔辅: "Tower support",
  自爆: "Exploders",
  塔锁: "Tower lock",
  粘液: "Slime",
  Boss: "Boss",
  "飞行 Boss": "Flying Boss",
  "双 Boss": "Double Boss",
  "拉人 Boss": "Pull Boss",
  "传送 Boss": "Teleport Boss",
  "全图眩晕": "Global stun",
  "小 Boss 追击": "Mini-Boss chase",
  "生存 Boss": "Survival Boss",
  "Boss/自爆": "Boss / Exploders",
  "Boss/女神解锁": "Boss / Goddess unlock",
  "隐身/毒": "Stealth / Poison",
  "Boss/飞行": "Boss / Flying",
  终局高压: "Endgame pressure",
};

const difficultyText = {
  "节点/Boss": "Milestone / Boss",
  基础推进: "Basic push",
  混合波次: "Mixed waves",
  高压推进: "High-pressure push",
};

const threatAdviceEnglish = {
  基础推进: "Fill the main route coverage first, then upgrade the core towers. Save hero skills for leaks or frontline protection.",
  飞行: "Flying enemies ignore ground blockers. Add anti-air towers and ranged heroes, then keep one safety layer near the exit.",
  快跑: "Fast runners lose to chained control. Use at least two layers of slows, teleport, fear, crawlers, or exit blocking.",
  召唤: "Summons dilute tower targeting, so area damage and pull effects are more valuable than pure single-target damage.",
  诅咒: "Let summons or soldiers eat curses first while your main heroes stay on the second line.",
  高护甲: "Swap damage types against high resistance, or use armor break, percentage damage, and freeze windows.",
  中毒: "Poison and ranged enemies punish fragile heroes. Keep ranged heroes back and let melee heroes engage inside the kill zone.",
  净化: "When debuffs dominate, cleanse coverage matters more than stacking low-level damage towers.",
  传送: "Teleport breaks front-loaded defenses. Keep a leak-catcher near the exit and avoid investing everything at the entrance.",
  陨石: "Meteors disrupt positioning. Spread fragile heroes out and lean on healing or shielding when protecting objectives.",
  隐身: "Stealth enemies require reveal, area damage, or summons to test lanes. Do not rely only on single-target towers that cannot see them.",
  滚动: "Pango-style rollers need a body to hit. Keep at least one soldier, summon, or tank on every active lane.",
  高血量: "Bulky enemies require longer exposure. Stack pull, slow, armor break, and single-target damage in one area.",
  眩晕: "Enemy stun punishes melee clumps. Keep key heroes on the edge of control range and save skills for recovery.",
  塔辅: "When towers are the main damage source, upgrade a few key towers first, then amplify them with Helios, Yan, or Leif.",
  自爆: "Use summons or cheap soldiers to absorb exploders. Keep heroes out of the blast center.",
  塔锁: "Tower-lock enemies must be stopped early, before they reach your main damage cluster.",
  粘液: "Slimed slows heroes and lowers damage. Use Volari or cleanse coverage and keep ranged heroes safe.",
  Boss: "Do not spread gold evenly on Boss stages. Concentrate single-target damage, slows, and hero skills where the Boss stays longest.",
  "飞行 Boss": "Flying Bosses require anti-air damage. Melee heroes should clear ground pressure and protect the backline.",
  "双 Boss": "Double Boss stages need blockers and single-target damage on both lanes, plus a skill window for each side.",
  "拉人 Boss": "After a pull, move heroes back to cleanse or healing coverage and avoid clumping under the Boss.",
  "传送 Boss": "Watch the teleport target, move a tank to the landing zone, and pull fragile heroes away from cracks or area damage.",
  "全图眩晕": "Global stun rewards pre-built defenses. Do not make manual skills your only answer.",
  "小 Boss 追击": "Mini-Boss spawn rules punish careless positioning. Reduce unnecessary soldiers or prepare multiple interception layers.",
  "生存 Boss": "The goal is to survive long enough. Economy, slows, and defense repair matter more than instant burst.",
  "Boss/自爆": "Use summons to absorb exploders while your main damage focuses the Boss.",
  "Boss/女神解锁": "Cleanse, anti-air, and control are the core. Save skills for the Boss or tower-lock enemies.",
  "隐身/毒": "Reveal, cleanse, and sustained control must work together so poison and stealth do not drain your heroes.",
  "Boss/飞行": "Anti-air and Boss burst must both exist. Let anti-air towers cover the long route before the exit.",
  终局高压: "Endgame stages are stat checks. Clear first to unlock upgrades, then return for three stars.",
};

const heroEnglish = {
  fee: {
    role: "Ranged / Summon",
    unlock: "World 1 Stage 1, free, R0",
    tags: ["Starter core", "Summons wolves", "Anti-air support"],
    summary: "One of the safest early ranged heroes. Fee uses steady attacks and wolves to catch leaks. R3 noticeably improves attack speed, and R7 later opens summon-focused synergy with heroes like Connie.",
    notes: ["Place her where she can cover two route segments so attacks and wolves both buy time.", "On flying-heavy stages, keep Fee behind the ground fight so she stays on anti-air duty.", "New players can comfortably raise her to R1-R3, then revisit R7 much later."],
  },
  lancelot: {
    role: "Frontline / Healing",
    unlock: "World 1 Stage 5, free, R0",
    tags: ["Tank", "Shield", "Base guard"],
    summary: "A free frontline hero who stabilizes lanes with shields and healing. His value is buying towers more attack time, especially on protection stages in World 4.",
    notes: ["Hold crossings or final bends rather than taking full damage at the entrance.", "Save Holy Shield for Bosses entering your kill zone, enemy ranged bursts, or protected objectives losing health.", "If you lack a tank, R1-R3 is practical, but do not pour every resource into him."],
  },
  masamune: {
    role: "Mobile / Leak control",
    unlock: "World 1 Stage 7, 1500 gems, R1",
    tags: ["Teleport", "Clones", "Fast rotation"],
    summary: "Fast movement and quick respawns make Masamune useful for split-lane cleanup. Low ranks are fragile, so he needs investment before feeling reliable.",
    notes: ["Use him for side lanes and leaks, not as a permanent main-lane tank.", "Split maps in Worlds 3-4 show his value better than simple single-lane stages.", "If gems are tight, Efrigid, Mabyn, or later core heroes are usually stronger buys."],
  },
  connie: {
    role: "Summon / Control",
    unlock: "World 1 Stage 9, 1500 gems, R1; can become Necro Connie in World 4",
    tags: ["Bunny wall", "Slow", "Late campaign core"],
    summary: "Normal Connie is weak early, but Necro Connie becomes one of the best campaign heroes. Her bunnies block, slow, and soak damage at the same time.",
    notes: ["After World 4 unlock conditions, prioritize Necro Connie because she heavily lowers World 5-7 difficulty.", "Use bunnies to absorb Boss hits, block charges, and hold Bosses under towers.", "Fee R7, Hogan R6, and other summon synergies give her late-game depth."],
  },
  hogan: {
    role: "Melee / Summon",
    unlock: "World 1 Stage 11, 1500 gems, R1",
    tags: ["Pet", "Melee", "Late talents"],
    summary: "Low-rank Hogan is underwhelming. His main value comes later through high ranks and summon synergy, so he is not an ideal early purchase.",
    notes: ["If already invested, raise him to a usable rank before fielding him seriously.", "Bacon can split targeting, but it will not solve whole waves by itself.", "After World 7 unlocks Hogan R7, he gains more collection and niche lineup value."],
  },
  bolton: {
    role: "Magic / Stun",
    unlock: "World 1 Stage 12, 1500 gems, R1",
    tags: ["Lightning", "Single-target control", "Synergy piece"],
    summary: "Bolton brings stuns and magic damage, but his kit is dated. Consider him for synergies or blessed weeks, not as a first core investment.",
    notes: ["Keep him away from enemy ranged fire; he wants a backline position.", "If you need freeze or general control, Efrigid is much more flexible.", "He becomes more interesting when Koi, Yan, or specific synergies matter."],
  },
  smoulder: {
    role: "Flying / Area damage",
    unlock: "World 1 shop after Stage 5, 3000 gems, R2",
    tags: ["Fire", "Air unit", "Area damage"],
    summary: "A flying area-damage hero who feels good against grouped enemies and flying waves. R4-R5 makes his aerial slow and stun value more obvious.",
    notes: ["Cast Inferno when enemies overlap; using it on scattered targets wastes burst.", "He performs well when Worlds 2-3 put pressure on air lanes.", "If you already bought Efrigid, Smoulder can still help open World 1 challenges."],
  },
  obsidian: {
    role: "Melee / Area control",
    unlock: "World 1 shop after Stage 5, 3000 gems, R2",
    tags: ["Earthquake", "Summon", "Slow"],
    summary: "Obsidian has some control on paper, but slow movement and low flexibility make him a low-priority campaign hero.",
    notes: ["Skip him early unless you need challenge unlocks or specific synergies.", "He struggles on split lanes and fast-runner stages.", "If you own him, park him at a fixed choke instead of moving constantly."],
  },
  efrigid: {
    role: "Freeze / Control",
    unlock: "World 1 shop after Stage 5, 3000 gems, R2",
    tags: ["Freeze", "Slow", "Top first buy"],
    summary: "One of the best first purchases. After R4, her control cycle becomes much stronger and keeps critical waves inside tower range.",
    notes: ["For campaign progress, R4 is a strong early target.", "Do not stand too far forward where poison, ranged hits, or area damage can disrupt her.", "On Boss stages, freeze after the Boss enters your single-target or mirror tower zone."],
  },
  mabyn: {
    role: "Fear / Control",
    unlock: "World 1 shop after Stage 5, 3000 gems, R2",
    tags: ["Fear", "Traps", "Strong early"],
    summary: "Mabyn offers useful control at low ranks and helps delay early waves. Her late scaling is more limited, so avoid overinvesting without a reason.",
    notes: ["Place her behind your main tank so fear pushes enemies back into tower range.", "She pairs well with Narlax pulls, Smoulder burst, and Efrigid freeze.", "If you only need World 2 challenge access, you can buy her without rushing high ranks."],
  },
  sethos: {
    role: "Tank / Poison",
    unlock: "World 3 Stage 50, 6000 gems, R4",
    tags: ["Burrow", "Poison", "Split-lane tank"],
    summary: "A usable tank for Worlds 3-4, but expensive and not the best long-term value.",
    notes: ["If you lack a tank he can work, but strengthening Lancelot or waiting for Leif/Necro Connie is often better.", "Burrow helps with poison ranged enemies and leaks, but he should not solo every area hit.", "Mostly useful for challenge unlocks, collection, and specific blessed weeks."],
  },
  helios: {
    role: "Support / Tower buff",
    unlock: "World 3 Stage 60, 6000 gems, R4",
    tags: ["Haste", "Healing", "Tower empower"],
    summary: "Helios does not win by solo damage. Her value is haste, healing, and empowering towers or teammates, especially in high Realm Siege and late campaign.",
    notes: ["She pairs well with Efrigid R4, Necro Connie, Yan, and Leif.", "In tower-damage worlds such as World 6, Empower becomes especially valuable.", "If your team lacks raw damage, buy a core damage hero first."],
  },
  yan: {
    role: "Support / Teleport",
    unlock: "World 4 Stage 90, 7500 gems, R5",
    tags: ["Haste", "Teleport", "Tempo core"],
    summary: "A high-end support hero who amplifies Koi, Helios, Connie, towers, and control chains. She feels best inside a built team.",
    notes: ["Give haste to the hero or tower that changes the fight, not to low-value summons.", "On Boss stages, stack her tempo buffs when the Boss enters the kill zone.", "Once resources allow it, Yan is a long-term support worth owning."],
  },
  narlax: {
    role: "Pull / Displacement",
    unlock: "World 4 Stage 110, 7500 gems, R5",
    tags: ["Pull", "Group enemies", "Combo setup"],
    summary: "Narlax is about moving enemies back into danger. Pair him with Raida, Mabyn, Smoulder, Shamiko, or freeze for high control burst.",
    notes: ["After a pull, immediately chain stun, fear, freeze, or area damage.", "World 5's dense waves give him high value.", "Do not use him as a pure tank; pull, reposition, and repeat."],
  },
  leif: {
    role: "Tank / Tower buff",
    unlock: "World 5 Stage 130, 7500 gems, R5",
    tags: ["High survival", "Weapon buff", "Campaign tank"],
    summary: "A very reliable campaign tank and buffer, especially for high-pressure ground waves in Worlds 5-6.",
    notes: ["If you do not have Necro Connie, Leif can make World 5 much smoother.", "Keep him inside mushroom, shrine, or other healing and haste coverage.", "Legendary stages do not always mirror his normal-campaign power."],
  },
  caldera: {
    role: "Transform / Tank",
    unlock: "World 5 Stage 140, 3000 gems, R2",
    tags: ["Lava", "High-rank tank", "Boss"],
    summary: "Caldera needs higher ranks before feeling comfortable. At low ranks he is not a standout campaign pick.",
    notes: ["Do not buy just because he is cheap after World 5; first ask whether your team lacks a tank.", "He has synergy value with later heroes such as Leif.", "At low rank, ranged, flying, and control-heavy waves are difficult for him."],
  },
  azura: {
    role: "Charm / Control",
    unlock: "World 6 Stage 170, 3000 gems, R2",
    tags: ["Charm", "Cleanse", "Control"],
    summary: "Azura handles dangerous enemies and summons by turning pressure against itself. She is useful in late World 6 and parts of World 7.",
    notes: ["Use charmed units to soak ranged fire or hold dangerous enemies.", "Watch auto effects around special targets and stealth mechanics.", "Together with Necro Connie, she adds a large safety buffer to late stages."],
  },
  raida: {
    role: "Dash / Stun",
    unlock: "World 6 Stage 180, 3000 gems, R2",
    tags: ["Charge", "Lightning", "Boss damage"],
    summary: "A powerful late hero with dash, stun, and lightning tools for complex situations. R6 completes much of his value.",
    notes: ["The classic combo is Narlax pull into Raida charge for grouped control and damage.", "He contributes against flying enemies, Bosses, and leaks.", "Do not leave him alone inside chain-stun or high-damage packs after charging."],
  },
  koizuul: {
    role: "Transform / Burst",
    unlock: "World 6 Stage 190, 3000 gems, R2",
    tags: ["Dragon form", "Large area", "Late core"],
    summary: "A top-tier late hero. Fish form stabilizes, dragon form clears. Yan, Helios, Shamiko, and other tempo supports help him reach power windows faster.",
    notes: ["Save dragon form for Bosses or high-pressure waves, not low-threat cleanup.", "Yan, Helios, and Shamiko greatly improve his cycle.", "He may not feel instantly unstoppable when first unlocked, but his long-term priority is high."],
  },
  shamiko: {
    role: "Music / Control",
    unlock: "World 6 Stage 200, 3000 gems, R2",
    tags: ["Manual tempo", "Sleep / fear", "High ceiling"],
    summary: "A manual support hero whose strength depends on rank and timing. Used well, she brings elite control to Bosses, tournaments, and late challenges.",
    notes: ["Practice seriously after R4; random tapping wastes key control windows.", "She pairs well with Koi, Raida, Narlax, and other burst or pull heroes.", "Not urgent for basic campaign pushing, but worth raising for late accounts."],
  },
  cyra: {
    role: "Goddess / Burst",
    unlock: "World 7 opening choice or Stage 210, 3000 gems, R2",
    tags: ["Invulnerability window", "Anti-air melee", "Burst"],
    summary: "The light goddess brings burst and a short invulnerability window through Photon Launch. She can handle both ground and flying threats.",
    notes: ["Use Photon Launch to dodge Boss skills or reach backline targets, not just as damage.", "Elara R7 synergy makes late burst more complete.", "On World 7 pressure maps, she can be a main damage source or flying-threat answer."],
  },
  elara: {
    role: "Goddess / Pull",
    unlock: "World 7 opening choice or Stage 210, 3000 gems, R2",
    tags: ["Pull", "Fear", "Damage reduction"],
    summary: "The dark goddess pulls and fears enemies, then leaves rifts that slow and pressure groups. She leans toward control and team protection.",
    notes: ["Pull enemies back into Rho, Gamma, Volari, or teammate burst zones.", "Against fast or tower-lock enemies, chain another control after the pull.", "R6 makes her goddess form sustained and more stable."],
  },
  osan: {
    role: "Poison / Support",
    unlock: "World 7 Stage 220, 3000 gems, R3",
    tags: ["Stealth", "Poison pools", "Broto"],
    summary: "Osan uses stealth, poison, and Broto for control support. Keep him in ranged mode as much as possible so poison mines and EMP effects keep working.",
    notes: ["Avoid letting Osan stay in melee too long, or he drops fewer poison mines.", "Broto's poison bubbles can briefly control high-threat targets.", "R6 stealth support and R7 ally revive add late-game safety."],
  },
  jett: {
    role: "Ranged / Mech tank",
    unlock: "World 7 Stage 230",
    tags: ["L.A.G.", "Flying blocker", "Overheat"],
    summary: "A late mechanical hero. L.A.G. can tank multiple targets and, importantly, block flying enemies; Blaster Barrage provides area burst.",
    notes: ["L.A.G. respawns at Jett's current position, so move Jett to adjust the respawn point.", "On flying-heavy World 7 maps, Jett's blocking is extremely valuable.", "At R7, choose Boss burst or group control based on stage needs."],
  },
};

const worldEnglish = {
  w1: {
    world: "World 1",
    towers: ["Archer: cheap anti-air and steady damage", "Barracks: low-cost blocking", "Wizard: haste and teleport support", "Cannon: use sparingly at dense choke points"],
    unlocks: ["Stage 5 unlocks Lancelot", "Stage 10 unlocks Daily Trial and Legendary", "Stage 20 opens World 2"],
    plan: {
      opening: "Open with Archers covering the main lane. Put Barracks on bends or crossings, not far from the kill zone.",
      core: "Fee stays behind to hit air and leaks, while Lancelot holds the main lane. Add Archers for air or Barracks/Wizard teleport for leaks.",
      late: "In the last waves, upgrade the main kill zone first and save skills for fast enemies, grouped waves, or exit leaks.",
    },
  },
  w2: {
    world: "World 2",
    towers: ["Thor: main tower; North Wind slow is key", "Mead Hall: strong blocking and refreshable soldiers", "Axe: cheap anti-air", "Dragon: Terrify can push enemies back near the exit"],
    unlocks: ["Stage 21 opens Tournaments", "Stage 22 opens Forge", "Stage 31 opens Shattered Realms", "Stage 40 opens World 3, Arcade, and Realm Siege"],
    plan: {
      opening: "Build Thor plus Mead Hall at crossings first. Add Axe only when air pressure is real.",
      core: "Heretic curses are annoying; let summons or soldiers take them while heroes avoid clumping.",
      late: "When fast and flying waves overlap, keep Dragon Terrify or Mead Hall as an exit safety layer.",
    },
  },
  w3: {
    world: "World 3",
    towers: ["Spear: World 3 main tower; Crawler delay is excellent", "Necro: place 1-3 in kill zones", "Mirror: Boss and single-target damage with Blind", "Genie: expensive, but Polymorph can save leaks"],
    unlocks: ["Stage 50 unlocks Sethos", "Stage 60 unlocks Helios and World 3 challenges", "Stage 80 opens World 4"],
    plan: {
      opening: "Upgrade Spears and add Crawlers early. Put one Necro tower in the main kill zone.",
      core: "Poison and ranged enemies punish fragile positioning. Keep ranged heroes back and let melee heroes fight inside tower range.",
      late: "Add Mirror for Boss stages. On normal stages, do not starve Spear/Crawler coverage just to buy expensive towers.",
    },
  },
  w4: {
    world: "World 4",
    towers: ["Pyromancer: core tower; Cleanse coverage matters early", "Boomerang: Slow controls large packs", "Avian Knight: exit insurance", "Mana Blaster: expensive, use only a few"],
    unlocks: ["Stage 90 unlocks Yan", "Around Stage 100 you can prepare Necro Connie", "Stage 110 unlocks Narlax", "Stage 120 opens World 5"],
    plan: {
      opening: "Establish Pyromancer Cleanse coverage first, then add Boomerang Slow. Do not level all tower types evenly.",
      core: "World 4 has many debuffs, teleports, and enemy buffs, so cleanse can matter more than raw tower count.",
      late: "After Boss pulls or meteors, move heroes back into Cleanse coverage immediately.",
    },
  },
  w5: {
    world: "World 5",
    towers: ["Mushroom: 1-3 core control/heal/blind towers", "Geargrinder: handles air and Myrk ranged pressure", "Dwarf: blocks Pango and leaks", "Blunderbuss: armor break and ground AoE at chokes"],
    unlocks: ["Stage 130 unlocks Leif", "Stage 140 unlocks Caldera", "Stage 160 opens World 6"],
    plan: {
      opening: "Every lane needs a blocker or summon because Pango and Lava Pango are easier to handle after hitting a body.",
      core: "Build the main kill zone around Mushroom. Geargrinder handles flying and ranged units, while Dwarf holds key blockers.",
      late: "Enemy density is high. Narlax pulls, Connie bunnies, and Efrigid freeze all magnify tower damage.",
    },
  },
  w6: {
    world: "World 6",
    towers: ["Taiko: red-drum path first; AoE stun is excellent", "Crossbow: Shuriken path is the main damage route", "Shrine: Speed/Miko economy and haste", "Samurai: catches exploders and supports late lanes"],
    unlocks: ["Stage 170 unlocks Azura", "Stage 180 unlocks Raida", "Stage 190 unlocks Koizuul", "Stage 200 unlocks Shamiko and World 7"],
    plan: {
      opening: "Use Shrine/Miko economy in Wave 0 when possible, then focus upgrades on 1-2 high-quality Taiko or Shuriken towers.",
      core: "World 6 is tower-damage focused, so Helios, Yan, Leif, and other tower-support heroes gain value.",
      late: "Masks and exploders in 191-200 need summons, Samurai, Azura, or Connie to absorb targeting.",
    },
  },
  w7: {
    world: "World 7",
    towers: ["Rho Thrower: reliable ground/air damage and later stealth reveal", "Gamma Sentry: slow, vines, and variant control", "Volari Perch: removes slime and covers air", "Crystal Keep: ground blocking and mark synergy"],
    unlocks: ["World 7 opening lets you choose Cyra or Elara", "Stage 210 unlocks the other goddess and Hogan R7", "Stage 220 unlocks Osan", "Stage 230 unlocks Jett", "Stages 231-240 are in the current game"],
    plan: {
      opening: "Use Rho and Gamma to stabilize damage and slows, while Volari covers hero positions to remove slime.",
      core: "Eta Sentry locks towers and Tin Slime reduces speed and damage. Stop dangerous enemies before they reach your main tower cluster.",
      late: "World 7 leans hard on high-rank heroes. Cyra, Elara, Osan, Jett, Connie, Raida, and Koi can form late teams.",
    },
  },
};

const specialLevelEnglish = {
  10: { name: "Stage 10: Legendary Mode Check", threat: "Mixed waves", core: "This checkpoint moves the game from tutorial into real stages. Separate Archer damage from Barracks blocking.", steps: ["Place Archers near the entrance for small waves and Barracks near the exit for leaks.", "Fee handles air and backline damage while Lancelot guards the most leak-prone lane.", "Do not rush Cannon. Upgrade towers that already cover the main route."] },
  20: { name: "Stage 20: World 1 Finale", threat: "Boss", core: "Use Barracks and Lancelot to stall the Boss while Archers and Wizards attack for as long as possible.", steps: ["Build the kill zone on the bend where the Boss stays longest.", "Spread Barracks so one area hit does not remove all blocking.", "Use Fee's summons for leaks instead of stacking everything on Lancelot."] },
  30: { name: "Stage 30: Yeti Boss", threat: "Boss", core: "The Boss throws snowballs from range, so heroes and Mead Hall soldiers should not clump together.", steps: ["Build 5-7 Mead Halls to spread ranged targeting.", "Place several Thors with North Wind on the main route and add Axe Totem for area damage.", "Efrigid, Mabyn, and Smoulder-style control or AoE heroes are safer picks."] },
  40: { name: "Stage 40: Mammoth Rider", threat: "Boss", core: "Similar to Stage 30, but the Boss bombs punish clumped units harder.", steps: ["Separate Mead Hall soldiers and heroes so bombs do not wipe the whole frontline.", "Keep Thor North Wind covering the Boss route.", "Use clickable gold points on the map, then invest into the main kill zone."] },
  50: { name: "Stage 50: Sethos Boss", threat: "Boss", core: "Sethos has high physical resistance. The center crossing needs Crawlers, Mirror damage, and magic/control support.", steps: ["Place Mirrors above and below the center, Necro on the right, and use Spear plus Crawler elsewhere.", "Gather Crawlers toward the center to help heroes stall the Boss.", "Fee R1, Lancelot R1, and Efrigid are a low-cost stable team."] },
  60: { name: "Stage 60: Helios Boss", threat: "Flying Boss", core: "The Boss is airborne and stops at fixed casting points. Bad hero placement gets punished.", steps: ["Keep Spear/Crawler and Necro stable for ground waves; do not build only ground single-target towers.", "Keep heroes at a safe distance instead of directly under Boss stop points.", "Add Genie or anti-air damage near Boss stop points when needed."] },
  70: { name: "Stage 70: Pharaoh Guardian", threat: "Double Boss", core: "Two guardians activate at the end, so both lanes need blocking and single-target damage.", steps: ["Each lane wants Necro plus Mirror, while Spear/Crawler delays the rest.", "Bring two heroes or summons capable of meeting ground Bosses.", "Do not spend skills early; chain control when guardians enter tower range."] },
  80: { name: "Stage 80: Pharaoh Finale", threat: "Boss", core: "Lower Pharaoh first, then handle revived guardians and the second phase.", steps: ["Prioritize Mirrors on the first four mid-lane tower spots to punish Boss standing time.", "Keep both sides delayed with Spear/Crawler and Necro.", "If damage is slow, keep dragging phase two through Mirror range."] },
  90: { name: "Stage 90: Yan Boss", threat: "Teleport Boss", core: "Yan accelerates, teleports, lowers defense, and opens portals by phase. Cleanse is the key answer.", steps: ["Build Pyromancer Cleanse across the map, roughly every other tower spot.", "Give each Pyromancer one Wisp before deeper upgrades.", "Keep 2-4 Avian Knights or Boomerang Slow near the lower crossing as insurance."] },
  100: { name: "Stage 100: Narlax First Fight", threat: "Pull Boss", core: "Narlax pulls heroes globally and deals area damage. After a pull, move heroes away from him immediately.", steps: ["Mainly build Pyromancer Cleanse, with a few Boomerang Slow towers at key route points.", "Lancelot is useful for absorbing damage and protecting fragile allies.", "Avian Knights die easily to Boss area damage, so use few or only near the exit."] },
  110: { name: "Stage 110: Narlax Rematch", threat: "Pull Boss", core: "After the Boss appears, some tower spots move. Prepare around the final layout.", steps: ["Plan for shifted tower positions, especially right turns and the lower exit.", "After pulls, move heroes under Cleanse instead of tanking in Boss range.", "More enemies arrive here, so you need both enough Cleanse and 2-4 Slow sources."] },
  120: { name: "Stage 120: Shrine Defense", threat: "Meteors", core: "There is no normal Boss. The challenge is protecting the shrine while handling dense waves and meteor disruption.", steps: ["Build Cleanse plus Slow near the shrine before adding more Pyromancer damage.", "Lancelot or Helios can protect the shrine; Efrigid, Mabyn, and Connie stabilize waves.", "The final wave has many small meteors, so move fragile heroes out of the main route."] },
  130: { name: "Stage 130: Leif Boss", threat: "Boss", core: "Leif chases the nearest hero and upgrades at the forge after kills. Do not let him upgrade repeatedly.", steps: ["Necro Connie or Connie summons are the cleanest way to absorb Boss attacks.", "Without Connie, rotate sturdy heroes such as Lancelot, Sethos, or Narlax.", "Build mainly Geargrinder plus Mushroom; weaker teams can add Dwarf where the Boss stalls."] },
  140: { name: "Stage 140: Caldera Boss", threat: "Boss", core: "Caldera is nearly immune outside freeze or percent-damage windows.", steps: ["Efrigid R4 is the safest core; Freeze potions can patch key windows.", "When the Boss is frozen, stack skills and tower damage instead of wasting freeze on small waves.", "Watch cracks spawning Lava Snails and keep a leak catcher near the exit."] },
  150: { name: "Stage 150: Teleport Hunter Boss", threat: "Teleport Boss", core: "The Boss hunts fragile heroes and appears through ground cracks. Move a tank to the landing point.", steps: ["Bring at least one reliable tank or Necro Connie.", "Watch the pre-teleport cue, move fragile heroes away, and let the tank receive the landing.", "Use Dwarf on the main lane so ground waves do not slip through while heroes handle the Boss."] },
  160: { name: "Stage 160: Ancient Tree", threat: "Global stun", core: "The Boss disrupts the entire stage and enters late. Long-range hits, Pixie, and global stuns constantly disturb casting.", steps: ["Use two Mushrooms in the center for healing and control.", "Bring at least one strong tank; Connie plus Leif, Narlax, or Lancelot works well.", "Do not ignore flying pressure; Blunderbuss or Geargrinder must cover the mid-to-late route."] },
  170: { name: "Stage 170: Rokujo Boss", threat: "Boss / Tower support", core: "Red drum plus Shuriken is steadier than stacking only Shuriken. The final Boss empowers enemies.", steps: ["Use Shrine/Miko economy early, then build a red Taiko stun core.", "Upgrade one or two Shuriken towers deeply instead of spreading upgrades evenly.", "Connie, Yan, Efrigid, and Leif-style control/support teams are stable."] },
  180: { name: "Stage 180: Raijin Boss", threat: "Mini-Boss chase", core: "Mini-Bosses spawn near heroes or soldiers. If one reaches the exit, the stage fails.", steps: ["Use fewer heroes and Samurai to reduce risky spawns, or use many Samurai specifically to intercept.", "After the Boss dies once, towers disable; sell and rebuild immediately.", "Move newly joined Raida so mini-Bosses do not spawn in dangerous spots."] },
  190: { name: "Stage 190: Koizuul Boss", threat: "Survival Boss", core: "The Boss cannot be killed normally and slowly loses health. Your job is to survive.", steps: ["During Wave 0, wait for clickable gold points to maximize economy.", "Keep heroes away from Boss melee and handle small waves near the exit or bridge.", "High-level Taiko/Shuriken plus Speed Shrine buys the time you need."] },
  200: { name: "Stage 200: Gashadokuro Boss", threat: "Boss / Exploders", core: "Easier than Stage 190 overall, but every World 6 mechanic appears.", steps: ["Use Connie, summons, or Samurai to absorb mask exploder targets.", "Upgrade towers that can also hit the Boss; do not build only an exit defense.", "Connie plus Koi/Raida and Yan/Helios/Shamiko-style support is steady."] },
  210: { name: "Stage 210: Malhog Boss", threat: "Boss / Goddess unlock", core: "The first major World 7 checkpoint combines Boss pressure and slime mechanics, testing cleanse, control, and backline safety.", steps: ["Cover hero positions with Volari Perch to remove Slimed quickly.", "Place Rho/Gamma where both the Boss and fast enemies pass through.", "Bring Connie or goddess heroes for extra blocking and burst windows."] },
  220: { name: "Stage 220: Osan Unlock", threat: "Stealth / Poison", core: "Stealth, slime, and high HP overlap here. Reveal, cleanse, and sustained control are all required.", steps: ["Later Rho upgrades can reveal stealth, while Gamma slows fast enemies.", "Keep Volari cleanse over heroes so melee units do not stay Slimed.", "Osan or Elara-style control can pull high-threat enemies back into tower range."] },
  230: { name: "Stage 230: Jett Unlock", threat: "Boss / Flying", core: "Late World 7 expects higher hero ranks. Flying blocking and burst damage both matter.", steps: ["Use Rho and Volari for anti-air while Gamma controls fast ground units.", "Jett, Cyra, or Elara can handle flying and pressure points; Connie adds extra blocking.", "Spend skills on the Boss or enemies that lock towers or rush the exit."] },
  240: { name: "Stage 240: World 7 Endgame", threat: "Endgame pressure", core: "Stages 231-240 are late additions and should be prepared for as high-HP, high-control, high-rank checks.", steps: ["Make sure Rho, Gamma, and Volari are all covered: damage, slow, and cleansing are all needed.", "Bring at least one high-rank main damage hero, one control or summon hero, and one support or cleanse option.", "Do not chase first-clear three stars. Clear for upgrades first, then return."] },
};

const buildEnglish = {
  starter: {
    title: "Starter Push Lineup",
    intro: "The goal is stable progress with low execution pressure: wave clear, blocking, and flying coverage first.",
    heroes: ["fee", "lancelot", "efrigid"],
    focus: "Fee supplies safe damage and anti-air, Lancelot anchors the exit or crossing, and Efrigid freezes fast or bulky enemies inside the kill zone.",
    rotation: ["Open by identifying the lane most likely to leak; keep Fee behind the fight covering two route segments.", "Lancelot should not tank at the entrance. Let enemies enter tower range first.", "Save Frost Orb for fast enemies, flying mixes, or Bosses entering your tower zone."],
    bestFor: ["Worlds 1-3 campaign", "New accounts without late heroes", "Basic three-star progress"],
    alternatives: ["Mabyn can replace Efrigid for fear control.", "Smoulder can replace Fee against dense flying or grouped waves.", "Do not over-rely on Connie before her Necro upgrade."],
    towerFocus: "W1 uses Archer/Barracks, W2 uses Thor + Mead Hall, and W3 uses Spear + Crawler.",
    columns: [["Core", "Fee + Lancelot + Efrigid"], ["Swap", "Mabyn can replace Efrigid for early control"], ["Use", "Worlds 1-3 campaign pushing"]],
  },
  control: {
    title: "Control & Safety Lineup",
    intro: "Use slow, freeze, fear, and summons to hold enemies inside tower range. Best for elites, fast runners, and split lanes.",
    heroes: ["connie", "efrigid", "mabyn"],
    focus: "Necro Connie builds temporary walls, Efrigid freezes the key wave, and Mabyn fears enemies back into the tower zone.",
    rotation: ["Place bunnies where enemies overlap, not at the entrance where block time is wasted.", "After Efrigid freezes bulky or fast enemies, let area towers and main damage focus them.", "Mabyn fear works best after a Narlax pull or Efrigid freeze for a second control layer."],
    bestFor: ["Worlds 4-5 campaign and legendary", "Split lanes", "Fast and bulky mixed waves"],
    alternatives: ["Yan can replace Mabyn for stronger tempo.", "Narlax can replace Mabyn when maps need pull-back control.", "Azura becomes a strong control replacement after World 6."],
    towerFocus: "W4 prioritizes Pyromancer Cleanse + Boomerang Slow; W5 builds around Mushroom and Geargrinder.",
    columns: [["Core", "Necro Connie + Efrigid + Mabyn/Yan"], ["Method", "Build control first, then save skills for pressure waves"], ["Use", "Worlds 4-5 campaign and legendary stages"]],
  },
  boss: {
    title: "Boss Handling Lineup",
    intro: "Stack single-target burst, team buffs, and frontline delay in the Boss stop zone instead of spreading skills across small waves.",
    heroes: ["connie", "raida", "yan"],
    focus: "Connie blocks and absorbs Boss skills, Raida delivers stun and burst, and Yan gives haste to the hero or tower that changes the fight.",
    rotation: ["Do not spend skills on low-pressure waves; build the zone where the Boss stays longest.", "When the Boss enters the zone, pin it with Connie or a tank, then chain Raida or Koi burst.", "Yan haste should go to Raida, Koi, or the key tower, not to a short-lived summon."],
    bestFor: ["Stages 50, 60, 80, 130, 140, 190, 200", "Single-target Bosses", "Stages with burst windows"],
    alternatives: ["Koi can replace Raida as the main burst hero.", "Leif or Lancelot can replace Connie as a hard tank.", "Narlax can replace Yan to pull Bosses or elites back into tower range."],
    towerFocus: "Do not spread tower upgrades on Boss maps. Prioritize single-target damage, slows, and routes the Boss repeats.",
    columns: [["Core", "Connie + Koi/Raida + Yan/Helios"], ["Swap", "Lancelot, Leif, or Narlax depending on Boss mechanics"], ["Use", "Stages 50, 60, 80, 130, 140, 190, 200, and similar checkpoints"]],
  },
  w6: {
    title: "Late Tower-Support Lineup",
    intro: "World 6 and high Realm Siege runs often rely on tower damage. Heroes should haste, amplify, control, and protect tower zones.",
    heroes: ["connie", "helios", "yan"],
    focus: "Connie absorbs exploders and blocks waves, Helios empowers the key tower, and Yan accelerates the best hero or tower cycle.",
    rotation: ["Use Wave 0 economy when possible, then rush Shrine/Miko or core tower upgrades.", "Helios Empower belongs on red Taiko, Shuriken, or Boss damage towers.", "Connie bunnies should absorb Mask/exploder targeting; do not park main heroes in the blast center."],
    bestFor: ["World 6", "Tower-damage-heavy Realm Siege", "Mask and exploder pressure in 191-200"],
    alternatives: ["Leif can replace Yan for frontline plus tower support.", "Shamiko can replace Helios for higher manual control ceiling.", "Efrigid can replace Yan for safer low-rank freeze control."],
    towerFocus: "Red Taiko controls, Shuriken deals damage, Speed Shrine raises tempo, and Samurai covers the back half.",
    columns: [["Core", "Connie + Efrigid + Helios/Yan/Leif"], ["Towers", "Red Taiko, Shuriken, Speed Shrine"], ["Use", "World 6 and tower-damage-heavy stages"]],
  },
  w7: {
    title: "World 7 Lineup",
    intro: "World 7 asks for high ranks and mechanics coverage: cleanse slime, stop tower-lock enemies, handle flying waves, and kill bulky units.",
    heroes: ["elara", "osan", "jett"],
    focus: "Elara pulls and fears, Osan uses poison and Broto to control high-threat targets, and Jett/L.A.G. blocks flying lanes and frontlines.",
    rotation: ["Place Volari Perch over hero positions first so Slimed does not suppress damage for long.", "After Elara pulls tower-lock enemies or runners back into Rho/Gamma range, chain Gamma slow or hero control.", "L.A.G. respawns at Jett's position, so moving Jett changes where flying blockers return."],
    bestFor: ["Stages 201-240", "Slime, tower-lock, and flying mixes", "Late three-star cleanup"],
    alternatives: ["Cyra can replace Elara for burst and flying handling.", "Raida can replace Osan for dash stun.", "Connie remains the low-risk safety core."],
    towerFocus: "Rho is reliable damage, Gamma controls speed and vines, Volari cleanses slime and covers air, and Crystal Keep blocks ground paths.",
    columns: [["Core", "Cyra/Elara/Osan/Jett + Connie"], ["Support", "Raida, Koi, Yan, and Helios depending on rank"], ["Use", "Stages 201-240 and late three-star cleanup"]],
  },
};

const state = {
  lang: "en",
  activeHero: heroes[0].id,
  activeBuild: "starter",
  activeWorld: "世界 1",
  levelLimit: 24,
};

const levelPageSize = 24;

function heroIconPath(hero) {
  return `./assets/heroes/${hero.id}.webp`;
}

function levelMapPath(level) {
  if (level <= 220) return `./assets/maps/${level}.webp`;
  return `./assets/maps/${level}.svg`;
}

function heroById(id) {
  return heroes.find((hero) => hero.id === id);
}

const heroList = document.querySelector("#heroList");
const heroDetail = document.querySelector("#heroDetail");
const heroSearch = document.querySelector("#heroSearch");
const roleFilter = document.querySelector("#roleFilter");
const levelGrid = document.querySelector("#levelGrid");
const worldTabs = document.querySelector("#worldTabs");
const threatFilter = document.querySelector("#threatFilter");
const levelSearch = document.querySelector("#levelSearch");
const buildDetail = document.querySelector("#buildDetail");
const worldGuide = document.querySelector("#worldGuide");

function t(key) {
  return uiText[state.lang][key];
}

function isEnglish() {
  return state.lang === "en";
}

function translateRole(role) {
  return isEnglish() ? roleText[role] || role : role;
}

function translateThreat(threat) {
  return isEnglish() ? threatText[threat] || threat : threat;
}

function translateDifficulty(difficulty) {
  return isEnglish() ? difficultyText[difficulty] || difficulty : difficulty;
}

function localHero(hero) {
  return isEnglish() ? { ...hero, ...heroEnglish[hero.id] } : hero;
}

function localWorld(world) {
  return isEnglish() ? { ...world, ...worldEnglish[world.id], plan: worldEnglish[world.id].plan } : world;
}

function localBuild(id) {
  return isEnglish() ? buildEnglish[id] : builds[id];
}

function worldById(id) {
  return worldGuides.find((world) => world.id === id);
}

function localLevel(level) {
  if (!isEnglish()) return level;
  const world = localWorld(worldById(level.worldId));
  const special = specialLevelEnglish[level.level];
  if (special) {
    return {
      ...level,
      world: world.world,
      name: special.name,
      threat: special.threat,
      difficulty: translateDifficulty(level.difficulty),
      core: special.core,
      steps: special.steps,
    };
  }
  const phase = level.level - worldById(level.worldId).start;
  const phaseName = phase % 10 >= 7 ? "High-pressure push" : phase % 10 >= 4 ? "Mixed waves" : "Basic push";
  const threat = translateThreat(level.threat);
  return {
    ...level,
    world: world.world,
    name: `${level.level}: ${world.short} Phase ${level.phaseIndex} - ${phaseName}`,
    threat,
    difficulty: phaseName,
    core: `${world.name} phase ${level.phaseIndex}: build around your main kill zone to handle ${threat.toLowerCase()} pressure.`,
    steps: [world.plan.opening, threatAdviceEnglish[level.threat] || world.plan.core, world.plan.late],
  };
}

function applyUiText() {
  document.documentElement.lang = isEnglish() ? "en" : "zh-CN";
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (typeof value === "string") node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = t(node.dataset.i18nPlaceholder);
    if (typeof value === "string") node.setAttribute("placeholder", value);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const value = t(node.dataset.i18nAria);
    if (typeof value === "string") node.setAttribute("aria-label", value);
  });
  document.querySelectorAll(".language-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

function uniqueValues(items, key) {
  return [...new Set(items.map((item) => item[key]))];
}

function setSelectOptions(select, allLabel, values, labelFn) {
  const previous = select.value || "all";
  select.innerHTML = `<option value="all">${allLabel}</option>${values
    .map((value) => `<option value="${value}">${labelFn(value)}</option>`)
    .join("")}`;
  select.value = values.includes(previous) ? previous : "all";
}

function renderFilters() {
  setSelectOptions(roleFilter, t("allRoles"), uniqueValues(heroes, "role"), translateRole);
  const worldThreats = uniqueValues(
    levels.filter((level) => level.world === state.activeWorld),
    "threat",
  );
  setSelectOptions(threatFilter, t("allThreats"), worldThreats, translateThreat);
}

function renderWorldTabs() {
  worldTabs.innerHTML = worldGuides
    .map((world) => {
      const displayWorld = localWorld(world);
      const isActive = world.world === state.activeWorld;
      return `
        <button class="world-tab ${isActive ? "active" : ""}" type="button" data-world="${world.world}">
          <strong>${displayWorld.world}</strong>
          <span>${world.start}-${world.end}</span>
        </button>
      `;
    })
    .join("");
}

function setLanguage(lang) {
  state.lang = lang;
  applyUiText();
  renderWorldTabs();
  renderFilters();
  renderHeroList();
  renderLevels();
  renderWorldGuide();
  renderBuild();
}

function renderHeroList() {
  const query = heroSearch.value.trim().toLowerCase();
  const role = roleFilter.value;
  const filtered = heroes.filter((hero) => {
    const displayHero = localHero(hero);
    const haystack = `${hero.name} ${hero.role} ${hero.tags.join(" ")} ${hero.summary} ${hero.unlock} ${hero.active} ${displayHero.role} ${displayHero.tags.join(" ")} ${displayHero.summary} ${displayHero.unlock}`.toLowerCase();
    return (role === "all" || hero.role === role) && (!query || haystack.includes(query));
  });

  if (!filtered.some((hero) => hero.id === state.activeHero) && filtered[0]) {
    state.activeHero = filtered[0].id;
  }

  heroList.innerHTML = filtered
    .map(
      (hero) => {
        const displayHero = localHero(hero);
        return `
        <button class="hero-button ${hero.id === state.activeHero ? "active" : ""}" data-hero="${hero.id}">
          <img class="hero-list-icon" src="${heroIconPath(hero)}" alt="${hero.name} ${t("icon")}" loading="lazy" />
          <span class="hero-list-text">
            <strong>${hero.name}</strong>
            <span>${displayHero.role} · ${t("pushTier")} ${hero.tier}</span>
          </span>
        </button>
      `;
      },
    )
    .join("");

  if (!filtered.length) {
    heroList.innerHTML = `<p class="empty">${t("emptyHeroes")}</p>`;
  }

  renderHeroDetail();
}

function renderHeroDetail() {
  const hero = heroes.find((item) => item.id === state.activeHero) || heroes[0];
  const displayHero = localHero(hero);
  heroDetail.innerHTML = `
    <div class="detail-top">
      <div class="hero-title-group">
        <div class="hero-portrait">
          <img src="${heroIconPath(hero)}" alt="${hero.name} ${t("icon")}" />
        </div>
        <div>
          <p class="eyebrow">${displayHero.role}</p>
          <h3>${hero.name}</h3>
          <p>${displayHero.summary}</p>
          <div class="hero-meta">
            <span>${t("unlock")}${t("fieldSep")}${displayHero.unlock}</span>
            <span>${t("activeSkill")}${t("fieldSep")}${hero.active}</span>
          </div>
        </div>
      </div>
      <div class="rank">${hero.tier}</div>
    </div>
    <div class="tag-row">
      ${displayHero.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <div class="stat-bars">
      ${Object.entries(hero.stats)
        .map(([label, value]) => {
          return `
            <div class="stat">
              <span>${t("stats")[label]}</span>
              <div class="bar"><span style="width: ${value}%"></span></div>
              <b>${value}</b>
            </div>
          `;
        })
        .join("")}
    </div>
    <ul class="notes">
      ${displayHero.notes.map((note) => `<li>${note}</li>`).join("")}
    </ul>
  `;
}

function renderLevels() {
  const threat = threatFilter.value;
  const query = levelSearch.value.trim().toLowerCase();
  const filtered = levels.filter((level) => {
    const displayLevel = localLevel(level);
    const haystack = `${level.level} ${level.world} ${level.name} ${level.threat} ${level.difficulty} ${level.core} ${level.steps.join(" ")} ${displayLevel.world} ${displayLevel.name} ${displayLevel.threat} ${displayLevel.difficulty} ${displayLevel.core} ${displayLevel.steps.join(" ")}`.toLowerCase();
    return (
      level.world === state.activeWorld &&
      (threat === "all" || level.threat === threat) &&
      (!query || haystack.includes(query))
    );
  });
  const visibleLevels = filtered.slice(0, state.levelLimit);

  levelGrid.innerHTML = `
    <div class="level-count">${t("showingLevels")(visibleLevels.length, filtered.length, levels.length)}</div>
    ${visibleLevels
      .map(
        (level) => {
          const displayLevel = localLevel(level);
          return `
          <article class="level-card">
            <figure class="level-map ${level.level > 220 ? "pending-map" : ""}">
              <img src="${levelMapPath(level.level)}" alt="${t("mapAlt")(level.level)}" loading="lazy" />
              ${level.level > 220 ? `<figcaption>${t("mapPending")}</figcaption>` : ""}
            </figure>
            <header>
              <div>
                <small>${displayLevel.world} · ${t("stage")} ${level.level}${isEnglish() ? "" : " 关"}</small>
                <h3>${displayLevel.name}</h3>
              </div>
              <span class="tag">${displayLevel.threat} · ${displayLevel.difficulty}</span>
            </header>
            <p>${displayLevel.core}</p>
            <ul>
              ${displayLevel.steps.map((step) => `<li>${step}</li>`).join("")}
            </ul>
          </article>
        `;
        },
      )
      .join("")}
    ${
      visibleLevels.length < filtered.length
        ? `<div class="level-more"><button class="load-more-button" type="button" data-load-more-levels>${t("loadMore")}</button></div>`
        : ""
    }
  `;

  if (!filtered.length) {
    levelGrid.innerHTML = `<p class="empty">${t("emptyLevels")}</p>`;
  }
}

function renderWorldGuide() {
  worldGuide.innerHTML = worldGuides
    .map(
      (world) => {
        const displayWorld = localWorld(world);
        return `
        <article class="world-card">
          <header>
            <div>
              <small class="eyebrow">${displayWorld.world}</small>
              <h3>${displayWorld.name}</h3>
            </div>
            <span class="tag">${world.start}-${world.end}</span>
          </header>
          <p>${displayWorld.plan.core}</p>
          <ul class="mini-list">
            ${displayWorld.towers.map((tower) => `<li>${tower}</li>`).join("")}
          </ul>
          <div class="tag-row">
            ${displayWorld.unlocks.map((unlock) => `<span class="tag">${unlock}</span>`).join("")}
          </div>
        </article>
      `;
      },
    )
    .join("");
}

function renderBuild() {
  const build = localBuild(state.activeBuild);
  const buildHeroes = build.heroes.map((id) => heroById(id)).filter(Boolean);
  buildDetail.innerHTML = `
    <p class="eyebrow">Build</p>
    <h3>${build.title}</h3>
    <p>${build.intro}</p>
    <section class="lineup-heroes" aria-label="${t("lineupHeroes")}">
      ${buildHeroes
        .map((hero) => {
          const displayHero = localHero(hero);
          return `
            <div class="lineup-hero">
              <img src="${heroIconPath(hero)}" alt="${hero.name} ${t("icon")}" loading="lazy" />
              <strong>${hero.name}</strong>
              <span>${displayHero.role}</span>
            </div>
          `;
        })
        .join("")}
    </section>
    <div class="lineup-notes">
      <section>
        <strong>${t("lineupPlan")}</strong>
        <p>${build.focus}</p>
      </section>
      <section>
        <strong>${t("towerFocus")}</strong>
        <p>${build.towerFocus}</p>
      </section>
    </div>
    <div class="lineup-lists">
      <section>
        <strong>${t("lineupTiming")}</strong>
        <ul>
          ${build.rotation.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
      <section>
        <strong>${t("lineupBestFor")}</strong>
        <ul>
          ${build.bestFor.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
      <section>
        <strong>${t("lineupAlternatives")}</strong>
        <ul>
          ${build.alternatives.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    </div>
    <div class="build-columns">
      ${build.columns
        .map(
          ([label, value]) => `
            <div>
              <strong>${label}</strong>
              <span>${value}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function bindEvents() {
  heroList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-hero]");
    if (!button) return;
    state.activeHero = button.dataset.hero;
    renderHeroList();
  });

  [heroSearch, roleFilter].forEach((element) => element.addEventListener("input", renderHeroList));
  [threatFilter, levelSearch].forEach((element) =>
    element.addEventListener("input", () => {
      state.levelLimit = levelPageSize;
      renderLevels();
    }),
  );

  levelGrid.addEventListener("click", (event) => {
    if (!event.target.closest("[data-load-more-levels]")) return;
    state.levelLimit += levelPageSize;
    renderLevels();
  });

  document.querySelectorAll(".language-option").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  worldTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-world]");
    if (!button) return;
    state.activeWorld = button.dataset.world;
    state.levelLimit = levelPageSize;
    threatFilter.value = "all";
    renderWorldTabs();
    renderFilters();
    renderLevels();
  });

  document.querySelectorAll(".build-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeBuild = button.dataset.build;
      document.querySelectorAll(".build-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
      renderBuild();
    });
  });
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

applyUiText();
renderWorldTabs();
renderFilters();
bindEvents();
renderHeroList();
renderLevels();
renderWorldGuide();
renderBuild();
revealOnScroll();
