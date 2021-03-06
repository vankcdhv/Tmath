import ReactDOM from "react-dom";
import React, {useEffect, useRef, useState} from 'react';
import {AiOutlineClose, AiFillCloseCircle} from "react-icons/ai";
import Select from 'react-select'

import * as ArticleService from "core/services/article_service"
import {
    ARTICLE_TYPE_COURSE,
    ARTICLE_TYPE_HOT,
    ARTICLE_TYPE_INTRODUCE,
    ARTICLE_TYPE_LECTURE,
    ARTICLE_TYPE_STUDENT
} from "core/utils/const";
import {cloneDeep} from "core/utils/common";

export const MODE_ADD = "add"
export const MODE_EDIT = "edit"
export const MODE_DELETE = "delete"

const ModalCUD = ({isShowing, item, mode, onCloseModal}) => {
    const [data, setData] = useState({})
    const [isSaving, setIsSaving] = useState({})
    useEffect(() => {
        if (!!item) {
            setData(cloneDeep(item))
        } else {
            setData({index: 0, title: "", link: ""})
        }
    }, [item])

    const inputFile = useRef(null)


    const options = [
        {value: ARTICLE_TYPE_HOT, label: 'Bài viết nổi bật'},
        {value: ARTICLE_TYPE_INTRODUCE, label: 'Bài viết giới thiệu'},
        {value: ARTICLE_TYPE_LECTURE, label: 'Bài viết giới thiệu giảng viên'},
        {value: ARTICLE_TYPE_STUDENT, label: 'Bài viết vinh danh học sinh'},
        {value: ARTICLE_TYPE_COURSE, label: 'Bài viết giới thiệu khóa học'},
    ]
    const getTitle = (mode) => {
        switch (mode) {
            case MODE_ADD:
                return "Thêm mới"
            case MODE_EDIT:
                return "Chỉnh sửa"
            case MODE_DELETE:
                return "Xóa"
            default:
                return "Menu"
        }
    }
    const getButton = (mode) => {
        switch (mode) {
            case MODE_ADD:
                return (
                    <div onClick={() => addArticle()} className={"modal__btn-add t-button"}>
                        Thêm
                    </div>
                )
            case MODE_EDIT:
                return (
                    <div onClick={() => editArticle()} className={"modal__btn-edit t-button"}>
                        Lưu
                    </div>
                )
            case MODE_DELETE:
                return (
                    <div onClick={() => deleteArticle()} className={"modal__btn-delete t-button"}>
                        Xóa
                    </div>
                )
            default:
                return (
                    <div className={"modal__btn-add t-button"}>
                        Thêm
                    </div>
                )
        }
    }
    const addArticle = async () => {
        const article = {
            type: data.type || "",
            title: data.title || "",
            url: data.url || "",
            content: data.content || "",
            image: data.image || "",

        }
        setIsSaving(true)
        await ArticleService.addArticle(article, data.type)
        setIsSaving(false)
        onCloseModal(true)
    }
    const editArticle = async () => {
        const menu = {
            title: data.title,
            content: data.content,
            url: data.url,
            image: data.image,
        }
        setIsSaving(true)
        await ArticleService.setArticle(menu, data.id, data.type)
        setIsSaving(false)
        onCloseModal(true)
    }
    const deleteArticle = async () => {
        setIsSaving(true)
        await ArticleService.deleteArticle(data.id, data.type)
        setIsSaving(false)
        onCloseModal(true)
    }
    const uploadImage = async (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                let images = data.image || []
                images.push(e.target.result)
                setData({...data, image: images})
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    return (
        isShowing ? ReactDOM.createPortal(
            <React.Fragment>
                <div className={"modal__overlay"}/>
                <div className={"modal__wrapper"} aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className={"modal__container"}>
                        <div className={"modal__header"}>
                            <div className={"ml-auto"}>{getTitle(mode)}</div>
                            <div onClick={() => onCloseModal()} className={"ml-auto mr8 cursor-pointer"}>
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className={"modal__content"}>
                            <div className={"modal__data"}>
                                <table>
                                    {(mode === MODE_ADD) &&
                                    <tr>
                                        <td>
                                            Loại bài viết
                                        </td>
                                        <td>
                                            <Select defaultValue={options[0]} isClearable={false} options={options}
                                                    onChange={option => setData({...data, type: option.value})}/>
                                        </td>
                                    </tr>
                                    }
                                    <tr>
                                        <td className={"w-20"}>
                                            Tiêu đề:
                                        </td>
                                        <td>
                                            <input className={"w-100"}
                                                   onChange={event => setData({...data, title: event.target.value})}
                                                   value={data?.title}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Link:
                                        </td>
                                        <td>
                                            <input className={"w-100"}
                                                   onChange={event => setData({...data, url: event.target.value})}
                                                   value={data?.url}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Nội dung:
                                        </td>
                                        <td>
                                            <textarea className={"w-100"}
                                                      rows={10}
                                                      onChange={event => setData({
                                                          ...data,
                                                          content: event.target.value
                                                      })}
                                                      value={data?.content}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Hình ảnh
                                        </td>
                                        <td className={"d-flex"}>
                                            {(data?.image || []).map(item => (
                                                <div className={"pos-relative"}>
                                                    <img className={"modal__image mr8"} src={item} alt={""}/>
                                                    <AiFillCloseCircle
                                                        className={"modal__image--close pos-absolute cursor-pointer"}
                                                        onClick={() => setData({
                                                            ...data,
                                                            image: data.image.filter(i => i !== item)
                                                        })}/>
                                                </div>))}
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div className={"modal__action d-flex mt-auto mb16"}>
                                <div onClick={() => inputFile.current.click()}
                                     className={"modal__btn-add-image t-button"}>Thêm ảnh
                                </div>
                                {getButton(mode)}
                            </div>

                        </div>
                    </div>

                </div>
                <input accept=".jpg, .png, .jpeg|image/*" onChange={event => uploadImage(event)} type='file' id='file' ref={inputFile}
                       className={"d-none"}/>
            </React.Fragment>, document.body
        ) : null
    )
}


export default ModalCUD;