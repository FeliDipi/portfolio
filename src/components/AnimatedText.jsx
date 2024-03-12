import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimatedText = ({className, text, repeatDelay, preHandle, postHandle }) =>
{
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once:true });

    const words = text.split(" ");

    const variant = {
        visible:
        {
            opacity:1,
            y:0
        },
        hidden:
        {
            opacity:0,
            y:5
        }
    }

    useEffect(() => {
        let timeout;
        
        const show = async () => 
        {
            if(!repeatDelay) await controls.start("hidden");
            
            controls.start("visible");

            if(repeatDelay)
            {
                timeout = setTimeout(async () =>
                {
                    if(preHandle) preHandle();
                    await controls.start("hidden");
                    if(postHandle) postHandle();

                    controls.start("visible");
                }, repeatDelay);
            }
        }

        if(isInView)
        {
            show();
        }
        else
        {
            controls.start("hidden");
        }
    
        return () => clearInterval(timeout);

      }, [text,isInView]);

    return (
        <motion.div 
            ref={ref}
            className={className}
            initial="hidden" 
            animate={controls}
            transition={{staggerChildren:0.025, duration:0.25}}
            aria-hidden
        >
            {
                words.map((word,idx)=>(
                    <span key={idx} className="inline-block">
                        {
                            word.split("").map((char, idx)=>(
                                <motion.span 
                                    key={idx} 
                                    variants={variant}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))
                        }
                        <span className="inline-block">&nbsp;</span>
                    </span>
                ))
            }
        </motion.div>
    );
}

export default AnimatedText;