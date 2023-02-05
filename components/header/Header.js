import styles from "./header.module.scss";
import { IntegoLogo } from "../IntegoLogo/IntegoLogo"
import { TextUI } from "../../UIComponents/TextUI"
import { ImageUI } from "@/UIComponents/ImageUI";

export const Header = () => {
    return(
        <div className={styles.main}>
            <div className={styles.topBarBlur}></div>
                <div className={styles.topBar}>
                    <IntegoLogo priority={true} className={styles.integoLogo} />
                    <div className={styles.rateContainer}>
                        <ImageUI src={"/trustpilot_logo.svg"} alt={"trustpilot logo"} width="69" height="17" priority={true} marginBottom="2px" />
                        <TextUI text={"Our customers rate us"} size={"20px"} color={"#FFFFFF"} marginBottom="2px" />
                        <div className={styles.excelletRate}>
                            <TextUI text={"Excellent"} size={"20px"} color={"#FFFFFF"} marginRight="16px" />
                            <ImageUI src={"/five_stars.jpg"} alt={"five stars"} width="110" height="20" priority={true} />
                    </div>
                </div>
            </div>
        </div>
        );
}