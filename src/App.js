import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'


import routes from './router';
import store from './store';

import BBAppFooter from '@/components/app-footer'
import BBAppHeader from '@/components/app-header'


export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <BBAppHeader />
                {renderRoutes(routes)}
                <BBAppFooter />
            </HashRouter >
        </Provider>

    )
})


// import React, { Component } from 'react';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 APP
//             </div>
//         );
//     }
// }

// export default App;