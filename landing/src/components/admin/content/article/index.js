import {useEffect, useState} from "react";
import * as ArticleService from "core/services/article_service";
import ModalCUD, {MODE_ADD, MODE_DELETE, MODE_EDIT} from "./modalCUD";
import {
    ARTICLE_TYPE_COURSE,
    ARTICLE_TYPE_HOT,
    ARTICLE_TYPE_INTRODUCE,
    ARTICLE_TYPE_LECTURE,
    ARTICLE_TYPE_STUDENT
} from "../../../../core/utils/const";
import ArticleCollection from "./articleCollection";

const ArticleList = (props) => {
    const [hotnews, setHotnews] = useState([])
    const [introduce, setIntroduce] = useState([])
    const [lectures, setLectures] = useState([])
    const [students, setStudents] = useState([])
    const [courses, setCourses] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    const [isShowModal, setIsShowModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    const [modalMode, setModalMode] = useState(MODE_ADD)

    useEffect(() => {
        if (isLoading) {
            initData()
        }

    }, [isLoading]);
    const initData = async () => {
        const responses = await Promise.all([
            ArticleService.getArticleByType(ARTICLE_TYPE_HOT),
            ArticleService.getArticleByType(ARTICLE_TYPE_INTRODUCE),
            ArticleService.getArticleByType(ARTICLE_TYPE_LECTURE),
            ArticleService.getArticleByType(ARTICLE_TYPE_STUDENT),
            ArticleService.getArticleByType(ARTICLE_TYPE_COURSE),
        ])
        setHotnews(responses[0])
        setIntroduce(responses[1])
        setLectures(responses[2])
        setStudents(responses[3])
        setCourses(responses[4])
        setIsLoading(false)
    }
    const updateArticle = (article) => {
        setModalMode(MODE_EDIT)
        setSelectedItem(article)
        setIsShowModal(true)
    }
    const addArticle = () => {
        setModalMode(MODE_ADD)
        setIsShowModal(true)
    }
    const deleteArticle = (article) => {
        setModalMode(MODE_DELETE)
        setSelectedItem(article)
        setIsShowModal(true)
    }
    const closeModal = (isDone) => {
        setIsShowModal(false)
        setSelectedItem(null)
        if (isDone) {
            initData()
        }
    }
    return (
        isLoading ? <div></div> :
            <div className={"article"}>
                <div className={"article__title text-align-center text-bold mt8"}>
                    DANH SÁCH BÀI VIẾT
                </div>
                <ArticleCollection articles={hotnews} type={ARTICLE_TYPE_HOT} updateArticle={updateArticle}
                                   deleteArticle={deleteArticle}/>
                <ArticleCollection articles={introduce} type={ARTICLE_TYPE_INTRODUCE} updateArticle={updateArticle}
                                   deleteArticle={deleteArticle}/>
                <ArticleCollection articles={lectures} type={ARTICLE_TYPE_LECTURE} updateArticle={updateArticle}
                                   deleteArticle={deleteArticle}/>
                <ArticleCollection articles={students} type={ARTICLE_TYPE_STUDENT} updateArticle={updateArticle}
                                   deleteArticle={deleteArticle}/>
                <ArticleCollection articles={courses} type={ARTICLE_TYPE_COURSE} updateArticle={updateArticle}
                                   deleteArticle={deleteArticle}/>
                <div onClick={() => addArticle()} className={"article__btn-add t-button"}>
                    Thêm
                </div>
                <ModalCUD isShowing={isShowModal} item={selectedItem} onCloseModal={closeModal} mode={modalMode}/>
            </div>

    )
}

export default ArticleList;