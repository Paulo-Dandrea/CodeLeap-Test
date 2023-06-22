import { EditButtons } from "../EditButtons/EditButtons";
import style from "./Heading.module.css";

interface HeadingProps {
    text: string;
    accent?: boolean;
    idToBeEdited?: number | undefined;
}

export const Heading = ({
    text,
    accent = false,
    idToBeEdited = undefined,
}: HeadingProps) => {
    return (
        <div
            className={`space-between align-items-center ${
                style.heading
            } ${accent ? style.accent : ""} `}
        >
            <h1>{text}</h1>

            {idToBeEdited && <EditButtons />}
        </div>
    );
};
