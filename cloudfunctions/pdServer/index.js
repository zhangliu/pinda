const fs = require('fs');

const FUNCTIONS_DIR = './functions';
// 读取当前目录下所有的目录，并且是目录类型
const funcNames = fs.readdirSync(FUNCTIONS_DIR, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// 云函数入口函数
exports.main = async (event, context) => {
  const funcName = event.type;;
  if (!funcNames.includes(event.type)) {
    return `funcName: ${funcName} is not exist`;
  }

  const func = require(`${FUNCTIONS_DIR}/${funcName}/index`);
  return await func.main(event, context);
};
        
