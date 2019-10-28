const { getInput } = require('@actions/core');
const { resolve }  = require('path');
const { execSync } = require('child_process');

const testcafePath = resolve(require.resolve('testcafe'), '../cli');
const testcafeArgs = getInput('testCafeArguments');

execSync(`node ${testcafePath} ${testcafeArgs}`, { stdio: 'inherit' });
