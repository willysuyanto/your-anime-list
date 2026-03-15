import { BrowserRouter } from "react-router";
import MainRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Suspense } from "react";
import { SuspenseFallback } from "@components";
import { ThemeProvider } from "styled-components";
import { themeConfig } from "@config";
import { GlobalStyle } from "./styles/globalStyles";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeConfig}>
        <GlobalStyle />
        <BrowserRouter>
          <Suspense fallback={<SuspenseFallback />}>
            <MainRoutes />
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
