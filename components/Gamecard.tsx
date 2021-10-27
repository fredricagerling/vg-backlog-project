import { Game, Console, Entry } from "@prisma/client";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import styles from "../styles/GameCard.module.css";

export type EntryProp = Entry & {
  game: Game;
  Console: Console | null;
};

function GameCard({ entry }: { entry: EntryProp }) {
  return (
    <div className={styles.gameCard}>
      <div className={styles.cover}>
        {entry.game.image && (
          <Image
            src={`/images/covers/2014/${entry.game.image}`}
            alt={entry.game.title}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        )}
      </div>
      <div className={styles.info}>
        <h3>{entry.game.title}</h3>
        <h4>{entry.Console?.name}</h4>
      </div>
    </div>
  );
}

export default GameCard;
