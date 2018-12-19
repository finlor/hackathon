/*
import { API_SERVER } from '../constants';

export const logHasErrored = (bool) => {
  return {
    type: 'LOG_HAS_ERRORED',
    hasErrored: bool
  };
}

export const logIsLoading = (bool) => {
  return {
    type: 'LOG_IS_LOADING',
    isLoading: bool
  };
}

export const logFetchDataSuccess = (log) => ({
  type: 'LOG_FETCH_DATA_SUCCESS',
  log
});

//fetch log
export const fetchLogUser = (login) => {
  return (dispatch) => {
    dispatch(logIsLoading(true));
    fetch(`${API_SERVER}/users/login/?name=${login.user}&password=${login.password}`)
      .then(res => res.json())
      .then(data => dispatch(logFetchDataSuccess(data)))
      .then(() => dispatch(logIsLoading(false)))
      .catch(() => dispatch(logHasErrored(true)));
  }
}
*/