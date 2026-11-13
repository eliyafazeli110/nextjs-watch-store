import SignInForm from "@/features/auth/components/SignInForm"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-neutral-50 px-4 py-12 dark:bg-neutral-950 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-200/50 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none sm:p-8">
          <SignInForm />
        </div>
      </div>
    </div>
  )
}
