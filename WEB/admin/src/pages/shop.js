import React,{useState,useEffect} from 'react';

import SideBar from '../components/sideBar';
import ProductForm from '../components/shop/sectionA';
import ProductDetailsForm from '../components/shop/sectionB';
import SNRForm from '../components/shop/sectionC';
import callShopApi from '../callApi/shop';
import Slider from '../components/shop/Slider';
import DescImages from '../components/shop/sectionD';
import AboutProduct from '../components/shop/sectionE';
import Highlits from '../components/shop/sectionF';



const Shop = () => {

    const [apiCalled, setApiCalled] = useState(false);

    useEffect(() => {
        callShopApi()
            .then(res => { setApiCalled(true); change() });
    });

    const change = () => {
        const inputField = document.getElementsByClassName('input-field');

        for (let i = 0; i < inputField.length; i++) {
            const element = inputField[i].childNodes;
            if (element[0].value !== '') {
                element[1].classList.add('active');
            }
        }
    }


    return (  <>
        {apiCalled ? (  
    <div className='page shop'>
        <SideBar />
        <div className='container'>
        <Slider/>
            <ProductForm/>
            <Highlits/>
            <AboutProduct/>
            <ProductDetailsForm/>   
            <DescImages/>
            <SNRForm/>
           
           
           
        
        </div>
    </div>
    ) : null}

    
    </>);
}

export default Shop;