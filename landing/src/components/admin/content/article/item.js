const Item = ({item, onUpdate, onDelete}) => {
    return (
        <div className={"article-item__bounder"}>
            <div className={"d-flex"}>
                <table>
                    <tr>
                        <td className={"w-30"}>
                            Tiêu đề:
                        </td>
                        <td>
                            {item.title}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Link:
                        </td>
                        <td>
                            {item.url}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Nội dung:
                        </td>
                        <td>
                            {item.content}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Hình ảnh
                        </td>
                        <td className={"d-flex"}>
                            {Array.isArray(item?.image) ? item.image.map(item => (<div>
                                <img className={"article-item__image mr8"} src={item} alt={""}/>
                            </div>)) : null}
                        </td>
                    </tr>
                </table>
                <div className={"w-30"}>
                    <div onClick={() => onUpdate(item)} className={"article__btn-edit t-button"}>
                        Sửa
                    </div>
                    <div onClick={() => onDelete(item)} className={"article__btn-delete t-button mt8"}>
                        Xóa
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Item;