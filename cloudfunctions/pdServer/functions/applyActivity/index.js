const {tables} = require('../../models/index');

exports.main = async (event, context) => {
  const params = event.params;
  const userInfo = params.userInfo;

  const {data} = await tables.activityTable.where({_id: params.activityId}).get();
  const activity = data[0];

  const users =  activity.users || [];
  const hasUser = users.find(item => item.openid === userInfo.openid);
  if (!hasUser) users.push(userInfo);

  await tables.activityTable.doc(params.activityId).update({data: {users}});
};