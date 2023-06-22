import Image from "next/image";
import style from "./Heading.module.css";

interface HeadingProps {
    text: string;
    accent?: boolean;
}

//

export const Heading = ({ text, accent = false }: HeadingProps) => {
    return (
        <div
            className={`space-between align-items-center ${
                style.heading
            } ${accent ? style.accent : ""} `}
        >
            <h1>{text}</h1>

            <div className="space-between gap-1">
                <Image
                    src="ic_baseline-delete-forever.svg"
                    alt="edit"
                    width={30}
                    height={30}
                />
                <Image
                    src="bx_bx-edit.svg"
                    alt="edit"
                    width={30}
                    height={30}
                />
            </div>
        </div>
    );
};
