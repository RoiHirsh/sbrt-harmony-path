
import { Video, BookOpen, BookText } from "lucide-react";
import { Link } from "react-router-dom";

const Practice = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">תרגול אישי וכלים</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-12 text-center text-sbrt-600">
          כלים מעשיים לוויסות וחוסן
        </p>

        {/* Introduction */}
        <div className="mb-16 text-lg text-center">
          <p>
            SBRT מציעה מגוון תרגולים להעמקת החוסן האישי, לשיפור המודעות וליצירת איזון פיזי ומנטלי.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Guided Practice Videos */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-sbrt-50 rounded-lg flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-sbrt-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">תרגול אישי מודרך</h3>
            <p className="text-sbrt-600 mb-4">
              סרטוני הדרכה מפורטים המציגים תרגילים ותהליכי עבודה מעשיים.
            </p>
            <Link 
              to="#" 
              className="text-sbrt-800 font-medium hover:text-sbrt-600 transition-colors inline-flex items-center gap-2"
            >
              צפה בסרטונים
              <span>→</span>
            </Link>
          </div>

          {/* Online Courses */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-sbrt-50 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-sbrt-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">הדרכות אונליין</h3>
            <p className="text-sbrt-600 mb-4">
              קורסים דיגיטליים מעמיקים המאפשרים למידה בקצב אישי.
            </p>
            <Link 
              to="#" 
              className="text-sbrt-800 font-medium hover:text-sbrt-600 transition-colors inline-flex items-center gap-2"
            >
              עבור לקורסים
              <span>→</span>
            </Link>
          </div>

          {/* Articles and Blog */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-sbrt-50 rounded-lg flex items-center justify-center mb-4">
              <BookText className="w-6 h-6 text-sbrt-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">מאמרים ובלוג</h3>
            <p className="text-sbrt-600 mb-4">
              תוכן עדכני ומחקרי בנושאי ויסות וחוסן נפשי.
            </p>
            <Link 
              to="#" 
              className="text-sbrt-800 font-medium hover:text-sbrt-600 transition-colors inline-flex items-center gap-2"
            >
              קרא עוד
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-sbrt-50 p-6 rounded-lg text-center">
          <p className="text-lg text-sbrt-700">
            תכנים נוספים יתווספו בקרוב. עקבו אחר העדכונים שלנו!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practice;
