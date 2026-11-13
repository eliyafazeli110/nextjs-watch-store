import { MapPin, Phone, User } from "lucide-react"

interface OrderAddressCardProps {
  firstName: string
  lastName: string
  phone: string
  province: string
  city: string
  address: string
  postalCode: string
  note: string | null
}

export function OrderAddressCard({
  firstName,
  lastName,
  phone,
  province,
  city,
  address,
  postalCode,
  note,
}: OrderAddressCardProps) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
      <h2 className="mb-4 text-base font-semibold text-neutral-950 dark:text-white">
        اطلاعات گیرنده
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 dark:bg-neutral-900 dark:text-white/40">
            <User className="size-4" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase dark:text-white/30">
              نام گیرنده
            </span>
            <span className="text-sm text-neutral-950 dark:text-white">
              {firstName} {lastName}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 dark:bg-neutral-900 dark:text-white/40">
            <Phone className="size-4" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase dark:text-white/30">
              شماره تماس
            </span>
            <span
              className="text-sm text-neutral-950 tabular-nums dark:text-white"
              dir="ltr"
            >
              {phone}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 dark:bg-neutral-900 dark:text-white/40">
            <MapPin className="size-4" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase dark:text-white/30">
              آدرس
            </span>
            <span className="text-sm leading-7 text-neutral-950 dark:text-white">
              {province}، {city}، {address}
            </span>
            <span className="mt-1 text-xs text-neutral-500 tabular-nums dark:text-white/40">
              کد پستی: {postalCode}
            </span>
          </div>
        </div>

        {note && (
          <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3 dark:border-neutral-900 dark:bg-neutral-900/50">
            <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase dark:text-white/30">
              یادداشت سفارش
            </span>
            <p className="mt-1 text-xs leading-6 text-neutral-700 dark:text-white/70">
              {note}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
