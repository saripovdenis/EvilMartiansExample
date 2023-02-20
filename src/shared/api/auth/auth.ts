export const authProvider = {
  isAuth: false,
  signIn: (callback: VoidFunction) => {
    authProvider.isAuth = true;
    setTimeout(callback, 5 * 1000);
  },
};
