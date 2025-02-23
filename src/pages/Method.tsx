
import { Brain, Users, Activity, Heart } from "lucide-react";

const Method = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">מהי שיטת SBRT?</h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-xl mb-12 text-center text-sbrt-600">
            SBRT היא גישה אינטגרטיבית לפיתוח חוסן וויסות עצמי
          </p>

          {/* Core Principles */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">עקרונות מרכזיים</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {corePrinciples.map((principle, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="h-12 w-12 bg-sbrt-50 rounded-lg flex items-center justify-center mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                  <p className="text-sbrt-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">איך זה עובד?</h2>
            <p className="text-lg mb-6">
              SBRT משלב בין תרגולים סומטיים, נשימה מודעת, עבודה קבוצתית וחוויית תנועה מבוססת אומנויות לחימה.
            </p>
            <div className="space-y-4">
              {howItWorks.map((item, index) => (
                <div key={index} className="bg-sbrt-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sbrt-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who is it for */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">למי זה מתאים?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold mb-3">{audience.group}</h3>
                  <p className="text-sbrt-600">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Background */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">רקע מחקרי</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="mb-6">
                SBRT מבוסס על מחקרים מתחום הנוירופסיכולוגיה, חקר המוח ואומנויות התנועה, המדגימים כיצד תרגול פיזי ומנטלי משפיע על:
              </p>
              <div className="space-y-4">
                {researchBackground.map((research, index) => (
                  <div key={index} className="border-r-2 border-sbrt-200 pr-4">
                    <h3 className="font-semibold mb-2">{research.topic}</h3>
                    <p className="text-sbrt-600">{research.description}</p>
                    <p className="text-sbrt-500 text-sm mt-1">{research.citation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const corePrinciples = [
  {
    title: "ויסות רגשי",
    description: "ניהול רגשות, פיתוח מודעות למצבים פנימיים ולמידת תגובות אדפטיביות למצבי לחץ",
    icon: <Heart className="w-6 h-6 text-sbrt-600" />
  },
  {
    title: "ויסות גופני-תחושתי",
    description: "איזון מערכת העצבים באמצעות נשימה ותנועה, חיבור הגוף לתודעה ולשיפור ניהול האנרגיה הפנימית",
    icon: <Activity className="w-6 h-6 text-sbrt-600" />
  },
  {
    title: "ויסות חברתי",
    description: "שימוש בקשרים בין-אישיים כתהליך של קו-רגולציה, בניית רשת תמיכה ותחושת ביטחון בסביבה חברתית",
    icon: <Users className="w-6 h-6 text-sbrt-600" />
  },
  {
    title: "גמישות נוירופלסטית",
    description: "חיזוק דפוסים עצביים, למידת תגובות חדשות והתאמה למצבים משתנים דרך חוויות תרגול שונות",
    icon: <Brain className="w-6 h-6 text-sbrt-600" />
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
    group: "יחידים",
    description: "המעוניינים לרכוש כלים להתמודדות עם מצבי סטרס ולשפר את יכולת הוויסות העצמי שלהם"
  },
  {
    group: "קבוצות תרגול",
    description: "המעוניינות לפתח תחושת שייכות ותמיכה דרך תרגול משותף, תוך למידה זה מזה"
  },
  {
    group: "צוותים רפואיים ואנשי מקצוע",
    description: "עובדים בתנאי לחץ המעוניינים לשלב מיומנויות של ויסות גופני ונפשי בעבודתם היומיומית"
  },
  {
    group: "אנשי ביטחון ואוכלוסיות חשופות ללחץ מתמשך",
    description: "מתן כלים לניהול תגובות במצבי חירום ובתנאי שטח מורכבים"
  }
];

const researchBackground = [
  {
    topic: "מערכת העצבים האוטונומית",
    description: "וויסות עצמי דרך נשימה ותנועה מבוקרת",
    citation: "Porges, 2011"
  },
  {
    topic: "התמודדות עם סטרס וטראומה",
    description: "חיזוק החוסן הפיזיולוגי והרגשי דרך תהליכי למידה מבוססי תנועה",
    citation: "Van der Kolk, 2014"
  },
  {
    topic: "גמישות מוחית ונוירופלסטיות",
    description: "השפעת תרגול עקבי על מבנה ותפקוד המוח",
    citation: "Davidson & McEwen, 2012"
  },
  {
    topic: "הקשרים בין תרגול קבוצתי והעצמה אישית",
    description: "כיצד תרגול במסגרת חברתית מעודד שיפור מיומנויות וויסות",
    citation: "Schore, 2003"
  }
];

export default Method;
