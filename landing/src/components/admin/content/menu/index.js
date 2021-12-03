import {useEffect, useState} from "react";
import * as MenuService from "core/services/menu_service";
import Item from './item'
import ModalCUD, {MODE_ADD, MODE_DELETE, MODE_EDIT} from "./modalCUD";

const Menu = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [headers, setHeaders] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    const [modalMode, setModalMode] = useState(MODE_ADD)
    useEffect(() => {
        async function fetchData() {
            if (isLoading) {
                await initData()
                setIsLoading(false)
            }
        }

        fetchData();
    }, [isLoading]);
    const initData = async () => {
        const response = await MenuService.getAllMenu();
        setHeaders(response)
    }
    const updateMenu = (menu) => {
        setModalMode(MODE_EDIT)
        setSelectedItem(menu)
        setIsShowModal(true)
    }
    const addMenu = () => {
        setModalMode(MODE_ADD)
        setIsShowModal(true)
    }
    const deleteMenu = (menu) => {
        setModalMode(MODE_DELETE)
        setSelectedItem(menu)
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
            <div className={"menu"}>
                <div className={"menu__title text-align-center text-bold mt8"}>
                    DANH SÁCH MENU HEADER
                </div>
                <div className={"menu__content"}>
                    {headers.map(item => <Item item={item} onUpdate={updateMenu} onDelete={deleteMenu}/>)}
                </div>
                <div onClick={() => addMenu()} className={"menu__btn-add t-button"}>
                    Thêm
                </div>
                <ModalCUD isShowing={isShowModal} item={selectedItem} onCloseModal={closeModal} mode={modalMode}/>
            </div>

    )
}

export default Menu;