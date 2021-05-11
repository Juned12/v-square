
const initState = [
    {
        "id":"qwer1",
        "name":"Prod 1",
        "description": "Desc",
        "price": 1200,
        "dop": "2017-05-24",
        "category":"one",
        "quantity": 1,
        "imageUrl":"https://picsum.photos/536/354"
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