export const authProvider = {
  isAuth: false,
  count: 0,
  signIn: async (callback: VoidFunction) => {
    authProvider.isAuth = true;
    return await new Promise<null>((res, rej) =>
      setTimeout(() => {
        callback();
        if (authProvider.count === 0) {
          authProvider.count++;
          rej(null);
        } else {
          res(null);
        }
      }, 5 * 1000)
    );
  },
};
