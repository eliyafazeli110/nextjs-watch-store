import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden mt-20 lg:mt-0 bg-neutral-50 py-0 lg:py-20 dark:bg-neutral-950">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-0 lg:grid-cols-2 lg:gap-16">
        <div className="absolute inset-0 h-full w-full lg:relative lg:inset-auto lg:h-full lg:w-full lg:order-2">
          <div className="relative h-full w-full overflow-hidden pt-7 rounded-xl lg:h-[500px] lg:rounded-3xl lg:border lg:border-neutral-200 lg:shadow-2xl lg:shadow-neutral-900/10 lg:dark:border-white/10 lg:dark:shadow-black/50 xl:h-[600px]">
            <Image
              src="/images/hero-watch.jpg"
              alt="ساعت لوکس"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent lg:hidden" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent lg:dark:from-black/40" />
          </div>

          <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl border border-neutral-200 bg-neutral-100/80 backdrop-blur-sm lg:block dark:border-white/10 dark:bg-white/5" />
        </div>

        <div className="relative z-10 flex h-[85svh] min-h-[500px] flex-col justify-end px-6 pb-12 text-right text-white lg:h-auto lg:min-h-0 lg:justify-between lg:px-0 lg:pb-0 lg:text-neutral-950 lg:dark:text-white lg:order-1">
          <div className="relative z-10 flex flex-col gap-5 lg:h-full lg:justify-between lg:py-4">
            <div className="flex items-center justify-end gap-3 text-xs tracking-[0.25em] text-white/70 lg:justify-end lg:text-neutral-400 lg:dark:text-white/70">
              <span>مجموعه‌ای برای ماندگاری</span>
              <span className="h-px w-10 bg-white/50 lg:bg-neutral-400 lg:dark:bg-white/50" />
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-3xl leading-[1.2] font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                دقت در هر لحظه، <br className="hidden lg:block" />
                اصالت در هر ثانیه.
              </h1>

              <p className="max-w-md text-sm leading-7 text-white/80 sm:text-base lg:text-base lg:leading-8 lg:text-neutral-600 lg:dark:text-white/70">
                مجموعه‌ای منتخب از ساعت‌های کلاسیک و مدرن؛ برای کسانی که به
                جزئیات اهمیت می‌دهند.
              </p>

              <div className="mt-4 flex justify-start lg:mt-8 lg:justify-end">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-neutral-950 lg:border-neutral-300 lg:bg-transparent lg:text-neutral-950 lg:dark:border-white/30 lg:dark:bg-white/5 lg:dark:text-white lg:dark:backdrop-blur-sm lg:hover:border-neutral-950 lg:hover:bg-neutral-950 lg:hover:text-white lg:dark:hover:border-white lg:dark:hover:bg-white lg:dark:hover:text-neutral-950"
                >
                  مشاهده محصولات
                  <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
