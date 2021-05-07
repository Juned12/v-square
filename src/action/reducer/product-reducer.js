
const initState = [
    {
        "name":"Prod 1",
        "price": 1200,
        "id":"qwer1"
    },
   
]
const productReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            state.unshift(action.data)
            return state
        case 'DELETE_PRODUCT':
            return state.filter((post)=>post.id !== action.productData.id);
        case 'UPDATE_PRODUCT':
            console.log('uodae')
            return state.map(p =>
                p.id === action.data.id
                  ? { ...action.data }
                  : p
              );
        default:
            return state
    }
}
export default productReducer;