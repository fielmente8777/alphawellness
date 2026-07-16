// app/back-pain/page.tsx (Landing Page 2 - Back Pain)
'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Eyebrow from '@/components/Eyebrow'
import { contact } from '@/utils/constent'

export default function BackPainPage() {
  const spineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const buildVertebrae = (containerId: string, count: number, spacing: number, startY: number, r: number) => {
      const container = document.getElementById(containerId)
      if (!container) return []

      const verts: SVGRectElement[] = []
      const cx = containerId === 'hero-spine' ? 60 : 35

      for (let i = 0; i < count; i++) {
        const y = startY + i * spacing
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

        const disc = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
        disc.setAttribute('class', 'disc')
        disc.setAttribute('cx', String(cx))
        disc.setAttribute('cy', String(y + spacing / 2))
        disc.setAttribute('rx', '4')
        disc.setAttribute('ry', '2')
        disc.setAttribute('fill', 'rgba(227,183,154,0.15)')

        const vert = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        vert.setAttribute('class', 'vert')
        vert.setAttribute('x', String(cx - r))
        vert.setAttribute('y', String(y))
        vert.setAttribute('width', String(r * 2))
        vert.setAttribute('height', String(spacing * 0.62))
        vert.setAttribute('rx', '4')
        vert.setAttribute('fill', 'rgba(227,183,154,0.3)')

        g.appendChild(disc)
        g.appendChild(vert)
        container.appendChild(g)
        verts.push(vert)
      }
      return verts
    }

    const heroVerts = buildVertebrae('hero-spine', 12, 36, 14, 13)
    const protocolVerts = buildVertebrae('protocol-spine', 16, 30, 12, 15)

    const groupSize = Math.floor(protocolVerts.length / 4)
    const groups = [
      protocolVerts.slice(0, groupSize),
      protocolVerts.slice(groupSize, groupSize * 2),
      protocolVerts.slice(groupSize * 2, groupSize * 3),
      protocolVerts.slice(groupSize * 3),
    ]

    const steps = document.querySelectorAll('.pstep')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.getAttribute('data-idx') || '0')
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            groups[idx]?.forEach((v) => v.setAttribute('fill', '#E3B79A'))
          } else {
            entry.target.classList.remove('active')
            groups[idx]?.forEach((v) => v.setAttribute('fill', 'rgba(227,183,154,0.3)'))
          }
        })
      },
      { threshold: 0.5 }
    )

    steps.forEach((s) => observer.observe(s))

    return () => {
      steps.forEach((s) => observer.unobserve(s))
    }
  }, [])

  return (
    <div className="lp">
      <Navbar />

      {/* HERO */}
      <header className="bg-forest text-parchment py-24 md:py-28 ">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <Eyebrow color="clay">Back Pain &amp; Spine Rehabilitation</Eyebrow>
            <h1 className="text-[32px] md:text-[44px] leading-[1.12] text-[#F8F4EA] mb-[22px]">
              Move freely again.<br />Heal your spine —<br />not just mask the pain.
            </h1>
            <p className="text-base text-[#C9D2C6] max-w-[460px] mb-[34px]">
              A residential spine rehabilitation program combining Ayurveda, Kati Basti therapy, physiotherapy and functional medicine to treat back pain, slip disc and cervical spondylosis without surgery.
            </p>
            <div className="flex gap-3.5">
              <Link href="#book" className="btn-primary capitalize bg-clay text-[#2A1006]">
                   Get 30 minutes consultation free
              </Link>
              <Link href="#protocol" className="btn-ghost border border-parchment/35 text-parchment">
                See the program
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <svg viewBox="0 0 120 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[220px] h-auto">
              <line x1="60" y1="10" x2="60" y2="450" stroke="rgba(227,183,154,0.25)" strokeWidth="1" />
              <g id="hero-spine" />
            </svg>
          </div>
        </div>
      </header>

      {/* USP */}
      <div className="bg-forest-2 border-t border-[#E3B79A]/15">
        <ul className="wrap grid grid-cols-1 md:grid-cols-4">
          <li className="list-none py-[22px] px-5 text-[#DCE4DA] text-[13.5px] border-l-0 md:border-l border-[#E3B79A]/15">
            Non-surgical slip disc &amp; spine rehabilitation
          </li>
          <li className="list-none py-[22px] px-5 text-[#DCE4DA] text-[13.5px] border-l-0 md:border-l border-[#E3B79A]/15 md:border-t-0 border-t border-[#E3B79A]/15">
            Kati Basti + Ayurveda + physiotherapy integration
          </li>
          <li className="list-none py-[22px] px-5 text-[#DCE4DA] text-[13.5px] border-l-0 md:border-l border-[#E3B79A]/15 md:border-t-0 border-t border-[#E3B79A]/15">
            Built for sedentary &amp; desk-bound professionals
          </li>
          <li className="list-none py-[22px] px-5 text-[#DCE4DA] text-[13.5px] border-l-0 md:border-l border-[#E3B79A]/15 md:border-t-0 border-t border-[#E3B79A]/15">
            Doctor-led personalized recovery plan
          </li>
        </ul>
      </div>

      {/* WHY SECTION */}
      <section className="py-[88px]">
        <div className="wrap max-w-[680px]">
          <Eyebrow color="default">Why it happens</Eyebrow>
          <h2 className="text-[30px] text-forest mb-4">Back pain isn't just wear and tear. It's a signal.</h2>
          <p className="text-[15.5px] text-ink-soft max-w-[620px]">
            Years of sitting, poor posture and stress accumulate as chronic back and neck pain — often masked with painkillers rather than resolved. We combine Ayurveda spine therapies, physiotherapy and functional medicine to reduce inflammation, correct posture and rebuild the muscles that support your spine.
          </p>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-parchment-2 py-[88px]">
        <div className="wrap">
          <Eyebrow color="default">Recognize the pattern</Eyebrow>
          <h2 className="text-[28px] text-forest">Does this sound familiar?</h2>
          <div className="card-grid">
            {[
              { num: '01', title: 'Chronic lower back pain', desc: 'Pain that returns despite rest or medication.' },
              { num: '02', title: 'Slip disc &amp; sciatica', desc: 'Pain radiating from lower back to leg.' },
              { num: '03', title: 'Neck pain &amp; cervical spondylosis', desc: 'Stiffness and headaches from screen time.' },
              { num: '04', title: 'Posture-related pain', desc: 'Sitting-job back pain, IT professional strain.' },
            ].map((s, i) => (
              <div key={i} className="bg-parchment-2 p-[30px_24px]">
                <div className="mono text-[11px] text-clay-dark mb-[14px]">{s.num}</div>
                <h3 className="text-[17px] text-forest mb-2 font-medium">{s.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM BAND */}
      <div className="bg-forest text-parchment text-center py-16">
        <div className="wrap">
          <Eyebrow color="clay">The program</Eyebrow>
          <h2 className="text-[32px] text-[#F8F4EA]">Spine Vitality &amp; Pain Reversal Program</h2>
          <p className="mt-2.5 text-[#E3B79A] mono text-[12px] tracking-[0.1em]">
            ASSESS &nbsp;·&nbsp; RELIEVE &nbsp;·&nbsp; REBUILD &nbsp;&nbsp;— 14 / 21 DAYS
          </p>
        </div>
      </div>

      {/* WHO / UNIQUE */}
      <section className="py-[88px]">
        <div className="wrap split-grid">
          <div>
            <h3 className="text-[19px] text-forest mb-5">Who this program is for</h3>
            <ul className="list-none">
              {['Chronic lower back pain', 'Slip disc (with or without surgery advised)', 'Cervical spondylosis / neck pain', 'Sciatica / numbness in leg', 'Sitting-job / desk-related back pain', 'Back pain not improving with physiotherapy alone'].map((item, i) => (
                <li key={i} className="text-[14px] text-ink-soft py-[11px] pl-6 border-t border-[#E1D8C2] first:border-t-0 relative before:content-[\'\'] before:absolute before:left-0 before:top-[19px] before:w-[6px] before:h-px before:bg-clay-dark">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[19px] text-forest mb-5">What makes it unique</h3>
            <ul className="list-none">
              {['Not a spa massage — a clinical spine rehabilitation protocol', 'Kati Basti + Ayurveda therapies for targeted disc &amp; nerve relief', 'Combines physiotherapy with functional medicine diagnostics', 'Postural correction &amp; long-term strengthening', 'Doctor-led, clinically supervised'].map((item, i) => (
                <li key={i} className="text-[14px] text-ink-soft py-[11px] pl-6 border-t border-[#E1D8C2] first:border-t-0 relative before:content-[\'\'] before:absolute before:left-0 before:top-[19px] before:w-[6px] before:h-px before:bg-clay-dark">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROTOCOL */}
      <section className="bg-forest text-parchment py-[88px]" id="protocol">
        <div className="wrap">
          <div className="max-w-[680px]">
            <Eyebrow color="clay">The alpha spine protocol</Eyebrow>
            <h2 className="text-[30px] text-[#F8F4EA] mb-4">Recovery, built the way a spine is — one segment at a time.</h2>
            <p className="text-[15.5px] text-[#C9D2C6] max-w-[620px]">
              Each vertebra along the line marks a phase of recovery. Scroll to see the protocol light up, segment by segment, the same way your spine rebuilds strength: gradually, and in order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[70px_1fr] gap-x-10 mt-14">
            <div className="relative hidden md:block">
              <svg viewBox="0 0 70 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="sticky top-[120px] w-[70px] h-[520px]">
                <line x1="35" y1="10" x2="35" y2="510" stroke="rgba(227,183,154,0.2)" strokeWidth="1" />
                <g id="protocol-spine" />
              </svg>
            </div>
            <div className="flex flex-col gap-16">
              {[
                { phase: 'STAGE 01', title: 'Assess', problem: 'Most back pain is treated without understanding its root mechanical or inflammatory cause.', items: ['Postural &amp; movement assessment', 'Inflammation markers', 'Nerve involvement screening'] },
                { phase: 'STAGE 02', title: 'Identify', problem: 'Back pain has different root drivers — disc, muscular, postural or inflammatory.', items: ['Disc-related vs muscular pain', 'Postural dysfunction', 'Sedentary lifestyle patterns'] },
                { phase: 'STAGE 03', title: 'Relieve', problem: 'Pain relief without correction leads to recurring flare-ups.', items: ['Kati Basti (Ayurveda oil therapy)', 'Targeted physiotherapy', 'Therapeutic yoga &amp; mobility work'] },
                { phase: 'STAGE 04', title: 'Rebuild', problem: 'Without strengthening, pain returns once you resume daily routine.', items: ['Core &amp; postural strengthening', 'Ergonomic &amp; lifestyle correction', 'Long-term follow-up plan'] },
              ].map((step, idx) => (
                <div key={idx} className="pstep opacity-35 transition-opacity duration-500 pt-1.5" data-idx={idx}>
                  <div className="mono text-[11px] text-[#E3B79A]">{step.phase}</div>
                  <h4 className="font-fraunces text-[19px] font-medium text-[#F8F4EA] my-2">{step.title}</h4>
                  <p className="text-[13px] text-[#9CAC97] italic mb-3">{step.problem}</p>
                  <ul className="list-none">
                    {step.items.map((item, i) => (
                      <li key={i} className="text-[13px] text-[#DCE4DA] py-1.5 before:content-[\'—\'] before:text-[#E3B79A] before:mr-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="py-[88px]">
        <div className="wrap">
          <Eyebrow color="default">The science</Eyebrow>
          <h2 className="text-[28px] text-forest max-w-[600px]">What's actually causing the pain</h2>
          <div className="science-grid">
            {[
              { title: 'Disc health &amp; inflammation', desc: 'Chronic inflammation and poor circulation slow disc healing and prolong pain.' },
              { title: 'The posture&ndash;pain connection', desc: 'Prolonged sitting weakens core stabilizing muscles, increasing spinal load.' },
              { title: 'Ayurveda Kati Basti therapy', desc: 'Warm medicated oil retained over the lower back improves local circulation and reduces stiffness.' },
              { title: 'Nerve compression &amp; sciatica', desc: 'Reducing inflammation and correcting disc alignment can relieve nerve compression without surgery.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-parchment p-8">
                <h4 className="text-[15.5px] text-forest mb-2.5">{item.title}</h4>
                <p className="text-[13.5px] text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ALPHA */}
      <section className="py-[88px]">
        <div className="wrap">
          <Eyebrow color="default">Why alpha</Eyebrow>
          <h2 className="text-[28px] text-forest">Why this program is different</h2>
          <div className="why-grid">
            {[
              { num: '01', title: 'Root-cause pain relief', desc: 'We address the mechanical and inflammatory cause, not just the symptom.' },
              { num: '02', title: 'Personalized treatment', desc: 'Built around your specific pain pattern and diagnostics.' },
              { num: '03', title: 'Measurable outcomes', desc: 'Reduced pain, improved mobility, stronger core.' },
              { num: '04', title: 'Integrative protocol', desc: 'Ayurveda + physiotherapy + functional medicine.' },
              { num: '05', title: 'Safe medical supervision', desc: 'Doctor-led, clinically monitored.' },
              { num: '06', title: 'Lasting recovery', desc: 'Postural and lifestyle correction to prevent recurrence.' },
            ].map((item, idx) => (
              <div key={idx} className="why-card">
                <h4 className="text-[15px] text-forest mb-2 flex items-baseline gap-2">
                  <span className="mono text-[10.5px] text-clay-dark">{item.num}</span>
                  {item.title}
                </h4>
                <p className="text-[13px] text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-parchment-2 py-[88px]">
        <div className="wrap">
          <Eyebrow color="default">Guided by</Eyebrow>
          <h2 className="text-[28px] text-forest">Spine &amp; pain experts</h2>
          <div className="flex flex-wrap gap-3.5 mt-10">
            {['Functional Medicine Doctors', 'Ayurveda Physicians (Panchakarma)', 'Physiotherapists', 'Clinical Nutritionists', 'Lifestyle &amp; Ergonomics Coaches'].map((tag, idx) => (
              <div key={idx} className="border border-[#C9BC9C] py-2.5 px-[18px] text-[13px] text-ink-soft rounded-[2px] bg-parchment">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[88px]">
        <div className="wrap">
          <Eyebrow color="default">Guest experiences</Eyebrow>
          <h2 className="text-[28px] text-forest">Real transformations</h2>
          <div className="testi-grid">
            {[
              { quote: '"After years of sitting pain, I finally feel my back is supporting me again."', attr: 'Sample guest, Bangalore' },
              { quote: '"No more numbness in my leg. I can walk without fear now."', attr: 'Sample guest, Chennai' },
            ].map((testi, idx) => (
              <div key={idx} className="border-l-2 border-clay pl-[22px] py-1.5">
                <div className="inline-block mono text-[9.5px] tracking-[0.08em] uppercase text-[#8A4420] bg-[#EFDBCB] px-2 py-0.5 rounded-[2px] mb-[14px]">
                  Sample — replace with real quote
                </div>
                <p className="font-fraunces text-[17px] italic text-forest mb-3 leading-[1.5]">{testi.quote}</p>
                <p className="text-[12px] text-ink-soft">{testi.attr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-clay text-center py-20" id="book">
        <div className="wrap">
          <h2 className="text-[32px] text-[#2A1006] mb-2.5">Don't manage the pain.</h2>
          <p className="text-[#5C2C10] mb-[30px] text-[14.5px]">Fix what's causing it — with a spine rehabilitation plan built around your diagnosis.</p>
          <Link href={contact.WhatsappCta} target="_blank" rel="noopener noreferrer" className="btn-dark">
            Get 30 minute’s consultation free
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}