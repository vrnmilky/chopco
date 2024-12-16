import Arrivals from "../Arrivals/Arrivals";
import TopSelling from "../TopSelling/TopSelling";

const Main = ({setPage}) => {
    return (
        <div className="main">
            <Arrivals setPage={setPage}/>
            <TopSelling setPage={setPage}/>
        </div>
    );
}

export default Main;