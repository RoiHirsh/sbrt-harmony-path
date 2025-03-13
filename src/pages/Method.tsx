import { Brain, Users, Activity, Heart } from "lucide-react";

const Method = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">מהו מודל SBRT?</h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-xl mb-12 text-center text-sbrt-600">
          מודל העבודה sbrt נבנה בעקבות מחקרים ובהסתמכות על שיטות מתוקפות לעבודה סומטית (גופנית) עם פוסט טראומה. במרכזו – עקרון יצירת תהליכי "bottom up"  כדרך יעילה ללמד את הגוף דפוסי וויסות אשר משפיעים על מערכת העצבים ומהווים תשתית לעיבוד הטראומה.
          <br>
          </br>
          <br>
          </br>
התכנית "איתן ברוח" כוללת 12 מפגשים בהם יתרגלו המשתתפים טכניקות מעולם אומנויות הלחימה והתנועה, מיינדפולנס ותרגול נשימה. המשתתפים ירכשו מיומנויות תנועתיות ומנטליות אשר יסייעו בהטמעת תהליכי וויסות גופני על מנת להפחית תסמינים פוסט טראומטיים ולהגביר את יכולת ההסתגלות למציאות משתנה.
          </p>
          <br>
          </br>

          {/* Core Principles */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">עקרונות עבודה מבוססי מחקר: שילוב בין תנועה, ויסות רגשי, וויסות גופני-תחושתי וסנכרון נוירופלסטי</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {corePrinciples.map((principle, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="h-12 w-12 bg-sbrt-50 rounded-lg flex items-center justify-center mb-4">
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                  <p className="text-sbrt-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who is it for */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">למי מתאים המודל?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold mb-3">{audience.group}</h3>
                  <p className="text-sbrt-600">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
          <br>
          </br>
          <br>
          </br>
          <p>
          SBRT אינה רק מודל תיאורטי – אלא, מתודולוגיה פרקטית המעניקה כלים יומיומיים לשיפור איכות החיים דרך תרגול חווייתי, תנועתי וחברתי.
          </p>
        </div>
      </div>
    </div>
  );
};

const corePrinciples = [
	{
		title: "יציבות ותנועתיות",
		description: "בסיס איתן כעוגן לשהייה וויסות דינאמי."
	},
	{
		title: "קוהרנטיות",
		description: "איזון בין החזקה לתנועה, שילוב סימפטי ופאראסימפטי ליצירת הרמוניה."
	},
	{
		title: "סינכרוניזציה",
		description: "חיבור בין אנשים יוצר וויסות ושינוי עמוק."
	},
	{
		title: "תפיסה תחושתית",
		description: "חידוד המודעות לגוף ולתחושות כבסיס לשליטה וניהול עצמי."
	},
	{
		title: "מבט חומל",
		description: "אימון על גישה מאוזנת לתנועה ולחיים."
	},
	{
		title: "מעבר לעמדה אקטיבית",
		description: "פיתוח יכולת תגובה למול אתגרים אישיים וחברתיים, חיזוק תחושת שליטה ויכולת השפעה."
	},
	{
		title: "קו-רגולציה",
		description: "שימוש בקשרים בין-אישיים לתמיכה וויסות משותף."
	},
	{
		title: "משחקיות וחיוניות",
		description: "יציאה מתגובות הישרדותיות, פיתוח יכולת אקספלורציה והתנסות בטוחה."
	}
];

const howItWorks = [
  {
    title: "פיתוח תחושת קרקוע וחיבור לגוף",
    description: "תנועה מסונכרנת ככלי לשיפור הרגולציה הפיזיולוגית והרגשית"
  },
  {
    title: "העצמת תחושת ההתקדמות",
    description: "שימוש בפרקטיקות של תרגול קבוצתי המייצרות פידבק ישיר לשיפור מתמשך, ולא רק השגת הישגים חיצוניים"
  },
  {
    title: "שיפור ניהול מצבי לחץ",
    description: "יצירת סביבה תרגולית המדמה אתגרים מחיי היום-יום ומפתחת מיומנויות הסתגלות גמישות"
  }
];

const targetAudience = [
  {
    group: "",
    description: "מתמודדים עם תסמינים של חרדה, לחץ מתמשך ופוסט טראומה"
  },
  {
    group: "",
    description: "אנשי מקצוע הפועלים בתנאי לחץ מתמשך (אנשי טיפול/ כוחות הצלה/ משטרה)"
  },
  {
    group: "",
    description: "אנשים העוסקים במיטוב ביצועים בתנאי לחץ (כגון ספורטאים ואנשי צבא)"
  }
];

export default Method;
