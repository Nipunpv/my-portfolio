import React from "react";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-bold mb-4">Nipun Bhagya</h1>
        <p className="text-lg text-gray-600 mb-12">Mobile Developer | Android (Java/Kotlin) & iOS (Swift)</p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a passionate mobile developer focused on creating smooth, user-friendly experiences across Android and iOS platforms. I enjoy learning new tech and bringing ideas to life through code.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">AwesomeApp</h3>
              <p className="text-gray-600 mb-4">Task manager app built with Kotlin & Jetpack Compose.</p>
              <a
                href="https://github.com/your-username/awesomeapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">SwiftWeather</h3>
              <p className="text-gray-600 mb-4">Weather app using SwiftUI & OpenWeather API.</p>
              <a
                href="https://github.com/your-username/swiftweather"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <ul className="text-gray-700 space-y-2">
            <li>🚀 Java, Kotlin, Swift</li>
            <li>📱 Android Studio, Xcode, SwiftUI, Jetpack Compose</li>
            <li>☁️ Firebase, REST APIs, Git</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Connect with Me</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2 px-4 py-2 bg-white border rounded-full shadow hover:bg-gray-50">
                <Mail size={20} />
                <span>Email</span>
              </div>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2 px-4 py-2 bg-white border rounded-full shadow hover:bg-gray-50">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </div>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2 px-4 py-2 bg-white border rounded-full shadow hover:bg-gray-50">
                <Twitter size={20} />
                <span>Twitter</span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
