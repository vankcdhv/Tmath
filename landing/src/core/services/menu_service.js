import * as Firebase from './firebase_util';
import {COLLECTION_MENU} from 'core/utils/const'

const compare = (a, b) => {
    if (a.index < b.index) {
        return -1;
    }
    if (a.index > b.index) {
        return 1;
    }
    return 0;
}

export const getAllMenu = async () => {
    const response = await Firebase.getCollections(COLLECTION_MENU)
    return response.sort(compare)
}

export const addMenu = async (menu) => {
    return (await Firebase.addDocument(menu, COLLECTION_MENU))
}

export const setMenu = async (menu, menuID) => {
    return (await Firebase.setDocument(menu, COLLECTION_MENU, menuID))
}

export const deleteMenu = async (menuID) => {
    return (await Firebase.deleteDocument(menuID, COLLECTION_MENU))
}