import React, {useEffect,useState} from 'react';
import * as style from './pageSpeed.module.scss'


export const PageSpeed=({result=39})=> {
    const [textC, settextC] = useState('red');
    const [animation, setAnimation] = useState(" ");
    const [ stroke, setStroke] = useState(`0 , 360`);

    useEffect(() => {
        let i =0;
        result.toString()>49&&settextC("#ffa400") ;
        result.toString()>89&&settextC("#0cce6b") ;
        const interval= setInterval(() => {

            i>=result&&clearInterval(interval) ;
            result>1?i++:clearInterval(interval);
        }, 2500/result);
        setTimeout(() => {
            setStroke(`${360/100*result-10}, 360`);
            if(result>49){
                setAnimation('p50');
            }
            if(result>89){
                setAnimation('p90');
            }
        },200);
        return () => {
            clearInterval(interval);
        }
    }, [result])

    return <div className={style.pageSpeed}>
        <svg className="progress__svg"viewBox="0 0 120 120">
            <circle style={{strokeDasharray:stroke , animationName:animation}} className="svg-line"r="56"cx="60"cy="60"strokeWidth="8"></circle>
        </svg>
        <span style={{color:textC}} className="progress-text">{result}</span>  </div>
}