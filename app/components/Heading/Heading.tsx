import { EditButtons } from "../EditButtons/EditButtons";
import style from "./Heading.module.css";

interface HeadingProps {
    text: string;
    accent?: boolean;
    idToBeEdited?: number | undefined;
    handleDeleteModalOpen?: () => void;
}

export const Heading = ({
    text,
    accent = false,
    handleDeleteModalOpen
}: HeadingProps) => {
    return (
        <div
            className={`space-between align-items-center ${
                style.heading
            } ${accent ? style.accent : ""} `}
        >
            <h1>{text}</h1>

            {handleDeleteModalOpen && <EditButtons handleDeleteModalOpen={handleDeleteModalOpen} />}
        </div>
    );
};
