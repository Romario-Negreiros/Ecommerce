const addItemOnCart = (id: number) => {
    if(typeof(Storage) !== undefined) {
        if(localStorage.getItem('cartItemsID') === null) {
            localStorage.setItem('cartItemsID', JSON.stringify([id]))
        } else {
            const GET_ALL_IDS: number[] = JSON.parse(localStorage.getItem('cartItemsID') as string)
            localStorage.setItem('cartItemsID', JSON.stringify([...GET_ALL_IDS, id]))
        }
    } else {
        alert('Sorry but your browser doesn\'t support HTML5 web storage')
    }
};

export default addItemOnCart;