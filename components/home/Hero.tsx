import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <>
      <section className="relative flex h-[85svh] min-h-[500px] w-full items-end overflow-hidden lg:hidden">
        <Image
          src="/images/hero-watch.jpg"
          alt="ساعت لوکس"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 0vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

        <div className="relative z-10 flex w-full flex-col gap-5 px-6 pb-12 text-right text-white sm:px-10 md:mx-auto md:max-w-3xl md:items-center md:text-center">
          <div className="flex items-center justify-end gap-3 text-xs tracking-[0.25em] text-white/70 md:justify-center">
            <span>مجموعه‌ای برای ماندگاری</span>
            <span className="h-px w-10 bg-white/50" />
          </div>

          <h1 className="text-3xl leading-[1.2] font-bold tracking-tight sm:text-4xl md:text-5xl">
            دقت در هر لحظه، <br className="hidden md:block" />
            اصالت در هر ثانیه.
          </h1>

          <p className="max-w-md text-sm leading-7 text-white/80 sm:text-base md:mx-auto">
            مجموعه‌ای منتخب از ساعت‌های کلاسیک و مدرن؛ برای کسانی که به جزئیات
            اهمیت می‌دهند.
          </p>

          <Link
            href="/products"
            className="group mt-4 inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-neutral-950 md:w-auto"
          >
            مشاهده محصولات
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="hidden w-full bg-neutral-50 py-20 lg:block dark:bg-neutral-950">
        <div className="mx-auto flex w-full max-w-7xl flex-row items-center gap-16">
          <div className="flex w-1/2 flex-col justify-between self-stretch">
            <div className="flex items-center justify-end gap-3 text-xs tracking-[0.25em] text-neutral-400 dark:text-white/70">
              <span>مجموعه‌ای برای ماندگاری</span>
              <span className="h-px w-10 bg-neutral-400 dark:bg-white/50" />
            </div>

            <div className="flex flex-col gap-6 text-right">
              <h1 className="text-5xl leading-[1.15] font-bold tracking-tight text-neutral-950 xl:text-6xl dark:text-white">
                دقت در هر لحظه،
                <br />
                اصالت در هر ثانیه.
              </h1>

              <p className="max-w-md text-base leading-8 text-neutral-600 dark:text-white/70">
                مجموعه‌ای منتخب از ساعت‌های کلاسیک و مدرن؛ برای کسانی که به
                جزئیات اهمیت می‌دهند .
              </p>

              <div className="mt-8 flex justify-end">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-3 rounded-full border border-neutral-300 bg-transparent px-8 py-3.5 text-sm font-medium text-neutral-950 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white dark:border-white/30 dark:bg-white/5 dark:text-white dark:backdrop-blur-sm dark:hover:border-white dark:hover:bg-white dark:hover:text-neutral-950"
                >
                  مشاهده محصولات
                  <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-1/2">
            <div className="relative h-[500px] xl:h-[600px] w-full overflow-hidden rounded-3xl border border-neutral-200 shadow-2xl shadow-neutral-900/10 dark:border-white/10 dark:shadow-black/50">
              <Image
                src="/images/hero-watch.jpg"
                alt="ساعت لوکس"
                fill
                priority
                className="object-cover object-center"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent dark:from-black/40" />
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border border-neutral-200 bg-neutral-100/80 backdrop-blur-sm dark:border-white/10 dark:bg-white/5" />
          </div>
        </div>
      </section>
    </>
  )
}
