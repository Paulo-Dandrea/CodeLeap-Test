/* Components */
import { Providers } from "@/lib/providers";
import { Roboto } from "next/font/google";

import styles from "./styles/layout.module.css";
import "./styles/globals.css";

export const roboto = Roboto({
    variable: "--roboto",
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

export default function RootLayout(props: React.PropsWithChildren) {
    return (
        <Providers>
            <html lang="en">
                <body className={roboto.variable}>
                    <section className={styles.container}>
                        <main>{props.children}</main>
                    </section>
                </body>
            </html>
        </Providers>
    );
}
