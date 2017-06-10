'use strict';

const create = options => {
    const mockDB = {};

    const putProjectionState = () => {};
    const getProjectionState = () => {};
    const persistEvent = () => {};

    return {
        getProjectionState,
        putProjectionState,
        persistEvent
    };
};

module.exports = create;
