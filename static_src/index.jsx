
import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './Components/MessageField';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <BrowserRouter>
    <MuiThemeProvider>
    <MessageField />
    </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);