
const Index = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 font-rubik">
          אֵיתָן בָּרוּחַ - S.B.R.T ויסות וחוסן
        </h1>
        <p className="text-xl text-sbrt-600 max-w-3xl mx-auto mb-8">
          ברוכים הבאים לאיתן ברוח, שיטה פורצת דרך לפיתוח חוסן וויסות עצמי,
          המספקת כלים מעשיים להתמודדות עם לחץ, חרדה וטראומה
        </p>
        <button className="bg-sbrt-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all hover:bg-sbrt-700 focus:ring-2 focus:ring-sbrt-500">
          התחילו כאן - גלו איך SBRT יכול לעזור לכם
        </button>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {principles.map((principle, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
          >
            <h3 className="text-lg font-semibold mb-3">{principle.title}</h3>
            <p className="text-sbrt-600">{principle.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const principles = [
  {
    title: "יציבות ותנועתיות",
    description: "בסיס איתן כעוגן לשהייה וויסות דינאמי",
  },
  {
    title: "קוהרנטיות",
    description: "איזון בין החזקה לתנועה, שילוב סימפטי ופאראסימפטי ליצירת הרמוניה",
  },
  {
    title: "סינכרוניזציה",
    description: "חיבור בין אנשים יוצר וויסות ושינוי עמוק",
  },
  {
    title: "תפיסה תחושתית",
    description: "חידוד המודעות לגוף ולתחושות כבסיס לשליטה וניהול עצמי",
  },
];

export default Index;
