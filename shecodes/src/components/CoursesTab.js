import React from 'react';

function CoursesTab() {
    
    const Img1= "--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)";
    const Img2="--bg-img: url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg')";
    const Img3="--bg-img: url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg')";

    return (
        <div className="courses"><section class="cards-wrapper">
            <div className="card-grid-space">

                <a class="card" href="" style={{Img1}}>
                    <div>
                        <h1>Ongoing Courses</h1>
                        
                    </div>
                </a>
            </div>
            <div className="card-grid-space">

                <a class="card" href="" style={{Img2}}>
                    <div>
                        <h1>Completed Courses</h1>
                       
                    </div>
                </a>
            </div>
            <div className="card-grid-space">

                <a class="card" href="" style={{Img3}}>
                    <div>
                        <h1>All Courses</h1>
                        
                    </div>
                </a>
            </div>
        </section>
        </div>
    );
}

export default CoursesTab;