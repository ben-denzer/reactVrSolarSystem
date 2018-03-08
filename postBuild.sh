#!/bin/bash

echo Moving other files to build folder...
cp -R static_assets vr/build/
cp vr/index-prod.html vr/build/index.html
echo Done moving files
echo "Want to move files to the server? Run './publish.sh' or 'npm run publish'"
