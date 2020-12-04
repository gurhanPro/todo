

export function getAuthorizationToken() {
    const authString = localStorage.getItem('auth');
    if (authString) {
      const authObject = JSON.parse(authString);
      const token = authObject.token;
      // check if token is available
      if (!token) {
        return null;
      }
      return token;
    }
    localStorage.clear();
    return null;
  }