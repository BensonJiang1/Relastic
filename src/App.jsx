import { Routes, Route, Outlet} from "react-router-dom";

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';


import { About, Hero, Navbar} from "./components";


function App (){
  return(

    <Routes>
      <Route>
      <Route path="/" element={<Layout />}/>
        <Route path="signUp" element={<Signup />}/>
        <Route path="login" element={<Login />}/>
        <Route path="home" element={<Home/>}></Route>
        

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

function Layout() {
  return (
    <div className="relative z-0">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
      </div>
      
      <div className='bg-about-pattern bg-cover bg-no-repeat bg-center'>
          <About />
      </div>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  )
}



function NoMatch() {
  return (
    <></>
  );
}