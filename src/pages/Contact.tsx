
import { useState } from "react";
import { Mail, Phone, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "תודה על פנייתך",
      description: "נחזור אליך בהקדם האפשרי",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "נרשמת בהצלחה",
      description: "תודה שהצטרפת לניוזלטר שלנו",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">צור קשר</h1>
      
      {/* Contact Form Section */}
      <div className="max-w-2xl mx-auto mb-16 bg-white rounded-lg shadow-sm p-8 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-center">טופס יצירת קשר</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">שם מלא</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">דוא״ל</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">טלפון</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">הודעה</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sbrt-800 text-white py-3 rounded-md hover:bg-sbrt-700 transition-colors"
          >
            שלח הודעה
          </button>
        </form>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-2xl mx-auto mb-16 bg-sbrt-50 rounded-lg p-8 border border-sbrt-100">
        <h2 className="text-2xl font-semibold mb-6 text-center">הרשמה לניוזלטר</h2>
        <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
          <input
            type="email"
            placeholder="הזן את כתובת המייל שלך"
            className="flex-1 p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-sbrt-800 text-white px-6 py-3 rounded-md hover:bg-sbrt-700 transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            הרשמה
          </button>
        </form>
      </div>

      {/* Community Section */}
      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">הצטרפות לקהילה ולמפגשים</h2>
        <div className="text-center">
          <p className="text-lg mb-4">
            הצטרפו לקהילת SBRT ותהיו חלק מקבוצה תומכת ומעצימה
          </p>
          <button className="bg-sbrt-800 text-white px-8 py-3 rounded-md hover:bg-sbrt-700 transition-colors">
            הצטרפו לקהילה
          </button>
        </div>
      </div>

      {/* Contact Info & Social Media */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">דרכי התקשרות נוספות</h2>
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-sbrt-600" />
            <span>info@sbrt.co.il</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-sbrt-600" />
            <span>03-1234567</span>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-sbrt-600 hover:text-sbrt-800 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-sbrt-600 hover:text-sbrt-800 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-sbrt-600 hover:text-sbrt-800 transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
