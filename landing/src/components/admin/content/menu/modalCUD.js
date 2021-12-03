import ReactDOM from "react-dom";
import React, {useEffect, useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";

import * as MenuService from "core/services/menu_service"

export const MODE_ADD = "add"
export const MODE_EDIT = "edit"
export const MODE_DELETE = "delete"

const ModalCUD = ({isShowing, item, mode, onCloseModal}) => {
    const [data, setData] = useState({})
    const [isSaving, setIsSaving] = useState({})
    useEffect(() => {
        if (!!item) {
            setData(item)
        } else {
            setData({index: 0, title: "", link: ""})
        }
    }, [item])
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
                    <div onClick={() => addMenu()} className={"modal__btn-add t-button"}>
                        Thêm
                    </div>
                )
            case MODE_EDIT:
                return (
                    <div onClick={() => editMenu()} className={"modal__btn-edit t-button"}>
                        Lưu
                    </div>
                )
            case MODE_DELETE:
                return (
                    <div onClick={() => deleteMenu()} className={"modal__btn-delete t-button"}>
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
    const addMenu = async () => {
        const menu = {
            index: data.index,
            title: data.title,
            link: data.link,
            icon: ""
        }
        setIsSaving(true)
        await MenuService.addMenu(menu)
        setIsSaving(false)
        onCloseModal(true)
    }
    const editMenu = async () => {
        const menu = {
            index: data.index,
            title: data.title,
            link: data.link,
            icon: ""
        }
        setIsSaving(true)
        await MenuService.setMenu(menu, data.id)
        setIsSaving(false)
        onCloseModal(true)
    }
    const deleteMenu = async () => {
        setIsSaving(true)
        await MenuService.deleteMenu(data.id)
        setIsSaving(false)
        onCloseModal(true)
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
                                    <tr>
                                        <td>
                                            Thứ tự:
                                        </td>
                                        <td>
                                            <input onChange={event => setData({...data, index: event.target.value})}
                                                   value={data?.index}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Tiêu đề:
                                        </td>
                                        <td>
                                            <input onChange={event => setData({...data, title: event.target.value})}
                                                   value={data?.title}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Link:
                                        </td>
                                        <td>
                                            <input onChange={event => setData({...data, link: event.target.value})}
                                                   value={data?.link}/>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div className={"modal__action d-flex mt-auto mb16"}>
                                {getButton(mode)}
                            </div>

                        </div>
                    </div>

                </div>
            </React.Fragment>, document.body
        ) : null
    )
}


export default ModalCUD;