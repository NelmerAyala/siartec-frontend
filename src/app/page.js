"use client";

import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import EmblaCarousel from "@/components/home/carousel";
import styles from "./page.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SLIDES = [
  {
    name: "Titulo #1",
    bg: "/img/carousel/bg-1.png",
    description: "Descripción 1",
  },
  {
    name: "Titulo #2",
    bg: "/img/carousel/bg-2.jpg",
    description: "Descripción 1",
  },
  {
    name: "Titulo #3",
    bg: "/img/carousel/bg-3.jpg",
    description: "Descripción 1",
  },
];

const OPTIONS = { loop: true, duration: 30 };

export default function HomePage() {
  return (
    // < className={styles.main}>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    // </main>
  );
}
