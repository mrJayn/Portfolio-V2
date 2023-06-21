import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}