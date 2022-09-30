import { useHistory } from "react-router-dom"
import "./Home.css";

export default function Home() {
    const history = useHistory();
    
    const handleEnter = () => {
        history.push("/plants")
    }
    

    return (
            <div id="home-page-container">
                <style>{'body { background-color: rgb(231, 222, 210); }'}</style>
                <h1>Green Room</h1>
                <img src="https://media4.giphy.com/media/1569wmB4TjLNfLkQ7p/giphy.gif?cid=ecf05e474xzsic9i1lq8p70jxs98sci6ehj5hwmdhnvg86gf&rid=giphy.gif&ct=s" />
                <p onClick={handleEnter} id="enter-btn">Enter</p>
            </div>
    )
}
