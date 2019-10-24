import React, {Fragment} from 'react';
import styled from 'styled-components'
import GlobalStyle from './globalStyle'

import Typeahead from './components/typeahead'

import {Provider} from 'react-redux' 
import store from './store/store'

const StyledHeader = styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;
const StyledDiv = styled.input`
color: #09d3ac;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
        <Provider store={ store }>
          <StyledDiv as="div">
            <StyledHeader as="header">
              <Typeahead />
            </StyledHeader>
          </StyledDiv>
        </Provider>
    </Fragment>
  );
}

export default App;
