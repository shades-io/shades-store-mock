'use strict';

const create = options => {
    const mockDB = {};

    const putProjectionState = (namespace, projectionName, state) => {};
    const getProjectionState = (namespace, projectionName) => {};
    const getAll = () => {
        /*
        Returns:

        {
            "myNamespace1": {
                "projectionTypeA": { ... },
                "projectionTypeB": { ... }
            },
            "myOtherNamespace": {
                "projectionTypeA": { ... }
            }
        }
        */
    };
    const appendEvent = (namespace, event) => {};

    return {
        projectionStates: {
            put: putProjectionState,
            get: getProjectionState,
            all: getAll
        },
        events: {
            append: appendEvent
        }
    };
};

module.exports = create;
