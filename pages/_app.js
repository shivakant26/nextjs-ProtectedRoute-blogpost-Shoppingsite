import Footer from "@/Component/Footer";
import store from "@/Redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import Layout from "./Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <Footer />
    </>
  );
}
