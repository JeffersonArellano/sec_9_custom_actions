const core = require("@actions/core");
//const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {

  // Get some inputs values
  const bucket = core.getInput("bucket",{required:true});
  const butcketRegion = core.getInput("butcket-region", {required:true});
  const distFolder = core.getInput("dist-folder", {required:true});

  //github.context.action

  // upload files to S3
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${butcketRegion}`);
 
  core.notice("Hello from  my custome Javascript action!");
}

run();
