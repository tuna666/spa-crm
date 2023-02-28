import 'tailwindcss/tailwind.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import { theme } from "@/utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

const App = ({Component, emotionCache = clientSideEmotionCache, pageProps }) => {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App
