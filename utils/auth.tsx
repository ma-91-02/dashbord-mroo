// utils/auth.ts
export const setLoggedIn = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('isLoggedIn', 'true');
  }
};

export const isLoggedIn = (): boolean => {
  if (typeof window !== 'undefined') {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  }
  return false; // Assume not logged in if localStorage is not available
};
