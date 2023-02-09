'use client';
import { ImageUI } from "@/UIComponents/ImageUI";
import { TextUI } from "../../UIComponents/TextUI"
import styles from "./pricing.module.scss"
import { clsx } from 'clsx';
import { useEffect, useState } from "react";
import { PACKAGES_TYPES, PACKAGES_RESPONSE_INCLUDES } from "./constants";
import { updateUserClickedOnPackage } from "@/api/tracking";

const pricingPackages = [
    {
        id: 1,
        title: "Essential Protection",
        subTitle: "Windows PC Antivirus",
        pricePerMonth: "$1.67",
        newPriceYearly: "$19.99",
        oldPriceYearly: "$49.99",
        yearsAmount: "1",
        discount: "60%",
        isBestValue: false,
        buyNowHighlight: false,
        vpnImage: false,
        includes : {
            title: "Essential Protection includes:",
            fontSize: "small",
            features: [
                {
                    title: "Powerful malware engine: ",
                    text: "Adaptive, real-time malware engine monitors andeliminates threats before they reach your PC",
                    highlightBackground: false,
                    highlightText: false,
                },
                {
                    title: "Easy to use, easy on your PC: ",
                    text: "Intuitive and simple UI with light, customizable scans",
                    highlightBackground: false,
                    highlightText: false,
                },
                {
                    title: "Powerful malware engine: ",
                    text: "Adaptive, real-time malware engine monitors andeliminates threats before they reach your PC",
                    highlightBackground: false,
                    highlightText: false,
                },
                {
                    title: "100% malware immunity: ",
                    text: "Independent labtests show that Intego eradicates 100% of malware",
                    highlightBackground: false,
                    highlightText: false,
                },
                {
                    title: "Ransomware protection: ",
                    text: "Protects yourpersonal data from being hacked andencrypted for a ransom",
                    highlightBackground: false,
                    highlightText: false,
                }
            ]

        }
    },
    {
        id: 2,
        title: "Advanced Protection",
        subTitle: "Online Privacy Features:",
        pricePerMonth: "$2.50",
        newPriceYearly: "$29.99",
        oldPriceYearly: "$84.99",
        yearsAmount: "1",
        discount: "65%",
        isBestValue: false,
        buyNowHighlight: false,
        vpnImage: true,
        includes : {
            title: "Advanced Protection includes:",
            fontSize: "small",
            features: [
                {
                    title: "Essential  Protection Plan",
                    text: "",
                    highlightBackground: true,
                    highlightText: false,
                },
                {
                    title: "Secure Wi-Fi protection: ",
                    text: "Secure your connection when connected to public Wi-Fi or low security networks",
                    highlightBackground: false,
                    highlightText: false,
                },
                {
                    title: "Protect your Privacy: ",
                    text: "Keep yourpersonal data safe & private",
                    highlightBackground: false,
                    highlightText: false,
                },
                {
                    title: "Browse without boundaries: ",
                    text: "Intego VPN opens up the web for streaming & browsing",
                    highlightBackground: false,
                    highlightText: false,
                }
            ]

        }
    },
    {
        id: 3,
        title: "Extended Protection",
        subTitle: "Windows PC Antivirus",
        pricePerMonth: "$1.67",
        newPriceYearly: "$49.99",
        oldPriceYearly: "$169.99",
        yearsAmount: "2",
        discount: "70%",
        isBestValue: true,
        buyNowHighlight: true,
        vpnImage: true,
        includes : {
            title: "Extended Protection includes:",
            fontSize: "medium",
            features: [
                {
                    title: "Get 70% OFF!",
                    text: "",
                    highlightBackground: false,
                    highlightText: true,
                },
                {
                    title: "2 years protection",
                    text: "",
                    highlightBackground: false,
                    highlightText: false,
                },
                {
                    title: "Essential Protection Plan",
                    text: "",
                    highlightBackground: true,
                    highlightText: false,
                },
                {
                    title: "Advanced  Protection Plan",
                    text: "",
                    highlightBackground: true,
                    highlightText: false,
                },
            ]

        }
    },
]

const PriceItem = ({priceItem}) => {

    return(<div className={clsx({
        [styles.priceItemConainer]: true,
        [styles.priceItemConainerHighlight]: priceItem.buyNowHighlight,
    })}>
        <div className={styles.discountAndImageContainer}>
            <div className={clsx({
                [styles.discountContainer]: true,
                [styles.discountContainerMoreOffset]: priceItem.vpnImage,
            })}>
                <div className={styles.discountText}>
                    <TextUI text={`${priceItem.discount}%`} color="white" size="30px" textAlign="center" weight={700} />
                    <TextUI text="Discount" color="white" size="15px" textAlign="center" marginTop="-10px" />
                </div>
            </div>
            <div className={styles.antivirusImage}>
                <ImageUI src={priceItem.vpnImage ? "/intego_antivirus_vpn.png": "/intego_antivirus.png"} alt="intego antivirus" width={priceItem.vpnImage ? 188 : 115} height={179.5} priority={true}  />
            </div>
        </div>
        <div className={styles.mainInfo}>
            <div className={clsx({
                [styles.bestValueContainer]: true,
                [styles.bestValueBackground]: priceItem.isBestValue,
            })}>
                <TextUI text={priceItem.isBestValue ? "Best Value" : ""} color="#333333" size="14px" weight="700" marginBottom="auto" marginTop="auto"  marginLeft="auto" marginRight="auto" />
            </div>
            <TextUI text={priceItem.title} size="26px" weight="700" marginBottom="1px" marginTop="4px" />
            <TextUI text={priceItem.subTitle} size="15px" marginBottom="23px" />
            <TextUI text={`Only ${priceItem.pricePerMonth}/month`} color="#FF5958" size="26px" weight="700"  marginBottom="4px"  />
            <div className={styles.yearlyPrice}>
                <span>Billed </span>
                <span className={styles.yearlyNewPrice}>{priceItem.newPriceYearly} </span>
                <span className={styles.yearlyOldPrice}>{priceItem.oldPriceYearly} </span>
                <span> for the first </span>
                <span>{priceItem.yearsAmount} </span>
                <span>{`year${priceItem.yearsAmount > 1 ? "s" : ""}`}</span>
            </div>
            <button onClick={() => updateUserClickedOnPackage(priceItem.id)} className={clsx({
                [styles.buyNow]: true,
                [styles.buyNowHighlight]: priceItem.buyNowHighlight,
            })}>
                Buy Now
            </button>
            <div className={styles.moneyBackContainer}>
                <ImageUI src={"/money_back.svg"} alt="money back" width="20" height="17" marginRight="4px" marginTop="auto" marginBottom="auto" />
                <TextUI text={"30-day money back guarantee"} />
            </div>
        </div>
        <div className={styles.seprator}></div>
        <div className={styles.includesContainer}>
            <TextUI text={priceItem.includes.title} size="15px" weight="500" marginBottom="12px" />
            {
                priceItem?.includes?.features?.map((feature, index) => {
                    return <div key={index} className={clsx({
                        [styles.featureItem]: true,
                        [styles.highlightBackground]: feature.highlightBackground,
                    })}>
                        {feature.highlightBackground ?
                            <ImageUI src={"/v_icon.svg"} alt="v icon" width="14" height="11" marginRight="8px" marginLeft="18px" marginTop="auto" marginBottom="auto" />
                        :
                            <ImageUI src={"/v_icon.svg"} alt="v icon" width="14" height="11" marginRight="8px" paddingTop="5px" />
                        }
                        
                        <div className={clsx({
                        [styles.featrueTitleTextWrapperHighlight]: feature.highlightBackground,
                    })}>
                            <span className={clsx({
                                [styles.featureTitle]: true,
                                [styles.smallSizeText]: feature.size === "small",
                                [styles.MeduimSizeText]: feature.size === "medium",
                                [styles.highlightText]: feature.highlightText,
                            })}>
                                {feature.title}
                            </span>
                            <span className={clsx({
                                [styles.featureText]: true,
                                [styles.smallSizeText]: feature.size === "small",
                                [styles.MeduimSizeText]: feature.size === "medium",
                            })}>
                                {feature.text}
                            </span>
                        </div>
                     </div>
                })
            }
        </div>
        <TextUI text={"Discount applicable for the first payment only"} weight="400" size="11px" color="#7E7E9C" textAlign="center" marginTop="auto" />    
    </div>);
}




export const Pricing = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        (async ()=>{
            const response = await getPricingBundle()
            const responseValidation = validatePricingResponse(response);
            if (!responseValidation) {
                throw new Error(`HTTP error: bad response`);
            }
            updatePricing(response);
        })()
    }, []);

    const getPricingBundle = () => 
        fetch("http://localhost:3001/pricing/getPriceByBundle/*/usd",{
            method: "GET",
            headers: {
                "Authorization": "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==" //hard coded credentials for demo
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response;
        }).then((r)=>r.json());
    

    const validatePricingResponse = (response) => {
        const isValidate = PACKAGES_TYPES.map(type => {
            if(response.hasOwnProperty(type)){
                return validatePackagesIncludeContentResponse(response, type);
            }else{
                return false;
            }
         });
         return isValidate.every(element => element);
    }

    const validatePackagesIncludeContentResponse = (response, type) => {
        const isValidate = PACKAGES_RESPONSE_INCLUDES.map(element => {
           return response[type].hasOwnProperty(element);
         });
         return isValidate.every(element => element);
    }

    const updatePricing = (pricing) => {
        let tempPackages = pricingPackages;
        tempPackages[0].newPriceYearly = "$"+pricing.essential.newYearlyPrice;
        tempPackages[0].oldPriceYearly = "$"+pricing.essential.oldYearlyPrice;
        tempPackages[0].pricePerMonth = "$"+pricing.essential.monthlyPrice;
        tempPackages[0].discount = pricing.essential.discount;
        
        tempPackages[1].newPriceYearly = "$"+pricing.advanced.newYearlyPrice;
        tempPackages[1].oldPriceYearly = "$"+pricing.advanced.oldYearlyPrice;
        tempPackages[1].pricePerMonth = "$"+pricing.advanced.monthlyPrice;
        tempPackages[1].discount = pricing.advanced.discount;

        tempPackages[2].newPriceYearly = "$"+pricing.vpn_addon.newYearlyPrice;
        tempPackages[2].oldPriceYearly = "$"+pricing.vpn_addon.oldYearlyPrice;
        tempPackages[2].pricePerMonth = "$"+pricing.vpn_addon.monthlyPrice;
        tempPackages[2].discount = pricing.vpn_addon.discount;

        let tempPackagesClone = JSON.parse(JSON.stringify(tempPackages));
        setPackages(tempPackagesClone);
    }
    
    
    return(<div className={styles.main}>
        <TextUI text="Get the Ultimate Protection for your PC" size="56px" color="#FFFFFF" textAlign="center" marginBottom="14px" className={styles.mainTitle} />
        <TextUI text="Choose the best plan for your needs" size="32px" color="#FFFFFF" textAlign="center" className={styles.mainSubTitle} />
        <div className={styles.pricingPackagesContainer}>
            {packages?.map((priceItem, index) => {
                return <PriceItem key={index} priceItem={priceItem} />
            })}
        </div>
    </div>)
}