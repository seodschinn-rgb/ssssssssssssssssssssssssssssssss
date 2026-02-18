export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white" aria-hidden="true">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
        <span className="text-sm text-zinc-500">Laden …</span>
      </div>
    </div>
  )
}
