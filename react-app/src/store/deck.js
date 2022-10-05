//Types:
const GET_ALL_DECKS = "decks/getallDecks";
const GET_CURR_DECKS = "decks/getCurrDecks";
const GET_ONE_DECK = "decks/readDeck";
const CREATE_DECK = "decks/createDeck";
const UPDATE_DECK = "decks/updateDeck";
const DELETE_DECK = "decks/deleteDeck";


//Action Creators:
const actionGetAllDecks = (decks) => {
    return {
        type: GET_ALL_DECKS,
        decks
    }
};

const actionGetCurrDecks = (decks) => {
    return {
        type: GET_CURR_DECKS,
        decks
    }
};

const actionGetOneDeck = (deck) => {
    return {
        type: GET_ONE_DECK,
        deck
    }
};

const actionCreateDeck = (deck) => {
    return {
        type: CREATE_DECK,
        deck
    }
};

const actionUpdateDeck = (deck) => {
    return {
        type: UPDATE_DECK,
        deck
    }
};

const actionDeleteDeck = (deckId) => {
    return {
        type: DELETE_DECK,
        deckId
    }
};


// Thunks:
//Get All Decks
export const getAllDecks = () => async (dispatch) => {
    const response = await fetch('/api/decks/')
    if (response.ok) {
        const decks = await response.json()
        dispatch(actionGetAllDecks(decks))
        return decks;
    }
    return response;
};

//Get Curr Users Decks
export const getCurrUsersDecks = () => async (dispatch) => {
    const response = await fetch('/api/decks/current_user')
    if (response.ok) {
        const decks = await response.json()
        dispatch(actionGetCurrDecks(decks))
        return decks;
    }
    return response;
};

//Get one Deck by Id
export const getOneDeck = (deckId) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deckId}`)
    if (response.ok) {
        const deck = await response.json()
        dispatch(actionGetOneDeck(deck))
        return deck;
    }
    return response;
};

//Create a Deck
export const createADeck = (data) => async (dispatch) => {
    const response = await fetch("/api/decks/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const deck = await response.json();
        dispatch(actionCreateDeck(deck));
        return deck;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data;
        }
    } else {
        return ['An error occurred. Please try again.']
    };
    return response;
};

//Update a Deck
export const updateADeck = (data) => async (dispatch) => {
    const response = await fetch(`/api/decks/${data.deckId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const deck = await response.json()
        dispatch(actionUpdateDeck(deck));
        return deck;
    };
    return response;
};

//Delete a Deck
export const deleteADeck = (deckId) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deckId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        dispatch(actionDeleteDeck(deckId))
        // dispatch(actionGetCurrDecks())
    };
    return response;
};


// Initial State:
const initialState = {}


// Reducer:
const deckReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_DECKS: {
            action.decks.decks.forEach((deck) => {
                newState[deck.id] = deck
            })
            return newState
        }
        case GET_CURR_DECKS: {
            action.decks.decks.forEach((deck) => {
                newState[deck.id] = deck
            })
            return newState
        }
        case GET_ONE_DECK: {
            newState = { ...state }
            newState[action.deck.id] = action.deck
            return newState
        }
        case CREATE_DECK: {
            newState = { ...state }
            newState[action.deck.id] = action.deck
            return newState
        }
        case UPDATE_DECK: {
            newState = { ...state }
            newState[action.deck.id] = action.deck
            return newState
        }
        case DELETE_DECK: {
            newState = { ...state }
            delete newState[action.deckId]
            return newState
        }
        default:
            return state;
    }
};

export default deckReducer;
