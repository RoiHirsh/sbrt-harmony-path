
import { Building2, ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">חיבורים ושיתופי פעולה</h1>
      
      {/* Introduction */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-xl text-sbrt-600">
          אנו גאים לעבוד בשיתוף פעולה עם ארגונים מובילים בתחום הבריאות הנפשית, השיקום והחוסן הקהילתי, 
          כדי להרחיב את ההשפעה של SBRT ולספק כלים פרקטיים לאוכלוסיות שונות.
        </p>
      </div>

      {/* Main Partners */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">שותפים מרכזיים</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mainPartners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-sbrt-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Collaborations */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">שיתופי פעולה נוספים</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {additionalCollaborations.map((collab, index) => (
            <div 
              key={index}
              className="bg-sbrt-50 p-6 rounded-lg border border-sbrt-100"
            >
              <Building2 className="w-6 h-6 mb-4 text-sbrt-600" />
              <p className="text-sbrt-700">{collab}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Partnership Section */}
      <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4">הצטרפות לשותפות</h2>
        <p className="text-lg mb-6">
          אם אתם ארגון, עמותה או מסגרת מקצועית המעוניינת להרחיב את יכולות החוסן והוויסות שלכם באמצעות SBRT, 
          אנו מזמינים אתכם ליצור עמנו קשר ולהצטרף לרשת השותפים שלנו. יחד, נוכל להביא שינוי משמעותי לקהילות 
          ולאנשים המתמודדים עם מצבי לחץ וטראומה.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-sbrt-800 text-white px-8 py-3 rounded-md hover:bg-sbrt-700 transition-colors"
        >
          צרו קשר עם צוות SBRT
          <ArrowLeftCircle className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

const mainPartners = [
  {
    name: "NATAL - ישראל",
    description: "עמותה מובילה לתמיכה נפשית בנפגעי טראומה ומלחמה"
  },
  {
    name: "Path For Tomorrow",
    description: "ארגון לפיתוח חוסן אישי וחברתי בקרב חיילים משוחררים"
  },
  {
    name: "IDF's Reservist Support Program",
    description: "שיתוף פעולה עם יחידות מילואים לשיפור מיומנויות ויסות והתמודדות עם סטרס מבצעי"
  },
  {
    name: "Beit HaLohem",
    description: "מרכזי ספורט ושיקום לוותיקי צה\"ל עם פציעות פיזיות ונפשיות"
  },
  {
    name: "מרכזי טיפול ושיקום רפואיים",
    description: "שילוב SBRT בטיפולי פיזיותרפיה ושיקום נוירולוגי"
  },
  {
    name: "משרד הבריאות הישראלי",
    description: "בחינת שילוב SBRT ככלי משלים בטיפול בפוסט-טראומה"
  },
  {
    name: "קהילות ספורט ואומנויות לחימה",
    description: "אימונים מבוססי ויסות ועמידות נפשית בקבוצות ויחידים"
  }
];

const additionalCollaborations = [
  "הכשרות מקצועיות למטפלים ואנשי בריאות הנפש – שילוב כלים פרקטיים של SBRT בטיפולים קליניים וטיפול בתנועה",
  "תכניות שיקום בבתי חולים – פיתוח מודולים ייעודיים לאנשי מקצוע רפואיים לשימוש בכלים של ויסות וחוסן עצמי",
  "תכניות הכשרה לצוותי חירום וביטחון – מתן מענה לגורמים העוסקים בניהול מצבי לחץ ומתן סיוע ראשוני נפשי"
];

export default Partners;
