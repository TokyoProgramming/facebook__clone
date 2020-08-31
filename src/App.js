import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {

    const [{ user }, dispatch] = useStateValue()

      return (
        <div className="app">
            {!user ? (
                // <Login />
                <Login />
            ) :  (
                <>
                    {/*<h1>Facebook Clone</h1>*/}
                    {/*<Header />*/}
                    <Header />

                    {/*App body*/}
                    <div className="app__body">


                        {/*   sidebar  */}
                        <Sidebar />
                        {/*    Feed    */}
                        <Feed />
                        {/*    Widgets */}
                        <Widgets />
                    </div>
                </>
                )}
        </div>
  );
}

export default App;
