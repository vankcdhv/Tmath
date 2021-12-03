import Header from "./header/header";
import HotNew from "./header/hotNew";
import ImageSlider from "components/uikit/components/imageSlider";
import * as ArticleService from 'core/services/article_service';
import * as MenuService from 'core/services/menu_service';
import {
    ARTICLE_TYPE_HOT,
    ARTICLE_TYPE_INTRODUCE,
    ARTICLE_TYPE_LECTURE,
    ARTICLE_TYPE_STUDENT,
    ARTICLE_TYPE_COURSE
} from 'core/utils/const'
import {useEffect, useState} from "react";


const Front = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [headers, setHeaders] = useState([]);
    const [hotnew, setHotnew] = useState([]);
    const [introduce, setIntroduce] = useState([]);
    const [lectures, setLectures] = useState([]);
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        if (isLoading) {
            initData()
            setIsLoading(false)
        }
    }, [isLoading]);
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://sp.zalo.me/plugins/sdk.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    const initData = async () => {
        const responses = await Promise.all([
            MenuService.getAllMenu(),
            ArticleService.getArticleByType(ARTICLE_TYPE_HOT),
            ArticleService.getArticleByType(ARTICLE_TYPE_INTRODUCE),
            ArticleService.getArticleByType(ARTICLE_TYPE_LECTURE),
            ArticleService.getArticleByType(ARTICLE_TYPE_STUDENT),
            ArticleService.getArticleByType(ARTICLE_TYPE_COURSE),
        ])
        setHeaders(responses[0])
        setHotnew(responses[1])
        setIntroduce(responses[2])
        setLectures(responses[3])
        setStudents(responses[4])
        setCourses(responses[5])
    }
    return (
        <div>
            <div className="top--container pos-relative primary-content">
                <Header data={headers}/>
                <div className="top--slogan d-flex flex-direction-col">
                    <span className="top--brand">Tmath Coding Academic</span>
                    <span className="mt12">NƠI NUÔI DƯỠNG VÀ ĐÀO TẠO TÀI NĂNG TRẺ</span>
                </div>
                <div>
                    <div className="t-button top--btn-explore mt24">
                        <span>EXPLORE</span>
                    </div>
                </div>
                <HotNew hotnew={hotnew}/>
            </div>
            <div className="pt24 pos-relative primary-content d-flex d-flex-wrap">
                <div className="mt24 pb24 introduce__container">
                    <div className="mt24 text-bold introduce__title">
                        {introduce.length > 0 ? introduce[0].title : ''}
                    </div>
                    <div className="mt12 introduce__content">
                        {introduce.length > 0 ? introduce[0].content : ''}
                    </div>
                    <div>
                        <div className="t-button mt24 introduce__btn-register">
                            <span>Đăng ký khóa học</span>
                        </div>
                    </div>
                </div>
                <div className="introduce__image d-flex item-align-center justify-content-center">
                    <div className="ml8">
                        <img className="introduce__image--second" src="/about_1.jpg" alt="TMath Coding Academy"/>
                    </div>
                    <div className="ml24">
                        <img className="introduce__image--primary" src="/about_2.jpg" alt="TMath Coding Academy"/>
                    </div>
                </div>
            </div>
            <div className="pt24 pos-relative primary-content d-flex d-flex-wrap">
                <div className="lecturers__container w-100">
                    <div className="text-bold lecturers__title w-100 text-align-center">
                        ĐỘI NGŨ GIẢNG VIÊN CHUYÊN NGHIỆP
                    </div>
                    <div className="lecturers__image h-100">
                        <ImageSlider lectures={lectures}/>
                    </div>
                </div>
            </div>
            <div className="mt24 pos-relative primary-content d-flex d-flex-wrap">
                <div className="lecturers__container w-100">
                    <div className="text-bold lecturers__title w-100 text-align-center">
                        HỆ THỐNG GIẢNG DẠY PHONG PHÚ
                    </div>
                    <div className="lecturers__image text-align-center">
                        <img className="method__image mt24" src="discover01.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="mt24 student__container pos-relative primary-content d-flex d-flex-wrap">
                <div className="w-100 mt24">
                    <div className="student__title w-100 text-align-center text-bold mb16">
                        TOP HỌC VIÊN CỦA TMATH CODING
                    </div>
                    <div className="student__content lecturers__image h-100">
                        <ImageSlider lectures={students}/>
                    </div>
                </div>
            </div>
            <div className="pt24 pos-relative primary-content d-flex d-flex-wrap">
                <div className="lecturers__container w-100">
                    <div className="text-bold lecturers__title w-100 text-align-center">
                        CÁC KHÓA HỌC LẬP TRÌNH TẠI TMATH CODING
                    </div>
                    <div className="lecturers__image h-100">
                        <ImageSlider lectures={courses}/>
                    </div>
                </div>
            </div>

            <div className="mt24 student__container pos-relative primary-content d-flex d-flex-wrap">
                <div className="w-100">
                    <div className="student__title w-100 text-align-center text-bold">
                        Hộp Thư Hỗ Trợ
                    </div>
                    <div className="support__subtitle w-100 text-align-center mt8">
                        Bộ phận chăm sóc khách hàng 24/7.
                    </div>
                    <div className="support__content w-100 text-align-center justify-content-center mt8">
                        <input className="support__input mt-8" type="text"/>
                        <div className="t-button support__btn-register ml-auto mr-auto mt8">
                            Send
                        </div>
                    </div>
                </div>
            </div>
            <div className="zalo-chat-widget" data-oaid="3298019303629189114"
                 data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="5" data-width=""
                 data-height=""/>
        </div>
    );
}

export default Front;