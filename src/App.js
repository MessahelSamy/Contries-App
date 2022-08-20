import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { FcSearch } from "react-icons/fc";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/navbar/Navbar";

function App() {
  const [listeCountrie, setCountrieData] = useState();

  // Get the data countries with axios

  const getCountrieData = async () => {
    const response = await axios.get("https://restcountries.com/v2/all");

    // Update the state of data contrie
    setCountrieData(response.data);
    console.log(response.data);
  };
  // Load Searched movie with component
  useEffect(() => {
    getCountrieData();
  }, []);

  const searchCountry = async (term) => {
    if (term.length < 2 || term === "") return;
    const res = await fetch(`https://restcountries.com/v2/name/${term}`);
    const data = await res.json();
    console.log(data);
    setCountrieData(data);
  };

  const filterByRegion = async (region) => {
    if (region === "") return;
    const res = await fetch(`https://restcountries.com/v2/region/${region}`);
    const data = await res.json();
    setCountrieData(data);
  };

  return (
    <div>
      <ScrollToTop smooth color="#212529" height="25" width="25" />
      <Navbar />
      <div>
        <div className="search-bar-container">
          <div className="group">
            <FcSearch className="icon" />
            <input
              placeholder="Search a contrie..."
              type="search"
              class="input"
              onChange={(term) => searchCountry(term.target.value)}
            ></input>
          </div>
          <div className="select-container">
            <select
              className="select-region"
              onChange={(val) => filterByRegion(val.target.value)}
            >
              <option value="">Filter by region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        {listeCountrie &&
          listeCountrie.map((c) => (
            <div key={c.name}>
              <div class="card">
                <div className="card-info">
                  <div className="contrie-img">
                    <img src={c.flags.png} alt="flag" />
                  </div>
                  <p className="title"> {c.name}</p>
                  <p className="title">Capital : {c.capital}</p>
                  <p className="title">Population : {c.population}</p>
                  <div className="p-region">
                    <p className="title ">Region : {c.region}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
