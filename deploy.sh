#!/bin/bash

rm -rf dist/
ng build --prod --aot --base-href="https://githop.com/"
find -E dist/ -regex "".*\js\$"" -exec bash -c 'echo Compressing "{}" && gzip -c --best "{}" > "{}.gz"' \;
rm -rf ../../ruby/githop_api/public/*
cp -r dist/ ../../ruby/githop_api/public/
cp bust.manifest ../../ruby/githop_api/public/
