const payload = {
  service: 'com.alipay.nodejs.HelloService:1.0',
  methodName: 'plus',
  args: [ 1, 2 ],
};

const body = new Buffer(JSON.stringify(payload));
const header = new Buffer(10);
header[0] = 0;
header.writeInt32BE(1000, 1);
header[5] = 1;
header.writeInt32BE(body.length, 6);

const package = Buffer.concat([header, body], 10 + body.length);
