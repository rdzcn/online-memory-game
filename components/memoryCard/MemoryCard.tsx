"use client";

import { useState } from "react";
import Image from "next/image";
import classnames from "classnames";
import styles from "./memoryCard.module.css";

const MemoryCard = ({ src, id }: { src: string; id: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
      <li
        className={classnames(
          `border rounded border-black p-4 ${styles["memory-card"]}`,
          {
            "is-flipped": isFlipped,
          },
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div>
          <div className={`card ${styles["card_back"]}`}>
            <Image src={src} alt={id} width={96} height={96} />
          </div>
          <div className={`card ${styles["card_front"]}`}>
            <Image
              src="/images/flip.png"
              alt="placeholder"
              width={96}
              height={96}
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default MemoryCard;
