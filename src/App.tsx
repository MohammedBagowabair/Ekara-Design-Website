import { useI18n } from './i18n'
import { phone, wa, email, maps, facebook, instagram, pitchWa, projects } from './content'

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="flex rounded-full bg-white/90 p-1 text-xs font-bold shadow-sm ring-1 ring-sage-200">
      {(['en', 'ms'] as const).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 ${lang === l ? 'bg-sage-600 text-white' : 'text-ink/60'}`}>
          {t(l === 'en' ? 'lang_en' : 'lang_ms')}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const { t, lang } = useI18n()
  return (
    <div className="min-h-screen pb-20">
      <header className="fixed inset-x-0 top-0 z-40 bg-limestone/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight text-sage-800">Ekara</a>
          <nav className="hidden gap-5 text-sm font-medium text-ink/70 md:flex">
            {(['about','services','work','process','contact'] as const).map((id) => (
              <a key={id} href={`#${id}`} className="hover:text-sage-700">{t(`nav_${id}`)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch />
            <a href={`https://wa.me/${wa}`} className="hidden rounded-full bg-sage-600 px-4 py-2 text-sm font-semibold text-white sm:inline-flex hover:bg-sage-700">{t('nav_cta')}</a>
          </div>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-5xl px-4 pt-28 pb-16 md:px-6 md:pt-32 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sage-700">{t('hero_kicker')}</span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">{t('hero_title')}</h1>
            <p className="mt-5 text-lg text-ink/70 leading-relaxed">{t('hero_sub')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`https://wa.me/${wa}`} className="rounded-soft bg-sage-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sage-600/25 hover:bg-sage-700">{t('hero_cta')}</a>
              <a href="#work" className="rounded-soft bg-white px-6 py-3 text-sm font-semibold text-ink ring-1 ring-sage-200 hover:ring-sage-400">{t('hero_cta2')}</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-soft bg-sage-200/50 blur-2xl" />
            <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1000&q=80" alt="" className="relative aspect-[4/5] w-full rounded-soft object-cover shadow-xl ring-1 ring-sage-200" />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="rounded-soft bg-white p-8 shadow-sm ring-1 ring-sage-100 md:p-12">
          <p className="text-sm font-semibold text-sage-600">{t('about_label')}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">{t('about_title')}</h2>
          <p className="mt-4 max-w-3xl text-ink/75 leading-relaxed">{t('about_body')}</p>
          <p className="mt-6 inline-flex rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-700">{t('about_rating')}</p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <p className="text-sm font-semibold text-sage-600">{t('services_label')}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">{t('services_title')}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[1,2,3,4].map((n) => (
            <article key={n} className="rounded-soft bg-sage-50/80 p-6 ring-1 ring-sage-100 transition hover:bg-white hover:shadow-md">
              <div className="mb-3 h-10 w-10 rounded-full bg-sage-200/80" />
              <h3 className="font-display text-lg font-semibold">{t(`svc${n}_t`)}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{t(`svc${n}_b`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-sage-600">{t('work_label')}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">{t('work_title')}</h2>
          </div>
          <p className="max-w-sm text-sm text-ink/50">{t('work_note')}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure key={p.titleEN} className="group overflow-hidden rounded-soft bg-white shadow-sm ring-1 ring-sage-100">
              <img src={p.img} alt="" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <figcaption className="p-4">
                <p className="font-semibold">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                <p className="text-sm text-ink/50">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="process" className="bg-sage-800 text-sage-50">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-sm font-semibold text-sage-300">{t('process_label')}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">{t('process_title')}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1,2,3,4].map((n) => (
              <div key={n} className="rounded-soft bg-white/10 p-5 backdrop-blur">
                <span className="font-display text-3xl font-bold text-sage-300">{n}</span>
                <h3 className="mt-2 font-semibold">{t(`step${n}_t`)}</h3>
                <p className="mt-1 text-sm text-sage-100/75">{t(`step${n}_b`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <p className="text-sm font-semibold text-sage-600">{t('testimonials_label')}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">{t('testimonials_title')}</h2>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x">
          {[1,2,3,4].map((n) => (
            <blockquote key={n} className="min-w-[280px] max-w-sm snap-start rounded-soft bg-white p-6 shadow-sm ring-1 ring-sage-100">
              <p className="text-ink/80 leading-relaxed">“{t(`t${n}`)}”</p>
              <p className="mt-4 text-xs font-semibold text-sage-600">Google · 5.0 ★</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="rounded-soft bg-white p-8 shadow-sm ring-1 ring-sage-100 md:p-12">
          <p className="text-sm font-semibold text-sage-600">{t('contact_label')}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">{t('contact_title')}</h2>
          <p className="mt-4 text-ink/65">{t('contact_hours')}</p>
          <p className="mt-2 max-w-lg text-ink/75">{t('contact_address')}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <a href={`tel:${phone}`} className="rounded-full bg-sage-600 px-4 py-2 text-sm font-semibold text-white">{t('contact_phone')}</a>
            <a href={`https://wa.me/${wa}`} className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">{t('contact_wa')}</a>
            <a href={`mailto:${email}`} className="rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_email')}</a>
            <a href={maps} target="_blank" rel="noreferrer" className="rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_map')}</a>
            <a href={facebook} target="_blank" rel="noreferrer" className="rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_fb')}</a>
            <a href={instagram} target="_blank" rel="noreferrer" className="rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-800 ring-1 ring-sage-200">{t('contact_ig')}</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-sage-200 bg-sage-50 px-4 py-10 text-center text-sm text-ink/60 md:px-6">
        <p>{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-3 inline-block font-semibold text-sage-700 hover:underline">{t('footer_pitch_cta')} →</a>
        <p className="mt-6 text-xs text-ink/35">{t('footer_copy')}</p>
      </footer>

      <a href={`https://wa.me/${wa}`} className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-600/30 hover:bg-emerald-600 md:bottom-8 md:right-8">
        <span aria-hidden>💬</span> {t('sticky_wa')}
      </a>
    </div>
  )
}
