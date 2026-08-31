// src/App.jsx

import './App.css';

//components
import NavBar from './components/Navbar/Navbar'; 
import FoundersListItem from './components/FounderListItem/FoundersListItem';

const founders = [
  {
    name: "Elizabeth Holmes",
    title: "CEO",
    credentials: "MBA from SuperLegit University"
  },
  {
    name: "Sam Bankman-Fried",
    title: "CFO",
    credentials: "CPA from TotallyReal State"
  },
  {
    name: "Matt Damon",
    title: "CMO",
    credentials: "Was in that Movie You saw"
  }
];

const App = () => {
  return (
    <> 

      <NavBar/>

      <main>
        <h1>Welcome to Hyperbo.ly</h1>
        <h2>The future is firmly in front of us!</h2>
        <p>If you can't explain it to a fifth-grader, our product does it.</p>
      </main>

      {/* Founders section*/}
      <foundersList/>
      <ul>
        {founders.map((founder, idx) => {
          return (
            <FoundersListItem
            key = {founder.id}
              name={founder.name}
              title={founder.title}
              credentials={founder.credentials}
            />
          );
        })}
      </ul>
    </>
  );
};

export default App;

