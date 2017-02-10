import Head from 'next/head'
import Navigation from '../Navigation/Navigation'

export default ({ children }) => (
    <div>
        <Head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
        </Head>
        <Navigation />
        {children}
    </div>
)