import { useState,useEffect } from "react"
import axios from 'axios'; 
import "./JokeManager.css"

export const JokeManager = () =>{


    //declaram un state 
    const [joke,setJoke] = useState("");

    // useEffect(() => {
    //     console.log(joke); // Va afișa valoarea actualizată a stării `joke`
    // }, [joke]);

    const handleChange = (e) => {
        e.preventDefault();
        let item = e.target.value;
        setJoke(item);
        //console.log(joke);
    }
    const saveJoke = () => {
        if (joke.trim() === '') {  // Verifică dacă textul este gol
            return;
        }

        const url = "http://localhost:8080/joke/create";
        const formatedJoke = 
        {
            "text": joke
        }
        axios.post(url,formatedJoke)

            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                console.log("Promisiune rezolvata!")
            })
        setJoke("");
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Previne adăugarea unei linii noi
            if (joke.trim() !== '') {
                saveJoke();
            }
        }
    };
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                e.preventDefault(); // Previne adăugarea unei linii noi
                if (joke.trim() !== '') {
                    saveJoke();
                }
            }
        };
        document.addEventListener("keydown",handleKeyDown);
        return () => {
            document.removeEventListener("keydown",handleKeyDown);
        }
    }, [])

    //conectam state-ul de template
    //facem functia pentru buton
    //in functie o sa facem o metoda de tip POST



    return(
    <div style={{height: "85.5vh"}} className="flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-10 p-4 w-full max-w-md h-full max-h-screen">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">Write a <span className="text-green-600">J</span><span className="text-pink-600">o</span><span className="text-yellow-400">k</span><span className="text-blue-300">e</span><span className="text-purple-900">!</span></h1>
            <div className="flex flex-col gap-10  w-full overflow-y-auto">
                <textarea value={joke} onChange={handleChange} onKeyDown={handleKeyDown} className="textarea textarea-bordered bg-transparent border-2 border-gray-900" placeholder="Bio"></textarea>
                <button onClick={saveJoke} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Save Joke</button>
            </div>
        </div>
    </div>

    )
}
