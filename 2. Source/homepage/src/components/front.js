import Header from "./header/header";
import HotNew from "./header/hotNew";
import ImageSlider from "components/uikit/components/imageSlider";

const headers = [
    {
        title: "Trang chủ",
        link: "www.google.com"
    },
    {
        title: "Trang chủ",
        link: "www.google.com"
    },
    {
        title: "Trang chủ",
        link: "www.google.com"
    },
]
const lectures = [
    {
        id: 1,
        name: "Thầy giáo Nguyễn Đức Toàn",
        role: "Giảng viên chuyên Toán Tin của trường THPT Chuyên Đại Học Vinh.",
        image: "/about_1.jpg"
    },
    {
        id: 2,
        name: "Thầy giáo Nguyễn Đức Toàn",
        role: "Giảng viên chuyên Toán Tin của trường THPT Chuyên Đại Học Vinh.",
        image: "/about_1.jpg"
    },
    {
        id: 3,
        name: "Thầy giáo Nguyễn Đức Toàn",
        role: "Giảng viên chuyên Toán Tin của trường THPT Chuyên Đại Học Vinh.",
        image: "/about_1.jpg"
    },
    {
        id: 4,
        name: "Thầy giáo Nguyễn Đức Toàn",
        role: "Giảng viên chuyên Toán Tin của trường THPT Chuyên Đại Học Vinh.",
        image: "/about_1.jpg"
    },
    {
        id: 5,
        name: "Thầy giáo Nguyễn Đức Toàn",
        role: "Giảng viên chuyên Toán Tin của trường THPT Chuyên Đại Học Vinh.",
        image: "/about_1.jpg"
    },
    {
        id: 6,
        name: "Thầy giáo Nguyễn Đức Toàn",
        role: "Giảng viên chuyên Toán Tin của trường THPT Chuyên Đại Học Vinh.",
        image: "/about_1.jpg"
    },
]
const students = [
    {
        id: 1,
        name: "Lê Thiện Văn",
        role: "Học sinh lớp A3K48",
        image: "/about_1.jpg"
    },
    {
        id: 2,
        name: "Lê Thiện Văn",
        role: "Học sinh lớp A3K48",
        image: "/about_1.jpg"
    },
    {
        id: 3,
        name: "Lê Thiện Văn",
        role: "Học sinh lớp A3K48",
        image: "/about_1.jpg"
    },
    {
        id: 4,
        name: "Lê Thiện Văn",
        role: "Học sinh lớp A3K48",
        image: "/about_1.jpg"
    },
    {
        id: 5,
        name: "Lê Thiện Văn",
        role: "Học sinh lớp A3K48",
        image: "/about_1.jpg"
    },
    {
        id: 6,
        name: "Lê Thiện Văn",
        role: "Học sinh lớp A3K48",
        image: "/about_1.jpg"
    },
]
const courses = [
    {
        id: 1,
        name: "Học lập trình react native",
        role: "React native là gì",
        image: "/logo192.png"
    },
    {
        id: 2,
        name: "Học lập trình react native",
        role: "React native là gì",
        image: "/logo192.png"
    },
    {
        id: 3,
        name: "Học lập trình react native",
        role: "React native là gì",
        image: "/logo192.png"
    },
    {
        id: 4,
        name: "Học lập trình react native",
        role: "React native là gì",
        image: "/logo192.png"
    },
    {
        id: 5,
        name: "Học lập trình react native",
        role: "React native là gì",
        image: "/logo192.png"
    },
]
const Front = (props) => {
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
                <HotNew/>
            </div>
            <div className="pt24 pos-relative primary-content d-flex d-flex-wrap">
                <div className="mt24 pb24 introduce__container">
                    <div className="mt24 text-bold introduce__title">
                        GIỚI THIỆU VỀ TMATH CODING
                    </div>
                    <div className="mt12 introduce__content">
                        Sau một thời gian hoạt động trên nền tảng của ntucoder, chúng tôi đã xây dựng một nền tảng riêng
                        dựa trên nền tảng của dmoj! Trang web sẽ là nơi đăng tải các đề thi, các chuỗi bài giảng, bài
                        tập nhằm hỗ trợ cho các học viên của tmath có được kiến thứ
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
        </div>
    );
}

export default Front;