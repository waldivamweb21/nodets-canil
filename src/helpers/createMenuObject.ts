type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    //processamento condicional

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;

}