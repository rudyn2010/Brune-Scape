//Types:
const GET_ALL_CARDS = "cards/getallCARDS";
const GET_CURR_CARDS = "cards/getCurrCARDS";
const GET_ONE_CARD = "cards/readCARD";
const CREATE_CARD = "cards/createCARD";
const UPDATE_CARD = "cards/updateCARD";
const DELETE_CARD = "cards/deleteCARD";


//Action Creators:
const actionGetAllCards = (cards) => {
    return {
        type: GET_ALL_CARDS,
        cards
    }
};

const actionGetCurrCards = (cards) => {
    return {
        type: GET_CURR_CARDS,
        cards
    }
};

const actionGetOneCard = (card) => {
    return {
        type: GET_ONE_CARD,
        card
    }
};

const actionCreateCard = (card) => {
    return {
        type: CREATE_CARD,
        card
    }
};

const actionUpdateCard = (card) => {
    return {
        type: UPDATE_CARD,
        card
    }
};

const actionDeleteCard = (cardId) => {
    return {
        type: DELETE_CARD,
        cardId
    }
};


// Thunks:
//Get All Cards
export const getAllCards = () => async (dispatch) => {
    const response = await fetch('/api/cards/')
    if (response.ok) {
        const cards = await response.json()
        dispatch(actionGetAllCards(cards))
        return cards;
    }
    return response;
};

//Get Curr Users Cards
export const getCurrUsersCards = () => async (dispatch) => {
    const response = await fetch('/api/cards/current_user')
    if (response.ok) {
        const cards = await response.json()
        dispatch(actionGetCurrCards(cards))
        return cards;
    }
    return response;
};

//Get one Card by Id
export const getOneCard = (cardId) => async (dispatch) => {
    const response = await fetch(`/api/cards/${cardId}`)
    if (response.ok) {
        const card = await response.json()
        dispatch(actionGetOneCard(card))
        return card;
    }
    return response;
};

//Create a Card
export const createACard = (data) => async (dispatch) => {
    const response = await fetch("/api/cards/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const card = await response.json();
        dispatch(actionCreateCard(card));
        return card;
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

//Update a Card
export const updateACard = (data) => async (dispatch) => {
    const response = await fetch(`/api/cards/${data.cardId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const card = await response.json()
        dispatch(actionUpdateCard(card));
        return card;
    };
    return response;
};

//Delete a Card
export const deleteACard = (cardId) => async (dispatch) => {
    const response = await fetch(`/api/cards/${cardId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        dispatch(actionDeleteCard(cardId))
        // dispatch(actionGetCurrDecks())
    };
    return response;
};


// Initial State:
const initialState = {}


// Reducer:
const cardReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_CARDS: {
            action.cards.cards.forEach((card) => {
                newState[card.id] = card
            })
            return newState
        }
        case GET_CURR_CARDS: {
            action.cards.cards.forEach((card) => {
                newState[card.id] = card
            })
            return newState
        }
        case GET_ONE_CARD: {
            newState = { ...state }
            newState[action.card.id] = action.card
            return newState
        }
        case CREATE_CARD: {
            newState = { ...state }
            newState[action.card.id] = action.card
            return newState
        }
        case UPDATE_CARD: {
            newState = { ...state }
            newState[action.card.id] = action.card
            return newState
        }
        case DELETE_CARD: {
            newState = { ...state }
            delete newState[action.cardId]
            return newState
        }
        default:
            return state;
    }
};

export default cardReducer;
