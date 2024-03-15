import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import images from "../../hooks/useImage.js";
import { useDate } from "../../hooks/useDate.js";

const variants = {
    open:{
        backgroundColor:"#23B684",
        rotate:"0deg"
    },
    close:
    {
        backgroundColor:"#0F595E",
        rotate:"15deg"
    },
    tap:
    {
        scale:0.95
    }
}

const variantsEnterprise = {
    open:{
        backgroundColor:"#043D5D",
        scale:0.95
    },
    close:
    {
        backgroundColor:"#0F595E"
    },
    tap:
    {
        scale:0.95
    }
}

const WorkExtended = ({work, close}) =>
{
    const { distance } = useDate(work.date);

    const logoKey = `/src/assets/images/${ work.enterprise.logo}`;
    const imageKey = `/src/assets/images/${ work.gallery[0] }`;

    const duration = work.duration === "current"?work.duration:`${work.duration} of duration`;

    return (
        <motion.div 
            className="work-extended center"
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <div onClick={close} className="work-extended-close-btn center">
                <motion.div 
                    className="work-extended-close-btn-bg"
                    initial={"close"}
                    whileTap={"tap"}
                    whileHover={"open"}
                    variants={variants}
                >
                </motion.div>
                <Icon className="work-extended-close-btn-icon" icon="ion:open"/>
            </div>
            <div className="work-extended-gallery-content center">
                <img className="work-extended-gallery" src={images[imageKey]}/>
            </div>
            <div className="bg  work-extended-bg">
                <div className="bg-border-top"></div>
                <div className="bg-content work-extended-bg-content center">
                    <h1 className="work-extended-name">{work.name}</h1>
                    <div className="work-extended-enterprise-content center">
                        <p className="work-extended-enterprise-text">Enterprise:</p>
                        <motion.a 
                            className="work-extended-enterprise-logo-content center" 
                            href={work.enterprise.link} 
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={"close"}
                            whileTap={"tap"}
                            whileHover={"open"}
                            variants={variantsEnterprise}
                        >
                            <img className="work-extended-enterprise-logo" src={images[logoKey]}/>
                        </motion.a>
                    </div>
                    <p className="work-extended-position"><span className="bold">Position:</span> {`${work.status} - ${work.position}`}</p>
                    <div className="work-extended-tecnologies-content center">
                        <p className="work-extended-tecnologies-text">Tecnologies: </p>
                        {
                            work.tecnologies.map((icon, idx)=>(<Icon className="work-extended-tecnologies-icon" key={idx} icon={icon}/>))
                        }
                    </div>
                    {
                        work.link && <div className="work-extended-link-content center">
                            <Icon className="work-extended-link-icon" icon="ph:link-bold" />
                            <a className="work-extended-link" href={work.link} target="_blank" rel="noopener noreferrer">{work.link}</a>
                        </div>
                    }
                    <p className="work-extended-resume">
                        <span className="bold">Resume:</span><br/>
                        {
                            work.resume
                        }
                    </p>
                    <p className="work-extended-date">{`${distance} - ${duration}`}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default WorkExtended;