import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center border-b border-pink-200 pb-4">
          <div className="font-medium text-xl text-pink-700">Portfolio</div>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-pink-600 hover:text-pink-800 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-pink-600 hover:text-pink-800 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-pink-600 hover:text-pink-800 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-pink-600 hover:text-pink-800 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 flex flex-col items-center justify-center text-center relative">
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-200"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rotate-45"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-200 rounded-lg"></div>
            <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-mint-200 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-yellow-100"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-light text-pink-700 mb-4">Your Name</h1>
          <p className="text-xl text-purple-600 mb-8 max-w-md">
            Frontend Developer & Designer creating minimal, beautiful digital experiences
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-pink-200 text-pink-800 rounded-full hover:bg-pink-300 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-lavender-300 text-lavender-600 rounded-full hover:bg-lavender-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 border-4 border-blue-200 rounded-full -m-3"></div>
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Your Name"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-light text-pink-700 mb-6">About Me</h2>
            <p className="text-purple-700 mb-4 leading-relaxed">
              Hello! I'm a passionate frontend developer with a love for clean, minimal design and intuitive user
              experiences. My approach combines technical expertise with an eye for design, creating websites that are
              both functional and beautiful.
            </p>
            <p className="text-purple-700 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, experimenting with digital art, or
              enjoying the outdoors. I believe in continuous learning and pushing the boundaries of what's possible on
              the web.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-light text-pink-700 mb-12 text-center">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "HTML", level: 90, color: "pink" },
              { name: "CSS", level: 85, color: "blue" },
              { name: "JavaScript", level: 80, color: "lavender" },
              { name: "React", level: 85, color: "mint" },
              { name: "UI/UX", level: 75, color: "yellow" },
              { name: "Figma", level: 70, color: "purple" },
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-20 h-20 bg-${skill.color}-100 rounded-lg flex items-center justify-center mb-4 hover:bg-${skill.color}-200 transition-colors`}
                >
                  <div
                    className={`w-12 h-12 bg-${skill.color}-200 rounded-md rotate-45 hover:rotate-0 transition-transform duration-300`}
                  ></div>
                </div>
                <p className="text-purple-700 font-medium">{skill.name}</p>
                <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                  <div
                    className={`h-full bg-${skill.color}-300 rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-light text-pink-700 mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "E-commerce Website", desc: "A minimal online store with clean UI", color: "pink" },
              { title: "Portfolio Template", desc: "Customizable portfolio for creatives", color: "blue" },
              { title: "Weather App", desc: "Minimalist weather dashboard", color: "lavender" },
              { title: "Task Manager", desc: "Simple and elegant to-do application", color: "mint" },
              { title: "Recipe Finder", desc: "Search and save your favorite recipes", color: "yellow" },
              { title: "Travel Blog", desc: "Share your adventures with style", color: "purple" },
            ].map((project, index) => (
              <div
                key={index}
                className={`bg-${project.color}-50 border border-${project.color}-100 p-6 rounded-lg hover:shadow-md transition-shadow group`}
              >
                <div className="aspect-video bg-white rounded mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl text-pink-700 mb-2">{project.title}</h3>
                <p className="text-purple-600 mb-4">{project.desc}</p>
                <div className="flex justify-between items-center">
                  <Link href="#" className="text-sm text-pink-600 hover:text-pink-800 flex items-center gap-1">
                    View Project <ExternalLink size={14} />
                  </Link>
                  <Link href="#" className="text-sm text-purple-600 hover:text-purple-800 flex items-center gap-1">
                    Code <Github size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-light text-pink-700 mb-12 text-center">Get In Touch</h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-purple-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-purple-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-purple-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-pink-200 text-pink-800 rounded-full hover:bg-pink-300 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="bg-lavender-50 border border-lavender-100 p-8 rounded-lg">
                <h3 className="text-xl text-pink-700 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <Mail size={18} className="text-pink-600" />
                    </div>
                    <div>
                      <p className="text-purple-700">Email</p>
                      <a href="mailto:hello@example.com" className="text-pink-600 hover:text-pink-800">
                        hello@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Linkedin size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-purple-700">LinkedIn</p>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800"
                      >
                        linkedin.com/in/yourname
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Github size={18} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-purple-700">GitHub</p>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800"
                      >
                        github.com/yourname
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8 border-t border-pink-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-purple-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@example.com" className="text-pink-600 hover:text-pink-800">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

