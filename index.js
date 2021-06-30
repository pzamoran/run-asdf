'use strict'

const { promisify } = require('util')
const path = require('path')
const os = require('os')
const fs = require('fs')

const core = require('@actions/core')

const chmod = promisify(fs.chmod)

if (require.main === module) {
  main().catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
}

async function main() {
  try {
    const asdfPath = path.join(os.homedir(), core.getInput('asdf-path'));

    core.exportVariable("ASDF_DIR", asdfPath);
    core.exportVariable("ASDF_DATA_DIR", asdfPath);
    core.addPath(`${asdfPath}/bin`);
    core.addPath(`${asdfPath}/shims`);

  } catch (error) {
    core.setFailed(error.message)
  }
}
