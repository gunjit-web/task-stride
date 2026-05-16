import { cn } from '@/lib/utils'

export function BentoGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 stagger-in">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={item.onClick}
          className={cn(
            'group relative p-5 rounded-xl overflow-hidden transition-all duration-300',
            'border border-white/10 bg-black',
            'hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]',
            'hover:-translate-y-0.5 will-change-transform',
            item.onClick ? 'cursor-pointer' : '',
            item.colSpan === 2 ? 'md:col-span-2' : 'col-span-1',
            item.hasPersistentHover &&
              'shadow-[0_2px_12px_rgba(255,255,255,0.03)] -translate-y-0.5'
          )}
        >
          <div
            className={cn(
              'absolute inset-0 transition-opacity duration-300',
              item.hasPersistentHover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 ring-1 ring-white/10 group-hover:bg-gradient-to-br group-hover:from-indigo-400/15 group-hover:to-indigo-300/10 transition-all duration-300">
                {item.icon}
              </div>
              {item.status && (
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md backdrop-blur-sm bg-white/5 text-gray-300 ring-1 ring-white/10 group-hover:bg-white/10 transition-colors">
                  {item.status}
                </span>
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="font-semibold text-gray-100 tracking-tight text-[15px]">{item.title}</h3>
                {item.meta && <span className="text-xs text-gray-500 font-normal">{item.meta}</span>}
              </div>
              {item.value !== undefined && (
                <div
                  className="text-4xl font-extrabold leading-none tracking-tight"
                  style={{ fontFamily: "'Inter', 'DM Sans', sans-serif", fontWeight: 800, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', color: item.valueColor || '#a5b4fc' }}
                >
                  {item.value}
                </div>
              )}
              {item.description && (
                <p className="text-sm text-gray-400 leading-snug">{item.description}</p>
              )}
              {item.children}
            </div>

            {(item.tags?.length || item.cta) && (
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
                  {item.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-white/5 backdrop-blur-sm ring-1 ring-white/5 transition-colors hover:bg-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                {item.cta && (
                  <span className="text-xs text-indigo-300/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.cta}
                  </span>
                )}
              </div>
            )}
          </div>

          <div
            className={cn(
              'absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent transition-opacity duration-300',
              item.hasPersistentHover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            )}
          />
        </div>
      ))}
    </div>
  )
}
