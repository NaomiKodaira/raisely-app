const bakeCookie = (
  cookieKey,
  cookieValue,
  expirationSeconds,
  expirationDay,
  secure,
  sameSite,
) => {
  let expiryDate = '';

  if (expirationSeconds) {
    const date = new Date();
    date.setTime(date.getTime() + expirationSeconds * 1000);
    expiryDate = `; expires="${date.toUTCString()}"`;
  } else if (expirationDay) {
    expiryDate = `; expires="${new Date(expirationDay).toUTCString()}"`;
  }

  document.cookie = `${cookieKey}=${cookieValue || ''}${expiryDate}; path=/${
    secure ? '; secure' : ''
  }${sameSite ? `; samesite=${sameSite}` : ''}`;
};

const readCookie = cookieKey => {
  const cookieArray = document.cookie.split(';');
  const cookie = cookieArray.find(value => {
    const c = value.split('=');
    return c[0].trim() === cookieKey;
  });
  if (cookie) return cookie.split('=')[1];
  return undefined;
};

module.exports = {
  bakeCookie,
  readCookie,
};
