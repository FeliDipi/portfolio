import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import cv from "../../assets/documents/cv.pdf";

const CVButton = () =>
{
    const variantsLink = 
    {
        hover:
        {
            backgroundColor:"#23B684"
        },
        normal:
        {
            backgroundColor:"#032E46"
        }
    }

    const variantsContent = 
    {
        hover:
        {
            scale:0.95
        },
        normal:
        {
            scale:1
        },
        tap:
        {
            scale:0.9
        }
    }

    return (
        <motion.div 
            className="cv center"
            initial="normal"
            whileHover={"hover"}
            whileTap={"tap"}
            variants={variantsContent}
        >
            <div className="cv-back"></div>
            <motion.a 
                href={cv} 
                className="cv-button center" 
                download={"Nicolás Felipe Dipierro - CV"}
                variants={variantsLink}
            >
                <p className="cv-text">My CV</p>
                <div className="center">
                    <Icon className="cv-icon" icon="pepicons-pop:cv"/>
                    <Icon className="cv-icon" icon="material-symbols:download-sharp"/>
                </div>
            </motion.a>
        </motion.div>
    );
}

export default CVButton;