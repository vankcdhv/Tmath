import * as Firebase from './firebase_util';
import {COLLECTION_ARTICLE} from 'core/utils/const'

export const getAllArticle = async () => {
    return await Firebase.getCollections(COLLECTION_ARTICLE)
}

export const getArticleByType = async (type) => {
    const response = (await Firebase.getCollections(COLLECTION_ARTICLE + '/' + type + '/' + type))
    const result = response.map(item => ({...item, type: type}))
    return result
}

export const addArticle = async (article, type) => {
    return (await Firebase.addDocument(article, COLLECTION_ARTICLE + '/' + type + '/' + type))
}

export const setArticle = async (article, articleID, type) => {
    return (await Firebase.setDocument(article, COLLECTION_ARTICLE + '/' + type + '/' + type, articleID))
}

export const deleteArticle = async (articleID, type) => {
    return (await Firebase.deleteDocument(articleID, COLLECTION_ARTICLE + '/' + type + '/' + type))
}