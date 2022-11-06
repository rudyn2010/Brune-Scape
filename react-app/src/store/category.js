//Types:
const GET_ALL_CATEGORIES = "categories/getallCategories";
const GET_CURR_CATEGORIES = "categories/getCurrCategories";
const GET_ONE_CATEGORY = "categories/readCategory";
const CREATE_CATEGORY = "categories/createCategory";
const UPDATE_CATEGORY = "categories/updateCategory";
const DELETE_CATEGORY = "categories/deleteCategory";


//Action Creators:
const actionGetAllCategories = (categories) => {
    return {
        type: GET_ALL_CATEGORIES,
        categories
    }
};

const actionGetCurrCategories = (categories) => {
    return {
        type: GET_CURR_CATEGORIES,
        categories
    }
};

const actionGetOneCategory = (category) => {
    return {
        type: GET_ONE_CATEGORY,
        category
    }
};

const actionCreateCategory = (category) => {
    return {
        type: CREATE_CATEGORY,
        category
    }
};

const actionUpdateCategory = (category) => {
    return {
        type: UPDATE_CATEGORY,
        category
    }
};

const actionDeleteCategory = (categoryId) => {
    return {
        type: DELETE_CATEGORY,
        categoryId
    }
};


// Thunks:
//Get All Categories
export const getAllCategories = () => async (dispatch) => {
    const response = await fetch('/api/categories/')
    if (response.ok) {
        const categories = await response.json()
        dispatch(actionGetAllCategories(categories))
        return categories;
    }
    return response;
};

//Get Curr Users Categories
export const getCurrUsersCategories = () => async (dispatch) => {
    const response = await fetch('/api/categories/current_user')
    if (response.ok) {
        const categories = await response.json()
        dispatch(actionGetCurrCategories(categories))
        return categories;
    }
    return response;
};

//Get one Category by Id
export const getOneCategory = (categoryId) => async (dispatch) => {
    const response = await fetch(`/api/categories/${categoryId}`)
    if (response.ok) {
        const category = await response.json()
        dispatch(actionGetOneCategory(category))
        return category;
    }
    return response;
};

//Create a Category
export const createACategory = (data) => async (dispatch) => {
    const response = await fetch("/api/categories/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const category = await response.json();
        dispatch(actionCreateCategory(category));
        return category;
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

//Update a Category
export const updateACategory = (data) => async (dispatch) => {
    const response = await fetch(`/api/categories/${data.categoryId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const category = await response.json()
        dispatch(actionUpdateCategory(category));
        return category;
    };
    return response;
};

//Delete a Category
export const deleteACategory = (categoryId) => async (dispatch) => {
    const response = await fetch(`/api/categories/${categoryId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        dispatch(actionDeleteCategory(categoryId))
    };
    return response;
};


// Initial State:
const initialState = {}


// Reducer:
const categoryReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_CATEGORIES: {
            action.categories.categories.forEach((category) => {
                newState[category.id] = category
            })
            return newState
        }
        case GET_CURR_CATEGORIES: {
            action.categories.categories.forEach((category) => {
                newState[category.id] = category
            })
            return newState
        }
        case GET_ONE_CATEGORY: {
            newState = { ...state }
            newState[action.category.id] = action.category
            return newState
        }
        case CREATE_CATEGORY: {
            newState = { ...state }
            newState[action.category.id] = action.category
            return newState
        }
        case UPDATE_CATEGORY: {
            newState = { ...state }
            newState[action.category.id] = action.category
            return newState
        }
        case DELETE_CATEGORY: {
            newState = { ...state }
            delete newState[action.categoryId]
            return newState
        }
        default:
            return state;
    }
};

export default categoryReducer;
