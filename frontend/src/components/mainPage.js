import heroimage from '../img/photoeditorsdk-export (8).png';
import carousel1 from '../img/23aebcc30ce72a57278086c1a901ec0d6c1d0919.png';
import carousel2 from '../img/mezzanine3_large-888x444.jpg';
import carousel3 from '../img/what_is_Internet.png';
import concertSpaceImage from '../img/concertspace.jpg';
import studyAreaImage from '../img/studyArea.jpg';

const MainPage = () =>{
    return (
        <div>
            <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/carousel/"></link>
            <link href="/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            </link>
             <img class="d-block mx-auto " src={heroimage} alt="" width="100%" ></img>
             
           <div class="px-4 py-3 my-3 text-center" >
       <h1 class="display-5 fw-bold text-body-emphasis" style = {{margin:"0", padding: "0"}}>Public libraries READme</h1>
       <br></br>
    <div class="col-lg-6 mx-auto " style = {{margin:"10", padding: "10"}}>
      <p class="lead mb-4">Public libraries <span style= {{fontWeight:"bold"}}>READme</span>  - the modern libraries all over the Finland. 
      Our libraries available in all cities in different regions of Finland. 
      We offer modern library service which includes handy internet book catalog, easy to use reservation system, 
      meeting, study and event areas, cafeteria and different facilities and equipment for customer use. </p>
      <br></br>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            <a style={{whiteSpace:"nowrap", textDecoration:"none", color: "white"}} href ="/catalog">Books catalog</a>
            </button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Reserve premises</button>
      </div>
    </div>
  </div>


  <br></br>
  <h2>Latest news</h2>
  <br></br>
  <br></br>


  <div class="container marketing">
    <div class="row">
      <div class="col-lg-4">
        <img class="bd-placeholder-img" width="100%" height="200" src= {carousel1}></img>
       <br></br>
        <h4 class="fw-normal text-start" style= {{position:"left"}}>Explore 2023 bestsellers in READme</h4>
        <p class ="text-start">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">Read more &raquo;</a></p>
      </div>
      <div class="col-lg-4">
      <img class="bd-placeholder-img" width="100%" height="200" role="img" aria-label="Placeholder: 140x140" src= {carousel2}></img>
        
        <br></br>
        <h4 class="fw-normal text-start" text="left"> New Minerva meeting room is opened</h4>
        <p class ="text-start">Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">Read more &raquo;</a></p>
      </div>
      <div class="col-lg-4">
      <img class="bd-placeholder-img" width="100%" height="200" role="img" aria-label="Placeholder: 140x140" src= {carousel3}></img>
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em"></text>

        <h4 class="fw-normal text-start">Improved internet service in READme</h4>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">Read more &raquo;</a></p>
      </div>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   

    
    <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Book a meeting room or event space in READme </h2>
            <p class="lead">All together we have 11 meeting rooms and 3 event spaces, including auditorium for up to 100 people, small concert hall (up to 200 visitors) with stage. </p>
            <br></br>
    <br></br>
    <br></br>
            <p><a class="btn btn-secondary" href="#">Book a space &raquo;</a></p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src={concertSpaceImage} alt="Generic placeholder image"></img>
          </div>
        </div>
        <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

        <div class="row featurette">
        <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src={studyAreaImage} alt="Generic placeholder image"></img>
          </div>
          <div class="col-md-7">
            <h2 class="featurette-heading">Book a meeting room or event space in READme </h2>
            <p class="lead">All together we have 11 meeting rooms and 3 event spaces, including auditorium for up to 100 people, small concert hall (up to 200 visitors) with stage. </p>
            <br></br>
    <br></br>
    <br></br>
            <p><a class="btn btn-secondary" href="#">Book a space &raquo;</a></p>
          </div>
          
        </div>


        </div>
  
        </div>
 

    )
}

export default MainPage;