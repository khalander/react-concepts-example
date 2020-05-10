import React from 'react';
import './App.css';

// import Greet from '../src/components/Greet';
// import Welcome from '../src/components/Welcome';
// import MessageStateExample from '../src/components/MessageStateExample';
// import Counter from './components/CounterSetStateDosNos';
// import ParentFunction from '../src/components/ParentFunction'
// import NamedLists from './components/NamedLists'
// import CssClass from './components/CssClass'
// import ControlledComponents from './components/ControlledComponents';
// import LifecycleA from './components/LifecycleA';
// import Fragment from './components/Fragment';
// import ParentPureComponent from './components/ParentPureComponent';
// import RefsDemo from './components/RefsDemo';
// import RefsParent from './components/RefsParent';
// import ForwardRefsParent from './components/ForwardRefsParent';
// import PortalDemo from './components/PortalDemo';
// import ErrorHandlerHero from './components/ErrorHandlerHero';
// import ErrorBoundries from './components/ErrorBoundries';
// import ClickCounter from './components/hoc/ClickCounter';
// import HoverComponent from './components/hoc/HoverComponent';

// import Counter from './components/renderProps/Counter';
// import ClickCounter from './components/renderProps/ClickCounter';
// import MouseCounter from './components/renderProps/MouseCounter';
// import CounterWithoutProps from './components/renderProps/CounterWithoutProps';
// import ClickCounterWithOutProps from './components/renderProps/ClickCounterWithOutProps';
// import MouseCounterWithoutProps from './components/renderProps/MouseCounterWithoutProps';

// import ComponentA from './components/context/ComponentA';
// import { UserProvider} from './components/context/userContext';

// import GetComponent from './components/http/GetComponent';

// import PostComponent from './components/http/PostComponents';

// *********** Hooks ******************* //
// import CountHook from './hooks/CouterComponent';
// import ObjectUseState from './hooks/ObjectUseState';
// import ArrayUseState from './hooks/UseState/ArrayUseState';
// import UseEffect from './hooks/UseEffect/UseEffect';

// import ComponentC from './hooks/useContext/ComponentC';
// export const userContext = React.createContext();
// export const channelContext = React.createContext();


// *********** Sharing state using reducer ******************* //
// import ComponentA from '../src/hooks/UseReducer/SharingState/ComponentA';
// import ComponentB from '../src/hooks/UseReducer/SharingState/ComponentB';

// export const CountContext = React.createContext();
// const initialState = 0
// const reducer = (state, action) => {
//   switch(action) {
//       case 'increment': 
//           return state + 1
//       case 'decrement':
//           return state - 1
//       case 'reset':
//           return initialState;
//       default:
//           return state
//   }
// }
// *********** Sharing state using reducer ******************* //


//import Counter from './hooks/UseReducer/MultipleReducerResuable';

import Datafetching from './hooks/CustomHooks/Counter';

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState); 
  return (
  
    <div className="App">

    <Datafetching />

    {/* <CountContext.Provider value={{
      countState: count, countDispatch:dispatch
    }}>

      <ComponentA />
      <ComponentB />

    </CountContext.Provider> */}

      {/* <Greet name="Mufeez"> From between components </Greet>
      <Greet name="Rabia"/>
      <Welcome name="Fatima" /> */}
      {/* <MessageStateExample /> */}
      {/* <Counter /> */}
      {/* <ParentFunction /> */}
      {/* <NamedLists /> */}
      {/* <CssClass /> */}
      {/* <ControlledComponents /> */}
      {/* <LifecycleA /> */}
      {/* <Fragment /> */}
      {/* <ParentPureComponent /> */}
      {/* <RefsDemo /> */}
      {/* <RefsParent /> */}
      {/* <ForwardRefsParent /> */}
      {/* <PortalDemo /> */}


      {/* <>
        <ErrorBoundries>
          <ErrorHandlerHero name="Mufeez" />
          <ErrorHandlerHero name="Fathima" />
          <ErrorHandlerHero name="some" />
        </ErrorBoundries>
      </> */}

     {/* <HoverComponent name="mufeez" />
     <ClickCounter /> */}


      {/* <Counter render={
          (state, handler) => <ClickCounter count={state} incrementCount={handler} /> 
      } />

      <Counter render={
          (state, handler) => <MouseCounter count={state} incrementCount={handler} /> 
      } />

      <CounterWithoutProps>
    {(state, handler) => <ClickCounterWithOutProps count={state} incrementCount={handler} /> }
      </CounterWithoutProps>

      <CounterWithoutProps>
    {(state, handler) => <MouseCounterWithoutProps count={state} incrementCount={handler} /> }
      </CounterWithoutProps> */}

      {/* <UserProvider value="Mufeez from user provider">
        <ComponentA />
      </UserProvider> */}
      
      {/* <GetComponent /> */}
      {/* <PostComponent /> */}

      {/* <CountHook /> */}
      {/* <ObjectUseState /> */}
   
      {/* <ArrayUseState /> */}
      {/* <UseEffect /> */}

      {/* <DataFetchSinglePost /> */}

      {/* <channelContext.Provider value="Rabia">
        <userContext.Provider value="Mufeez">
          <ComponentC />
        </userContext.Provider>
      </channelContext.Provider> */}
     

    </div>
  );
}

export default App;
