import { useState } from "react";
import axios from "axios";

export const Home = () => {


    const [data, setData] = useState();
    
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8081/joke/getRandomJoke");
            console.log("Response:", response);
            setData(response.data.text);
        } catch (err) {
            console.error("Error:", err.response || err.message);
            if (err.response) {
                console.error("Status:", err.response.status);
                console.error("Data:", err.response.data);
            }
        }
    };
    




    return(
        <div className="flex self justify-center items-center flex-col text-center p-4 h-full">
            <div>
                <button onClick = {fetchData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Want a Joke?</button>
            </div>
            <div>
                <p>
                    {data}
                </p>
            </div>
        </div>
      
    )
}
