const {tables} = require('../../models/index');

exports.main = async (event, context) => {
  const params = event.params;
  const userInfo = params.userInfo;

  const {data} = await tables.activityTable.where({_id: params.activityId}).get();
  const activity = data[0];

  const users =  (activity.users || []).filter(item => item.openid !== userInfo.openid);

  await tables.activityTable.doc(params.activityId).update({data: {users}});
};