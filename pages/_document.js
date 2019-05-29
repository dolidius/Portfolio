import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render(){
        return(
            <html lang="eng">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=K2D|Karla|Montserrat" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <meta name="referrer" content="origin" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument;
