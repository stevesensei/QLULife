// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs-cdn");

const CdnClient = tencentcloud.cdn.v20180606.Client;
const args = process.argv.slice(2);

const clientConfig = {
  credential: {
    secretId: args[0],
    secretKey: args[1],
  },
  region: "",
  profile: {
    httpProfile: {
      endpoint: "cdn.tencentcloudapi.com",
    },
  },
};

// 实例化要请求产品的client对象,clientProfile是可选的
const client = new CdnClient(clientConfig);
const params = {
    "Paths": [
        "https://qlu.life/"
    ],
    "FlushType": "delete",
    "Area": "mainland"
};
client.PurgePathCache(params).then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.error("运行错误:", err);
  }
);