import image from '../images/youya.jpeg';

export default function Title(){
    return (
        <div className="title ">
            <img src={ image } className="image" alt="logo" />
            <h2>Shangshang Youya</h2>
            <h4>Top Japanese AV</h4>
            <h5>Most sexy girl</h5>
            <div className="button">
                <button className="email"><i class="fa-solid fa-envelope"></i>Email</button>
                <button className="linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}