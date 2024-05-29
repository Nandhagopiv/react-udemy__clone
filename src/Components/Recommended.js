import recc__img1 from '../Assets/Images/Udemy__pic (2).jpg'
import recc__img2 from '../Assets/Images/Udemy__pic (3).jpg'
import recc__img3 from '../Assets/Images/Udemy__pic (4).jpg'
import recc__img4 from '../Assets/Images/Udemy__pic (5).jpg'

function Recommended(){
    return(
        <div>
            <div class="recommended__title">
        <h1 style={{marginBottom: "10px"}}>Recommended for you</h1>
        <p>Pick the best fit</p>
    </div>

    <div className="recommended__box">
        <div className="recommended__course">
            <img style={{width: "100%"}} src={recc__img1} alt=""></img>
            <h3>ios App Development</h3>
            <p>Apple Inc</p>
            <p>4.8 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div className="recommended__course">
            <img style={{width: "100%"}} src={recc__img2} alt=""></img>
            <h3>Ethical Hacking</h3>
            <p>Cyber Educations</p>
            <p>4.5 ⭐⭐⭐⭐</p>
            <p>999 <del>1999</del></p>
        </div>
        <div className="recommended__course">
            <img style={{width: "100%"}} src={recc__img3} alt=""></img>
            <h3>Android App Development</h3>
            <p>Google</p>
            <p>3.8 ⭐⭐⭐</p>
            <p>659 <del>1999</del></p>
        </div>
        <div className="recommended__course">
            <img style={{width: "100%"}} src={recc__img4} alt=""></img>
            <h3>Graphics Design</h3>
            <p>Adobe Corp</p>
            <p>4.2 ⭐⭐⭐⭐</p>
            <p>379 <del>1999</del></p>
        </div>
    </div>
        </div>
    )
}

export default Recommended