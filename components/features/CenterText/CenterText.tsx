"use client"
import {motion, MotionValue, useTransform } from "motion/react";
import styles from "./CenterText.module.css";

type CenterTextProps = {
    name: string,
    scrollYProgress: MotionValue<number>
}
export default function CenterText({name, scrollYProgress}: CenterTextProps){
    //opacité pour le mot design 

    const opacityDesign = useTransform(
        scrollYProgress,
        [0, 0.28, 0.38],
        [1, 1, 0]
    );

    //pour chaque texte en fait il z a des positions y :: sur l'axe des ordonnées diffrents
    const  yDesign = useTransform(
        scrollYProgress, 
        [0, 0.28, 0.38],
        [0, 0, -12]
    );

    

    const opacityCreate = useTransform(
        scrollYProgress,
        [0.38, 0.48, 0.58, 0.68],
        [0, 1, 1, 0]
    );

    const yCreate = useTransform(
        scrollYProgress, 
        [0.35, 0.45, 0.55, 0.65],
        [15, 0, 0, -15]
    );

 
    const opacityBuild=  useTransform(
        scrollYProgress,
        [0.65, 0.75,1],
        [0, 1, 1]
    );


      const yBuild = useTransform(
        scrollYProgress, 
        [0.65, 0.75, 1], 
        [15, 0, 0]);
  
    return (
        <div className= {styles.container}>
        <p className={styles.phrase}>
            <span>Hey my name is {name} and I</span>
            {/* Zone où les 3 mots se succèdent au même endroit */}
            <span className={styles.wordSlot}>
            {/* Mot 1 : design */}
            <motion.span 
                className={styles.animatedWord}    
                style={{ opacity: opacityDesign, y: yDesign }}
            >
                design
            </motion.span>
            {/* Mot 2 : create */}
            <motion.span 
                className= {styles.animatedWord}
                style={{ opacity: opacityCreate, y: yCreate }}
            >
                create
            </motion.span>
            {/* Mot 3 : build */}
            <motion.span className= {styles.animatedWord}
             style={{ opacity: opacityBuild, y: yBuild }}
            >
                build
            </motion.span>
            </span>
            <span>cool websites :)</span>
        </p>
        </div>
    );
}