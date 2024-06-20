import { Button, Typography } from "@material-tailwind/react";
import{useState, useEffect} from "react";

const QuoteGen = () =>{
    const [quote, setQuote] = useState("The Quote will go here and i just needed to make this longer to see what it will look like. ");
    const [author, setAuthor] = useState("The Author will go here");

    const getQuote = () => {
        console.log("Fetching the quote as we speak")
    };

    return(
        <div className="flex flex-col gap-1 m-3 w-full border-4 border-slate-400 p-4 bg-inherit">
            <Typography className="text-lg">" {quote} "</Typography>
            <Typography className="italic text-end text-xs"> - {author}</Typography>
            <Button 
            size="sm" 
            variant="gradient" 
            ripple={true} 
            className="w-2/12 rounded-lg p-2 items-end ml-5 " 
            onClick={getQuote}
            >
                Another One
            </Button>
        </div>
    )

}

export default QuoteGen;