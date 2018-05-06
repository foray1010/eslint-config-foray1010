#!/bin/bash

testFolder="integration_tests"
repoName=$1
branch="${2:-master}"

yarn install
yarn link

mkdir -p "$testFolder"
cd "$testFolder" || exit

rm -rf "$repoName"
git clone --depth=1 -b "$branch" https://github.com/foray1010/"$repoName"
cd "$repoName" || exit

mv package.json package.json.bak
cp ../../package.json .
yarn install --production --no-lockfile
yarn link eslint-config-foray1010
mv package.json.bak package.json

./node_modules/.bin/eslint --rule "{\
  'import/extensions': 'off',\
  'import/no-unresolved': 'off',\
  'node/no-missing-require': 'off',\
  'node/no-unpublished-require': 'off'\
}" .
