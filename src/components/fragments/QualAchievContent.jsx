import { Typography, Button } from "@material-tailwind/react";
import degreePdfUrl from "/Degree_Merged.pdf"
const QualAcheiveContent = () => {

    return(
        <>
        <div className="flex flex-col mobile:w-full">
            <Typography variant="h5" className="pb-1 pt-2 w-1/2 font-notoSerifJapanese font-bold border-b-2 border-gray-400 mb-3 mobile:w-full">Education</Typography>
            <ul className="pl-2 list-disc">
                <li>Chemical Engineering degree, University of Stellenbosch (2014)</li>
                <li>Chemistry & Polymer Science degree, University of Stellenbosch (2010)</li>
                <li>Business Management course (BMS 200)</li>
                <li>Proficient in HTML, CSS, JavaScript, and MERN Stack development</li>
            </ul>
            <Typography variant="h5"className="py-1 pt-2 w-full font-notoSerifJapanese font-bold border-b-2 border-gray-400 mb-3 mobile:w-full">Professional Experience</Typography>
            <ul className="pl-2 list-disc">
                <li>Plant/Project Engineer for 2.5 years at silica sand dredging and processing mine</li>
                <li>Production Manager for 4.5 years at the same silica sand facility</li>
            </ul>

            <a href={degreePdfUrl} className=" rounded-lg p-2 self-end mt-1">
                
            <Button 
            ripple={true} 
            
            >
               Download Qualifications
            </Button>
                </a>  
        </div>
        </>
    )

}

export default QualAcheiveContent;