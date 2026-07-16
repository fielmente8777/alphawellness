// app/page.tsx (Landing Page 1 - PCOS)
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Eyebrow from "@/components/Eyebrow";
import { contact } from "@/utils/constent";

export default function Home() {
  return (
    <div className="lp">
      <Navbar />

      {/* HERO */}
      <header className="bg-forest text-parchment relative overflow-hidden py-24 md:py-28">
        <div className="wrap relative z-10 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <Eyebrow color="turmeric">
              PCOS &amp; Hormonal Balance Program
            </Eyebrow>
            <h1 className="text-[32px] md:text-[44px] leading-[1.12] text-[#F8F4EA] mb-[22px]">
              Balance your hormones.
              <br />
              Reclaim your cycle.
              <br />
              Restore your metabolism.
            </h1>
            <p className="text-base text-[#C9D2C6] max-w-[460px] mb-[34px]">
              A root-cause functional medicine &amp; Ayurveda program designed
              to correct insulin resistance, rebalance hormones and reverse PCOS
              symptoms naturally — without lifelong medication.
            </p>
            <div className="flex gap-3.5">
              <Link
                href="#book"
                className="btn-primary bg-turmeric capitalize text-[#2A1B04]"
              >
                   Get 30 minutes consultation free
              </Link>
              <Link
                href="#protocol"
                className="btn-ghost border border-parchment/35 text-parchment"
              >
                See the program
              </Link>
            </div>
          </div>

          {/* Cycle Motif */}
          <div className="relative w-full aspect-square flex items-center justify-center max-w-[280px] md:max-w-none mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#D9B979]/35 animate-[spin_90s_linear_infinite]"></div>
            <div className="absolute inset-[38px] rounded-full border border-[#D9B979]/50 animate-[spin_70s_linear_infinite_reverse]"></div>
            <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 text-center w-[74px]">
              <div className="w-[9px] h-[9px] rounded-full bg-[#D9B979] mx-auto mb-1.5"></div>
              <span className="text-[11px] text-[#E7DDBF] mono tracking-[0.06em]">
                Assess
              </span>
            </div>
            <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 text-center w-[74px]">
              <div className="w-[9px] h-[9px] rounded-full bg-[#D9B979] mx-auto mb-1.5"></div>
              <span className="text-[11px] text-[#E7DDBF] mono tracking-[0.06em]">
                Identify
              </span>
            </div>
            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 text-center w-[74px]">
              <div className="w-[9px] h-[9px] rounded-full bg-[#D9B979] mx-auto mb-1.5"></div>
              <span className="text-[11px] text-[#E7DDBF] mono tracking-[0.06em]">
                Restore
              </span>
            </div>
            <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 text-center w-[74px]">
              <div className="w-[9px] h-[9px] rounded-full bg-[#D9B979] mx-auto mb-1.5"></div>
              <span className="text-[11px] text-[#E7DDBF] mono tracking-[0.06em]">
                Rebuild
              </span>
            </div>
            <div className="w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#2A5348,#16332B_70%)] flex items-center justify-center text-center border border-[#D9B979]/40 z-10">
              <div className="mono text-[10px] text-[#D9B979] tracking-[0.12em]">
                14&ndash;21
                <br />
                DAY CYCLE
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* USP */}
      <div className="bg-forest-2 border-t border-[#D9B979]/15">
        <ul className="wrap grid grid-cols-1 md:grid-cols-4">
          <li className="list-none py-[22px] px-5 text-[#DCE4DA] text-[13.5px] border-l-0 md:border-l border-[#D9B979]/15">
            Root-cause hormonal correction, not just symptom management
          </li>
          <li className="list-none py-[22px] px-5 text-[#DCE4DA] text-[13.5px] border-l-0 md:border-l border-[#D9B979]/15 md:border-t-0 border-t border-[#D9B979]/15">
            Functional + Ayurveda integration for PCOS &amp; insulin resistance
          </li>
          <li className="list-none py-[22px] px-5 text-[#DCE4DA] text-[13.5px] border-l-0 md:border-l border-[#D9B979]/15 md:border-t-0 border-t border-[#D9B979]/15">
            Doctor-led personalized hormone &amp; metabolic panel
          </li>
          <li className="list-none py-[22px] px-5 text-[#DCE4DA] text-[13.5px] border-l-0 md:border-l border-[#D9B979]/15 md:border-t-0 border-t border-[#D9B979]/15">
            Sustainable fertility, skin &amp; weight outcomes
          </li>
        </ul>
      </div>

      {/* WHY SECTION */}
      <section className="py-[88px]">
        <div className="wrap max-w-[680px]">
          <Eyebrow>Why it happens</Eyebrow>
          <h2 className="text-[30px] text-forest mb-4">
            PCOS isn't just a period problem. It's a metabolic signal.
          </h2>
          <p className="text-[15.5px] text-ink-soft max-w-[620px]">
            PCOS affects far more than your cycle — insulin resistance,
            inflammation and hormonal imbalance drive irregular periods, weight
            gain, acne, hair thinning and fertility struggles. Most treatment
            only manages symptoms with birth control or metformin. We identify
            and correct the underlying metabolic and hormonal dysfunction so
            your body can regulate itself naturally.
          </p>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-parchment-2 py-[88px]">
        <div className="wrap">
          <Eyebrow>Recognize the pattern</Eyebrow>
          <h2 className="text-[28px] text-forest">Does this sound familiar?</h2>
          <div className="card-grid">
            <div className="bg-parchment-2 p-[30px_24px]">
              <div className="mono text-[11px] text-turmeric-dark mb-[14px]">
                01
              </div>
              <h3 className="text-[17px] text-forest mb-2 font-medium">
                Irregular or missed periods
              </h3>
              <p className="text-[13.5px] text-ink-soft">
                Hormonal imbalance disrupting ovulation.
              </p>
            </div>
            <div className="bg-parchment-2 p-[30px_24px]">
              <div className="mono text-[11px] text-turmeric-dark mb-[14px]">
                02
              </div>
              <h3 className="text-[17px] text-forest mb-2 font-medium">
                Insulin resistance &amp; weight gain
              </h3>
              <p className="text-[13.5px] text-ink-soft">
                Stubborn belly fat despite diet and exercise.
              </p>
            </div>
            <div className="bg-parchment-2 p-[30px_24px]">
              <div className="mono text-[11px] text-turmeric-dark mb-[14px]">
                03
              </div>
              <h3 className="text-[17px] text-forest mb-2 font-medium">
                Acne, hair thinning &amp; excess hair
              </h3>
              <p className="text-[13.5px] text-ink-soft">
                Androgen imbalance showing on skin and hair.
              </p>
            </div>
            <div className="bg-parchment-2 p-[30px_24px]">
              <div className="mono text-[11px] text-turmeric-dark mb-[14px]">
                04
              </div>
              <h3 className="text-[17px] text-forest mb-2 font-medium">
                Fertility concerns
              </h3>
              <p className="text-[13.5px] text-ink-soft">
                Anovulation affecting conception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM BAND */}
      <div className="bg-forest text-parchment text-center py-16">
        <div className="wrap">
          <Eyebrow color="turmeric">The program</Eyebrow>
          <h2 className="text-[32px] text-[#F8F4EA]">
            PCOS Hormonal Reset Program
          </h2>
          <p className="mt-2.5 text-[#D9B979] mono text-[12px] tracking-[0.1em]">
            REBALANCE &nbsp;·&nbsp; REGULATE &nbsp;·&nbsp; RESTORE &nbsp;&nbsp;—
            14 / 21 DAYS
          </p>
        </div>
      </div>

      {/* WHO / UNIQUE */}
      <section className="py-[88px]">
        <div className="wrap split-grid">
          <div>
            <h3 className="text-[19px] text-forest mb-5">
              Who this program is for
            </h3>
            <ul className="list-none">
              {[
                "Irregular, delayed or absent periods",
                "PCOS / PCOD diagnosed or suspected",
                "Insulin resistance or prediabetes with PCOS",
                "Weight gain resistant to diet &amp; exercise",
                "Acne, hirsutism or hair thinning linked to hormones",
                "Fertility planning with PCOS",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-[14px] text-ink-soft py-[11px] pl-6 border-t border-[#E1D8C2] first:border-t-0 relative before:content-[\'\'] before:absolute before:left-0 before:top-[19px] before:w-[6px] before:h-px before:bg-turmeric-dark"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[19px] text-forest mb-5">
              What makes it unique
            </h3>
            <ul className="list-none">
              {[
                "Not birth-control-based symptom suppression",
                "Functional hormone panel + insulin resistance testing",
                "Fertility-conscious, non-hormonal approach",
                "Ayurveda + clinical nutrition + targeted supplementation",
                "Doctor-led, clinically supervised",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-[14px] text-ink-soft py-[11px] pl-6 border-t border-[#E1D8C2] first:border-t-0 relative before:content-[\'\'] before:absolute before:left-0 before:top-[19px] before:w-[6px] before:h-px before:bg-turmeric-dark"
                >
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
            <Eyebrow color="turmeric">The alpha cycle protocol</Eyebrow>
            <h2 className="text-[30px] text-[#F8F4EA] mb-4">
              Four phases, run like a cycle — not a checklist.
            </h2>
            <p className="text-[15.5px] text-[#C9D2C6] max-w-[620px]">
              PCOS is a disrupted rhythm. So the program that fixes it is built
              as one: each phase feeds the next, and the plan you leave with
              keeps the cycle turning on its own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-14">
            {[
              {
                phase: "PHASE 01",
                title: "Assess",
                problem:
                  "Most PCOS cases are diagnosed on symptoms alone, root cause never tested.",
                items: [
                  "Hormonal panel (LH, FSH, testosterone, AMH)",
                  "Insulin resistance &amp; HOMA-IR",
                  "Thyroid &amp; cortisol markers",
                ],
              },
              {
                phase: "PHASE 02",
                title: "Identify",
                problem:
                  "PCOS looks different in every woman — insulin, inflammatory, adrenal or post-pill.",
                items: [
                  "Insulin-resistant PCOS",
                  "Inflammatory PCOS",
                  "Adrenal / stress-driven PCOS",
                ],
              },
              {
                phase: "PHASE 03",
                title: "Restore",
                problem:
                  "Untreated, the hormonal-metabolic loop keeps reinforcing itself.",
                items: [
                  "Insulin-sensitizing nutrition",
                  "Herbal + Ayurveda hormonal support",
                  "Cortisol regulation therapies",
                ],
              },
              {
                phase: "PHASE 04",
                title: "Rebuild",
                problem:
                  "Without correction, symptoms return once medication stops.",
                items: [
                  "Long-term hormonal balance plan",
                  "Cycle tracking &amp; follow-up",
                  "Fertility-conscious lifestyle plan",
                ],
              },
            ].map((step, idx) => (
              <div key={idx} className="border-t-2 border-[#D9B979] pt-4">
                <div className="mono text-[11px] text-[#D9B979]">
                  {step.phase}
                </div>
                <h4 className="font-fraunces text-[17px] font-medium text-[#F8F4EA] my-2">
                  {step.title}
                </h4>
                <p className="text-[12.5px] text-[#9CAC97] italic mb-3">
                  {step.problem}
                </p>
                <ul className="list-none">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[12.5px] text-[#DCE4DA] py-1.5 before:content-[\'—\'] before:text-[#D9B979] before:mr-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="py-[88px]">
        <div className="wrap">
          <Eyebrow>The science</Eyebrow>
          <h2 className="text-[28px] text-forest max-w-[600px]">
            What's actually driving your symptoms
          </h2>
          <div className="science-grid">
            {[
              {
                title: "Insulin resistance &amp; PCOS",
                desc: "Excess insulin signals the ovaries to produce more androgens, driving irregular cycles, acne and weight gain. Improving insulin sensitivity is one of the most effective levers for reversing PCOS symptoms.",
              },
              {
                title: "Chronic inflammation &amp; hormonal imbalance",
                desc: "Low-grade inflammation disrupts ovulation and worsens insulin resistance, creating a self-reinforcing cycle.",
              },
              {
                title: "The gut&ndash;hormone connection",
                desc: "An imbalanced gut microbiome affects estrogen metabolism and inflammation, both central to PCOS.",
              },
              {
                title: "Stress, cortisol &amp; ovulation",
                desc: "Chronic stress elevates cortisol, which interferes with reproductive hormone signaling.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-parchment p-8">
                <h4 className="text-[15.5px] text-forest mb-2.5">
                  {item.title}
                </h4>
                <p className="text-[13.5px] text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ALPHA */}
      <section className="py-[88px]">
        <div className="wrap">
          <Eyebrow>Why alpha</Eyebrow>
          <h2 className="text-[28px] text-forest">
            Why this program is different
          </h2>
          <div className="why-grid">
            {[
              {
                num: "01",
                title: "Root-cause hormonal healing",
                desc: "We regulate hormones, not just suppress symptoms with birth control.",
              },
              {
                num: "02",
                title: "Personalized treatment",
                desc: "Built around your specific PCOS phenotype and metabolic profile.",
              },
              {
                num: "03",
                title: "Measurable outcomes",
                desc: "Regular cycles, improved insulin markers, clearer skin, sustainable weight loss.",
              },
              {
                num: "04",
                title: "Integrative protocol",
                desc: "Functional medicine + Ayurveda + clinical nutrition.",
              },
              {
                num: "05",
                title: "Safe medical supervision",
                desc: "Doctor-led, clinically monitored throughout.",
              },
              {
                num: "06",
                title: "Fertility-conscious approach",
                desc: "Designed with future conception in mind.",
              },
            ].map((item, idx) => (
              <div key={idx} className="why-card">
                <h4 className="text-[15px] text-forest mb-2 flex items-baseline gap-2">
                  <span className="mono text-[10.5px] text-turmeric-dark">
                    {item.num}
                  </span>
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
          <Eyebrow>Guided by</Eyebrow>
          <h2 className="text-[28px] text-forest">Hormonal health experts</h2>
          <div className="flex flex-wrap gap-3.5 mt-10">
            {[
              "Functional Medicine Doctors",
              "Hormone Health Specialists",
              "Clinical Nutritionists",
              "Ayurveda Physicians",
              "Lifestyle &amp; Fertility Coaches",
            ].map((tag, idx) => (
              <div
                key={idx}
                className="border border-[#C9BC9C] py-2.5 px-[18px] text-[13px] text-ink-soft rounded-[2px] bg-parchment"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[88px]">
        <div className="wrap">
          <Eyebrow>Guest experiences</Eyebrow>
          <h2 className="text-[28px] text-forest">Real transformations</h2>
          <div className="testi-grid">
            {[
              {
                quote:
                  '"My cycles became regular for the first time in years, and my energy is back."',
                attr: "Sample guest, Bangalore",
              },
              {
                quote:
                  '"I stopped relying on birth control just to manage symptoms."',
                attr: "Sample guest, Dubai",
              },
            ].map((testi, idx) => (
              <div
                key={idx}
                className="border-l-2 border-turmeric pl-[22px] py-1.5"
              >
                <div className="inline-block mono text-[9.5px] tracking-[0.08em] uppercase text-[#A17A2E] bg-[#F1E3C4] px-2 py-0.5 rounded-[2px] mb-[14px]">
                  Sample — replace with real quote
                </div>
                <p className="font-fraunces text-[17px] italic text-forest mb-3 leading-[1.5]">
                  {testi.quote}
                </p>
                <p className="text-[12px] text-ink-soft">{testi.attr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-turmeric text-center py-20" id="book">
        <div className="wrap">
          <h2 className="text-[32px] text-[#2A1B04] mb-2.5">
            Don't let PCOS control your body.
          </h2>
          <p className="text-[#5B3E12] mb-[30px] text-[14.5px]">
            Rebalance it — with a plan built around your hormones, not a
            prescription refill.
          </p>
          <Link
            href={contact.WhatsappCta}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark capitalize"
          >
            Get 30 minutes consultation free
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
