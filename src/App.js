import './App.css';
import {BiChevronLeft} from 'react-icons/bi';
import {BiChevronRight} from 'react-icons/bi';
import { useState,useRef, useEffect } from 'react';
import people from './data.js';
import ReviewCard from './ReviewCard';

let aktifsira = 0;

function App() {

  const [veri, setVeri] = useState(people);

  const slides = useRef();

  const sagagotur = () => {
    if(aktifsira > (document.getElementsByClassName('slides')[0].children.length - 2)){
      aktifsira = 0;
    }else{
      aktifsira = aktifsira + 1;
    }

    let adet = document.getElementsByClassName('slides')[0].children.length;

    for(let x = 0; x < adet; x++){
      
      if(parseInt(document.getElementsByClassName('slides')[0].children[x].getAttribute('name')) === aktifsira){

        for(let t = 0; t < adet ; t++){
          document.getElementsByClassName('slides')[0].children[t].classList.remove('onceki');
          document.getElementsByClassName('slides')[0].children[t].classList.remove('sonraki');
          document.getElementsByClassName('slides')[0].children[t].classList.remove('merkez');
        }

        document.getElementsByClassName('slides')[0].children[x].classList.add('merkez');

        if(x === 0 ){
          document.getElementsByClassName('slides')[0].children[adet - 1].classList.add('onceki');
          document.getElementsByClassName('slides')[0].children[x + 1].classList.add('sonraki');
        }else if (x === adet - 1){
          document.getElementsByClassName('slides')[0].children[x - 1].classList.add('onceki');
          document.getElementsByClassName('slides')[0].children[0].classList.add('sonraki');
        }else{
          document.getElementsByClassName('slides')[0].children[x + 1].classList.add('sonraki');
          document.getElementsByClassName('slides')[0].children[x - 1].classList.add('onceki');
        }
      }else{
        document.getElementsByClassName('slides')[0].children[x].classList.remove('merkez');
      }


    }





  }  // sagagotur sonu


  const solagotur = () => {
    if(aktifsira < 1){
      aktifsira = document.getElementsByClassName('slides')[0].children.length - 1;
    }else{
      aktifsira = aktifsira - 1;
    }

    let adet = document.getElementsByClassName('slides')[0].children.length;
    console.log(aktifsira);

    for(let x = 0; x < adet; x++){
      
      if(parseInt(document.getElementsByClassName('slides')[0].children[x].getAttribute('name')) === aktifsira){

        for(let t = 0; t < adet ; t++){
          document.getElementsByClassName('slides')[0].children[t].classList.remove('onceki');
          document.getElementsByClassName('slides')[0].children[t].classList.remove('sonraki');
          document.getElementsByClassName('slides')[0].children[t].classList.remove('merkez');
        }

        document.getElementsByClassName('slides')[0].children[x].classList.add('merkez');
        if(x === 0 ){
          document.getElementsByClassName('slides')[0].children[adet - 1].classList.add('onceki');
          document.getElementsByClassName('slides')[0].children[x + 1].classList.add('sonraki');
        }else if (x === adet - 1){
          document.getElementsByClassName('slides')[0].children[x - 1].classList.add('onceki');
          document.getElementsByClassName('slides')[0].children[0].classList.add('sonraki');
        }else{
          document.getElementsByClassName('slides')[0].children[x + 1].classList.add('sonraki');
          document.getElementsByClassName('slides')[0].children[x - 1].classList.add('onceki');
        }

      }else{
        document.getElementsByClassName('slides')[0].children[x].classList.remove('merkez');
      }


    }

  } // solagotur sonu




  useEffect(()=>{
    let otomatik = setInterval(()=>{sagagotur()}, 2000);
  },[])



  return (
    <div className="App">
    {console.log("merkez render")}
        <div className='contentHeader'> <span className='singleDash'>/ </span><span className='headerText'> Reviews</span> </div>

        <div className='sliderArea'>
      
          <BiChevronLeft className="solTus" onClick={
            solagotur
          }/>



          <BiChevronRight className="sagTus" onClick={
            sagagotur
            }/>

          <div className='slides' ref={slides}>
          {veri.map((item, index)=>{
            return <ReviewCard key={index} uzunluk={veri.length} aktifsira={aktifsira} sira={index} username={item.name} src={item.image} job={item.title} context={item.quote} />
          })}
          </div>

        </div>
    </div>
  );
}

export default App;
