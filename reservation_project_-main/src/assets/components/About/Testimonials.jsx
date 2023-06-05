import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../images/p1.jpg";
import "./Testimonial.css";
import Icon from '@mdi/react';
import { mdiGithub,mdiGmail,mdiFacebook } from '@mdi/js';



function Testimonials() {
  return (
    <div className="Testimonial">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src='https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png'/>
          <div className="myCarousel">
            <h1 className="text-3xl">Hind hudiab</h1>
            <h4 className="text-2xl">Scrum Master</h4>
            <div className="flex flex-row justify-evenly mt-3">
              <div><Icon path={mdiGithub} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiGmail} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiFacebook} size={2} className="text-[#5aa1c2]" /></div>
            </div>
          </div>
        </div>
        <div>
          <img src='https://avatars.githubusercontent.com/u/78435413?v=4' />
          <div className="myCarousel">
            <h1 className="text-3xl">Mohamad Zaid</h1>
            <h4 className="text-2xl">Product Owner</h4>
            <div className="flex flex-row justify-evenly mt-3">
              <div><Icon path={mdiGithub} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiGmail} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiFacebook} size={2} className="text-[#5aa1c2]" /></div>
            </div>
          </div>
        </div>
        <div>
          <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' />
          <div className="myCarousel">
            <h1 className="text-3xl">Dania Abu Ghoush</h1>
            <h4 className="text-2xl">QA Engineer</h4>
            <div className="flex flex-row justify-evenly mt-3">
              <div><Icon path={mdiGithub} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiGmail} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiFacebook} size={2} className="text-[#5aa1c2]" /></div>
            </div>
          </div>
        </div>
        <div>
          <img src='https://avatars.githubusercontent.com/u/126079962?s=400&u=4b48d4f6c7b4f777826b0eac7fbbfc30e218259f&v=4' />
          <div className="myCarousel">
            <h1 className="text-3xl">Ali Alterawi</h1>
            <h4 className="text-2xl">Member</h4>
            <div className="flex flex-row justify-evenly mt-3">
              <div><Icon path={mdiGithub} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiGmail} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiFacebook} size={2} className="text-[#5aa1c2]" /></div>
            </div>
          </div>
        </div>
        <div>
          <img src='https://avatars.githubusercontent.com/u/126164250?v=4' />
          <div className="myCarousel">
            <h1 className="text-3xl">Issam Addi</h1>
            <h4 className="text-2xl">Member</h4>
            <div className="flex flex-row justify-evenly mt-3">
              <div><Icon path={mdiGithub} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiGmail} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiFacebook} size={2} className="text-[#5aa1c2]" /></div>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} />
          <div className="myCarousel">
            <h1 className="text-3xl">AbdAlrahman Darobi</h1>
            <h4 className="text-2xl">Member</h4>
            <div className="flex flex-row justify-evenly mt-3">
              <div><Icon path={mdiGithub} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiGmail} size={2} className="text-[#5aa1c2]" /></div>
              <div><Icon path={mdiFacebook} size={2} className="text-[#5aa1c2]" /></div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonials;