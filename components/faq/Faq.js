'use client';
import { useState } from "react"
import { TextUI } from "@/UIComponents/TextUI"
import styles from "./faq.module.scss"
import { ImageUI } from "@/UIComponents/ImageUI";
import { clsx } from 'clsx';

export const FAQ = () => {
    const [questions, setQuestions] = useState([
        {
            title: "What are the system requirements for Intego antivirus",
            content: "System requirements for Intego Antivirus: Operating system: Windows 7 and above.",
            open: false
        },
        {
            title: "Is the trial version completley free? What’s the catch?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            open: false
        },
        {
            title: "What happen when my trial period is over?",
            content: "enim ad minim veniam, quis nostrud exercitation ullamco.",
            open: false
        },
        {
            title: "In what payment methods can I use to purchase intego antivirus",
            content: "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            open: false
        },
        {
            title: "What if i purchase Intego's premium and then regret it?",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            open: false
        },
    ]);

    const handleQuestionClick = (index) => {
        const tempQuestions = questions;
        tempQuestions[index].open = !tempQuestions[index].open;
        const cloned = JSON.parse(JSON.stringify(tempQuestions));
        setQuestions(cloned);
    }

    return(<div key={questions} className={styles.mainContainer}>
        <div className={styles.titleAndSubContainer}>
            <TextUI  size="50px" color="#333333" weight={"700"} text={"Frequently Asked Questions"} className={styles.mainTitle} />
            <TextUI size="16px" color="#000000" text={"Dicta omnes atomorum voluptatumdefinitionem petentium sit at, vel at quiscorrumpit facilisi contentiones per."} />
        </div>
        <div className={styles.questionsContainer}>
            {
                questions.map((question, index) => {
                    return question.open ? 
                    <div key={index}>
                        <div className={clsx({
                                [styles.question]: true,
                                [styles.questionOpen]: true
                            })}
                            onClick={()=>{handleQuestionClick(index)}}
                        >
                            <ImageUI src="/minus_white.svg" alt={"minus"}  width={24} height={24}  marginBottom={"auto"} marginTop={"auto"}  marginLeft={"31px"}  marginRight={"21px"} />
                            <TextUI text={question.title} marginBottom={"auto"} marginTop={"auto"} paddingRight="31px" size="16px" className={styles.questionTitle} />
                        </div>
                        <TextUI text={question.content} marginLeft={"31px"} marginTop="16px" size="14px" className={clsx({[styles.textQuestionOpen]: true,[styles.questionText]: true})} />
                    </div>
                    :
                    <div key={index}>
                        <div className={clsx({
                                [styles.question]: true,
                                [styles.questionClosed]: true
                            })}
                            onClick={()=>{handleQuestionClick(index)}}
                        >
                            <ImageUI src="/plus_black.svg" alt={"plus"} width={10} height={10} marginBottom={"auto"} marginTop={"auto"}  marginLeft={"31px"}  marginRight={"21px"} />
                            <TextUI text={question.title} marginBottom={"auto"} marginTop={"auto"} paddingRight="31px" size="16px" className={styles.questionTitle} />
                        </div>
                        <TextUI text={question.content} marginLeft={"31px"} marginTop="16px" size="14px" className={clsx({[styles.textQuestionClosed]: true,[styles.questionText]: true})} />
                    </div>
                })
            }
        </div>
    </div>);
}