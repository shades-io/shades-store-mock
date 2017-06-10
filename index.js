'use strict';

const create = options => {
    const mockDB = {};

    const putProjectionState = (namespace, projectionName, state) => {};
    const getProjectionState = (namespace, projectionName) => {};
    const appendEvent = (namespace, event) => {};

    return {
        projectionState: {
            put: putProjectionState,
            get: getProjectionState
        },
        events: {
            append: appendEvent
        }
    };
};

module.exports = create;
