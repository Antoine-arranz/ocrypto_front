const url = 'http://localhost:3000/api/v1';

export const routesApi = {
  url,
  user: {
    login: {
      method: 'POST',
      path: '/user/login',
    },
    signIn: {
      method: 'POST',
      path: '/user/signIn',
    },
    resetPassword: {
      method: 'POST',
      path: '/user/resetPassword',
    },
    validateUser: {
      method: 'GET',
      path: '/user/validate/:token',
    },
    updatePassword: {
      method: 'PATCH',
      path: '/user/updatePassword/:token',
    },
    updateAccount: {
      method: 'PATCH',
      path: '/user/:userId',
    },
  },
  wallet: {
    addNew: {
      method: 'POST',
      path: '/wallet/:userId/new',
    },
    getAll: {
      method: 'GET',
      path: '/wallet/:userId',
    },
    delete: {
      method: 'DELETE',
      path: '/wallet/:walletId',
    },
    update: {
      method: 'PATCH',
      path: '/wallet/:walletId',
    },
  },
  platform: {
    getAll: {
      method: 'GET',
      path: '/platform',
    },
  },
  currency: {
    getAll: {
      method: 'GET',
      path: '/currency',
    },
  },
  event: {
    getAll: {
      method: 'GET',
      path: '/event/:walletId',
    },
    add: {
      method: 'POST',
      path: '/event/:walletId/add',
    },
    getQuantity: {
      method: 'GET',
      path: '/event/quantity/:walletId',
    },
  },
  chart: {
    getChart: {
      method: 'GET',
      path: '/chart/:walletId',
    },
  },
};

export default routesApi;
