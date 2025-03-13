import { Link } from "react-router-dom";
import { Play, ArrowLeft, BookOpen, Users, Brain, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 font-rubik" style={{ color: "grey" }}>
        S.B.R.T
        </h1>
        <p>
        מודל אימון ייחודי להתמודדות עם מתח, חרדה ותסמיני פוסט טראומה
        </p>
        <br>
        </br>
        <p className="text-xl text-sbrt-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          הכירו את תכנית "איתן ברוח"
תכנית אימון להקניית מיומנויות וויסות וחוסן, המתבססת על תנועה, נשימה ואומנויות לחימה.
התכנית כוללת 12 מפגשי אימון קבוצתיים, המתבססים על מודל sbrt , ומעניקים כלים יישומיים להתמודדות עם מצבי דחק וליצירת חוסן פנימי ארוך טווח
        </p>
        <Link 
          to="/method" 
          className="inline-flex items-center gap-2 bg-sbrt-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all hover:bg-sbrt-700 focus:ring-2 focus:ring-sbrt-500"
        >
         התחילו כאן – להתחבר אל החוסן מחדש
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </section>

      {/* Video Preview Section */}
      <section className="mb-16">
        <div className="aspect-video max-w-4xl mx-auto bg-sbrt-100 rounded-xl overflow-hidden relative group cursor-pointer hover:shadow-lg transition-shadow">
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
            <div className="w-20 h-20 bg-sbrt-800 rounded-full flex items-center justify-center group-hover:bg-sbrt-700 transition-colors">
              <Play className="w-10 h-10 text-white fill-current" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold">
              גלו את עקרונות השיטה
            </h3>
            <p className="text-white/90">
              צפו בסרטון קצר על תהליכי העבודה והשפעת השיטה
            </p>
          </div>
        </div>
      </section>

      {/* Updated SBRT Information Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <p>SBRT הינו מודל  אינטגרטיבי לפיתוח חוסן, המבוסס על ההבנה כי מיומנויות וויסות ניתנות ללמידה, תרגול ויישום, וכי שיפור הוויסות העצמי מגביר את החוסן האישי.</p>
          <p>במודל SBRT אנו מפתחים ומחזקים מיומנויות וויסות בארבעה תחומים מרכזיים:</p>
          <p>🔹 ויסות רגשי – פיתוח מודעות למצבים פנימיים, ניהול רגשות ולמידת תגובות אדפטיביות למצבי לחץ.</p>
          <p>🔹 ויסות גופני-תחושתי – איזון מערכת העצבים באמצעות נשימה ותנועה, חיבור בין גוף לתודעה ושיפור ניהול מצבי סטרס .</p>
          <p>🔹 ויסות חברתי – שימוש בקשרים בין-אישיים ככלי לוויסות משותף (קו-רגולציה), בניית רשת תמיכה ותחושת ביטחון במרחב החברתי.</p>
          <p>🔹 גמישות נוירו פלסטית – פיתוח יכולת הסתגלות למצבים משתנים, חיזוק דפוסים עצביים ולמידת תגובות חדשות דרך חוויות תרגול מגוונות.</p>
          <p>באמצעות תרגול שיטתי ומכוון בארבעת התחומים הללו, ניתן לשפר את היכולת להתמודד עם אתגרים, להפחית עומס רגשי ופיזי ולבנות חוסן אישי לטווח הארוך.</p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">ניווט מהיר</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quickNav.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:bg-sbrt-50 flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sbrt-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

const quickNav = [
  {
    title: "השיטה",
    description: "גלו את עקרונות SBRT והמחקר שמאחוריה",
    path: "/method",
    icon: <BookOpen className="w-8 h-8 text-sbrt-600 mb-4" />
  },
  {
    title: "תרגול אישי",
    description: "התחילו את המסע שלכם עם כלים מעשיים",
    path: "/practice",
    icon: <Target className="w-8 h-8 text-sbrt-600 mb-4" />
  },
  {
    title: "המלצות",
    description: "קראו על חוויות המשתתפים שלנו",
    path: "/testimonials",
    icon: <Users className="w-8 h-8 text-sbrt-600 mb-4" />
  }
];

export default Index;
