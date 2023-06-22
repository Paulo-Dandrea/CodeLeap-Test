import { EditButtons } from "../EditButtons/EditButtons";
import style from "./Heading.module.css";

interface HeadingProps {
    text: string;
    accent?: boolean;
    editable?: boolean;
}

export const Heading = ({
    text,
    accent = false,
    editable = true,
}: HeadingProps) => {
    return (
        <div
            className={`space-between align-items-center ${
                style.heading
            } ${accent ? style.accent : ""} `}
        >
            <h1>{text}</h1>

            {editable && <EditButtons />}
        </div>
    );
};
