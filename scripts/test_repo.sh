#!/bin/bash

repoName=$1

git clone https://github.com/foray1010/"$repoName"
cd "$repoName"

npm install

cd ../node_modules
eslintDependenies=($(ls -d eslint*))
cd -
for eslintDependency in "${eslintDependenies[@]}"; do
  rm -rf node_modules/"$eslintDependency"

  if [[ "$eslintDependency" = "eslint-config-foray1010" ]]; then
    ln -s ../../node_modules/"$eslintDependency" node_modules/"$eslintDependency"
  else
    cp -r ../node_modules/"$eslintDependency" node_modules/"$eslintDependency"
  fi
done

npm run lint
