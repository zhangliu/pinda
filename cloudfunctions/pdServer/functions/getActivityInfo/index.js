const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

exports.main = async (event, context) => {
  const params = event.params;
  const {data} = await db.collection('pd_activity').where({_id: params.id}).get();
  return data[0];
};
