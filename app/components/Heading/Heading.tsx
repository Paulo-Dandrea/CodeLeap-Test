import style from './Heading.module.css'

interface HeadingProps {
  text: string;
}

export const Heading = ({ text }: HeadingProps) => {
  return <h1 className={style.heading}>{text}</h1>;
};
