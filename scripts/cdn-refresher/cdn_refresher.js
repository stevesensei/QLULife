/**
 * 缓存刷新脚本
 * @command `node qcloudcdn.js $SECRET_ID $SECRET_KEY` 
 */
const qcloudSDK = require('qcloud-cdn-node-sdk');

qcloudSDK.config({
  secretId: process?.argv[2],
  secretKey: process?.argv[3]
})

qcloudSDK.request('RefreshCdnDir', {
  // See https://cloud.tencent.com/document/api/228/3947
  'dirs.0': 'https://qlu.life/',
  'type': 2
}, (res) => {
  res.code && console.log(res)
})