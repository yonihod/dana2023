"use client";
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
    <div className="flex min-h-screen flex-col items-center justify-between md:max-w-lg text-white text-2xl leading-loose">
      {aboutMe}
    </div>
  );
}
