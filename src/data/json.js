const data = [
    {
        id: '1',
        title: '您的性别：',
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '1_1',
                selected: false,
                title: '男性',
                desc: ''
            },
            {
                id: '1_2',
                selected: false,
                title: '女性',
                desc: ''
            }
        ]
    },
    {
        id: '2',
        title: '您的年龄区间：',
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '2_1',
                selected: false,
                title: '18-24周岁',
                desc: ''
            },
            {
                id: '2_2',
                selected: false,
                title: '25-34周岁',
                desc: ''
            },
            {
                id: '2_3',
                selected: false,
                title: '35-39周岁',
                desc: ''
            },
            {
                id: '2_4',
                selected: false,
                title: '40-44周岁',
                desc: ''
            },
            {
                id: '2_5',
                selected: false,
                title: '45-49周岁',
                desc: ''
            },
            {
                id: '2_6',
                selected: false,
                title: '49周岁以上',
                desc: ''
            }
        ]
    },
    {
        id: 3,
        title: '您每天使用时长和频率较多的电子产品类型是?',
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '3_1',
                selected: false,
                title: '电脑',
                desc: ''
            },
            {
                id: '3_2',
                selected: false,
                title: '手机',
                desc: ''
            },
            {
                id: '3_3',
                selected: false,
                title: '平板',
                desc: ''
            },
            {
                id: '3_4',
                selected: false,
                title: '电视',
                desc: ''
            },
            {
                id: '3_5',
                selected: false,
                title: '其他视频终端',
                desc: ''
            }
        ]
    },
    {
        id: 4,
        title: '您每天使用电子屏幕的时长大约是多久?',
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '4_1',
                selected: false,
                title: '1小时以内',
                desc: ''
            },
            {
                id: '4_2',
                selected: false,
                title: '1-3小时',
                desc: ''
            },
            {
                id: '4_3',
                selected: false,
                title: '3-6小时',
                desc: ''
            },
            {
                id: '4_4',
                selected: false,
                title: '6小时以上',
                desc: ''
            }
        ]
    },
    {
        id: 5,
        title: "您是否知道‘每天近距离使用电子屏幕超过6小时就有可能造成视频终端综合征’?",
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '5_1',
                selected: false,
                title: '是',
                desc: ''
            },
            {
                id: '5_2',
                selected: false,
                title: '否',
                desc: ''
            }
        ]
    },
    {
        id: 6,
        title: "在长时间使用电子屏幕后,您是否有以下不适症状?",
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '6_1',
                selected: false,
                title: '眼部不适',
                desc: ''
            },
            {
                id: '6_2',
                selected: false,
                title: '头晕头痛恶心',
                desc: ''
            },
            {
                id: '6_3',
                selected: false,
                title: '注意力、记忆力下降',
                desc: ''
            },
            {
                id: '6_4',
                selected: false,
                title: '肩颈、腰背肌肉酸痛',
                desc: ''
            },
            {
                id: '6_5',
                other: true,
                selected: false,
                title: '其他不适症状(请注明)',
                desc: ''
            },
            {
                id: '6_6',
                selected: false,
                title: '无',
                desc: '',
                only: true
            }
        ]
    },
    {
        id: 7,
        title: "在长时间使用电子屏幕后,您是否有以下眼部不适的症状?",
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '7_1',
                selected: false,
                title: '眼睛疲劳',
                desc: ''
            },
            {
                id: '7_2',
                selected: false,
                title: '眼睛干涩',
                desc: ''
            },
            {
                id: '7_3',
                selected: false,
                title: '眼睛有异物感',
                desc: ''
            },
            {
                id: '7_4',
                selected: false,
                title: '眼睛刺痛酸胀',
                desc: ''
            },
            {
                id: '7_5',
                selected: false,
                title: '视力模糊、变形、重影等',
                desc: ''
            },
            {
                id: '7_6',
                selected: false,
                only: true,
                title: '无',
                desc: ''
            }
        ]
    },
    {
        id: 8,
        title: "您认为以下哪些因素造成了不适症状?",
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '8_1',
                selected: false,
                title: '眨眼次数减少,症状加重',
                desc: ''
            },
            {
                id: '8_2',
                selected: false,
                title: '电子屏因素(如过亮、清晰度不足、不防蓝光、频闪等)',
                desc: ''
            },
            {
                id: '8_3',
                selected: false,
                title: '环境因素(如温度、光线过暗、通风等)',
                desc: ''
            },
            {
                id: '8_4',
                selected: false,
                title: '未完全矫正的视力问题,如散光、近视',
                desc: ''
            },
            {
                id: '8_5',
                selected: false,
                title: '坐姿、观看距离不佳',
                desc: ''
            },
            {
                id: '8_6',
                selected: false,
                other: true,
                title: '其他(请注明)',
                desc: ''
            }
        ]
    },
    {
        id: 9,
        title: "平时使用电子屏幕时,您是否有采取一些保护眼睛的措施?",
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '9_1',
                selected: false,
                title: '主动增加眨眼频率',
                desc: ''
            },
            {
                id: '9_2',
                selected: false,
                title: '注意观看距离并端正坐姿',
                desc: ''
            },
            {
                id: '9_3',
                selected: false,
                title: '调整屏幕亮度和色调',
                desc: ''
            },
            {
                id: '9_4',
                selected: false,
                title: '选择防蓝光的框架眼镜',
                desc: ''
            },
            {
                id: '9_5',
                selected: false,
                title: '选择保湿性更高的隐形眼镜',
                desc: ''
            },
            {
                id: '9_6',
                selected: false,
                title: '主动让眼睛休息',
                desc: ''
            },
            {
                id: '9_7',
                selected: false,
                title: '没有',
                desc: '',
                only: true
            }
        ]
    },
    {
        id: 10,
        title: "您的视力情况?",
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '10_1',
                selected: false,
                completed: true,
                title: '不近视(结束问卷)',
                desc: ''
            },
            {
                id: '10_2',
                selected: false,
                title: '近视100-300',
                desc: ''
            },
            {
                id: '10_3',
                selected: false,
                title: '近视300-500',
                desc: ''
            },
            {
                id: '10_4',
                selected: false,
                title: '近视500+',
                desc: ''
            }
        ]
    },
    {
        id: 11,
        title: "您是否尝试过隐形眼镜?",
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '11_1',
                selected: false,
                title: '否',
                desc: ''
            },
            {
                id: '11_2',
                selected: false,
                title: '是',
                to: 14,
                desc: ''
            }
        ]
    },
    {
        id: 12,
        title: "您不愿意尝试隐形眼镜最主要的3类原因是?",
        min: 3,
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '12_1',
                selected: false,
                title: '担心长期佩戴伤害眼睛',
                desc: ''
            },
            {
                id: '12_2',
                selected: false,
                title: '摘戴麻烦',
                desc: ''
            },
            {
                id: '12_3',
                selected: false,
                title: '护理麻烦',
                desc: ''
            },
            {
                id: '12_4',
                selected: false,
                title: '价格较高',
                desc: ''
            },
            {
                id: '12_5',
                selected: false,
                title: '无场景需要配戴(如运动、户外、职场等)',
                desc: ''
            }
        ]
    },
    {
        id: 13,
        title: "您尝试和选择隐形眼镜时着重在意的3类条件是?",
        min: 3,
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '13_1',
                selected: false,
                title: '配戴舒适,无异物感',
                desc: ''
            },
            {
                id: '13_2',
                selected: false,
                title: '无需护理,摘戴方便',
                desc: ''
            },
            {
                id: '13_3',
                selected: false,
                title: '可持久配戴,长期看电子屏不会眼疲劳',
                desc: ''
            },
            {
                id: '13_4',
                selected: false,
                title: '材质先进,对眼健康影响小',
                desc: ''
            },
            {
                id: '13_5',
                selected: false,
                title: '有助于眼健康的其他功能：防蓝光、防晒等',
                desc: ''
            },
            {
                id: '13_6',
                selected: false,
                title: '品牌知名度高',
                desc: ''
            },
            {
                id: '13_7',
                selected: false,
                other: true,
                only: true,
                title: '其他(请注明)',
                desc: ''
            },
            {
                id: '13_8',
                selected: false,
                other: true,
                only: true,
                title: '依然不会选择(请注明原因)',
                desc: ''
            }
        ]
    },
    {
        id: 14,
        title: "您目前佩戴隐形眼镜的需求频次大概是多少?",
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '14_1',
                selected: false,
                title: '每周1-3天佩戴',
                desc: ''
            },
            {
                id: '14_2',
                selected: false,
                title: '每周4-6天佩戴',
                desc: ''
            },
            {
                id: '14_3',
                selected: false,
                title: '每天白天佩戴',
                desc: ''
            },
            {
                id: '14_4',
                selected: false,
                title: '很少,框架眼镜不方便的场合才佩戴',
                desc: ''
            }
        ]
    },
    {
        id: 15,
        title: "您常用的隐形眼镜类型是什么?",
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '15_1',
                selected: false,
                title: '白片',
                desc: ''
            },
            {
                id: '15_2',
                selected: false,
                title: '美瞳',
                desc: ''
            }
        ]
    },
    {
        id: 16,
        title: "您常用的隐形眼镜的佩戴期限是什么?",
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '16_1',
                selected: false,
                title: '日抛',
                desc: ''
            },
            {
                id: '16_2',
                selected: false,
                title: '周抛/双周抛',
                desc: ''
            },
            {
                id: '16_3',
                selected: false,
                title: '月抛',
                desc: ''
            },
            {
                id: '16_4',
                selected: false,
                title: '半年抛',
                desc: ''
            },
            {
                id: '16_5',
                selected: false,
                title: '年抛',
                desc: ''
            }
        ]
    },
    {
        id: 17,
        title: "在选择隐形眼镜时,您优先关注的3点是?",
        min: 3,
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '17_1',
                selected: false,
                title: '材质(水凝胶/硅水凝胶)',
                desc: ''
            },
            {
                id: '17_2',
                selected: false,
                title: '保湿性能',
                desc: ''
            },
            {
                id: '17_3',
                selected: false,
                title: '防蓝光',
                desc: ''
            },
            {
                id: '17_4',
                selected: false,
                title: '防晒力',
                desc: ''
            },
            {
                id: '17_5',
                selected: false,
                title: '透氧性',
                desc: ''
            },
            {
                id: '17_6',
                selected: false,
                title: '摘戴简单',
                desc: ''
            },
            {
                id: '17_7',
                selected: false,
                title: '价格',
                desc: ''
            },
            {
                id: '17_8',
                selected: false,
                title: '品牌',
                desc: ''
            },
            {
                id: '17_9',
                selected: false,
                other: true,
                title: '其他(请注明)',
                desc: ''
            }
        ]
    },
    {
        id: 18,
        title: "佩戴隐形眼镜时您经历过以下哪些困扰?",
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '18_1',
                selected: false,
                title: '干涩疲劳',
                desc: ''
            },
            {
                id: '18_2',
                selected: false,
                title: '有异物感',
                desc: ''
            },
            {
                id: '18_3',
                selected: false,
                title: '过敏刺痛',
                desc: ''
            },
            {
                id: '18_4',
                selected: false,
                title: '摘戴不便',
                desc: ''
            },
            {
                id: '18_5',
                selected: false,
                title: '护理麻烦',
                desc: ''
            },
            {
                id: '18_6',
                selected: false,
                title: '价格较高',
                desc: ''
            },
            {
                id: '18_7',
                selected: false,
                title: '没有困扰',
                desc: '',
                only: true
            }
        ]
    },
    {
        id: 19,
        title: "佩戴目前的隐形眼镜长时间使用电子屏幕时,您的不适症状加重了吗?",
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '19_1',
                selected: false,
                title: '确实会加重',
                desc: ''
            },
            {
                id: '19_2',
                selected: false,
                title: '没有明显变化',
                desc: ''
            },
            {
                id: '19_3',
                selected: false,
                title: '目前没有佩戴隐形眼镜',
                desc: ''
            }
        ]
    },
    {
        id: 20,
        title: "在以下哪些情况下,您会考虑更换隐形眼镜品牌和类型?",
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '20_1',
                selected: false,
                title: '佩戴不适(如干涩、刺痛等)',
                desc: ''
            },
            {
                id: '20_2',
                selected: false,
                title: '视力模糊或下降',
                desc: ''
            },
            {
                id: '20_3',
                selected: false,
                title: '价格变动',
                desc: ''
            },
            {
                id: '20_4',
                selected: false,
                title: '网上/身边人推荐或评价影响',
                desc: ''
            },
            {
                id: '20_5',
                selected: false,
                title: '新产品上市(有新功能推出如：防蓝光,水润度提升等)',
                desc: ''
            },
            {
                id: '20_6',
                selected: false,
                title: '医生推荐',
                desc: ''
            },
            {
                id: '20_7',
                selected: false,
                other: true,
                title: '其他(请注明)',
                desc: ''
            },
            {
                id: '20_8',
                selected: false,
                //唯一
                only: true,
                title: '不会考虑更换品牌',
                desc: ''
            }
        ]
    },
    {
        id: 21,
        title: "您通常选择在哪里配镜或购买眼镜?",
        single: false,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '21_1',
                selected: false,
                title: '各大电商平台',
                desc: ''
            },
            {
                id: '21_2',
                selected: false,
                title: '线下眼镜店',
                desc: ''
            },
            {
                id: '21_3',
                selected: false,
                title: '眼科医院/诊所',
                desc: ''
            },
            {
                id: '21_4',
                selected: false,
                other: true,
                title: '其他(请注明)',
                desc: ''
            }
        ]
    },
    {
        id: 22,
        title: "以下哪些情况下您会去医院进行配镜?",
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '22_1',
                selected: false,
                title: '视力下降',
                desc: ''
            },
            {
                id: '22_2',
                selected: false,
                title: '眼部不适',
                desc: ''
            },
            {
                id: '22_3',
                selected: false,
                title: '治疗确诊的眼部疾病(如眼部感染,干眼症等)',
                desc: ''
            },
            {
                id: '22_4',
                selected: false,
                title: '更信赖医院的产品和服务',
                desc: ''
            },
            {
                id: '22_5',
                selected: false,
                title: '不考虑',
                desc: ''
            }
        ]
    },
    {
        id: 23,
        title: "您是否每3-6个月会去进行眼健康检查?",
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '23_1',
                selected: false,
                title: '是',
                desc: ''
            },
            {
                id: '23_2',
                selected: false,
                title: '否',
                desc: ''
            }
        ]
    },
    {
        id: 24,
        title: "如果有一款隐形眼镜,具有泪液维稳水润科技,持久保湿;同时具有滤蓝光科技,有效过滤55%有害蓝紫光,更适合数码时代的电子屏应用场景。爱尔眼科全国医院和门诊有售,您是否会考虑尝试?",
        single: true,
        required: true,
        currOptionIdx: null,
        options: [
            {
                id: '24_1',
                selected: false,
                title: '会',
                desc: ''
            },
            {
                id: '24_2',
                selected: false,
                title: '不会,请说明_________',
                other: true,
                desc: ''
            }
        ]
    }
]

export default data
