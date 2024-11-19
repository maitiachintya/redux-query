import { useParams } from "react-router-dom";
import { baseUrl } from "../api/Url_API";
import { useQuery } from "react-query";
import axios from "axios";

const api_Url = baseUrl;

const SingleUser = () => {
    let { userId } = useParams();
    let { data: single } = useQuery(["users", userId], () => axios.get(`${api_Url}/${userId}`));
    console.log("Single User", single);

    return (
        <div>
            <h2>
                {single?.data.name}
            </h2>
            <p>Mail To: {single?.data.email}</p>
        </div>
    )
}

export default SingleUser;