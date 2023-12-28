import "@/styles/globals.css";
import store from "./Store/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
   <div className="max-w-6xl mx-auto p-4">
     <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer/>
    </Provider>
   </div>
  );
};