/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9d260dcaa98d8b70',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '32af68ed5ae9b1be564db3cb97d0535d',

  PROVINCE: '河北',
  CITY: '保定',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小白',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogz286dg9sp_8l_yDztyiENGdAj4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'aQsYgwd_9ZXMoB8-1q7_nrlHOizYkmQzY8aiu9QiEDs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小白', year: '1999', date: '09-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '倩仔', year: '1997', date: '06-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '07-08',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-04' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '倩仔',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogz286fBMiZN4r3-TtACwhwn9Bvc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'aQsYgwd_9ZXMoB8-1q7_nrlHOizYkmQzY8aiu9QiEDs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小白', year: '1999', date: '09-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '倩仔', year: '1997', date: '06-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '07-08',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-04' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'aQsYgwd_9ZXMoB8-1q7_nrlHOizYkmQzY8aiu9QiEDs',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogz286fBMiZN4r3-TtACwhwn9Bvc',
    }
  ],

}

module.exports = USER_CONFIG

