import style from "./Heading.module.css";

interface HeadingProps {
  text: string;
  accent?: boolean;
}

export const Heading = ({ text, accent = false }: HeadingProps) => {
  return (
    <h1 className={`${style.heading} ${accent ? style.accent : ""}`}>{text}</h1>
  );
};
