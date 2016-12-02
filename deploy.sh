#!/bin/bash

ng build --prod --aot
rm -rf ../../ruby/githop_api/public/*
cp -r dist/ ../../ruby/githop_api/public/
