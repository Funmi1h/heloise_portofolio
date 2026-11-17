"use client";
import { motion, useTransform, MotionValue } from "motion/react";
import styles from "./FloatingImage.module.css";

type FloatingImageProps = {
  src: string;
  alt: string;
  width: string;

 
    //en fait chaque image a une position en fonction du texte qui va s#afficher sur l'écran 

   // pour "design" (Scroll = 0)
  designLeft: number;
  designTop: number;
  designRotate: number;
  // pour "create" (Scroll = 0.5)
  createLeft: number;
  createTop: number;
  createRotate: number;
  //  pour "build" (Scroll = 1.0)
  buildLeft: number;
  buildTop: number;
  buildRotate: number;

  depth: number;
  scrollYProgress: MotionValue<number>;
};

export default function FloatingImage({
  src,
  alt,
  width,
  designLeft,
  designTop,
  designRotate,
  createLeft,
  createTop,
  createRotate,
  buildLeft,
  buildTop,
  buildRotate,
  depth,
  scrollYProgress,
}: FloatingImageProps) {
  
  // Déplacement horizontal : design -> create -> build
  const left = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [`${designLeft}%`, `${createLeft}%`, `${buildLeft}%`]
  );
  // Déplacement vertical : design -> create -> build
  const top = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [`${designTop}%`, `${createTop}%`, `${buildTop}%`]
  );

  // Rotation : design -> create -> build
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [designRotate, createRotate, buildRotate]
  );

  return (
    <motion.div
      className={styles.floatingImage}
      style={{ left, top, rotate, width, zIndex: depth, x: "-50%", y: "-50%" }}
    >
      <img src={src} alt={alt} className={styles.image} draggable={false} />
    </motion.div>
  );
}
