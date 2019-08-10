import * as ActionTypes from './ActionTypes';

// bookmark.js
export const addBookmark = (petId) => ({
    type: ActionTypes.ADD_BOOKMARK,
    payload: petId
});

export const deleteBookmark = (petId) => ({
    type: ActionTypes.DELETE_BOOKMARK,
    payload: petId
});

/*
export const fetchBookmarks = () => (dispatch) => {

    dispatch(dishesLoading());

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};
*/
