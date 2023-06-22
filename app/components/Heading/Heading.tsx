import style from './Heading.module.css'

export const Heading = ({ text }: { text: string }) => {
  return <h1 className={style.heading}>{text}</h1>;
};
