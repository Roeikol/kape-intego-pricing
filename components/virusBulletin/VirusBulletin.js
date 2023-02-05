import { ImageUI } from "@/UIComponents/ImageUI";
import { TextUI } from "@/UIComponents/TextUI";
import styles from "./virus_bulletin.module.scss"

const awards = [
    {
        src: "/award_windows.jpg",
        alt: "windows award",
        width: 72.5,
        height: 89
    },
    {
        src: "/award_gold.jpg",
        alt: "gold award",
        width: 62.15,
        height: 89
    },
    {
        src: "/award_blue.jpg",
        alt: "blue award",
        width: 60.32,
        height: 89
    },
    {
        src: "/award_excellent.jpg",
        alt: "excellent award",
        width: 90.01,
        height: 89
    },
    {
        src: "/award_vb.jpg",
        alt: "vb award",
        width: 60.37,
        height: 89
    }
];

export const VirusBulletin = () => {
    return(<>
        <div className={styles.mainContainerDesktop}>
            <TextUI text="Virus Bulletin intego AV Report" color="#2E2E39" size="36px" weight="700" marginBottom="24px" className={styles.mainTitle} />
            <div className={styles.subContainer}>
                <div className={styles.awardsContainer}>
                    <TextUI text="Awards" marginBottom="17px" size="22px" weight="700" />
                    <div className={styles.awards}>
                        {awards.map((award, index) => {
                            return <ImageUI key={index} src={award.src} alt={award.alt} width={award.width} height={award.height} />
                        })}
                    </div>
                </div>
                <div className={styles.testResultsContainer}>
                    <TextUI text="VB Detailed Test Results" size="22px" weight="700" marginBottom="17px" />
                    <div className={styles.testResultsSubContainer}>
                        <div>
                            <TextUI text="Performance" size="16px" marginBottom="24px" />
                            <TextUI text="100%" size="24px" weight="700" />
                        </div>
                        <div className={styles.separator}></div>
                        <div>
                            <TextUI text="Protection" size="16px" marginBottom="24px" />
                            <TextUI text="100%" size="24px" weight="700" />
                        </div>
                    </div>
                </div>
                <ImageUI src={"/awards_blue_gradient_desktop.png"} alt="blue gradient" width="285" height="154" className={styles.blueGradient} imageClassName={styles.blueGradientRadius} />
            </div>
        </div>
        <div className={styles.mainContainerMobile}>
            <TextUI text="Virus Bulletin Awards" color="#2E2E39" size="32px" weight="700" marginBottom="30px" textAlign="center" />
            <div className={styles.awardsMobile}>
                {awards.map((award, index) => {
                    return <ImageUI key={index} src={award.src} alt={award.alt} width={award.width} height={award.height} />
                })}
            </div>
            <div className={styles.testResultsMobile}>
                <div className={styles.titleAndImageMobile}>
                    <ImageUI src={awards[4].src} alt={awards[4].alt} width={awards[4].width} height={awards[4].height} />
                    <TextUI text="Detailed Test Results" size="22px" weight="700" marginBottom="17px" />
                </div>
                <div className={styles.testResultsSubContainerMobile}>
                    <div>
                        <TextUI text="Performance" size="16px" marginBottom="14px" />
                        <TextUI text="100%" size="18px" weight="700" />
                    </div>
                    <div className={styles.separator}></div>
                    <div>
                        <TextUI text="Protection" size="14px" marginBottom="24px" />
                        <TextUI text="100%" size="18px" weight="700" />
                    </div>
                </div>
                <ImageUI src={"/awards_blue_gradient_mobile.png"} alt="blue gradient" width="285" height="154" className={styles.blueGradientMobile} imageClassName={styles.blueGradientRadius} />
            </div>
        </div>
    </>);
}