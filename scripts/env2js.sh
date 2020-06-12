#!/bin/sh
. ./.env.build
if [ ! -z ${REACT_APP_API_BASE_URL} ]; then
 cat <<END
 window.REACT_APP_API_BASE_URL='${REACT_APP_API_BASE_URL}';
END
fi

if [ ! -z ${REACT_APP_BUILD_DATE} ]; then
 cat <<END
 window.BUILD_DATE='${REACT_APP_BUILD_DATE}';
END
fi

if [ ! -z ${REACT_APP_GIT_BRANCH} ]; then
 cat <<END
 window.GIT_BRANCH='${REACT_APP_GIT_BRANCH}';
END
fi

if [ ! -z ${REACT_APP_GIT_HASH} ]; then
 cat <<END
 window.GIT_HASH='${REACT_APP_GIT_HASH}';
END
fi