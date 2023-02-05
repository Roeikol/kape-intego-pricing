import { TextUI } from "@/UIComponents/TextUI";
import styles from "./services.module.scss"

export const Services = () => {
    return(<div className={styles.mainContainer}>
        <div className={styles.topSection}>
            <img src="/services_two_people.png" className={styles.peopleImages} />
            <div className={styles.textContainer}>
                <TextUI size="24px" weight="700" color="#2E2E39" text="24/7 PC Protection" marginBottom={"12"} />
                <TextUI size="18px" color="#454557" text="Using the latest technology, malware engine andbehavior analysis, Intego will protect your systemaround the clock to block Malware, Spyware, Adware,Ransomware and other threats - before they attack." className={styles.longText} />
            </div>
        </div>
        <div className={styles.bottomSection}>
            <div className={styles.textContainer}>
                <TextUI size="24px" weight="700" color="#2E2E39" text="Safely Browse and Shop Online" marginBottom={"12"} />
                <TextUI size="18px" color="#454557" text="You and your family will be protected from onlinedangers with Intego Web Shield. Phishing attacks, fakewebsites, and other malware will be blocked quickly so that your PC remains safe at all times." className={styles.longText} />
            </div>
            <img src="/services_laptop_woman.png" className={styles.peopleImages} />
        </div>
    </div>);
}