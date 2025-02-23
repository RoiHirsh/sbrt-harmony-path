
import { Play, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">המלצות</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-12 text-center text-sbrt-600">
          מה אומרים המשתתפים?
        </p>

        {/* Video Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">סרטוני משתתפים</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="relative group">
                <div className="aspect-video bg-sbrt-100 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-sbrt-800 rounded-full flex items-center justify-center group-hover:bg-sbrt-700 transition-colors">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-medium">{video.name}</p>
                    <p className="text-white/80 text-sm">{video.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Institutional Quotes Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">המלצות מאנשי מקצוע</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {institutionalQuotes.map((quote, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <Quote className="w-8 h-8 text-sbrt-400 mb-4" />
                <blockquote className="text-lg mb-4">
                  {quote.content}
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold">{quote.author}</p>
                  <p className="text-sbrt-600">{quote.role}</p>
                  <p className="text-sbrt-500">{quote.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const videoTestimonials = [
  {
    name: "דנה כהן",
    role: "מטפלת בתנועה",
    videoUrl: "#" // Placeholder for future video URL
  },
  {
    name: "יוסי לוי",
    role: "מדריך צוותי חירום",
    videoUrl: "#" // Placeholder for future video URL
  },
  {
    name: "מיכל שרון",
    role: "פיזיותרפיסטית",
    videoUrl: "#" // Placeholder for future video URL
  },
  {
    name: "אבי ברק",
    role: "מאמן כושר שיקומי",
    videoUrl: "#" // Placeholder for future video URL
  }
];

const institutionalQuotes = [
  {
    content: "השיטה מספקת כלים פרקטיים ויעילים להתמודדות עם מצבי לחץ. ראינו שיפור משמעותי בקרב המטופלים שלנו.",
    author: "ד״ר רונית גל",
    role: "מנהלת מחלקת שיקום",
    organization: "המרכז הרפואי תל אביב"
  },
  {
    content: "SBRT תרמה משמעותית ליכולת ההתמודדות של הצוות שלנו במצבי חירום. ההכשרה מקצועית ומעשית.",
    author: "סא״ל דני כהן",
    role: "מפקד יחידת חילוץ",
    organization: "פיקוד העורף"
  },
  {
    content: "שילוב השיטה בתוכנית השיקום הוביל לתוצאות מרשימות. המטופלים מדווחים על שיפור משמעותי ביכולת הוויסות.",
    author: "ליאת שגב",
    role: "מנהלת תוכניות שיקום",
    organization: "בית הלוחם תל אביב"
  },
  {
    content: "הגישה האינטגרטיבית של SBRT מאפשרת לנו להציע פתרון כולל ומקיף למטופלים שלנו.",
    author: "פרופ׳ יעקב נחום",
    role: "ראש המחלקה לטיפול בטראומה",
    organization: "המרכז לבריאות הנפש"
  }
];

export default Testimonials;
