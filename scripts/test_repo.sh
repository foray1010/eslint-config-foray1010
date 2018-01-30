#!/bin/bash

testFolder="integration_tests"
repoName=$1
branch="${2:-master}"

yarn install
yarn link

mkdir -p "$testFolder" && cd "$testFolder"
rm -rf "$repoName"

git clone --depth=1 -b "$branch" https://github.com/foray1010/"$repoName"
cd "$repoName"

rm -rf package.json yarn.lock
cp ../../package.json .

yarn install --production
yarn link eslint-config-foray1010
yarn integration_test:lint
