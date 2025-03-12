import './footer.css'
import hinh1 from '../img/Lab02/Group 16.png';
export default function footer() {

    return(
        <>
            <div className="h-[500px] bg-[rgb(34,_34,_34)] text-[white] border-none rounded-[10px] [box-shadow:2px_0_5px] text-[15px] footer">
                <div className="w-[45%] float-left text-left px-[10px] py-[20px]">
                    <h3>About Us</h3> <br />
                    <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className="send-email">
                        <input className='bg-[white] w-[70%] h-[40px] text-xl rounded-[5px]' type="email" name="" id="" placeholder="Enter your email" />
                        <button className='w-[80px] h-[40px] text-xl bg-[rgb(253,_83,_140)] text-[white] border-none rounded-[5px]'>Send</button>
                    </div>

                    <div className='avt'>
                        <img src={hinh1} alt="" />
                        <span>2023 Cheffly Company</span>
                        <span>Terms of Servacy Pollicy</span>
                    </div>
                </div>
                <div className="mid">
                    <div className='top'>
                        <h3>Learn More</h3>
                        <p>Our Cooks</p>
                        <p>See Our Features</p>
                        <p>FAQ</p>
                    </div>
                    <div className='bottom'>
                        <h4>Shop</h4>
                        <p>Git Subscription</p>
                        <p>Send Us Feedback</p>
                    </div>
                </div>
                <div className="right">
                    <h3>Recipe</h3>
                    <p>What To Cook This Week</p>
                    <p>Pasta</p>
                    <p>Dinner</p>
                    <p>Healthy</p>
                    <p>Vegatarian</p>
                    <p>Vegan</p>
                    <p>Christmas</p>
                </div>
            </div>
        </>
    )
}