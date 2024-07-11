import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import cvPdfLink from "/Damian_Lesch_CV.pdf"
const AboutMeContent = () => {

    return(
        <> 
        <div className="flex flex-col">
            <div>

                <Typography variant="h5"
                className="w-1/4 font-notoSerifJapanese font-bold border-b-2 border-gray-400 mb-3 mobile:w-full">About Me</Typography>
                <Typography variant="paragraph"
                className="text-justify mobile:text-wrap">
                As an analytical thinker, I excel in breaking down complex processes into manageable units, 
                making improvements and finding solutions where others see challenges. My passion for problem-solving 
                is matched by my drive to collaborate effectively in teams, often stepping up to lead and inspire. Embarking 
                on the journey into to web and software developement I have implimented my eagerness to learn and solve problems 
                through code and algorithms.
                </Typography>
            </div>
            <div className="flex w-full flex-row place-content-between mobile:w-full mobile:flex-col">
                <div className="pt-5">
                    <Typography variant="h5" className="pt-2 w-1/4 font-notoSerifJapanese font-bold border-b-2 border-gray-400 mb-3 mobile:w-full">Skills</Typography>
                        
                    <ul className="list-disc pl-5">
                        <li>Process Analysis, Monitoring and Improvement</li>
                        <li>HTML, CSS, JavaScript</li>
                        <li>MERN Stack Development</li>
                        <li>Project Management</li>
                        <li>Problem-Solving</li>
                        <li>Leadership and Mediation</li>
                        <li>High Proficiency in MS Office Suite</li>
                    </ul>
    
                </div>
                <div className="pt-5 justify-center">
                    <Typography variant="h5" className="pt-2 w-full font-notoSerifJapanese font-bold border-b-2 border-gray-400 mb-3 mobile:w-full">Fun Facts & Hobbies</Typography>
                    <p>I play guitar and DJ at nightclubs and private events.</p>
                    <p>I'm a sports enthusiast. Both watching and playing</p>
                    <p>I have a daughter and a playful dog.</p>

                </div>
            </div>

            <a href={cvPdfLink} className=" rounded-lg p-2 self-end -mt-16">
                
            <Button 
            ripple={true} 
            
            >
               Download CV
            </Button>
                </a>            
        </div>
        </>
    )
}

""


export default AboutMeContent;