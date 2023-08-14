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

const box1 = document.querySelector(".section3-div2-1");
const box2 = document.querySelector(".section3-div2-2");
const box3 = document.querySelector(".section3-div2-3");
const box4 = document.querySelector(".section3-div2-4");


const business = document.querySelector(".business");
const bicycle = document.querySelector(".bicycle");
const cart = document.querySelector(".cart");
const code = document.querySelector(".code");
const usecasesContainer = document.querySelector(".section4-div");



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
}

box1.addEventListener("click", () => {
    business.innerHTML = `<ion-icon name="checkmark"></ion-icon>`;
    bicycle.innerHTML = `<ion-icon name="bicycle"></ion-icon>`;
    cart.innerHTML = `<ion-icon name="cart-outline"></ion-icon>`;
    code.innerHTML = `<ion-icon name="code-slash"></ion-icon>`;

    usecasesContainer.innerHTML = `<div class="section4-div1">
    <div class="section4-div1-1">
        <img src="imgs/delivery-business.png" width="150" alt="" srcset="">
    </div>
    <div class="section4-div1-2">
        <h4>GETTING STARTED AS</h4>
        <h3>A Delivery Business</h3>
        <p>
            Get your business to operate at its Peak Potential. Manage Shipment Order and Administrators, Receive Periodic Performance Analytics, Let your customers track their parcel and do so much more.
        </p>
    </div>
</div>
<div class="section4-div2">
    <div class="steps">
        Takes Just 3 Steps 😊
    </div>
    <div class="section4-div2-flex">
        <div class="section4-div2-1 num-divs">
        
            <div class="num">
                <h1>01</h1>
            </div>
            <div class="num-text">
                <div class="num-heading">Create Your Business</div>
                <div>Register your business <a>here</a>. You will get an email containing your website address and the credentials you need to manage your business on Logistix.</div>
            </div>
            
        </div>
        <div class="section4-div2-2 num-divs"> 
            <div class="num">
                <h1>02</h1>
            </div>
            <div class="num-text">
                <div class="num-heading">Setup Your Business</div>
                <div>After signing in with your credentials, you can Customize your website, Create Dispatchers, Add All the locations your business will ship to, Create your Price List and Add your bank account.</div>
            </div>
            
        </div>
        <div class="section4-div2-3 num-divs">                    
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

    usecasesContainer.innerHTML = `<div class="section4-div1">
    <div class="section4-div1-1">
        <img src="imgs/dispatcher.png" width="150" alt="" srcset="">
    </div>
    <div class="section4-div1-2">
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
<div class="section4-div2">
    <div class="steps">
        Takes Just 3 Steps 😊
    </div>
<div class="section4-div2-flex">
<div class="section4-div2-1 num-divs">

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
<div class="section4-div2-2 num-divs"> 
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
<div class="section4-div2-3 num-divs">                    
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

    usecasesContainer.innerHTML = `<div class="section4-div1">
    <div class="section4-div1-1">
        <img src="imgs/retail.png" width="150" alt="" srcset="">
    </div>
    <div class="section4-div1-2">
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
<div class="section4-div2">
    <div class="steps">
        Takes Just 3 Steps 😊
    </div>
<div class="section4-div2-flex">
<div class="section4-div2-1 num-divs">

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
<div class="section4-div2-2 num-divs"> 
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
<div class="section4-div2-3 num-divs">                    
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

    usecasesContainer.innerHTML = `<div class="section4-div1">
    <div class="section4-div1-1">
        <img src="imgs/developer.png" width="150" alt="" srcset="">
    </div>
    <div class="section4-div1-2">
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
<div class="section4-div2">
    <div class="steps">
        Takes Just 3 Steps 😊
    </div>
<div class="section4-div2-flex">
<div class="section4-div2-1 num-divs">

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
<div class="section4-div2-2 num-divs"> 
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
<div class="section4-div2-3 num-divs">                    
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







{/* <div class="section4-div">
<div class="section4-div1">
    <div class="section4-div1-1">
        <img src="imgs/developer.png" width="150" alt="" srcset="">
    </div>
    <div class="section4-div1-2">
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
<div class="section4-div2">
    <div class="steps">
        Takes Just 3 Steps 😊
    </div>
<div class="section4-div2-flex">
<div class="section4-div2-1 num-divs">

<div class="num">
<h1>01</h1>
</div>
<div class="num-text">
<div class="num-heading">Create A Developer Account</div>
<div>Create an account here. You will get an email containing 
your dashboard URL and the credentials you need to manage 
your account on Logistix.</div>
</div>

</div>
<div class="section4-div2-2 num-divs"> 
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
<div class="section4-div2-3 num-divs">                    
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
</div>
</div> */}


// var element = document.getElementById("whatever"); // get the parent element
// var comment = element.innerHTML; // get the html
// var html = comment.replace("<!--", "").replace("-->", ""); // remove the comment
// element.innerHTML = html;