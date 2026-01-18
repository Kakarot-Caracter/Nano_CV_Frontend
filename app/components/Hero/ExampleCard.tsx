export default function ExampleCard() {
  return (
    <div className="w-full max-w-lg mx-auto mt-15">
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/10 rounded-2xl blur-3xl opacity-50 transition duration-500" />

        <div className="relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-2 text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
                giovanni_cv.json
              </span>
            </div>
            <div className="text-[10px] text-zinc-400 font-mono">UTF-8</div>
          </div>

          <div className="p-6 space-y-6 font-mono text-sm leading-relaxed">
            <section>
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                personal:
              </div>
              <div className="pl-4 space-y-1 border-l border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-wrap gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400">
                    nombre:
                  </span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    "Giovanni Martinez"
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400">
                    titulo:
                  </span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    "Desarrollador de Software"
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400">
                    email:
                  </span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    "giovanni.mtz@email.com"
                  </span>
                </div>
              </div>
            </section>

            <section>
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                experiencia:
              </div>
              <div className="pl-4 space-y-3 border-l border-zinc-200 dark:border-zinc-800">
                <div className="space-y-1">
                  <div className="flex gap-2">
                    <span className="text-amber-600 dark:text-amber-400">
                      -
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      empresa:
                    </span>
                    <span className="text-zinc-700 dark:text-zinc-300">
                      "Nano CV Project"
                    </span>
                  </div>
                  <div className="pl-4">
                    <div className="flex gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400">
                        puesto:
                      </span>
                      <span className="text-zinc-700 dark:text-zinc-300">
                        "Lead Developer"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
