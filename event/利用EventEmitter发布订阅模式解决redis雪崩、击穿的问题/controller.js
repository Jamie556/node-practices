const { getDemoService } = require('./service');

const demoService = getDemoService(SQLModel);

async function findGift(giftId) {
  const result = await demoService.findOne(giftId);
  console.log("查询到的礼物结果为：", result);
}
