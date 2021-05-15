const fs = require("fs/promises");
const path = require("path");
const {Lambda} = require("aws-sdk");

const lambda = new Lambda({apiVersion: "2015-03-31"});
const functionName = 'example-update-aws-lambda-fast-prod-index';

(async () => {
  const zipFile = await fs.readFile(path.resolve(__dirname, "lambda.zip"));
  await lambda.updateFunctionCode({
    FunctionName: functionName,
    ZipFile: zipFile,
    Publish: true,
  }).promise();
})()
