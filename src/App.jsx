import { Routes , Route  } from "react-router-dom";
import Home from "./Pages/Home";
import Summary from "./Pages/Summary";
import NotFound from "./Cmp/NotFound";
import Wrapper from "./Context/Wrapper";
import UserDetail from "./Pages/UserDetail";

const App = () => {
  return (
    <>
            <Wrapper >
                <Routes>
                    <Route path="/" element={ <Home /> }  />
                    <Route path="/summary" element={ <Summary /> }>
                        <Route index path=":id" element={ <Summary /> }  />
                    </Route>
                    <Route path="/user" element={ <UserDetail /> } />
                    <Route path="*" element={ <NotFound /> }  />
                </Routes>
            </Wrapper>
        
    </>
  )
}

export default App;