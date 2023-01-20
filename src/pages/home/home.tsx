import { useState } from "react";
import Card from "../../components/card/card";
import { FiSearch } from 'react-icons/fi';
import "./home.scss";

import { useGlobalContext } from "../../context/context";
const Home = () => {
    const { data, loading } = useGlobalContext();
    const [searchTitle, setSearchTitle] = useState("");
    const filteredData = data
        .filter((value) => {
            if (searchTitle === "") {
                return value;
            } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
                return value;
            }
        })
        .map((data) => {
            return (
                <Card
                    date={data.publishedAt}
                    key={data.id}
                    title={data.title}
                    img={data.imageUrl}
                    id={data.id}
                    summary={data.summary}
                />
            );
        });

    const newsCard = !loading ? filteredData : <h2>Loading...</h2>;
    return (
        <div className="container">
            <h6 className="home__text--h6">Filter by keywords</h6>
            <input
                className="home__text--input"
                placeholder="Search"
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            <FiSearch className="home__text--search" />
            <h6 className="home__text--h6 result">
                Results: <span>{filteredData.length}</span>
            </h6>
            <div className="home__text--cards">{newsCard}</div>
        </div>
    );
}

export default Home;
