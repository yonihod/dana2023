"use client";
import { Context } from "@/app/context/ContextProvider";
import React from "react";
const aboutMe = {
    en: `Hi nice to meet you
    Dana Galiko
    I like to learn new things, I independently learned how to build websites, create and edit videos
    
    I love what I do and above all I love to face every challenge, to think outside the box
    
    Embark on a new path and dive into each task
    
    With an emphasis on a uniform and accurate process through branding and user experience
    
    I enjoy turning complex tasks into simple, beautiful and intuitive designs
    When I'm not designing you'll find me in the kitchen improvising recipes and baking`,
    he: `
    היי, נעים להכיר
    דנה גליקו
    אני אוהבת ללמוד דברים חדשים, למדתי באופן עצמאי בניית אתרים, יצירת ועריכת סרטונים
    
    אוהבת את מה שאני עושה ובעיקר אוהבת לעמוד בפני כל אתגר, לחשוב מחוץ לקופסא
    
    לצאת לדרך חדשה ולצלול לתוך כל משימה 
    
    בדגש על תהליך אחיד ומדויק באמצעות מיתוג וחווית משתמש
    
    אני נהנית להפוך משימות מורכבות לעיצובים פשוטים, יפים ואינטואטיביים
    כשאני לא מעצבת תמצאו אותי במטבח מאלתרת מתכונים ואופה
    `
}

export default function AboutMe() {
    const { language } = React.useContext(Context);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between max-w-lg text-white text-2xl leading-loose">
            {aboutMe[language]}
        </main>
    )
}
