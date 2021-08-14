import actionsTypes from './actionTypes';

const platformActions = {
  getAllPlatforms() {
    return {
      type: actionsTypes.GET_ALL_PLATFORMS,
    };
  },
};

export default platformActions;
