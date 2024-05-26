"use client";
import Dana from "@/static/dana-static.jpg";
import Image from "next/image";
const aboutMe = `
    היי, נעים להכיר
    דנה גליקו
    אני אוהבת ללמוד דברים חדשים, למדתי באופן עצמאי בניית אתרים, יצירת ועריכת סרטונים
    
    אוהבת את מה שאני עושה ובעיקר אוהבת לעמוד בפני כל אתגר, לחשוב מחוץ לקופסא
    
    לצאת לדרך חדשה ולצלול לתוך כל משימה 
    
    בדגש על תהליך אחיד ומדויק באמצעות מיתוג וחווית משתמש
    
    אני נהנית להפוך משימות מורכבות לעיצובים פשוטים, יפים ואינטואטיביים
    כשאני לא מעצבת תמצאו אותי במטבח מאלתרת מתכונים ואופה
`;

export default function AboutMe() {
  return (
    <div className="md:flex md:flex-row gap-12 min-h-screen text-white text-2xl leading-loose md:max-w-4xl">
      <div
        className={
          "bg-gradient-to-bl md:hidden float-left from-transparent via-cyan-950/85 to-transparent px-2"
        }
      >
        <Image
          className="object-bottom rounded grayscale"
          src={Dana}
          alt="Dana Galiko"
          width={150}
          height={150}
        />
      </div>

      <div className="md:basis-1/2 hidden md:block basis-36 aspect-square h-full w-full">
        <Image src={Dana} alt="Dana Galiko" width={450} height={450} />
      </div>

      <p className="basis-1/2">{aboutMe}</p>
    </div>
  );
}
