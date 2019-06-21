/*
** url 字段
 */
function getSearchParams(search, caseSensitive) {

  let params = {};

  if (!search) return params;

  search = search.substr(1);

  let paramsArray = search.split('&');
  let len = paramsArray.length;

  while (--len + 1) {
    let keyValue = paramsArray[len].split('=');

    if (keyValue[0]) {

      if (caseSensitive) {

        params[keyValue[0]] = keyValue[1];
      } else {

        params[keyValue[0].toLowerCase()] = keyValue[1];
      }
    }
  }

  return params;
}

const URLSearchParams = getSearchParams(window.location.search);

function search(key) {

  if (key) {
    return URLSearchParams[key.toLowerCase()] || '';

  }

  return URLSearchParams;
}

export default {
  search,
  getSearchParams
};
