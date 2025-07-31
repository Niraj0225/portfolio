import { createTheme, MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import HomePage from "./component/HomePage";
import { pdfjs } from "react-pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

const theme = createTheme({
  breakpoints: {
    xs: '20rem',
    sm: '40rem',
    md: '48rem',
    lg: '64rem',
    xl: '80rem',
    '2xl':'96rem',
  },
});


  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
