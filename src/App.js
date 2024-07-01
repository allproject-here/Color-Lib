import { Container , Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart , faGreaterThan} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Sliders from './Slider';
import Countdown from './Countdown';



function App() {
  return (
    <div className="App">
    <div className='container-fluid htop py-2'>
      <div className='d-flex justify-content-md-center flex-wrap lg-align-items-center'>
        <p className='px-md-5 pt-3'><span className='text-success fw-semibold fs-5'>ENDS TOMORROW: </span><span className='text-white fw-semibold fs-5'>Join Teachable for $4,800 in bonus content</span></p>
        <Countdown />
           {/* to convert in milisec we divide it to 1000 */}
        <span className='text-white fs-6 fw-semibold mt-3 d-none d-lg-flex'> Learn More</span>
     
      </div>
       
    </div>
  <header className="container-fluid sticky-top bg-white ">
            <Container>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <a classname="navbar-brand" href="index">
              <img src="https://preview.colorlib.com/theme/universityedu/assets/img/logo/logo.png.webp"height="130" alt="" className="img-fluid"/></a>
              <button className="navbar-toggler bg-success text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
      				<span className="navbar-toggler-icon"></span>
    			</button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold ps-5"  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold ps-5" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold ps-5" href="#">Program</a>
        </li>
         <li className="nav-item">
        <a className="nav-link fs-6 fw-semibold ps-5" href="#">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fs-6 ps-5 fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Blog
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Blog</a></li>
            <li><a className="dropdown-item" href="#">Blog Details</a></li>
            <li><a className="dropdown-item" href="#">Elements</a></li>
          </ul>
        </li>
       
      </ul>
      <div className='text-end d-none d-lg-block fs-5 fw-semibold pt-3 ps-5 text-start'>
          <p className='text-success fs-6'>Call Us:<span className='text-dark'> 0 (78) 675 3674</span> </p>
      </div>
      
    </div>
  
</nav>
<div className="offcanvas offcanvas-top  text-bg-dark"  id="offcanvasExample">
  				<div className="offcanvas-header">
          <a classname="navbar-brand" href="index">
              <img src="https://preview.colorlib.com/theme/universityedu/assets/img/logo/logo.png.webp"height="130" alt="" className="img-fluid"/>
              </a>
  					<button type="button" className="btn-close bg-success" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  				</div>
  				<div className="offcanvas-body">
                  <ul className="navbar-nav align-items-lg-center text-uppercase ">
                  <li className="nav-item">
          <a className="nav-link fs-3 fw-semibold"  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-3 fw-semibold" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-3 fw-semibold" href="#">Program</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fs-3 fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Blog
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Blog</a></li>
            <li><a className="dropdown-item" href="#">Blog Details</a></li>
            <li><a className="dropdown-item" href="#">Elements</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-3 fw-semibold" href="#">Contact</a>
        </li>
						
					</ul>
  				</div>
  			</div>
 </Container>
         
		</header>
    
    <section className='container-fluid banner py-5 overflow-x-hidden'>
      <Container className='py-5'>
        <Row className='py-5'>
          <div className='py-5'>
          <p className='fs-3 text-white fw-semibold'>EDUCATION & SCHOOL</p>
          <h1 className='fs-1 lh-sm text-white fw-bolder mb-4'>SHOWCASE COURSES,<br/>
              EVENTS AND MORE!
          </h1>
          <p className='text-white fs-5 fw-bolder '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
              Suspendisse varius enim in eros elementum tristique.
          </p>
          <button className='text-bg-success fs-4 border border-0 py-3 mt-3 px-5 fw-normal'>Get Started Now</button>
          </div>
          </Row>
      </Container>
    </section>
    <section className='container-fluid approach py-5 overflow-x-hidden'>
      <Container className='pt-5'>
        <Row>
          <div className='col-lg-6 '>
            <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/about1.jpg.webp' className='img-fluid' height={'450px'} width={'636px'} alt=''/>
          </div>
          <div className='col-lg-6 ps-lg-5'>
              <h1 className='fs-1 lh-sm  ps-lg-5 fw-bolder my-4 lh-md'>A COMPREHENSIVE <br/>
              TEACHING APPROACH
              </h1>
              <p className='text-secondary  ps-lg-5 fw-semibold ta' >
               Lorem ipsum dolor sit , consectetur adipiscing elit.<br/>
              Maecenas felis felis, vulputate sit  mauris et, semper <br/>
              aliquam ligula. Integer efficitur tellus , sed feugiat leo <br/>
              posuere ac. Morbi vitae tincidunt malesuada massa.
              </p>
              <p className='text-secondary  ps-lg-5 fw-semibold mb-5 ta'>
              Maecenas felis felis, vulputate sit  mauris et, semper<br/>
              aliquam ligula. Integer efficitur tellus , sed feugiat leo <br/>
              posuere ac. Morbi vitae tincidunt mi, et malesuada massa. <br/>
              </p>
              <span className='text-success fs-5  ms-lg-5 fw-bolder border-bottom border-success'> Learn MORE</span>
          </div>
        </Row>
      </Container>

    </section>
    <section className='container-fluid py-5 overflow-x-hidden'>
      <Container className='pt-5'>
        <h1 className='fs-1 lh-sm ps-5 fw-bolder my-4 lh-md text-center'>PROGRAMS WE OFFER </h1>
        <p className='text-secondary ps-lg-5 fw-semibold ta text-center'>
        Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus<br/>
        metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.
        </p>
        <Row>
        <div className='col-lg-6 pb-5'>   
            <div classname="p-4 mb-30  border border-secondary border-opacity-25">
              <div classname="blog-img pb-4">
               <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog1.jpg.webp" className='img-fluid pb-3' width='586px' height='260px' alt=""/>
              </div>
              <div classname="blog-caption mt-1s">
                <h3><a href="#" className='fs-3 lh-sm text-dark fw-bolder my-4 lh-md'>Faculty of Science</a></h3>
                <p className='text-secondary py-3 fw-semibold ta'>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                <a href="index.js" className="text-success fs-5 fw-bolder border-bottom border-opacity-75 border-3 border-success">Learn More</a>
              </div>
            </div>
         </div>

         <div className='col-lg-6 pb-4'>   
            <div classname="p-4 mb-30  border border-secondary border-opacity-25">
              <div classname="blog-img pb-4">
               <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog2.jpg" className='img-fluid pb-3' width='586px' height='260px' alt=""/>
              </div>
              <div classname="blog-caption mt-1s">
                <h3><a href="#" className='fs-3 lh-sm text-dark fw-bolder my-4 lh-md'>Faculty of Science</a></h3>
                <p className='text-secondary py-3 fw-semibold ta'>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                <a href="index.js" className="text-success fs-5 fw-bolder border-bottom border-opacity-75 border-3 border-success">Learn More</a>
              </div>
            </div>
         </div>          
        </Row>
      </Container>
    </section>
    <section className='container-fluid py-5 overflow-x-hidden'>
      <Row className='er '>
      <div className='col-lg-6 '>
      <h1 className='fs-1 lh-sm ps-5 pt-3 fw-bolder my-4 lh-md '>ESSENTIAL RESOURCES</h1>
      <p className='text-secondary ps-lg-5 text-sm-start fw-semibold ta'>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.
        Integer efficitur tellus metus, sed feugiat leo posuere.</p>

        <div className='px-4 py-1'>
      <div className='me-5 ms-4 d-flex border border-secondary border-opacity-25'>
        <div className='py-4 ps-3'>
        <h3>First year students</h3>
        <p className='text-secondary fs-6 fw-semibold ta'>Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.</p>
        </div>
        <div className='mx-auto p-5'>
          <a href='index.js' className='er-circle'>
         <FontAwesomeIcon icon={faGreaterThan} beatFade size="xl" style={{color: "#14b835",}} className='mt-3'/>
          </a>
        </div>
      </div>
    </div>

    <div className='px-4 py-1'>
      <div className='me-5 ms-4 d-flex border border-secondary border-opacity-25'>
        <div className='py-4 ps-3'>
        <h3>First year students</h3>
        <p className='text-secondary fs-6 fw-semibold ta'>Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.</p>
        </div>
        <div className='mx-auto p-5'>
          <a href='index.js' className='er-circle'>
          <FontAwesomeIcon icon={faGreaterThan} flip size="xl" style={{color: "#14b835",}}  className='mt-3'/>
          </a>
        </div>
      </div>
    </div>

    <div className='px-4 py-1'>
      <div className='me-5 ms-4 d-flex border border-secondary border-opacity-25'>
        <div className='py-4 ps-3'>
        <h3>First year students</h3>
        <p className='text-secondary fs-6 fw-semibold ta'>Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.</p>
        </div>
        <div className='mx-auto p-5'>
          <a href='index.js' className='er-circle'>
          <FontAwesomeIcon icon={faGreaterThan} spin size="xl" style={{color: "#14b835",}} className='mt-3' />
          </a>
        </div>
      </div>
    </div>
      </div>
      <div className='col-lg-6 py-2'>
      <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/visit1.jpg.webp" className='img-fluid' width='759px' height='752px' alt=""/>
      </div>
      </Row>
      
    </section>


    <section className='container-fluid py-5 overflow-x-hidden'> 
      <Container>
        <div className='col-lg-12 d-flex my-4 justify-content-between'>
          <h1 className='fs-1 pt-3 fw-bolder'>TOP STORIES</h1>
          <a href='index.js' className='text-success fs-3 pt-4 fw-bolder border-bottom border-success'> Learn MORE</a>
        </div>
        <Row className=''>
          <div className='col-lg-4  text-center pe-4 pb-4'>
            <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img1.jpg.webp'className='img-fluid' alt=''/>
            <h4 className='fs-5 lh-base mt-4 fw-semibold text-secondary'>Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories</h4>
          </div>
          <div className='col-lg-4  text-center pe-4 pb-4'>
            <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img2.jpg.webp'className='img-fluid' alt=''/>
            <h4 className='fs-5 lh-base mt-4 fw-semibold text-secondary'>Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories</h4>
          </div>
          <div className='col-lg-4  text-center pe-4 pb-4'>
            <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img3.jpg.webp'className='img-fluid' alt=''/>
            <h4 className='fs-5 lh-base mt-4 fw-semibold text-secondary'>Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories</h4>
          </div>
        </Row>
      </Container>
    </section>

    <section className='container-fluid border-top py-5 overflow-x-hidden'>
      <Container>
      <h1 className='fs-1 lh-sm ps-5 fw-bolder my-4 lh-md text-center pt-5'>OUR PERTNERS/PARTNERS</h1>
        <p className='text-secondary ps-lg-5 fw-semibold ta text-center pt-3 pb-4'>
        Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus<br/>
        metus, sed feugiat leo posuere.
        </p>
        <Sliders/>
      </Container>
    </section>

    <section className='container-fluid py-5 overflow-x-hidden'>
      <Row>
        <div className='col-lg-6 tbo text-center'>
            <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/visit2.jpg.webp' className='img-fluid' alt=''/>
        </div>
        <div className='col-lg-6 tbo2'>
        <h1 className='fs-1 lh-sm  ps-lg-5 fw-bolder my-4 lh-md text-white'>TRUSTED BY OVER<br/>
        6000+ STUDENTS
              </h1>
              <p className='text-white  ps-lg-5 fw-semibold ta' >
              Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
              elit. Maecenas felis felis, vulputate sit amet mauris <br/>
              et, semper aliquam ligula. Integer efficitur tellus<br/>
              metus, sed feugiat leo posuere ac. Morbi vitae tincidunt malesuada massa.
              </p>
              <p className='text-white  ps-lg-5 fw-semibold mb-5 ta'>
              Maecenas felis felis, vulputate sit amet mauris et,<br/>
              semper aliquam ligula. Integer efficitur tellus metus, <br/>
              sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.
              </p>
              <div className='pb-4'>
              <span className='text-white fs-5  ms-lg-5 fw-bolder border-bottom border-white'>Join Now</span>
              </div>
              
        </div>
      </Row>
    </section>
    <footer className='container-fluid pt-5 overflow-x-hidden'>
        <Container className=''>
          <Row className=' border-bottom border-secondary py-5 pb-5 '>
            <div className='col-lg-2 col-md-4 pb-5'>
              <img src='https://preview.colorlib.com/theme/universityedu/assets/img/logo/logo2_footer.png.webp' alt='' className='img-fluid'/>
            </div>
            <div className='col-lg-2 col-md-4 pb-4'>
              <h1 className='text-white'>Quick Links</h1>
              <ul>
                <li className='text-secondary fs-5 fw-semibold py-3'>Work</li>
                <li className='text-secondary fs-5 fw-semibold py-3'>Services</li>
                <li className='text-secondary fs-5 fw-semibold py-3'>Products</li>
                <li className='text-secondary fs-5 fw-semibold py-3'>Tips & Tricks</li>   
              </ul>
            </div>
            <div className='col-lg-2 col-md-4 pb-4'>
            <h1 className='text-white'>Programs</h1>
              <ul>
                <li className='text-secondary fs-5 fw-semibold py-3'>Air freight</li>
                <li className='text-secondary fs-5 fw-semibold py-3'>Ocean freight</li>
                <li className='text-secondary fs-5 fw-semibold py-3'>Large projects</li> 
              </ul>
            </div>
            <div className='col-lg-2 col-md-4 pb-4'>
               <h1 className='text-white'>Resourses</h1>
              <ul>
                <li className='text-secondary fs-5 fw-semibold py-3'>FAQ</li>
                <li className='text-secondary fs-5 fw-semibold py-3'>Submit Ticket</li>
                <li className='text-secondary fs-5 fw-semibold py-3'>Contact Us</li> 
              </ul>
            </div>
            <div className='col-lg-4 col-md-6 pb-4'>
              <h1 className='text-white'>Newsletter</h1>
              <p className='text-secondary fs-5 fw-semibold py-3'>Subscribe newsletter to get updates.</p>
              <div className="input-group mb-3 ">
                <input type="text" className="form-control py-3" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary bg-success text-white px-4 fw-semibold fs-3" type="button" id="button-addon2">Send</button>
              </div>
            
            </div>
          </Row>
          <Row>
            <p className='text-center text-secondary fs-5 mt-4 fw-semibold'>Copyright ©2023 All rights reserved | <span className='mx-1'><FontAwesomeIcon icon={faHeart} spinPulse style={{color: "#219143"}} /></span>This template is made with  by <span className='text-success'>Colorlib</span></p>
          </Row>
        </Container>
    </footer>





    </div>
  );
}

export default App;