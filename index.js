const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers; 
const reduxLogger = require('redux-logger');

 const applyMiddleware = redux.applyMiddleware;

const logger =  reduxLogger.createLogger();


// Action types
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Action creators
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    };
}

// Initial states for each reducer
const initialCakeState = {
    numOfCakes: 10
};

const initialIceCreamState = {
    numOfIceCreams: 20
};

// Cake reducer
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state;
    }
};

// IceCream reducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default:
            return state;
    }
};

// Combining reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

// Creating store with combined reducers
const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {});

// Dispatching actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
