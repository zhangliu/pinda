const cloud = require('wx-server-sdk');

cloud.init({env: cloud.DYNAMIC_CURRENT_ENV});

const db = cloud.database();

exports.tables = {
    activityTable: db.collection('pd_activity'),
};