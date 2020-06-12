const API_BASE_URL = window.REACT_APP_API_BASE_URL || process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';
const BUILD_DATE = window.BUILD_DATE || process.env.REACT_APP_BUILD_DATE || 'now';
const GIT_HASH = window.GIT_HASH || process.env.REACT_APP_GIT_HASH || 'shahash';
const GIT_BRANCH = window.GIT_BRANCH || process.env.REACT_APP_GIT_BRANCH || 'develop';

const DEFAULT_COUNTRY = 'Россия';

export {
  DEFAULT_COUNTRY,
  API_BASE_URL,
  BUILD_DATE,
  GIT_HASH,
  GIT_BRANCH,
};
