import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BrainCircuit,
  BookmarkCheck,
  ShieldCheck,
  LayoutDashboard,
  MapPin,
  ArrowRight,
  LogIn,
  Menu,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Github,
  Linkedin,
} from 'lucide-react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import './App.css'

// Animation helpers
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
}

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`sticky top-0 z-50 transition-all ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500" />
            <span className="text-lg font-semibold tracking-tight text-slate-900">InternConnect</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" end className={({isActive})=>`hover:text-slate-900 ${isActive? 'text-slate-900 font-medium':'text-slate-700'}`}>Home</NavLink>
          <NavLink to="/explore" className={({isActive})=>`hover:text-slate-900 ${isActive? 'text-slate-900 font-medium':'text-slate-700'}`}>Explore</NavLink>
          <NavLink to="/about" className={({isActive})=>`hover:text-slate-900 ${isActive? 'text-slate-900 font-medium':'text-slate-700'}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>`hover:text-slate-900 ${isActive? 'text-slate-900 font-medium':'text-slate-700'}`}>Contact</NavLink>
        </div>
        <div className="hidden md:flex">
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
            <LogIn size={16} />
            Login
          </button>
        </div>
        <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu size={20} />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            <NavLink to="/" end onClick={()=>setOpen(false)} className="text-slate-700">Home</NavLink>
            <NavLink to="/explore" onClick={()=>setOpen(false)} className="text-slate-700">Explore</NavLink>
            <NavLink to="/about" onClick={()=>setOpen(false)} className="text-slate-700">About</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)} className="text-slate-700">Contact</NavLink>
            <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-white text-sm font-medium shadow-sm" onClick={()=>setOpen(false)}>
              <LogIn size={16} />
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_0%_0%,rgba(99,102,241,0.20),transparent),radial-gradient(70%_60%_at_100%_100%,rgba(59,130,246,0.18),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 lg:grid lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="lg:col-span-6 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={fade}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            Find the Perfect Internship for Your Skills and Goals
          </motion.h1>
          <motion.p
            className="mt-5 text-lg text-slate-600 max-w-xl"
            variants={fadeUp}
            custom={1}
          >
            AI-powered internship recommendations tailored for you. Discover verified roles, save favorites, and track your applications in one place.
          </motion.p>

          <motion.div className="mt-8 flex items-center gap-3" variants={fadeUp} custom={2}>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-3 text-white font-medium shadow-sm hover:shadow-md transition-shadow"
            >
              Explore Internships
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-slate-800 font-medium bg-white/60 backdrop-blur hover:bg-white"
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div className="mt-10 flex items-center gap-6" variants={fadeUp} custom={3}>
            <div className="flex -space-x-3">
              {/* Avatars */}
              {["#fde047", "#a78bfa", "#60a5fa", "#34d399"].map((c, i) => (
                <div key={i} className="h-9 w-9 rounded-full ring-2 ring-white" style={{ backgroundColor: c }} />
              ))}
            </div>
            <p className="text-sm text-slate-600">Trusted by students from 100+ universities</p>
          </motion.div>
        </motion.div>

        {/* Right visual illustration */}
        <motion.div
          className="mt-16 lg:mt-0 lg:col-span-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <ProductMock />
        </motion.div>
      </div>
    </section>
  )
}

function ProductMock() {
  // A clean product-like mockup with cards and charts
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-200/60 via-blue-200/60 to-transparent blur-2xl" />
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-slate-900">Internship Match</h3>
            <p className="text-xs text-slate-500">Based on your skills</p>
          </div>
          <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1">87% match</span>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { role: 'Frontend Intern', company: 'NovaTech', match: 0.92 },
            { role: 'Data Science Intern', company: 'SynthLabs', match: 0.85 },
            { role: 'Product Intern', company: 'Skyline', match: 0.81 },
            { role: 'Backend Intern', company: 'OptiCore', match: 0.78 },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] text-slate-500">{item.company}</p>
                  <p className="text-sm font-medium text-slate-900">{item.role}</p>
                </div>
                <span className="text-xs text-slate-500">{Math.round(item.match * 100)}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-100">
                <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" style={{ width: `${item.match * 100}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { label: 'Saved', value: 12, color: 'from-indigo-500 to-blue-500' },
            { label: 'Applied', value: 7, color: 'from-emerald-500 to-teal-500' },
            { label: 'Interviews', value: 3, color: 'from-fuchsia-500 to-pink-500' },
          ].map((kpi, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-4">
              <div className={`h-8 w-8 rounded-lg bg-gradient-to-r ${kpi.color}`} />
              <p className="mt-3 text-2xl font-semibold text-slate-900">{kpi.value}</p>
              <p className="text-xs text-slate-500">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Features() {
  const items = [
    {
      title: 'Smart Matching',
      desc: 'AI maps your skills to roles that fit your goals.',
      icon: BrainCircuit,
    },
    {
      title: 'Save & Track',
      desc: 'Bookmark roles, track status, and never miss a deadline.',
      icon: BookmarkCheck,
    },
    {
      title: 'Verified Listings',
      desc: 'High-quality, vetted internships from trusted companies.',
      icon: ShieldCheck,
    },
    {
      title: 'Personalized Dashboard',
      desc: 'A single view for your matches, saves, and applications.',
      icon: LayoutDashboard,
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Powerful features to find your fit
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white grid place-content-center shadow-sm">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Recommendations({ title = 'Recommended Internships for You' }) {
  const jobs = [
    { role: 'Frontend Developer Intern', company: 'PixelForge', location: 'Remote' },
    { role: 'Machine Learning Intern', company: 'DataSphere', location: 'Bengaluru, IN' },
    { role: 'Product Design Intern', company: 'FrameWorks', location: 'Remote' },
    { role: 'Backend Engineer Intern', company: 'CoreStack', location: 'Hyderabad, IN' },
    { role: 'Data Analyst Intern', company: 'InsightIQ', location: 'Pune, IN' },
    { role: 'Mobile Developer Intern', company: 'AppNest', location: 'Remote' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          {title}
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={`${job.company}-${i}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{job.role}</h3>
                  <p className="text-sm text-slate-600">{job.company}</p>
                </div>
                <span className="rounded-full bg-indigo-50 text-indigo-700 text-xs px-2 py-1">Featured</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={16} /> {job.location}
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-slate-400">
                  Apply Now
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    {
      name: 'Aarav Sharma',
      quote:
        'InternConnect helped me find a remote frontend internship aligned with my React skills in days. The dashboard tracking is a game changer!',
      color: 'bg-gradient-to-br from-indigo-500 to-blue-500',
    },
    {
      name: 'Sara Ali',
      quote:
        'The recommendations felt truly personalized. I landed interviews at two companies I love with clear next steps.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-pink-500',
    },
    {
      name: 'Rohit Verma',
      quote:
        'Verified listings gave me confidence. I saved roles, tracked applications, and finally got an offer!',
      color: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Student Stories
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
            >
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${t.color}`} />
                <div>
                  <p className="text-sm font-medium text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">Placed Intern</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-700 leading-relaxed">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-white/90" />
            <span className="text-lg font-semibold tracking-tight">InternConnect</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#" className="hover:underline underline-offset-4">Privacy</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="opacity-90">© {new Date().getFullYear()} InternConnect. All rights reserved.</p>
          <p className="opacity-90">Built with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Recommendations />
      <Testimonials />
    </>
  )
}

function ExplorePage() {
  return (
    <>
      <section className="pt-16 pb-2 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 className="text-4xl font-semibold tracking-tight text-slate-900" initial="hidden" animate="visible" variants={fadeUp}>
            Explore Internships
          </motion.h1>
          <p className="mt-3 text-slate-600">Browse curated roles across engineering, data, design, and product.</p>
        </div>
      </section>
      <Recommendations title="Top Picks This Week" />
    </>
  )
}

function AboutPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">About InternConnect</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          InternConnect helps students discover verified internships tailored to their skills and goals.
          With smart matching, a personalized dashboard, and seamless tracking, we streamline your journey from search to offer.
        </p>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Contact</h1>
        <p className="mt-4 text-slate-600">Questions or feedback? We’d love to hear from you.</p>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-700">Email: support@internconnect.example</p>
        </div>
      </div>
    </section>
  )
}

function NotFoundPage() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-5xl font-semibold text-slate-900">404</h1>
      <p className="mt-3 text-slate-600">Page not found.</p>
      <div className="mt-6">
        <Link to="/" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-slate-400">Go Home</Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <OwnerFooter />
    </div>
  )
}

// Enhanced footer with owner details
function OwnerFooter() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-white/90" />
            <span className="text-lg font-semibold tracking-tight">InternConnect</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#" className="hover:underline underline-offset-4">Privacy</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-base font-semibold">Nihal kumar singh</h3>
            <ul className="mt-4 space-y-2 opacity-95">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:nihalsinghwithroman@gmail.com" className="hover:underline underline-offset-4">nihalsinghwithroman@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+917479808459" className="hover:underline underline-offset-4">7479808459</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold">Profiles</h3>
            <ul className="mt-4 space-y-2 opacity-95">
              <li className="flex items-center gap-2">
                <Globe size={16} />
                <a href="https://nihaldevelop.netlify.app/" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">Portfolio</a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} />
                <a href="https://github.com/nihalsingh571" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">GitHub</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="https://www.linkedin.com/in/nihal-kumar-singhdeveloper/" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold">Coding</h3>
            <ul className="mt-4 space-y-2 opacity-95">
              <li className="flex items-center gap-2">
                <a href="https://www.geeksforgeeks.org/user/nihalkroz2/" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">GeeksforGeeks</a>
              </li>
              <li className="flex items-center gap-2">
                <a href="https://leetcode.com/u/Nihalkumarsingh112/" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">LeetCode</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="opacity-90">Copyright {new Date().getFullYear()} InternConnect. All rights reserved.</p>
          <p className="opacity-90">Built with love using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
