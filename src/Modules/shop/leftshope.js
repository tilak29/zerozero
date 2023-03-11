import { SimpleCarouselSlider } from 'react-simple-carousel-image-slider'
import 'react-simple-carousel-image-slider/dist/index.css'
import '../../css/shop.css'
import icon from '../../assets/images/p3.png'
import icon1 from '../../assets/images/p2.png'
import p1 from '../../assets/images/p1.png'


  const images = [
    require('../../assets/images/shopproductimg.png'),
    require('../../assets/images/shopproductimg2.png'),
    require('../../assets/images/shopproductimg3.png'),
 
  ];




const Slider = () => {
  return (
    <div>
    <SimpleCarouselSlider 
    images={images} 
    alt='' 
    width= "400px"
    height="450px" 
    background = 'yellow'
    opacity= '0.15' 
    autoplay={null}
    />
    
  <div style={{position:"relative", bottom:"30px"}}>
    <img className='pict' src={p1}  alt='img'></img>
    <img  className='pict' src={icon1}  alt='img'></img>
    <img className='pict' src={icon}  alt='img'></img>
     </div>
  
    </div>
  );
}
export default Slider;