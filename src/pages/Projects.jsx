import Img1 from "../assets/images/MainPagev4.jpg"
import Img2 from "../assets/images/Magazine_Page1.jpg"
import Img3 from "../assets/images/Magazine_Page2.jpg"
import Img4 from "../assets/images/Magazine_Page3.jpg"

// Render the project page
export default function Projects() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Img1} class="d-block w-100" alt="Page 1" />
          </div>
          <div class="carousel-item">
            <img src={Img2} class="d-block w-100" alt="Page 2" />
          </div>
          <div class="carousel-item">
            <img src={Img3} class="d-block w-100" alt="Page 3" />
          </div>
          <div class="carousel-item">
            <img src={Img4} class="d-block w-100" alt="Page 4" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}