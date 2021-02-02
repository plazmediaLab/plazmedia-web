import Cookies from 'js-cookie';

export const setCookie = (keyword, value) => {
  if (process.browser) {
    Cookies.set(keyword, value, {
      expires: 1,
      path: '/',
      sameSite: true
    });
  }
};

export const removeCookie = (keyword) => {
  if (process.browser) {
    Cookies.remove(keyword, {
      expires: 1
    });
  }
};

export const getCookie = (keyword, req) => {
  return process.browser ? getCookieFromBrowser(keyword) : getCookieFromServer(keyword, req);
};

function getCookieFromBrowser(keyword) {
  return Cookies.get(keyword);
}

function getCookieFromServer(keyword, req) {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith(`${keyword}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
}

export const getCookieJson = (keyword, req) => {
  return process.browser
    ? getCookieFromBrowserJSON(keyword)
    : getCookieFromServerJSON(keyword, req);
};

function getCookieFromBrowserJSON(keyword) {
  return Cookies.getJSON(keyword);
}

function getCookieFromServerJSON(keyword, req) {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith(`${keyword}=`));
  if (!rawCookie) {
    return undefined;
  }
  const res = rawCookie.split('=')[1];
  const output = res.replace(/[%22]/gi, '');
  var aux = output.split(':');
  aux[0] = aux[0].replace('{', '');
  aux[1] = aux[1].replace('}', '');
  aux[1] = aux[1].replace(' ', '');
  var parsed = { [aux[0]]: aux[1] };

  return parsed;
}
