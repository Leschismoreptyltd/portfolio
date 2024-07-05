import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import cvPdfLink from "/Damian_Lesch_CV.pdf"
const AboutMeContent = () => {

    return(
        <> 
        <div className="flex flex-col">
            <div>

                <Typography variant="h6">About Me</Typography>
                <Typography variant="paragraph"
                className="text-justify mobile:text-wrap">
                As an analytical thinker, I excel in breaking down complex processes into manageable units, 
                making improvements and finding solutions where others see challenges. My passion for problem-solving 
                is matched by my drive to collaborate effectively in teams, often stepping up to lead and inspire. Embarking 
                on the journey into to web and software developement I have implimented my eagerness to learn and solve problems 
                through code and algorithms.
                </Typography>
            </div>
            <div className="flex w-full flex-row mobile:w-full mobile:flex-col">
                <div className="pt-5">
                    <Typography variant="h6" className="pt-2">Skills</Typography>
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
                <div className="pt-5 text-justify">
                    <Typography variant="h6" >Fun Facts & Hobbies</Typography>
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