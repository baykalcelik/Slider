import './reviewcard.css';
import {FaQuoteRight} from 'react-icons/fa';


export default function ReviewCard(props){

    let klasname = "";
    if(props.sira === 0) klasname = " merkez";
    if(props.sira === 1) klasname = " sonraki";
    if(props.sira === props.uzunluk - 1) klasname = " onceki";

    return( 
        
        <div className={'reviewCard'  + klasname } name={props.sira} >
        {console.log("kart render")}
                <img className='userimg' src={props.src} slt="user" />
                <p className='username'>{props.username}</p>
                <p className='job'>{props.job}</p>
                <p className='context'>{props.context}</p>
                <FaQuoteRight className='dublequote'/>
            
        </div>
    )
}