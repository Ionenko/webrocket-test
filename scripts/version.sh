#!/bin/sh

date=`date +"%d-%m-%y:%T"`

if [ -z "$REACT_APP_GIT_BRANCH" ]; then
    branch=`git rev-parse --abbrev-ref HEAD`
else
    branch=$REACT_APP_GIT_BRANCH
fi

if [ -z "$REACT_APP_GIT_HASH" ]; then
    hash=`git rev-parse --short HEAD`
else
    hash=$REACT_APP_GIT_HASH
fi

echo "REACT_APP_BUILD_DATE=\"$date\"
REACT_APP_GIT_BRANCH=\"$branch\"
REACT_APP_GIT_HASH=\"$hash\"
" > .env.build
