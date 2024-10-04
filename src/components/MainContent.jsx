import React from 'react';

function MainContent() {
  return (
    <main class="container">
          {/* {
              <div className="containerBox">
    <div className="textbox">
      <h2>Chairman's View</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos earum voluptatum officia sint obcaecati ut maxime magnam aut. Non hic id amet, dolore quas explicabo recusandae officiis alias quam magnam qui, expedita esse, ducimus doloribus debitis? Quasi, consectetur fugit vero, reprehenderit unde quod est animi, non facere accusamus asperiores. Fugit molestiae voluptatibus consequuntur illo facilis ea delectus officia obcaecati, nostrum sed totam molestias. Obcaecati amet facilis consequatur et, asperiores officiis voluptas aut! Necessitatibus.</p>
    </div>

    <div className="textbox">
      <h2>About Us</h2>
      <p>um sed totam molestias. Obcaecati amet facilis consequatur et, asperiores officiis voluptas aut! Necessitatibus.</p>
      </div>
      </div>
              }         */
              
    <div class="container"   >       
  <div class="containerBox">
  <div class="left-column">
    <div class="upper-text">
      <h2>Chairman NBLC</h2>
       <p>Dr. Amitava Ray</p> 
    </div>
    <div class="lower-text">
      <h2>Secretary NBLC</h2>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit libero vitae risus tempor, ut commodo lorem ultrices. Nulla facilisi. Sed ac sodales ante.</p> */}
    </div>
  </div>
  <div class="right-column">
  {/* <div class="image-container"> */}
    <img className='image' src="image1.jpg" alt="Image 1"/>
    {/* <img src="image2.jpg" alt="Image 2"/> */}
 </div>
</div>

<div className="text-areas-container">
  <div className="aboutUs">
    <h3>About Us</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit libero vitae risus tempor, ut commodo lorem ultrices. Nulla facilisi. Sed ac sodales ante.</p>
  </div>
  <div className="news">
    <h3>News and Events</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit libero vitae risus tempor, ut commodo lorem ultrices. Nulla facilisi. Sed ac sodales ante.</p>
  </div>
  <div className="notice">
    <h3>Notice</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit libero vitae risus tempor, commodo lorem ultrices. Nulla facilisi.</p>
  </div>
</div>
</div>
}
    </main>
  );
}
export default MainContent;
