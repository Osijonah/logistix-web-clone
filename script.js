const body = document.querySelector("#layout");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const prevNextSpan = document.querySelector(".prev-next-span");
const quickTourImage = document.querySelector(".img1");
const quickTourText = document.querySelector(".qtext1");
const smallBall1 = document.getElementById("sb1");
const smallBall2 = document.getElementById("sb2");
const smallBall3 = document.getElementById("sb3");
const smallBall4 = document.getElementById("sb4");
const smallBall5 = document.getElementById("sb5");
const aPrev = document.getElementById("prev");

const box1 = document.querySelector(".usecases-tiles-div2-1");
const box2 = document.querySelector(".usecases-tiles-div2-2");
const box3 = document.querySelector(".usecases-tiles-div2-3");
const box4 = document.querySelector(".usecases-tiles-div2-4");


const business = document.querySelector(".business");
const bicycle = document.querySelector(".bicycle");
const cart = document.querySelector(".cart");
const code = document.querySelector(".code");
const usecasesContainer = document.querySelector(".usecases-content-div");

const sd1 = document.querySelector("#sd1");
const sd2 = document.querySelector("#sd2");
const sd3 = document.querySelector("#sd3");
const sd4 = document.querySelector("#sd4");
const sd5 = document.querySelector("#sd5");
const sdf1 = document.querySelector("#sdf1");
const sdf2 = document.querySelector("#sdf2");
const sdf3 = document.querySelector("#sdf3");
const sdf4 = document.querySelector("#sdf4");
const sdf5 = document.querySelector("#sdf5");
const sd6 = document.querySelector("#sd6");
const sd7 = document.querySelector("#sd7");
const sd8 = document.querySelector("#sd8");
const sd9 = document.querySelector("#sd9");
const sd10 = document.querySelector("#sd10");
const sd11 = document.querySelector("#sd11");
const sd12 = document.querySelector("#sd12");
const sd13 = document.querySelector("#sd13");
const sd14 = document.querySelector("#sd14");
const sd15 = document.querySelector("#sd15");
const sd16 = document.querySelector("#sd16");
const sd17 = document.querySelector("#sd17");
const sd18 = document.querySelector("#sd18");

const hd1 = document.querySelector("#hd1");
const hd2 = document.querySelector("#hd2");
const hd3 = document.querySelector("#hd3");
const hd4 = document.querySelector("#hd4");
const hd5 = document.querySelector("#hd5");
const hdf1 = document.querySelector("#hdf1");
const hdf2 = document.querySelector("#hdf2");
const hdf3 = document.querySelector("#hdf3");
const hdf4 = document.querySelector("#hdf4");
const hdf5 = document.querySelector("#hdf5");
const hd6 = document.querySelector("#hd6");
const hd7 = document.querySelector("#hd7");
const hd8 = document.querySelector("#hd8");
const hd9 = document.querySelector("#hd9");
const hd10 = document.querySelector("#hd10");
const hd11 = document.querySelector("#hd11");
const hd12 = document.querySelector("#hd12");
const hd13 = document.querySelector("#hd13");
const hd14 = document.querySelector("#hd14");
const hd15 = document.querySelector("#hd15");
const hd16 = document.querySelector("#hd16");
const hd17 = document.querySelector("#hd17");
const hd18 = document.querySelector("#hd18");

const sdIcon1 = document.querySelector("#sd-icon1");
const sdIcon2 = document.querySelector("#sd-icon2");
const sdIcon3 = document.querySelector("#sd-icon3");
const sdIcon4 = document.querySelector("#sd-icon4");
const sdIcon5 = document.querySelector("#sd-icon5");
const sdfIcon1 = document.querySelector("#sdf-icon1");
const sdfIcon2 = document.querySelector("#sdf-icon2");
const sdfIcon3 = document.querySelector("#sdf-icon3");
const sdfIcon4 = document.querySelector("#sdf-icon4");
const sdfIcon5 = document.querySelector("#sdf-icon5");
const sdIcon6 = document.querySelector("#sd-icon6");
const sdIcon7 = document.querySelector("#sd-icon7");
const sdIcon8 = document.querySelector("#sd-icon8");
const sdIcon9 = document.querySelector("#sd-icon9");
const sdIcon10 = document.querySelector("#sd-icon10");
const sdIcon11 = document.querySelector("#sd-icon11");
const sdIcon12 = document.querySelector("#sd-icon12");
const sdIcon13 = document.querySelector("#sd-icon13");
const sdIcon14 = document.querySelector("#sd-icon14");
const sdIcon15 = document.querySelector("#sd-icon15");
const sdIcon16 = document.querySelector("#sd-icon16");
const sdIcon17 = document.querySelector("#sd-icon17");
const sdIcon18 = document.querySelector("#sd-icon18");

const faqBtn = document.querySelectorAll(".open-faq");
const faqModal = document.querySelector("#faq-modal");

const articleModal = document.querySelector("#article-modal");
const articleBtn = document.querySelectorAll(".article-btn");
const articleA1 = document.querySelector("#article-a1");
const articleA2 = document.querySelector("#article-a2");
const articleA3 = document.querySelector("#article-a3");
const articleA4 = document.querySelector("#article-a4");

const revenue = document.querySelector("#revenue");
const income = document.querySelector("#income");
const price = document.querySelector("#price");

// console.log(articleBtn);

if(prevNextSpan.textContent==="1 of 5"){
    smallBall1.classList.add("flatball");
    smallBall2.classList.remove("flatball");
    smallBall3.classList.remove("flatball");
    smallBall4.classList.remove("flatball");
    smallBall5.classList.remove("flatball");
    aPrev.classList.add("faint");
}

next.addEventListener("click", () => {
    event.preventDefault();
    nextSpanContent(prevNextSpan.textContent);
    changeQuickTourImage();
    changeQuickTourText();
    setSmallBallSize();
})

prev.addEventListener("click", () => {
    event.preventDefault();
    prevSpanContent(prevNextSpan.textContent);
    changeQuickTourImage();
    changeQuickTourText();
    setSmallBallSize();
})

window.onload = ()=>{
    business.innerHTML = `<ion-icon name="checkmark"></ion-icon>`;
    box1.classList.add("usecase-select");
}

box1.addEventListener("click", () => {
    business.innerHTML = `<ion-icon name="checkmark"></ion-icon>`;
    bicycle.innerHTML = `<ion-icon name="bicycle"></ion-icon>`;
    cart.innerHTML = `<ion-icon name="cart-outline"></ion-icon>`;
    code.innerHTML = `<ion-icon name="code-slash"></ion-icon>`;

    box1.classList.add("usecase-select");
    box2.classList.remove("usecase-select");
    box3.classList.remove("usecase-select");
    box4.classList.remove("usecase-select");

    usecasesContainer.innerHTML = `<div class="usecases-content-div1">
    <div class="usecases-content-div1-1">
        <img src="imgs/delivery-business.png" width="150" alt="" srcset="">
    </div>
    <div class="usecases-content-div1-2">
        <h4>GETTING STARTED AS</h4>
        <h3>A Delivery Business</h3>
        <p>
            Get your business to operate at its Peak Potential. Manage Shipment Order and Administrators, Receive Periodic Performance Analytics, Let your customers track their parcel and do so much more.
        </p>
    </div>
</div>
<div class="usecases-content-div2">
    <div class="steps">
        Takes Just 3 Steps 😊
    </div>
    <div class="usecases-content-div2-flex">
        <div class="usecases-content-div2-1 num-divs">
        
            <div class="num">
                <h1>01</h1>
            </div>
            <div class="num-text">
                <div class="num-heading">Create Your Business</div>
                <div>Register your business <a>here</a>. You will get an email containing your website address and the credentials you need to manage your business on Logistix.</div>
            </div>
            
        </div>
        <div class="usecases-content-div2-2 num-divs"> 
            <div class="num">
                <h1>02</h1>
            </div>
            <div class="num-text">
                <div class="num-heading">Setup Your Business</div>
                <div>After signing in with your credentials, you can Customize your website, Create Dispatchers, Add All the locations your business will ship to, Create your Price List and Add your bank account.</div>
            </div>
            
        </div>
        <div class="usecases-content-div2-3 num-divs">                    
            <div class="num">
                <h1>03</h1>
            </div>
            <div class="num-text">
                <div class="num-heading">Start Receiving Orders</div>
                <div>You can now share your website's address to your customers on social media or whatever platform of your choice so they can start shipping.</div>
            </div>
            
        </div>
    </div>
</div>`;
})
box2.addEventListener("click", () => {
    business.innerHTML = `<ion-icon name="business-outline"></ion-icon>`;
    bicycle.innerHTML = `<ion-icon name="checkmark"></ion-icon>`;
    cart.innerHTML = `<ion-icon name="cart-outline"></ion-icon>`;
    code.innerHTML = `<ion-icon name="code-slash"></ion-icon>`;

    box1.classList.remove("usecase-select");
    box2.classList.add("usecase-select");
    box3.classList.remove("usecase-select");
    box4.classList.remove("usecase-select");

    usecasesContainer.innerHTML = `<div class="usecases-content-div1">
    <div class="usecases-content-div1-1">
        <img src="imgs/dispatcher.png" width="150" alt="" srcset="">
    </div>
    <div class="usecases-content-div1-2">
        <h4>GETTING STARTED AS</h4>
        <h3>A One-Man Dispatcher</h3>
        <p>
            You don't have to own a delivery business to use Logistix. 
            Sign Up on Logistix to receive Shipment orders, Give your 
            Customers a way to Track their parcels and Get your 
            performance analysis. Sounds like a fair deal?. Let's show 
            you how.
        </p>
    </div>
</div>
<div class="usecases-content-div2">
    <div class="steps">
        Takes Just 3 Steps 😊
    </div>
<div class="usecases-content-div2-flex">
<div class="usecases-content-div2-1 num-divs">

<div class="num">
<h1>01</h1>
</div>
<div class="num-text">
<div class="num-heading">Create Your Business</div>
<div>Register your business <a>here</a>. You will get an email 
containing your website address and the credentials you need to 
manage your business on Logistix.</div>
</div>

</div>
<div class="usecases-content-div2-2 num-divs"> 
<div class="num">
<h1>02</h1>
</div>
<div class="num-text">
<div class="num-heading">Setup Your Business</div>
<div>After signing in with your credentials, you can Customize your 
    website, Create Dispatchers, Add All the locations your business 
    will ship to, Create your Price List and Add your bank account.</div>
</div>

</div>
<div class="usecases-content-div2-3 num-divs">                    
<div class="num">
<h1>03</h1>
</div>
<div class="num-text">
<div class="num-heading">Start Receiving Orders</div>
<div>You can now share your website's address to your customers on 
    social media or whatever platform of your choice so they can 
    start shipping.</div>
</div>

</div>
</div>
</div>`;
})
box3.addEventListener("click", () => {
    business.innerHTML = `<ion-icon name="business-outline"></ion-icon>`;
    bicycle.innerHTML = `<ion-icon name="bicycle"></ion-icon>`;
    cart.innerHTML = `<ion-icon name="checkmark"></ion-icon>`;
    code.innerHTML = `<ion-icon name="code-slash"></ion-icon>`;

    box1.classList.remove("usecase-select");
    box2.classList.remove("usecase-select");
    box3.classList.add("usecase-select");
    box4.classList.remove("usecase-select");

    usecasesContainer.innerHTML = `<div class="usecases-content-div1">
    <div class="usecases-content-div1-1">
        <img src="imgs/retail.png" width="150" alt="" srcset="">
    </div>
    <div class="usecases-content-div1-2">
        <h4>GETTING STARTED AS</h4>
        <h3>A Retail Business</h3>
        <p>
            Leave your customers constantly impressed with fast and 
            efficient reception of their ordered goods. Use Logistix 
            to manage Orders, assign deliveries and let your customers 
            know that thier order has been shipped.
        </p>
    </div>
</div>
<div class="usecases-content-div2">
    <div class="steps">
        Takes Just 3 Steps 😊
    </div>
<div class="usecases-content-div2-flex">
<div class="usecases-content-div2-1 num-divs">

<div class="num">
<h1>01</h1>
</div>
<div class="num-text">
<div class="num-heading">Create Your Business</div>
<div>Register your business <a>here</a>. You will get an email 
containing your website address and the credentials you need to 
manage your business on Logistix.</div>
</div>

</div>
<div class="usecases-content-div2-2 num-divs"> 
<div class="num">
<h1>02</h1>
</div>
<div class="num-text">
<div class="num-heading">Setup Your Business</div>
<div>After signing in with your credentials, you can Customize your 
    website, Create Dispatchers, Add All the locations your business 
    will ship to, Create your Price List and Add your bank account.</div>
</div>

</div>
<div class="usecases-content-div2-3 num-divs">                    
<div class="num">
<h1>03</h1>
</div>
<div class="num-text">
<div class="num-heading">Start Receiving Orders</div>
<div>You can now share your website's address to your customers on 
    social media or whatever platform of your choice so they can 
    start shipping.</div>
</div>

</div>
</div>
</div>`;
})
box4.addEventListener("click", () => {
    business.innerHTML = `<ion-icon name="business-outline"></ion-icon>`;
    bicycle.innerHTML = `<ion-icon name="bicycle"></ion-icon>`;
    cart.innerHTML = `<ion-icon name="cart-outline"></ion-icon>`;
    code.innerHTML = `<ion-icon name="checkmark"></ion-icon>`;

    box1.classList.remove("usecase-select");
    box2.classList.remove("usecase-select");
    box3.classList.remove("usecase-select");
    box4.classList.add("usecase-select");

    usecasesContainer.innerHTML = `<div class="usecases-content-div1">
    <div class="usecases-content-div1-1">
        <img src="imgs/developer.png" width="150" alt="" srcset="">
    </div>
    <div class="usecases-content-div1-2">
        <h4>GETTING STARTED AS</h4>
        <h3>A Developer</h3>
        <p>
            You're building some magic and you need a system that can 
            handle last-mile delivery seamlessly without worrying about 
            the intricacies of such a system? Then this is for you. You 
            can integrate whatever solution you are building with 
            Logistix using the Logistix API.
        </p>
    </div>
</div>
<div class="usecases-content-div2">
    <div class="steps">
        Takes Just 3 Steps 😊
    </div>
<div class="usecases-content-div2-flex">
<div class="usecases-content-div2-1 num-divs">

<div class="num">
<h1>01</h1>
</div>
<div class="num-text">
<div class="num-heading">Create A Developer Account</div>
<div>Create an account <a>here.</a> You will get an email containing 
your dashboard URL and the credentials you need to manage 
your account on Logistix.</div>
</div>

</div>
<div class="usecases-content-div2-2 num-divs"> 
<div class="num">
<h1>02</h1>
</div>
<div class="num-text">
<div class="num-heading">Setup Your Account</div>
<div>After signing in with your credentials, you can Customize your 
    website, Create Dispatchers, Add All the locations your business 
    will ship to, Create your Price List and Add your bank account.</div>
</div>

</div>
<div class="usecases-content-div2-3 num-divs">                    
<div class="num">
<h1>03</h1>
</div>
<div class="num-text">
<div class="num-heading">Start Making Magic</div>
<div>Our API documentation will guide you a step at a time on 
how you can easily integrate Logistix with your solution.</div>
</div>

</div>
</div>
</div>`;
})

const changeQuickTourImage = () =>{
    if(prevNextSpan.textContent==="1 of 5"){
        quickTourImage.innerHTML = `<img src="imgs/tracker.png" alt="">`;
    }else if(prevNextSpan.textContent==="2 of 5"){
        quickTourImage.innerHTML = `<img src="imgs/orders.png" alt="">`;
    }else if(prevNextSpan.textContent==="3 of 5"){
        quickTourImage.innerHTML = `<img src="imgs/pricelist.png" alt="">`;
    }else if(prevNextSpan.textContent==="4 of 5"){
        quickTourImage.innerHTML = `<img src="imgs/dispatchers.png" alt="">`;
    }else if(prevNextSpan.textContent==="5 of 5"){
        quickTourImage.innerHTML = `<img src="imgs/administrators.png" alt="">`;
    }
}
const changeQuickTourText = () =>{
    if(prevNextSpan.textContent==="1 of 5"){
        quickTourText.innerHTML = `<div class="quick-tour-text">
        <h3>Track Parcels</h3>
        <p>
            Your <span class="medium1">Customers can Track Their Parcels</span> from Pickup to Destination. They get an estimated delivery time for every parcel they ship using a Tracking ID that will be sent to their mail after registering their parcels.
        </p>
    </div>`;
    }else if(prevNextSpan.textContent==="2 of 5"){
        quickTourText.innerHTML = `<div class="quick-tour-text">
        <h3>Receive & Manage Orders</h3>
        <p>
            We made it possible that You, as well as your Administrators can <span class="medium1">Manage Shipments And Monitor Parcels</span> from Pickup to Destination. You also have the ability to <span class="medium1">Manage your Customers’ information</span> so you can always be in communication with your customers.
        </p>
    </div>`;
    }else if(prevNextSpan.textContent==="3 of 5"){
        quickTourText.innerHTML = `<div class="quick-tour-text">
        <h3>Control Your Price List</h3>
        <p>
            We understand different companies have their unique pricing models, so we designed Logistix with this need in mind. And so we have created a unique way to <span class="medium1">Accommodate for any pricing model of choice.</span> 
        </p>
    </div>`;
    }else if(prevNextSpan.textContent==="4 of 5"){
        quickTourText.innerHTML = `<div class="quick-tour-text">
        <h3>Manage Your Dispatchers</h3>
        <p>
            We also provide a way to <span class="medium1">Manage your Dispatch Riders.</span> By manage, we mean you can <span class="medium1">Create</span> new riders, Assign Parcels to dispatch riders, <span class="medium1">Edit</span> and <span class="medium1">Delete</span> dispatch riders.
        </p>
    </div>`;
    }else if(prevNextSpan.textContent==="5 of 5"){
        quickTourText.innerHTML = `<div class="quick-tour-text">
        <h3>Manage Your Administrators</h3>
        <p>
            We designed it with the ability to allow you <span class="medium1">Delegate Administrative Tasks</span> such as the management of shipments and dispatch riders to administrators so you can focus on growing your business.
        </p>
    </div>`;
    }
}
const setSmallBallSize = () =>{
    if(prevNextSpan.textContent==="1 of 5"){
        smallBall1.classList.add("flatball");
        smallBall2.classList.remove("flatball");
        smallBall3.classList.remove("flatball");
        smallBall4.classList.remove("flatball");
        smallBall5.classList.remove("flatball");
        aPrev.classList.add("faint");
    }else if(prevNextSpan.textContent==="2 of 5"){
        smallBall2.classList.add("flatball");
        smallBall1.classList.remove("flatball");
        smallBall3.classList.remove("flatball");
        smallBall4.classList.remove("flatball");
        smallBall5.classList.remove("flatball");
        aPrev.classList.remove("faint");
    }else if(prevNextSpan.textContent==="3 of 5"){
        smallBall3.classList.add("flatball");
        smallBall1.classList.remove("flatball");
        smallBall2.classList.remove("flatball");
        smallBall4.classList.remove("flatball");
        smallBall5.classList.remove("flatball");
        aPrev.classList.remove("faint");
    }else if(prevNextSpan.textContent==="4 of 5"){
        smallBall4.classList.add("flatball");
        smallBall1.classList.remove("flatball");
        smallBall2.classList.remove("flatball");
        smallBall3.classList.remove("flatball");
        smallBall5.classList.remove("flatball");
        aPrev.classList.remove("faint");
    }else if(prevNextSpan.textContent==="5 of 5"){
        smallBall5.classList.add("flatball");
        smallBall1.classList.remove("flatball");
        smallBall2.classList.remove("flatball");
        smallBall3.classList.remove("flatball");
        smallBall4.classList.remove("flatball");
        aPrev.classList.remove("faint");
    }
}
const prevSpanContent = (content) =>{
    // if(content==="1 of 5"){
    //     prevNextSpan.textContent = "5 of 5";
    // }else 
    if(content==="2 of 5"){
        prevNextSpan.textContent = "1 of 5";
    }else if(content==="3 of 5"){
        prevNextSpan.textContent = "2 of 5";
    }else if(content==="4 of 5"){
        prevNextSpan.textContent = "3 of 5";
    }else if(content==="5 of 5"){
        prevNextSpan.textContent = "4 of 5";
    }
}
const nextSpanContent  = (content)=>{
    if(content==="1 of 5"){
        prevNextSpan.textContent = "2 of 5";
    }else if(content==="2 of 5"){
        prevNextSpan.textContent = "3 of 5";
    }else if(content==="3 of 5"){
        prevNextSpan.textContent = "4 of 5";
    }else if(content==="4 of 5"){
        prevNextSpan.textContent = "5 of 5";
    }else if(content==="5 of 5"){
        prevNextSpan.textContent = "1 of 5";
    }
}



window.addEventListener('load', ()=>{

// const setup = () => {
    const modal3 = document.querySelector("#modal3");
    const lh3 = document.querySelector("#lh3");
    const modal3Content = document.querySelector("#modal3-content");
    const closeBtn3 = document.querySelector("#close3");
    const modal1 = document.getElementById("modal1");
const modal2 = document.querySelector("#modal2");
const lh1 = document.getElementById("lh1");
const lh2 = document.querySelector("#lh2");

const closeBtn1 = document.querySelector("#close1");
const closeBtn2 = document.querySelector("#close2");

const modal1Content = document.querySelector("#modal1-content");
const modal2Content = document.querySelector("#modal2-content");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");

const vidPlay1 = () => {
    video1.play();
}
const vidPlay2 = () => {
    video2.play();
}
const vidPlay3 = () => {
    video3.play();
}
const vidPause1 = () => {
    video1.pause();
}
const vidPause2 = () => {
    video2.pause();
}
const vidPause3 = () => {
    video3.pause();
}


    // first learn how functionality
    modal1.addEventListener("click", () => {
        modal1.style.display="none";
        modal1Content.style.display="none";
        vidPause1();
    } );
    closeBtn1.addEventListener("click", () => {
        modal1.style.display="none";
        modal1Content.style.display="none";
        vidPause1();
    });

    lh1.addEventListener("click", (e)=>{
        e.preventDefault();
        modal1.style.display="flex";
        modal1Content.style.display="block";
        vidPlay1();
    })

    // second learn how functionality
    modal2.addEventListener("click", () => {
        modal2.style.display="none";
        modal2Content.style.display="none";
        vidPause2();
    } );
    closeBtn2.addEventListener("click", () => {
        modal2.style.display="none";
        modal2Content.style.display="none";
        vidPause2();
    });

    lh2.addEventListener("click", (e)=>{
        e.preventDefault();
        modal2.style.display="flex";
        modal2Content.style.display="block";
        vidPlay2();
    })

    // third learn how functionality
    modal3.addEventListener("click", () => {
        modal3.style.display="none";
        modal3Content.style.display="none";
        vidPause3();
    } );
    closeBtn3.addEventListener("click", () => {
        modal3.style.display="none";
        modal3Content.style.display="none";
        vidPause3();
    });

    lh3.addEventListener("click", (e)=>{
        e.preventDefault();
        modal3.style.display="flex";
        modal3Content.style.display="block";
        vidPlay3();
    })


})

{/* <ion-icon name="remove"></ion-icon> */}


revenue.addEventListener("input", (e)=>{
    e.preventDefault();
    // let revenueNo = revenue.value.replace(/^₦/, '');
    let revenueValue = parseInt(revenue.value);
    let incomeValue = revenueValue - revenueValue/10;
    let priceValue = revenueValue/10;
    // console.log(`e target value: ` + e.target.value);

    // console.log();

    income.textContent = "₦" + incomeValue.toString();
    price.textContent = "₦" + priceValue.toString();

    if(revenue.value == "" ){
        income.textContent = "₦0";
        price.textContent = "₦0"; 
    }
})


hd1.style.display = "none";
hd2.style.display = "none";
hd3.style.display = "none";
hd4.style.display = "none";
hd5.style.display = "none";
hdf1.style.display = "none";
hdf2.style.display = "none";
hdf3.style.display = "none";
hdf4.style.display = "none";
hdf5.style.display = "none";
hd6.style.display = "none";
hd7.style.display = "none";
hd8.style.display = "none";
hd9.style.display = "none";
hd10.style.display = "none";
hd11.style.display = "none";
hd12.style.display = "none";
hd13.style.display = "none";
hd14.style.display = "none";
hd15.style.display = "none";
hd16.style.display = "none";
hd17.style.display = "none";
hd18.style.display = "none";

sd1.addEventListener("click", ()=>{
    
    if(hd1.style.display=="none"){
        sdIcon1.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd1.style.display="block";
    }else{
        sdIcon1.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd1.style.display="none";
    }
})
sd2.addEventListener("click", ()=>{
    if(hd2.style.display=="none"){
        sdIcon2.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd2.style.display="block";
    }else{
        sdIcon2.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd2.style.display="none";
    }
})
sd3.addEventListener("click", ()=>{
    if(hd3.style.display=="none"){
        sdIcon3.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd3.style.display="block";
    }else{
        sdIcon3.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd3.style.display="none";
    }
})
sd4.addEventListener("click", ()=>{
    if(hd4.style.display=="none"){
        sdIcon4.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd4.style.display="block";
    }else{
        sdIcon4.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd4.style.display="none";
    }
})
sd5.addEventListener("click", ()=>{
    if(hd5.style.display=="none"){
        sdIcon5.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd5.style.display="block";
    }else{
        sdIcon5.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd5.style.display="none";
    }
})
sdf1.addEventListener("click", ()=>{
    if(hdf1.style.display=="none"){
        sdfIcon1.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hdf1.style.display="block";
    }else{
        sdfIcon1.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hdf1.style.display="none";
    }
})
sdf2.addEventListener("click", ()=>{
    if(hdf2.style.display=="none"){
        sdfIcon2.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hdf2.style.display="block";
    }else{
        sdfIcon2.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hdf2.style.display="none";
    }
})
sdf3.addEventListener("click", ()=>{
    if(hdf3.style.display=="none"){
        sdfIcon3.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hdf3.style.display="block";
    }else{
        sdfIcon3.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hdf3.style.display="none";
    }
})
sdf4.addEventListener("click", ()=>{
    if(hdf4.style.display=="none"){
        sdfIcon4.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hdf4.style.display="block";
    }else{
        sdfIcon4.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hdf4.style.display="none";
    }
})
sdf5.addEventListener("click", ()=>{
    if(hdf5.style.display=="none"){
        sdfIcon5.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hdf5.style.display="block";
    }else{
        sdfIcon5.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hdf5.style.display="none";
    }
})
sd6.addEventListener("click", ()=>{
    if(hd6.style.display=="none"){
        sdIcon6.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd6.style.display="block";
    }else{
        sdIcon6.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd6.style.display="none";
    }
})
sd7.addEventListener("click", ()=>{
    if(hd7.style.display=="none"){
        sdIcon7.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd7.style.display="block";
    }else{
        sdIcon7.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd7.style.display="none";
    }
})
sd8.addEventListener("click", ()=>{
    if(hd8.style.display=="none"){
        sdIcon8.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd8.style.display="block";
    }else{
        sdIcon8.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd8.style.display="none";
    }
})
sd9.addEventListener("click", ()=>{
    if(hd9.style.display=="none"){
        sdIcon9.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd9.style.display="block";
    }else{
        sdIcon9.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd9.style.display="none";
    }
})
sd10.addEventListener("click", ()=>{
    if(hd10.style.display=="none"){
        sdIcon10.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd10.style.display="block";
    }else{
        sdIcon10.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd10.style.display="none";
    }
})
sd11.addEventListener("click", ()=>{
    if(hd11.style.display=="none"){
        sdIcon11.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd11.style.display="block";
    }else{
        sdIcon11.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd11.style.display="none";
    }
})
sd12.addEventListener("click", ()=>{
    if(hd12.style.display=="none"){
        sdIcon12.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd12.style.display="block";
    }else{
        sdIcon12.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd12.style.display="none";
    }
})
sd13.addEventListener("click", ()=>{
    if(hd13.style.display=="none"){
        sdIcon13.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd13.style.display="block";
    }else{
        sdIcon13.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd13.style.display="none";
    }
})
sd14.addEventListener("click", ()=>{
    if(hd14.style.display=="none"){
        sdIcon14.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd14.style.display="block";
    }else{
        sdIcon14.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd14.style.display="none";
    }
})
sd15.addEventListener("click", ()=>{
    if(hd15.style.display=="none"){
        sdIcon15.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd15.style.display="block";
    }else{
        sdIcon15.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd15.style.display="none";
    }
})
sd16.addEventListener("click", ()=>{
    if(hd16.style.display=="none"){
        sdIcon16.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd16.style.display="block";
    }else{
        sdIcon16.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd16.style.display="none";
    }
})
sd17.addEventListener("click", ()=>{
    if(hd17.style.display=="none"){
        sdIcon17.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd17.style.display="block";
    }else{
        sdIcon17.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd17.style.display="none";
    }
})
sd18.addEventListener("click", ()=>{
    if(hd18.style.display=="none"){
        sdIcon18.innerHTML = `<ion-icon name="remove-circle"></ion-icon>`;
        hd18.style.display="block";
    }else{
        sdIcon18.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;
        hd18.style.display="none";
    }
})

faqBtn[0].addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("clicked");
    body.style.display="none";
    faqModal.style.display="block";
})
faqBtn[1].addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("clicked");
    body.style.display="none";
    faqModal.style.display="block";
})

articleBtn[0].addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("clicked");
    body.style.display="none";
    articleModal.style.display="block";
})
articleBtn[1].addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("clicked");
    body.style.display="none";
    articleModal.style.display="block";
})

window.addEventListener("load", ()=>{
    articleA1.classList.add("selected");
    articleA2.classList.remove("selected");
    articleA3.classList.remove("selected");
    articleA4.classList.remove("selected");
    articleA1.classList.remove("op");
    articleA2.classList.add("op");
    articleA3.classList.add("op");
    articleA4.classList.add("op");
})

articleA1.addEventListener("click", (e)=>{
    e.preventDefault();
    articleA1.classList.add("selected");
    articleA2.classList.remove("selected");
    articleA3.classList.remove("selected");
    articleA4.classList.remove("selected");
    articleA1.classList.remove("op");
    articleA2.classList.add("op");
    articleA3.classList.add("op");
    articleA4.classList.add("op");
})
articleA2.addEventListener("click", (e)=>{
    e.preventDefault();
    articleA1.classList.remove("selected");
    articleA2.classList.add("selected");
    articleA3.classList.remove("selected");
    articleA4.classList.remove("selected");
    articleA1.classList.add("op");
    articleA2.classList.remove("op");
    articleA3.classList.add("op");
    articleA4.classList.add("op");
})
articleA3.addEventListener("click", (e)=>{
    e.preventDefault();
    articleA1.classList.remove("selected");
    articleA2.classList.remove("selected");
    articleA3.classList.add("selected");
    articleA4.classList.remove("selected");
    articleA1.classList.add("op");
    articleA2.classList.add("op");
    articleA3.classList.remove("op");
    articleA4.classList.add("op");
})
articleA4.addEventListener("click", (e)=>{
    e.preventDefault();
    articleA1.classList.remove("selected");
    articleA2.classList.remove("selected");
    articleA3.classList.remove("selected");
    articleA4.classList.add("selected");
    articleA1.classList.add("op");
    articleA2.classList.add("op");
    articleA3.classList.add("op");
    articleA4.classList.remove("op");
})