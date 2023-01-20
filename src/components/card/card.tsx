import { Link } from "react-router-dom";
import { CiCalendar } from 'react-icons/ci';
import { FiArrowRight } from 'react-icons/fi';
import './card.scss';

type cardItemProps = {
    img: string,
    title: string,
    date: string,
    id: number,
    summary: string
}

const Card = ({ img, title, date, id, summary }: cardItemProps) => {
    const year = date.substring(0, 4),
        unformattedMonth = date.substring(5, 7),
        day = date.substring(8, 10);
    let month = "";

    switch (unformattedMonth) {
        case "01":
            month = "January";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "August";
            break;
        case "09":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
        default:
            break;
    }
    return (
        <div className="card">
            <img src={img} alt="" className="card__images" />
            <div className="card__text">
                <p className="card__text--date">
                    <CiCalendar />
                    {day}th {month}, {year}
                </p>
                <h3 className="card__text--h3">{title}</h3>
                <p className="card__text--p">{summary}</p>
                <Link to={`news/${id}`} className="card__text--btn">
                    <span>Read more</span>
                    <FiArrowRight />
                </Link>
            </div>
        </div>
    );
}

export default Card