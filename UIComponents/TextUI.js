'use client';
import { useEffect, useState } from 'react';

export const TextUI = ({text, textAlign, size, weight, color, paddingTop, paddingBottom, paddingLeft, paddingRight, marginTop, marginBottom, marginLeft, marginRight, className}) => {
    
    const [style, setStyle] = useState();

    useEffect(() => {
        setStyle({
            textAlign: textAlign ?? "",
            fontSize: size ?? "", 
            fontWeight: weight ?? "", 
            color: color ?? "", 
            paddingTop: paddingTop ?? "",
            paddingBottom: paddingBottom ??  "",
            paddingLeft: paddingLeft ?? "",
            paddingRight: paddingRight ??  "",
            marginTop: marginTop ??  "",
            marginBottom: marginBottom ?? "",
            marginLeft: marginLeft ?? "",
            marginRight: marginRight ?? "",
        });
    },[])

    return(<div className={className} style={style}>
            {text}
        </div>)
}