import { BookOpen, Mail, ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">תוכניות והכשרות</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-12 text-center text-sbrt-600">
          תכניות מותאמות לארגונים, אנשי מקצוע וליחידים
        </p>

        {/* Introduction */}
        <div className="mb-16 text-lg text-center">
          <p className="mb-6">
            <strong>SBRT </strong> מציעה מגוון תוכניות והכשרות מקצועיות, המותאמות ליחידים, צוותים וארגונים המעוניינים להטמיע כלים של ויסות רגשי וחוסן במערכות עבודה ובחיים האישיים.
          </p>
          <p>
            אל תשארו לבד עם הטראומה, הצטרפו לקבוצת תרגול "איתן ברוח"
          </p>
          <br>
          </br>
          <h3>
            התוכניות שלנו:
          </h3>
        </div>

        {/* Training Programs */}
        <div className="space-y-12 mb-16">
          {trainingPrograms.map((program, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-sbrt-600 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                  <p className="text-sbrt-600 mb-4">{program.description}</p>
                  {program.details && (
                    <ul className="space-y-2 text-sbrt-700">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-sbrt-400 mt-1">▪</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-sbrt-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">מעוניינים להצטרף?</h2>
          <p className="text-lg mb-6">
            אנו מזמינים אתכם לקחת חלק בתוכניות שלנו ולשלב את SBRT ככלי משמעותי לשיפור איכות החיים, 
            התמודדות עם סטרס וחיזוק החוסן האישי והמקצועי.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-sbrt-800 text-white px-8 py-3 rounded-md hover:bg-sbrt-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
            צור קשר למידע נוסף והרשמה
          </Link>
        </div>
      </div>
    </div>
  );
};

const trainingPrograms = [
	{
		title: "איתן ברוח לאנשי מילואים",
		description: "",
		details: []
	},
	{
		title: "איתן ברוח בבתי ספר",
		description: "",
		details: []
	},
	{
		title: "שכפץ מנטלי- איתן ברוח לכוחות הביטחון",
		description: "",
		details: []
	},
	{
		title: "איתן ברוח, ארגז כלים לאנשי טיפול",
		description: "",
		details: []
	},
	{
		title: "איתן ברוח, תמיכה לצוותים רפואיים",
		description: "",
		details: []
	},
	{
		title: "תכנית הכשרת מדריכי  איתן ברוח",
		description: "תכנית בת שלושה שלבים:",
		details: [
			"מבוא לעוסקים בתנועה ולחימה מיודעת טראומה – הכשרה תיאורטית ומעשית.",
			"חלק מעשי אינטגרטיבי למודל איתן ברוח – התנסות ישירה ותרגול בקבוצות קטנות.",
			"פרקטיקום ועבודה מעשית – פיתוח מיומנויות הנחייה וליווי אישי."
		]
	}
];

export default Programs;
