import mostpoppic1 from '../Assets/Images/Udemy__pic (6).jpg'
import mostpoppic2 from '../Assets/Images/Udemy__pic (7).jpg'
import mostpoppic3 from '../Assets/Images/Udemy__pic (8).jpg'
import mostpoppic4 from '../Assets/Images/Udemy__pic (9).jpg'
import mostpoppic5 from '../Assets/Images/Udemy__pic (10).jpg'
import mostpoppic6 from '../Assets/Images/Udemy__pic (11).jpg'
import mostpoppic7 from '../Assets/Images/Udemy__pic (12).jpg'
import mostpoppic8 from '../Assets/Images/Udemy__pic (13).jpg'

function Mostpop(){
    return(
        <div>
             <div class="popular__title">
        <h1 style={{marginBottom: "10px"}}>Most Popular</h1>
        <p>Pick the best fit</p>
    </div>
    <div class="popular">
        <div class="popular__courses">
            <img style={{width: "100%"}} src={mostpoppic1} alt=""></img>
            <h3>Microsoft Azure</h3>
            <p>Microsoft</p>
            <p>3.4 ⭐⭐⭐</p>
            <p>899 <del>1999</del></p>
        </div>
        <div class="popular__courses">
            <img style={{width: "100%"}} src={mostpoppic2} alt=""></img>
            <h3>Ethical Hacking</h3>
            <p>Boston University</p>
            <p>3.3 ⭐⭐⭐</p>
            <p>659 <del>1999</del></p>
        </div>
        <div class="popular__courses">
            <img style={{width: "100%"}} src={mostpoppic3} alt=""></img>
            <h3>Java</h3>
            <p>Sunderland University</p>
            <p>3 ⭐⭐⭐</p>
            <p>659 <del>1999</del></p>
        </div>
        <div class="popular__courses">
            <img style={{width: "100%"}} src={mostpoppic4} alt=""></img>
            <h3>Kotlin</h3>
            <p>Google</p>
            <p>4 ⭐⭐⭐⭐</p>
            <p>659 <del>1999</del></p>
        </div>
        <div class="popular__courses">
            <img style={{width: "100%"}} src={mostpoppic5} alt=""></img>
            <h3>Google Analytics</h3>
            <p>Google</p>
            <p>5 ⭐⭐⭐⭐⭐</p>
            <p>659 <del>1999</del></p>
        </div>
        <div class="popular__courses">
            <img style={{width: "100%"}} src={mostpoppic6} alt=""></img>
            <h3>Digital Marketing</h3>
            <p>Google</p>
            <p>4.1 ⭐⭐⭐⭐</p>
            <p>659 <del>1999</del></p>
        </div>
        <div class="popular__courses">
            <img style={{width: "100%"}} src={mostpoppic7} alt=""></img>
            <h3>C and C++</h3>
            <p>Ninja Trainings</p>
            <p>3.5 ⭐⭐⭐</p>
            <p>659 <del>1999</del></p>
        </div>
        <div class="popular__courses">
            <img style={{width: "100%"}} src={mostpoppic8} alt=""></img>
            <h3>Software Testing</h3>
            <p>Urus Studies</p>
            <p>3 ⭐⭐⭐</p>
            <p>659 <del>1999</del></p>
        </div>
    </div>
        </div>
    )
}

export default Mostpop