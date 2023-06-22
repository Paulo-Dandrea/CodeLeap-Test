/* Components */
import { Providers } from "@/lib/providers";

import styles from "./styles/layout.module.css";
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <main>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}