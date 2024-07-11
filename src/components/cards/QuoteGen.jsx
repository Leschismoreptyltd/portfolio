import { Button, Typography } from "@material-tailwind/react";
import{useState, useEffect} from "react";
import axios from "axios";

const QuoteGen = () =>{
    const [quote, setQuote] = useState("Fetching Quote...");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const quoteApiKey = "iauvk08jdNGjMAbliuVITw==cRsDTQTgA33nITg4";
    const url = "https://api.api-ninjas.com/v1/quotes"

    const getQuote = (controller) => {
        setLoading(true)
        axios.get(url, { headers: {'X-Api-Key': quoteApiKey}, signal: controller.signal })
        .then(response => {
            console.log(response.data[0].quote)
            setQuote(response.data[0].quote)
            setAuthor(response.data[0].author)
            setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching quotes:', error);
          setError(error);
          setLoading(false);
        });
    };

    useEffect(() => {
        /* abort controller here */
        const controller = new AbortController
        getQuote(controller);
        
        return () => {
            controller.abort();
        }
    }, [])
    

    return(
        <div className="flex flex-col gap-1 m-3 w-full border-4 border-gray-300 p-4">
            <Typography variant="h4"
                className=" w-1/4 font-notoSerifJapanese font-bold border-b-2 border-gray-400 mb-3 mobile:w-full">Grab a Quote...</Typography>
            <Typography className="">{loading ? "Loading...": `" ${quote} "`}</Typography>
            <Typography className="italic text-end text-xs pr-4">{loading? " ": `- ${author}`}</Typography>
            <Button 
            ripple={true} 
            className="w-2/12 rounded-lg p-2 items-end ml-5 mobile:w-1/2" 
            onClick={getQuote}
            >
               Another One
            </Button>
            
        </div>
    )

}

export default QuoteGen;