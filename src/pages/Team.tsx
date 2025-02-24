
import { Users } from "lucide-react";

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">צוות ההנהלה והמנחים</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sbrt-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const team = [
  {
    name: "ערן ברט, MA",
    role: "מייסד ומדריך ראשי, מומחה באימון מבוסס תנועה וויסות גופני, בעל תואר שני בחקר סכסוכים, מו\"מ וגישור"
  },
  {
    name: "איה ברט, MA",
    role: "פסיכותרפיסטית ומדריכה בתחום הוויסות הרגשי והגופני, בעלת תואר שני בטיפול בתנועה"
  },
  {
    name: "פרופ׳ דני חורש",
    role: "ראש תחום מחקר ועניינים קליניים, חוקר טראומה ופסיכולוגיה קלינית"
  },
  {
    name: "ד״ר רוני סימונס",
    role: "פסיכולוג קליני בכיר, מלווה תהליכים טיפוליים בשיטה"
  },
  {
    name: "פרופ׳ יניב אסף",
    role: "חוקר מוח ומומחה לחיבורים עצביים"
  },
  {
    name: "עידו קניון",
    role: "חבר הנהלה, אחראי תחום פיננסים ופיתוח"
  },
  {
    name: "דייב דרייק",
    role: "חבר הנהלה, יועץ אסטרטגי ופיננסי"
  }
];

export default Team;
