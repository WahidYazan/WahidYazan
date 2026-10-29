import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  Code2, 
  Eye
} from 'lucide-react';

const GithubIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<'preview' | 'raw'>('preview');
  const [copied, setCopied] = useState(false);

  const fullMarkdown = `<div align="center">

  <h1>Hidayat Nur Wahid</h1>
  <p><strong>Full-Stack Developer</strong> &bull; <code>@WahidYazan</code></p>
  
  <p>
    Passionate about crafting scalable backend APIs, modern web applications, and intuitive user experiences.
  </p>

  <p>
    <a href="mailto:goakmal3@gmail.com"><img src="https://img.shields.io/badge/Email-goakmal3%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
    &nbsp;
    <a href="https://discord.gg/P2ttcrbxB"><img src="https://img.shields.io/badge/Discord-Community-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord Community" /></a>
    &nbsp;
    <a href="https://www.instagram.com/yazzan_sz/"><img src="https://img.shields.io/badge/Instagram-@yazzan__sz-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram" /></a>
    &nbsp;
    <a href="https://github.com/WahidYazan"><img src="https://img.shields.io/badge/GitHub-WahidYazan-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  </p>

</div>

---

### 🪪 Developer Identity

<table>
  <tr>
    <td width="50%" valign="top">
      <h4 align="left">👤 Personal Profile</h4>
      <p>
        📛 <strong>Full Name:</strong> Hidayat Nur Wahid<br />
        ⚡ <strong>Known As:</strong> <code>Yazan</code><br />
        💼 <strong>Role:</strong> Full-Stack Developer<br />
        🐧 <strong>Operating System:</strong> Windows 11<br />
        🎯 <strong>Focus:</strong> Scalable Web Applications &amp; Backend APIs
      </p>
    </td>
    <td width="50%" valign="top">
      <h4 align="left">🌐 Handles &amp; Coordinates</h4>
      <p>
        🐙 <strong>GitHub:</strong> <a href="https://github.com/WahidYazan"><code>@WahidYazan</code></a><br />
        📫 <strong>Direct Email:</strong> <a href="mailto:goakmal3@gmail.com"><code>goakmal3@gmail.com</code></a><br />
        💬 <strong>Discord:</strong> <code>yazanpet</code> &bull; <a href="https://discord.gg/P2ttcrbxB">Community Server</a><br />
        📸 <strong>Instagram:</strong> <a href="https://www.instagram.com/yazzan_sz/"><code>@yazzan_sz</code></a><br />
        🟢 <strong>Status:</strong> Active &amp; Open for Engineering Projects
      </p>
    </td>
  </tr>
</table>

---

### 👨‍💻 About Me

I am a **Full-Stack Developer** with hands-on experience building end-to-end web applications, designing database schemas, and managing self-hosted server infrastructure.

- 🔭 **Current Focus:** Building production-ready applications with **Laravel** and **Next.js**.
- 🛠️ **Languages & Core:** **TypeScript**, **JavaScript**, **PHP**, and **Java**.
- 🎨 **Frontend:** **React**, **Next.js**, and **Tailwind CSS**.
- 🗄️ **Databases:** **PostgreSQL**, **MySQL**, **MariaDB**, and **MongoDB**.
- 🐧 **Environment:** Power user of **Windows 11**, containerization with **Docker**, and virtualization with **Proxmox VE**.
- 🎯 **Philosophy:** Write readable code, understand systems end-to-end, and learn by shipping practical software.
- 💬 **Ask me about:** Full-stack architecture, REST API design, database normalization, or Linux setups.

---

### 🛠️ Tech Stack & Toolkit

<div align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,react,nextjs,tailwind,php,laravel,nodejs,java,kotlin,flutter,postgres,mysql,mongodb,linux,docker,git,github&perline=9&theme=dark" alt="Hidayat Nur Wahid Tech Stack" />
</div>

<br />

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React, Next.js, TypeScript, JavaScript, Tailwind CSS, Alpine.js |
| **Backend & APIs** | PHP, Laravel, Node.js, Java, RESTful API Architecture, Authentication |
| **Mobile Development** | Kotlin, Flutter |
| **Databases** | PostgreSQL, MySQL, MariaDB, MongoDB, SQLite |
| **DevOps & Systems** | Linux (CachyOS / Ubuntu), Docker, Proxmox VE, Git, GitHub |

---

### 📊 GitHub Activity

<div align="center">
  <a href="https://github.com/WahidYazan">
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=WahidYazan&theme=dark&background=0d1117&border=30363d&stroke=38bdf8&ring=38bdf8&fire=38bdf8&currStreakNum=38bdf8&sideNums=f0f6fc&sideLabels=8b949e&currStreakLabel=8b949e&dates=6e7681" alt="WahidYazan GitHub Streak" />
  </a>
</div>

---

<div align="center">
  <p>
    Discord Direct: <code>yazanpet</code> &bull; Server: <a href="https://discord.gg/P2ttcrbxB">discord.gg/P2ttcrbxB</a>
  </p>
  <sub>⭐️ Designed with simplicity &amp; focus &bull; <strong>Hidayat Nur Wahid</strong></sub>
</div>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col selection:bg-[#38bdf8] selection:text-[#0b0d12]">
      {/* Top Header */}
      <header className="border-b border-[#30363d] bg-[#161b22]/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-md bg-[#0d1117] border border-[#38bdf8] flex items-center justify-center text-[#38bdf8] font-mono font-bold text-xs">
              HNW
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white text-sm">Hidayat Nur Wahid</span>
              <span className="text-xs text-[#8b949e] font-mono">(@WahidYazan)</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white border border-[#30363d] transition-colors"
            >
              {copied ? <Check size={14} className="text-[#3fb950]" /> : <Copy size={14} className="text-[#38bdf8]" />}
              <span>{copied ? 'Copied!' : 'Copy README.md'}</span>
            </button>
            <a
              href="https://github.com/WahidYazan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-[#238636] hover:bg-[#2ea043] text-white transition-colors"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6 space-y-6">
        
        {/* Toggle Mode */}
        <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'preview'
                  ? 'bg-[#21262d] text-white border border-[#30363d]'
                  : 'text-[#8b949e] hover:text-[#c9d1d9]'
              }`}
            >
              <Eye size={14} />
              Preview (GitHub View)
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'raw'
                  ? 'bg-[#21262d] text-white border border-[#30363d]'
                  : 'text-[#8b949e] hover:text-[#c9d1d9]'
              }`}
            >
              <Code2 size={14} />
              Raw Markdown
            </button>
          </div>

          <span className="text-xs text-[#8b949e] font-mono">
            Target: <code className="text-[#58a6ff]">WahidYazan/README.md</code>
          </span>
        </div>

        {/* TAB 1: PREVIEW */}
        {activeTab === 'preview' && (
          <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6 sm:p-10 space-y-8 shadow-sm">
            
            {/* Pure Text Hero Header */}
            <div className="text-center space-y-3 pb-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Hidayat Nur Wahid
              </h1>
              <p className="text-sm sm:text-base text-[#cbd5e1]">
                <strong className="text-white font-semibold">Full-Stack Developer</strong>
              </p>
              <p className="text-xs sm:text-sm text-[#8b949e] max-w-xl mx-auto">
                Passionate about crafting scalable backend APIs, modern web applications, and intuitive user experiences.
              </p>

              {/* Verified Channels (Single Unified Row) */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <a href="mailto:goakmal3@gmail.com">
                  <img src="https://img.shields.io/badge/Email-goakmal3%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
                </a>
                <a href="https://discord.gg/P2ttcrbxB" target="_blank" rel="noreferrer">
                  <img src="https://img.shields.io/badge/Discord-Community-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord" />
                </a>
                <a href="https://www.instagram.com/yazzan_sz/" target="_blank" rel="noreferrer">
                  <img src="https://img.shields.io/badge/Instagram-@yazzan__sz-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram" />
                </a>
                <a href="https://github.com/WahidYazan" target="_blank" rel="noreferrer">
                  <img src="https://img.shields.io/badge/GitHub-WahidYazan-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
                </a>
              </div>
            </div>

            <hr className="border-[#30363d]" />

            {/* Developer Identity Card Layout */}
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>🪪</span> Developer Identity
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active &bull; Verified
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Column 1: Personal & Role Profile */}
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 sm:p-5 space-y-3 hover:border-[#38bdf8]/40 transition-colors">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-[#30363d] pb-2.5">
                    <span className="text-base">👤</span> Personal Profile
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-[#30363d]/40">
                      <span className="text-[#8b949e]">Full Name</span>
                      <span className="text-white font-semibold">Hidayat Nur Wahid</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-[#30363d]/40">
                      <span className="text-[#8b949e]">Known As</span>
                      <span className="text-[#38bdf8] font-mono font-medium bg-[#0d1117] px-2 py-0.5 rounded border border-[#38bdf8]/30">Yazan</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-[#30363d]/40">
                      <span className="text-[#8b949e]">Professional Role</span>
                      <span className="text-emerald-400 font-medium">Full-Stack Developer</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-[#30363d]/40">
                      <span className="text-[#8b949e]">Operating System</span>
                      <span className="text-[#cbd5e1] font-mono text-xs bg-[#0d1117] px-2 py-0.5 rounded border border-[#30363d]">Windows 11</span>
                    </div>

                    <div className="flex justify-between items-start py-1">
                      <span className="text-[#8b949e]">Core Focus</span>
                      <span className="text-right text-[#c9d1d9] text-xs max-w-[200px]">Scalable Web Apps &amp; Backend APIs</span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Handles & Coordinates */}
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 sm:p-5 space-y-3 hover:border-[#38bdf8]/40 transition-colors">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-[#30363d] pb-2.5">
                    <span className="text-base">🌐</span> Handles &amp; Coordinates
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-[#30363d]/40">
                      <span className="text-[#8b949e]">GitHub</span>
                      <a href="https://github.com/WahidYazan" target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline font-mono text-xs flex items-center gap-1">
                        @WahidYazan <ExternalLink size={11} />
                      </a>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-[#30363d]/40">
                      <span className="text-[#8b949e]">Direct Email</span>
                      <a href="mailto:goakmal3@gmail.com" className="text-[#58a6ff] hover:underline font-mono text-xs">
                        goakmal3@gmail.com
                      </a>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-[#30363d]/40">
                      <span className="text-[#8b949e]">Discord</span>
                      <div className="flex items-center gap-1.5 font-mono text-xs">
                        <span className="text-[#a5d6ff] bg-[#0d1117] px-1.5 py-0.5 rounded border border-[#30363d]">yazanpet</span>
                        <a href="https://discord.gg/P2ttcrbxB" target="_blank" rel="noreferrer" className="text-[#5865F2] hover:underline">server</a>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-[#30363d]/40">
                      <span className="text-[#8b949e]">Instagram</span>
                      <a href="https://www.instagram.com/yazzan_sz/" target="_blank" rel="noreferrer" className="text-[#E4405F] hover:underline font-mono text-xs flex items-center gap-1">
                        @yazzan_sz <ExternalLink size={11} />
                      </a>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <span className="text-[#8b949e]">Status</span>
                      <span className="text-xs text-[#3fb950] font-medium flex items-center gap-1">
                        🟢 Open for engineering projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-[#30363d]" />

            {/* About Me */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>👨‍💻</span> About Me
              </h3>
              <p className="text-sm leading-relaxed text-[#c9d1d9]">
                I am a <strong className="text-white font-semibold">Full-Stack Developer</strong> with hands-on experience building end-to-end web applications, designing database schemas, and managing self-hosted server infrastructure.
              </p>
              <ul className="text-sm space-y-2 text-[#c9d1d9]">
                <li className="flex items-start gap-2">
                  <span className="text-base leading-none">🔭</span>
                  <span><strong>Current Focus:</strong> Building production-ready applications with <strong className="text-white">Laravel</strong> and <strong className="text-white">Next.js</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-base leading-none">🛠️</span>
                  <span><strong>Languages &amp; Core:</strong> <strong className="text-white">TypeScript</strong>, <strong className="text-white">JavaScript</strong>, <strong className="text-white">PHP</strong>, and <strong className="text-white">Java</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-base leading-none">🎨</span>
                  <span><strong>Frontend:</strong> <strong className="text-white">React</strong>, <strong className="text-white">Next.js</strong>, and <strong className="text-white">Tailwind CSS</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-base leading-none">🗄️</span>
                  <span><strong>Databases:</strong> <strong className="text-white">PostgreSQL</strong>, <strong className="text-white">MySQL</strong>, <strong className="text-white">MariaDB</strong>, and <strong className="text-white">MongoDB</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-base leading-none">🐧</span>
                  <span><strong>Environment:</strong> Power user of <strong className="text-white">Windows 11</strong>, containerization with <strong className="text-white">Docker</strong>, and virtualization with <strong className="text-white">Proxmox VE</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-base leading-none">🎯</span>
                  <span><strong>Philosophy:</strong> Write readable code, understand systems end-to-end, and learn by shipping practical software.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-base leading-none">💬</span>
                  <span><strong>Ask me about:</strong> Full-stack architecture, REST API design, database normalization, or Linux setups.</span>
                </li>
              </ul>
            </section>

            <hr className="border-[#30363d]" />

            {/* Tech Stack using SkillIcons */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>🛠️</span> Tech Stack &amp; Toolkit
              </h3>

              <div className="flex justify-center p-4 rounded-xl bg-[#161b22] border border-[#30363d]">
                <img 
                  src="https://skillicons.dev/icons?i=js,ts,react,nextjs,tailwind,php,laravel,nodejs,java,kotlin,flutter,postgres,mysql,mongodb,linux,docker,git,github&perline=9&theme=dark" 
                  alt="Hidayat Nur Wahid Tech Stack"
                  className="max-w-full h-auto"
                />
              </div>

              {/* Categorized Table */}
              <div className="overflow-x-auto rounded-lg border border-[#30363d]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#161b22] text-[#8b949e] uppercase font-mono">
                    <tr>
                      <th className="py-2.5 px-4 font-semibold">Domain</th>
                      <th className="py-2.5 px-4 font-semibold">Technologies</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#30363d] font-mono text-[#c9d1d9]">
                    <tr>
                      <td className="py-2 px-4 font-semibold text-white font-sans">Frontend</td>
                      <td className="py-2 px-4">React, Next.js, TypeScript, JavaScript, Tailwind CSS, Alpine.js</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold text-white font-sans">Backend &amp; APIs</td>
                      <td className="py-2 px-4">PHP, Laravel, Node.js, Java, RESTful API Architecture, Authentication</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold text-white font-sans">Mobile Development</td>
                      <td className="py-2 px-4">Kotlin, Flutter</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold text-white font-sans">Databases</td>
                      <td className="py-2 px-4">PostgreSQL, MySQL, MariaDB, MongoDB, SQLite</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold text-white font-sans">DevOps &amp; Systems</td>
                      <td className="py-2 px-4">Linux (CachyOS / Ubuntu), Docker, Proxmox VE, Git, GitHub</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-[#30363d]" />

            {/* GitHub Stats */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>📊</span> GitHub Activity
              </h3>
              <div className="flex justify-center p-3 rounded-lg bg-[#0d1117] border border-[#30363d]">
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=WahidYazan&theme=dark&background=0d1117&border=30363d&stroke=38bdf8&ring=38bdf8&fire=38bdf8&currStreakNum=38bdf8&sideNums=f0f6fc&sideLabels=8b949e&currStreakLabel=8b949e&dates=6e7681" 
                  alt="Streak Stats"
                  className="max-w-full h-auto"
                />
              </div>
            </section>

            <hr className="border-[#30363d]" />

            {/* Footer with Discord Note */}
            <div className="text-center space-y-1 text-xs text-[#8b949e]">
              <p>
                Discord Direct: <code className="text-[#58a6ff] bg-[#161b22] px-1.5 py-0.5 rounded">yazanpet</code> &bull; Server: <a href="https://discord.gg/P2ttcrbxB" target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline">discord.gg/P2ttcrbxB</a>
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: RAW MARKDOWN */}
        {activeTab === 'raw' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white text-sm">README.md Source Code</h3>
                <p className="text-xs text-[#8b949e]">Copy and paste directly into your special repository (WahidYazan/WahidYazan).</p>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-[#238636] hover:bg-[#2ea043] text-white transition-colors"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy Entire Markdown'}</span>
              </button>
            </div>

            <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-4 font-mono text-xs text-[#c9d1d9] overflow-x-auto max-h-[600px] leading-relaxed">
              <pre>{fullMarkdown}</pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
