import {AiOutlineArrowRight} from "react-icons/ai";

const HotNew = (props) => {
    return (
        <div className="card hot-new d-flex mt24 p8 item-align-center">
            <div>
                <div className="mb8">Top 3 ngôn ngữ lập trình bạn nên học</div>
                <a href={"/"}>
                    More
                    <AiOutlineArrowRight class="ml4" />
                </a>
            </div>
            <img src={"/new.jpg"} alt={"Hot new"}/>
        </div>
    )
}

export default HotNew