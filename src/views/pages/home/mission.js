export default function Mission() {
    const section = document.createElement('section');

    section.className = 'home-mission';
    section.innerHTML = `
        <div class="mission-container">
            <img src="/images/home_02.webp" alt="Home mission">
            <div class="mission-contentsbox">
                <div class="mission-box">
                    <div class="title">Mission</div>

                    <div class="mission-textbox">
                        <div class="textbox-line"></div>
                        <div class="textbox-title">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt.
                        </div>

                        <p class="textbox-text">
                        Welcome to DUO Rowing, where our commitment to quality meets a deep passion for the sport. 
                        Founded by a former coxswain, DUO embodies the spirit of partnership and teamwork that defines rowing. 
                        The name "DUO" reflects not only my journey as a coxswain but also the invaluable bonds formed along the way
                        </p>   
                        
                        <p class="textbox-text">
                        As a coxswain, I learned that the smallest details can make the biggest difference. 
                        That’s why we specialise in high-quality rowing seat wheels designed for smooth, 
                        effortless movement. We believe that every rower deserves equipment that performs flawlessly, 
                        allowing them to focus on their technique and enjoyment of the sport.
                        </p>  

                        <p class="textbox-text">
                        At DUO, we are committed to providing durable and functional rowing wheels that meet the needs of both casual 
                        enthusiasts and competitive athletes. Our products are crafted from premium materials, 
                        ensuring longevity and reliability in all conditions.
                        </p>  

                    </div>

                    <div class="mission-button">Find out more</div>
                </div>
            </div>
        </div>    
    `;

    return section;
}