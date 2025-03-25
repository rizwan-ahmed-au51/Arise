import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Gallery.module.scss";

const TopperList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/topper`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return (
        <div className={styles.shining_stars}>
            {data.map((tpr, index) => (
                <figure key={index}>
                    <img src={`http://localhost:4000/uploads/${tpr.filename}`} alt={tpr.stdname} />
                    <figcaption>Marks {tpr.marks}</figcaption>
                    <p>{tpr.stdname}</p>
                </figure>
            ))}
        </div>
    );
};

export default TopperList;