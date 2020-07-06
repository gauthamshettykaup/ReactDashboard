import { erisService } from '../_services';

export const erisActions = {
    getCapacity
};

function getCapacity() {
    return dispatch => {
        dispatch(request({ loading: true }));

        erisService.getCapacity()
            .then(
                users => dispatch(success(users)),
                // error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: 'GET_CAPACITY' } }
    function success(capacity) { return { type: 'CAPACITY_RECIEVED', capacity } }
    // function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

