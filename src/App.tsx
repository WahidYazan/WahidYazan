import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  Code2, 
  Eye, 
  Terminal, 
  Sparkles,
  Mail,
  MessageSquare
} from 'lucide-react';

const GithubIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<'preview' | 'raw'>('preview');
  const [copied, setCopied] = useState(false);

  const fullMarkdown = `<div align="center">

  <img src="./assets/banner.svg" alt="Hidayat Nur Wahid — Full-Stack Developer Banner" width="100%" />

  <br /><br />

  <p align="center">
    <a href="https://github.com/WahidYazan"><img src="https://img.shields.io/badge/GitHub-WahidYazan-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
    <a href="mailto:goakmal3@gmail.com"><img src="https://img.shields.io/badge/Email-goakmal3%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
    <a href="https://discord.gg/P2ttcrbxB"><img src="https://img.shields.io/badge/Discord-Community-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord Community" /></a>
    <a href="https://www.instagram.com/yazzan_sz/"><img src="https://img.shields.io/badge/Instagram-yazzan__sz-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram" /></a>
  </p>

</div>

---

### 👨‍💻 About Me

Hi there! I'm **Hidayat Nur Wahid** (also known as **Yazan**), a **Full-Stack Developer** passionate about building clean web applications, developing scalable backend systems, and crafting smooth user experiences.

- 🔭 I focus on end-to-end web development with **Laravel** and **Next.js**.
- 🛠️ Daily driver: **TypeScript**, **PHP**, **React**, and **Tailwind CSS**.
- 🗄️ Database modeling with **PostgreSQL**, **MySQL**, **MariaDB**, and **MongoDB**.
- 🐧 Linux & self-hosting enthusiast running **CachyOS**, **Docker**, and **Proxmox VE**.
- 🎯 Philosophy: Write readable code, understand systems end-to-end, and learn by shipping practical software.
- 💬 Ask me about full-stack web development, REST APIs, databases, or Linux.
- 📫 How to reach me: **[goakmal3@gmail.com](mailto:goakmal3@gmail.com)** or Discord **\`yazanpet\`**.

---

### 🛠️ Tech Stack & Toolkit

#### 💻 Frontend
<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat-square&logo=alpinedotjs&logoColor=black" alt="Alpine.js" />
</p>

#### ⚙️ Backend & API
<p align="left">
  <img src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white" alt="PHP" />
  <img src="https://img.shields.io/badge/Laravel_13-FF2D20?style=flat-square&logo=laravel&logoColor=white" alt="Laravel" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" alt="Java" />
</p>

#### 📱 Mobile Development
<p align="left">
  <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white" alt="Kotlin" />
  <img src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white" alt="Flutter" />
</p>

#### 🗄️ Databases
<p align="left">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white" alt="MariaDB" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white" alt="SQLite" />
</p>

#### 🐧 Tools & DevOps
<p align="left">
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Proxmox_VE-E57000?style=flat-square&logo=proxmox&logoColor=white" alt="Proxmox" />
</p>

---

### 📊 GitHub Activity

<div align="center">
  <a href="https://github.com/WahidYazan">
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=WahidYazan&theme=dark&background=0d1117&border=30363d&stroke=38bdf8&ring=38bdf8&fire=38bdf8&currStreakNum=38bdf8&sideNums=f0f6fc&sideLabels=8b949e&currStreakLabel=8b949e&dates=6e7681" alt="WahidYazan GitHub Streak" />
  </a>
</div>

---

### 📬 Connect With Me

<p align="center">
  <a href="mailto:goakmal3@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-goakmal3%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
  </a>
  &nbsp;
  <a href="https://discord.gg/P2ttcrbxB">
    <img src="https://img.shields.io/badge/Discord-Join_Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord Server" />
  </a>
  &nbsp;
  <a href="https://www.instagram.com/yazzan_sz/">
    <img src="https://img.shields.io/badge/Instagram-@yazzan__sz-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
  </a>
  &nbsp;
  <a href="https://github.com/WahidYazan">
    <img src="https://img.shields.io/badge/GitHub-WahidYazan-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
  </a>
</p>

<p align="center">
  <sub>Discord Username: <strong>yazanpet</strong></sub>
</p>

---

<div align="center">
  <sub>⭐️ Designed with simplicity &amp; focus · <strong>Hidayat Nur Wahid</strong></sub>
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
          <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6 sm:p-8 space-y-8 shadow-sm">
            {/* Banner */}
            <div className="rounded-lg overflow-hidden border border-[#30363d]">
              <img src="/assets/banner.svg" alt="Banner" className="w-full h-auto block" />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <a href="https://github.com/WahidYazan" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/GitHub-WahidYazan-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
              </a>
              <a href="mailto:goakmal3@gmail.com">
                <img src="https://img.shields.io/badge/Email-goakmal3%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
              </a>
              <a href="https://discord.gg/P2ttcrbxB" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/Discord-Community-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord" />
              </a>
              <a href="https://www.instagram.com/yazzan_sz/" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/Instagram-yazzan__sz-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram" />
              </a>
            </div>

            <hr className="border-[#30363d]" />

            {/* About Me */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>👨‍💻</span> About Me
              </h3>
              <p className="text-sm leading-relaxed text-[#c9d1d9]">
                Hi there! I'm <strong className="text-white">Hidayat Nur Wahid</strong> (also known as <strong className="text-white">Yazan</strong>), a <strong className="text-white">Full-Stack Developer</strong> passionate about building clean web applications, developing scalable backend systems, and crafting smooth user experiences.
              </p>
              <ul className="text-sm space-y-2 text-[#c9d1d9] list-disc list-inside">
                <li>🔭 I focus on end-to-end web development with <strong className="text-white">Laravel</strong> and <strong className="text-white">Next.js</strong>.</li>
                <li>🛠️ Daily driver: <strong className="text-white">TypeScript</strong>, <strong className="text-white">PHP</strong>, <strong className="text-white">React</strong>, and <strong className="text-white">Tailwind CSS</strong>.</li>
                <li>🗄️ Database modeling with <strong className="text-white">PostgreSQL</strong>, <strong className="text-white">MySQL</strong>, <strong className="text-white">MariaDB</strong>, and <strong className="text-white">MongoDB</strong>.</li>
                <li>🐧 Linux & self-hosting enthusiast running <strong className="text-white">CachyOS</strong>, <strong className="text-white">Docker</strong>, and <strong className="text-white">Proxmox VE</strong>.</li>
                <li>🎯 Philosophy: Write readable code, understand systems end-to-end, and learn by shipping practical software.</li>
                <li>💬 Ask me about full-stack web development, REST APIs, databases, or Linux.</li>
                <li>📫 How to reach me: <a href="mailto:goakmal3@gmail.com" className="text-[#58a6ff] hover:underline">goakmal3@gmail.com</a> or Discord <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-xs text-[#58a6ff]">yazanpet</code>.</li>
              </ul>
            </section>

            <hr className="border-[#30363d]" />

            {/* Tech Stack */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>🛠️</span> Tech Stack &amp; Toolkit
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="text-xs font-semibold text-[#8b949e] uppercase mb-1.5">💻 Frontend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
                    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
                    <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
                    <img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
                    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
                    <img src="https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat-square&logo=alpinedotjs&logoColor=black" alt="Alpine.js" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[#8b949e] uppercase mb-1.5">⚙️ Backend &amp; API</h4>
                  <div className="flex flex-wrap gap-1.5">
                    <img src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white" alt="PHP" />
                    <img src="https://img.shields.io/badge/Laravel_13-FF2D20?style=flat-square&logo=laravel&logoColor=white" alt="Laravel" />
                    <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
                    <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" alt="Java" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[#8b949e] uppercase mb-1.5">📱 Mobile Development</h4>
                  <div className="flex flex-wrap gap-1.5">
                    <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white" alt="Kotlin" />
                    <img src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white" alt="Flutter" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[#8b949e] uppercase mb-1.5">🗄️ Databases</h4>
                  <div className="flex flex-wrap gap-1.5">
                    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" />
                    <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white" alt="MariaDB" />
                    <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
                    <img src="https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white" alt="SQLite" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[#8b949e] uppercase mb-1.5">🐧 Tools &amp; DevOps</h4>
                  <div className="flex flex-wrap gap-1.5">
                    <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git" />
                    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
                    <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux" />
                    <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
                    <img src="https://img.shields.io/badge/Proxmox_VE-E57000?style=flat-square&logo=proxmox&logoColor=white" alt="Proxmox" />
                  </div>
                </div>
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

            {/* Connect */}
            <section className="space-y-3 text-center">
              <h3 className="text-lg font-bold text-white">📬 Connect With Me</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <a href="mailto:goakmal3@gmail.com">
                  <img src="https://img.shields.io/badge/Gmail-goakmal3%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
                </a>
                <a href="https://discord.gg/P2ttcrbxB" target="_blank" rel="noreferrer">
                  <img src="https://img.shields.io/badge/Discord-Join_Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
                </a>
                <a href="https://www.instagram.com/yazzan_sz/" target="_blank" rel="noreferrer">
                  <img src="https://img.shields.io/badge/Instagram-@yazzan__sz-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
                </a>
                <a href="https://github.com/WahidYazan" target="_blank" rel="noreferrer">
                  <img src="https://img.shields.io/badge/GitHub-WahidYazan-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                </a>
              </div>
              <p className="text-xs text-[#8b949e] font-mono mt-2">
                Discord Direct: <span className="text-[#58a6ff]">yazanpet</span>
              </p>
            </section>

            <div className="text-center text-xs text-[#8b949e] pt-4 border-t border-[#30363d]">
              <sub>⭐️ Designed with simplicity &amp; focus · <strong>Hidayat Nur Wahid</strong></sub>
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
