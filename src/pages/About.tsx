
import { BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">הסיפור מאחורי איתן ברוח</h1>
      
      {/* Introduction */}
      <div className="max-w-4xl mx-auto prose prose-lg rtl mb-16">
        <p className="text-xl mb-6">
          ברוכים הבאים לאיתן ברוח, שיטה פורצת דרך לפיתוח חוסן וויסות עצמי, המספקת כלים מעשיים להתמודדות עם לחץ, חרדה וטראומה. SBRT היא שיטה מבוססת מחקר המשלבת עקרונות מעולמות התנועה, הנשימה והוויסות הקוגניטיבי, כדי ליצור איזון מנטלי וגופני.
        </p>
        <p className="mb-6">
          אנו מאמינים שהגוף והנפש פועלים בהרמוניה, ולכן אנו מציעים כלים יישומיים המסייעים בהתמודדות עם מצבי דחק ומהווים בסיס ליצירת חוסן פנימי לטווח הארוך.
        </p>
      </div>

      {/* What is SBRT */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">מהו SBRT - Skill Based Resilience and Regulation Training?</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="mb-6">
            במהלך עבודתם של ערן ואיה, נוצרה אינטגרציה בין תחום מיטוב הביצועים מבוססי מצבי אמת בשטח או מיטוב ביצועים מבוססי הישג ספורטיבי, לבין עבודתה והתמחותה של איה ברט במצבי טראומה ועקה.
          </p>
          <p className="mb-6">
            דרך שילוב זה זיהינו את הפער בהנגשת ואימון מיומנויות וויסות, אשר מקרינות באופן ישיר על מיומנויות חוסן.
          </p>
          <p className="font-medium">המודל נותן מענה לשלוש אוכלוסיות מרכזיות:</p>
          <ul className="list-disc list-inside space-y-2 mt-4 mr-6">
            {targetGroups.map((group, index) => (
              <li key={index} className="text-sbrt-700">{group}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Theoretical Basis */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">בסיס תיאורטי ומדעי</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="mb-6">
            מחקר ותיאוריה עומדים בבסיס שיטת SBRT, תוך התבססות על תחומים כגון נוירופסיכולוגיה, ויסות רגשי, טראומה ואומנויות לחימה.
          </p>
          <div className="space-y-4">
            {researchSources.map((source, index) => (
              <div key={index} className="border-r-2 border-sbrt-200 pr-4">
                <p className="font-medium">{source.author}</p>
                <p className="text-sbrt-600">{source.title}</p>
                <p className="text-sbrt-500 text-sm">{source.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const targetGroups = [
  "אנשי מקצוע ומסגרות הפועלות בתנאי לחץ מתמשך",
  "אנשים העוסקים במרחבים מבוססי הישג (כגון ספורטאים ואנשי צבא)",
  "מתמודדים עם תסמינים של חרדה, לחץ ופוסט טראומה"
];

const researchSources = [
  {
    author: "Van der Kolk, B. A. (2014)",
    title: "The Body Keeps the Score",
    description: "כיצד טראומה נצרבת בגוף ומערכת העצבים"
  },
  {
    author: "Porges, S. W. (2011)",
    title: "The Polyvagal Theory",
    description: "ויסות עצבי באמצעות קשרים חברתיים"
  },
  {
    author: "Levine, P. A. (2010)",
    title: "In an Unspoken Voice",
    description: "שחרור טראומה דרך גוף ותנועה"
  },
  {
    author: "Miyamoto Musashi (1645)",
    title: "The Book of Five Rings",
    description: "אסטרטגיות ויסות ושליטה עצמית"
  },
  {
    author: "Craig, A. D. (2009)",
    title: "Interoception and Emotional Regulation",
    description: "חשיבות המודעות הגופנית בוויסות רגשי"
  },
  {
    author: "Diamond & Lee (2011)",
    title: "Motor Coordination and Emotional Resilience",
    description: "השפעת קואורדינציה על וויסות רגשי"
  }
];

export default About;
