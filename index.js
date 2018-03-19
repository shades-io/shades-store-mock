'use strict';

const create = options => {
    const mockDB = {};

    const putProjectionState = (namespace, projectionName, state) => {
        const ns = mockDB[namespace] = mockDB[namespace] || {};
        const db = ns[projectionName] = ns[projectionName] || {};
        db.state = typeof state === 'object' ? JSON.stringify(state) : state;
        return Promise.resolve({});
    };

    const getProjectionState = (namespace, projectionName) => {
        const ns = mockDB[namespace] || {};
        const { state = {} } = ns[projectionName] || {};
        return Promise.resolve(typeof state === 'object'
            ? state
            : JSON.parse(state));
    };

    const getAll = () => {
        return Promise.resolve(JSON.parse(JSON.stringify(mockDB)));
    };
    const appendEvent = (namespace, event) => {
        const ns = mockDB[namespace] = mockDB[namespace] || {};
        ns.events.push(event);
        return Promise.resolve();
    };

    return {
        projectionStates: {
            put: putProjectionState,
            get: getProjectionState,
            all: getAll
        },
        events: {
            append: appendEvent
        },
        namespaces: {
            all: listAllNamespaces
        }
    };
};

module.exports = create;
