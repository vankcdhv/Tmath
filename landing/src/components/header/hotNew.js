import {AiOutlineArrowRight} from "react-icons/ai";

const HotNew = (props) => {
    return (
        <div className="card hot-new d-flex mt24 p8 item-align-center">
            <div>
                <div className="mb8">{props.hotnew.length > 0 ? props.hotnew[0].title : ''}</div>
                <a href={props.hotnew.length > 0 ? props.hotnew[0].url : '/'}>
                    More
                    <AiOutlineArrowRight className="ml4"/>
                </a>
            </div>
            <img src={"/new.jpg"} alt={"Hot new"}/>
        </div>
    )
}

export default HotNew