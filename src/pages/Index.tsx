import { Link } from "react-router-dom";
import { Play, ArrowLeft, BookOpen, Users, Brain, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 font-rubik" style={{ color: "grey" }}>
          אֵיתָן בָּרוּחַ - S.B.R.T ויסות וחוסן
        </h1>
        <p className="text-xl text-sbrt-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          ברוכים הבאים לאיתן ברוח, שיטה פורצת דרך לפיתוח חוסן וויסות עצמי, המספקת כלים מעשיים להתמודדות עם לחץ, חרדה וטראומה. SBRT היא שיטה מבוססת מחקר המשלבת עקרונות מעולמות התנועה, הנשימה והוויסות הקוגניטיבי, כדי ליצור איזון מנטלי וגופני.
        </p>
        <p className="text-lg text-sbrt-600 max-w-3xl mx-auto mb-8">
          אנו מאמינים שהגוף והנפש פועלים בהרמוניה, ולכן אנו מציעים כלים יישומיים המסייעים בהתמודדות עם מצבי דחק ומהווים בסיס ליצירת חוסן פנימי לטווח הארוך.
        </p>
        <Link 
          to="/method" 
          className="inline-flex items-center gap-2 bg-sbrt-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all hover:bg-sbrt-700 focus:ring-2 focus:ring-sbrt-500"
        >
          התחילו כאן - גלו איך SBRT יכול לעזור לכם
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

      {/* Principles Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">עקרונות עבודה מבוססי מחקר</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workingPrinciples.map((principle, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
            >
              {principle.icon}
              <h3 className="text-lg font-semibold mb-3">{principle.title}</h3>
              <p className="text-sbrt-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Principles */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {additionalPrinciples.map((principle, index) => (
            <div
              key={index}
              className="p-6 bg-sbrt-50 rounded-xl"
            >
              <h3 className="text-lg font-semibold mb-3">{principle.title}</h3>
              <p className="text-sbrt-600">{principle.description}</p>
            </div>
          ))}
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

const workingPrinciples = [
  {
    title: "יציבות ותנועתיות",
    description: "בסיס איתן כעוגן לשהייה וויסות דינאמי",
    icon: <Target className="w-8 h-8 text-sbrt-600 mb-4" />
  },
  {
    title: "קוהרנטיות",
    description: "איזון בין החזקה לתנועה, שילוב סימפטי ופאראסימפטי ליצירת הרמוניה",
    icon: <Brain className="w-8 h-8 text-sbrt-600 mb-4" />
  },
  {
    title: "סינכרוניזציה",
    description: "חיבור בין אנשים יוצר וויסות ושינוי עמוק",
    icon: <Users className="w-8 h-8 text-sbrt-600 mb-4" />
  },
  {
    title: "תפיסה תחושתית",
    description: "חידוד המודעות לגוף ולתחושות כבסיס לשליטה וניהול עצמי",
    icon: <BookOpen className="w-8 h-8 text-sbrt-600 mb-4" />
  }
];

const additionalPrinciples = [
  {
    title: "מבט חומל",
    description: "אימון על גישה מאוזנת לתנועה ולחיים"
  },
  {
    title: "מעבר לעמדה אקטיבית",
    description: "פיתוח יכולת תגובה למול אתגרים אישיים וחברתיים, חיזוק תחושת שליטה ויכולת השפעה"
  },
  {
    title: "קו-רגולציה",
    description: "שימוש בקשרים בין-אישיים לתמיכה וויסות משותף"
  },
  {
    title: "משחקיות וחיוניות",
    description: "יציאה מתגובות הישרדותיות, פיתוח יכולת אקספלורציה והתנסות בטוחה"
  }
];

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
