#!/bin/sh
. ./.env.build
echo "{" >build/build.json
SEP='  '
if [ ! -z $REACT_APP_BUILD_ID ]; then
  echo "$SEP\"build_id\": \"$REACT_APP_BUILD_ID\"" >> build/build.json
  SEP=', '
fi;

if [ ! -z $REACT_APP_BUILD_DATE ]; then
  echo "$SEP\"build_date\": \"$REACT_APP_BUILD_DATE\"" >> build/build.json
  SEP=', '
fi;

if [ ! -z $REACT_APP_GIT_BRANCH ]; then
  echo "$SEP\"git_branch\": \"$REACT_APP_GIT_BRANCH\"" >> build/build.json
  SEP=', '
fi;

if [ ! -z $REACT_APP_GIT_HASH ]; then
  echo "$SEP\"git_hash\": \"$REACT_APP_GIT_HASH\"" >> build/build.json
  SEP=', '
fi;


echo "}" >> build/build.json
