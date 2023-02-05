import { ImageUI } from "@/UIComponents/ImageUI";
import { TextUI } from "@/UIComponents/TextUI";
import styles from "./experts_saying.module.scss";
import { clsx } from 'clsx';

export const ExpertsSaying = () => {
    return(<div className={styles.mainContainer}>
        <div className={styles.leftTextContainer}>
            <TextUI text={"What the experts are saying about Intego"} size="48px" weight={"700"} className={styles.mainTitle} />
            <div className={styles.textsContainer}>
                <div className={styles.textAndLogoContainer}>
                    <ImageUI src="/windows_report_logo.jpg" alt="windows report logo" width={292} height={29} marginBottom="8px" className={styles.centerLogo} />
                    <TextUI text="“Whether you have a high-end PC or a model that is several years old, Intego Antivirus will run smoothly on it and provide you with the best possible protection on the market”" size={"18px"} />
                </div>
                <div className={styles.textAndLogoContainer}>
                    <ImageUI src={"/softsonic_logo.jpg"} alt="softsonic logo" width={274} height={47} marginBottom="8px" className={styles.centerLogo} />
                    <TextUI text="“It offers secure PC protection while running smoothly on your system, so this is an excellent recommendation for any type of user.”" size={"18px"} />
                </div>
                <div className={styles.textAndLogoContainer}>
                    <ImageUI src={"/safety_detectives_logo.jpg"} alt="safety detectives logo" width={234.15} height={39} marginBottom="8px" className={styles.centerLogo} />
                    <TextUI text="“Intego Antivirus for Windows comes from a company that's famous for its Mac security products. Intego is intuitive, extremely easy to set up, and it won't slow down your PC”" size={"18px"} />
                </div>
            </div>
        </div>
        <div className={styles.rightImageContainer}>
            <img src={"/expert_man.png"} alt="man" className={clsx({[styles.expertManImage]: true, [styles.centerLogo]: true})} />
        </div>
    </div>);
}