import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import store from "./store/index";
import {Provider} from 'react-redux';
import {Toaster} from "react-hot-toast";


const App  = lazy(() => import('./App'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Provider store={store}>
        <Suspense fallback='loading...'>
            <App/>
            <Toaster toastOptions={{
                position: 'top-right', style: {
                    background: 'green', color: 'white'
                }
            }}/>
        </Suspense>
    </Provider>
</BrowserRouter>);


