"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const footerGroups = [
  {
    title: "فروشگاه",
    links: [
      { label: "همه محصولات", href: "/products" },
      { label: "ساعت مردانه", href: "/categories/men" },
      { label: "ساعت زنانه", href: "/categories/women" },
      { label: "برندها", href: "/brands" },
    ],
  },
  {
    title: "راهنما",
    links: [
      { label: "راهنمای خرید", href: "/articles" },
      { label: "ارسال و تحویل", href: "/shipping" },
      { label: "سوالات متداول", href: "/faq" },
      { label: "قوانین و مقررات", href: "/terms" },
    ],
  },
  {
    title: "واچلند",
    links: [
      { label: "درباره ما", href: "/about" },
      { label: "مجله", href: "/articles" },
      { label: "تماس با ما", href: "/contact" },
    ],
  },
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
  { label: "Telegram", href: "#" },
]

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(Number)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-b border-neutral-200 py-8 sm:grid-cols-3 lg:py-10 dark:border-white/10">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-neutral-950 dark:text-white">
                {group.title}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-white/50 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between dark:text-white/40">
          <p>تمامی حقوق برای واچلند محفوظ است {currentYear}</p>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="transition-colors hover:text-neutral-950 dark:hover:text-white"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
