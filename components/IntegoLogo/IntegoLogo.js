import { ImageUI } from "@/UIComponents/ImageUI";

export const IntegoLogo = ({ width, height, priority, paddingTop, paddingBottom, paddingLeft, paddingRight, marginTop, marginBottom, marginLeft, marginRight, className }) => {
    return(
        <ImageUI
            src={"/intego_logo.svg"} 
            alt={"intego logo"} 
            width={width ?? "131"} 
            height={height ?? "37"} 
            priority={priority}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            marginTop={marginTop}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            marginRight={marginRight}
            className={className}
        />
        )
    }