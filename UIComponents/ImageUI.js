'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export const ImageUI = ({src, alt, width, height, priority, paddingTop, paddingBottom, paddingLeft, paddingRight, marginTop, marginBottom, marginLeft, marginRight, className, imageClassName}) => {
    
    const [style, setStyle] = useState();

    useEffect(() => {
        setStyle({
            display: "flex",
            paddingTop: paddingTop ?? "",
            paddingBottom: paddingBottom ?? "",
            paddingLeft: paddingLeft ?? "",
            paddingRight: paddingRight ?? "",
            marginTop: marginTop ?? "",
            marginBottom: marginBottom ?? "",
            marginLeft: marginLeft ?? "",
            marginRight: marginRight ?? "",
        });
    },[])
    
    return(<div className={className} style={style}>
        <Image src={src} alt={alt} width={width} height={height} priority={priority} className={imageClassName} />
    </div>);
}