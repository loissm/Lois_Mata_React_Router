import LoisImage from '../assets/images/Lois.jpg'

// Render the about page
export default function About() {
  return (
    <div>

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={LoisImage} class="d-block mx-lg-auto img-fluid rounded-circle" alt="Lois Mata Profile" loading="lazy" width="700" height="500" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Hi, I'm Lois</h1>
            <p class="lead">
              I'm a 25-year-old Filipino woman who loves art, music, and design. I moved to Canada two years ago, and I'm thrilled to be on the path to citizenship.
              Ever since I was a child, I've had a passion for creating art. I love exploring different mediums and expressing myself through my work. Whether it's painting, drawing, or sketching, I find joy in bringing my ideas to life. Music has also been a big part of my life, and I love playing guitar and singing. It's a wonderful way to connect with others and express my emotions.
              One of my biggest interests is UI/UX design. I'm fascinated by the way digital experiences can be created to be user-friendly, visually appealing, and accessible to everyone. It's a constantly evolving field, and I enjoy keeping up with the latest trends and technologies.
              Moving to Canada has been an exciting adventure for me. I love the diversity and welcoming nature of the country, and I'm grateful for the opportunities that have come my way. I'm excited to become a citizen and to contribute to this wonderful country's culture.
              Overall, I'm a creative and driven individual who loves to learn, grow, and take on new challenges. I'm looking forward to seeing what the future holds and continuing to pursue my passions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}