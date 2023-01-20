import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import './article-page.scss'

interface IArticles {
    imageUrl: string;
    title: string;
    summary: string
}
const ArticlePage = () => {
    const [singleData, setSingleData] = useState<IArticles | null>(null);
    const { id } = useParams();
    async function fetchSingleData() {
        try {
            const data = await fetch(
                `https://api.spaceflightnewsapi.net/v3/articles/${id}`
            );
            const result = await data.json();
            if (result) {
                setSingleData(result);
            } else {
                setSingleData(null);
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log(singleData);
    useEffect(() => {
        fetchSingleData();
    }, []);
    if (!singleData) return null
    return (
        <>
            <div className="article">
                <div className="article__header">
                    <img src={singleData.imageUrl} alt={singleData.title} />
                </div>
                <div className="article__container">
                    <div className="article__section">
                        <h3 className="article__section--h3">{singleData.title}</h3>
                        <p className="article__section--p">{singleData.summary}</p>
                    </div>
                    <Link to="/" className="article__btn">
                        <FiArrowLeft />
                        <span>Back to homepage
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ArticlePage;