'use client'

import { collageImages } from "@/lib/collageData";
import { useRef } from "react";
import { useScroll, useSpring } from "motion/react";
import FloatingImage from "@/components/ui/FloatingImage/FloatingImage";
import styles from "./Collage.module.css"
import CenterText from "@/components/features/CenterText/CenterText"; 

export default function Collage(){
    //on veut créer une reference sur la partie du collage
    const containerRef = useRef<HTMLElement>(null);

    const {scrollYProgress} = useScroll({

        target: containerRef,
        offset: ["start start", "end end"]
    }); //en fait la fonction useScroll() renvoie toutes les informations sur la position du scroll

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    return(
        <section 
            ref={containerRef}
            className={styles.collageContainer} 
        >
            <div className={styles.collageStage}>

             <CenterText name = "Héloïse"scrollYProgress={smoothProgress} />
            {collageImages.map((image)=> (
                <FloatingImage 
                key={image.id}
                {...image}
                scrollYProgress={smoothProgress}

                />
            ))}
            
        </div>
        </section>
        
    )
}