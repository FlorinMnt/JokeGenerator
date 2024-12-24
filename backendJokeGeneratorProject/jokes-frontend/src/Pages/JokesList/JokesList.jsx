import { useState, useEffect } from "react";
import axios from "axios";

export const JokesList = () => {
    const [jokes, setJokes] = useState([]);
    const [checkedStates, setCheckedStates] = useState({}); // To track checkbox states
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        getAllJokes();
    }, []);

    const getAllJokes = async () => {
        try {
            const response = await axios.get("http://localhost:8080/joke/getAllJokes");
            setJokes(response.data);
            // Initialize checkbox states
            const initialCheckedStates = response.data.reduce((acc, joke) => {
                acc[joke.id] = false; // All checkboxes initially unchecked
                return acc;
            }, {});
            setCheckedStates(initialCheckedStates);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteAllJokes = async () => {
        try{
            const response = await axios.delete("http://localhost:8080/joke/deleteAll");
            refreshPage();
        }catch{
            console.log(err);
        }
    }

    const handleCheckboxChange = (id) => {
        
        setCheckedStates((prevStates) => ({
            ...prevStates, [id]: !prevStates[id], // Toggle the checkbox state
        }));
    };

    const deleteRequest = async (id) => {
        //console.log("delete request", id);
        try{
            const response = await axios.delete(`http://localhost:8080/joke/delete/${id}`);
            
        }catch(err) {
            console.log(err);
        }

    }
    const refreshPage  = () => {
        window.location.reload();
    }
    const handleDelete = (id) => {
        //console.log("handle request", id);
        deleteRequest(id);
        refreshPage();
        //console.log("id: ", id);
    };


    const firstCheckBox = (e) => {

        let item = e.target.checked;
        let new_obj = {};

        if(item){
            Object.keys(checkedStates).forEach((key) => {
                new_obj[key] = true;
            })
            setCheckedStates(new_obj);
            setIsDisabled(true);

        }else{
            Object.keys(checkedStates).forEach((key) => {
                new_obj[key] = false;
            })
            setCheckedStates(new_obj);
            setIsDisabled(false);
        }
    }

    return (
        <div className="p-10">
            <div className="overflow-x-auto p-10 border-2 shadow-md">
                <table className="table border-gray-500">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input onChange={(e) =>firstCheckBox(e)} type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Jokes</th>
                            <th>
                                <button 
                                className="btn btn-ghost btn-xs font-bold bg-gray-300" 
                                onClick={() => deleteAllJokes()}
                                disabled = {!isDisabled}
                                >
                                Delete All
                                </button>
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {jokes.map((joke) => (
                            <tr key={joke.id}>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={checkedStates[joke.id] || false}
                                            onChange={() => handleCheckboxChange(joke.id)}
                                        />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="font-bold">{joke.text}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <button
                                            disabled={!checkedStates[joke.id]}
                                            onClick={() => handleDelete(joke.id)}
                                            className="btn btn-ghost btn-xs font-bold bg-gray-300"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
