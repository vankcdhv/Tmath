import Item from './item'
import {
    ARTICLE_TYPE_COURSE,
    ARTICLE_TYPE_HOT,
    ARTICLE_TYPE_INTRODUCE,
    ARTICLE_TYPE_LECTURE,
    ARTICLE_TYPE_STUDENT
} from "../../../../core/utils/const";

const ArticleCollection = ({articles, type, updateArticle, deleteArticle}) => {
    const getTitle = () => {
        switch (type) {
            case ARTICLE_TYPE_HOT:
                return "Bài viết nổi bật"
            case ARTICLE_TYPE_INTRODUCE:
                return "Bài viết giới thiệu"
            case ARTICLE_TYPE_LECTURE:
                return "Bài viết giới thiệu giảng viên"
            case ARTICLE_TYPE_STUDENT:
                return "Bài viết vinh danh học sinh"
            case ARTICLE_TYPE_COURSE:
                return "Bài viết giới thiệu khóa học"
            default:
                return ""
        }
    }
    return (
        <div className={"mt16"}>
            <div className={"article__title text-align-center text-bold mt8"}>
                {getTitle()}
            </div>
            <div className={"article__content"}>
                {articles.map(item => <Item item={item} onUpdate={updateArticle} onDelete={deleteArticle}/>)}
            </div>
        </div>
    )
}

export default ArticleCollection;