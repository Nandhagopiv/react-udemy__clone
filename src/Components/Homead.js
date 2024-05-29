import addpic from '../Assets/Images/Udemy__pic (1).jpg'

function Homead() {
    return (
            <div class="home__ad">
                <img style={{width: "100%"}} src= {addpic} alt="Advertisement"></img>
                    <div class="home__ad--popup">
                        <h1>Learning that gets you</h1>
                        <p>Skills for your present (and your future). Get started with us.</p>
                    </div>
            </div>
    )
}

export default Homead