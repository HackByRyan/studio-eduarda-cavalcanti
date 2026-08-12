import { useState } from 'react'

/**
 * Image — exibe a foto do arquivo indicado.
 *
 * Se a foto real ainda não existir em /public/images/,
 * mostra um placeholder elegante com o nome do conteúdo,
 * para que o owner saiba exatamente o que trocar.
 */
export default function Image({
  src,
  alt,
  label = 'Foto do Studio',
  className = '',
  imgClassName = '',
  position = '50% 50%',
  eager = false,
}) {
  const [failed, setFailed] = useState(false)
  const showFallback = !src || failed

  if (showFallback) {
    return (
      <div
        aria-hidden="true"
        className={`flex items-center justify-center bg-linear-to-br from-blush-100 via-cream to-blush-200 ${className}`}
      >
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <span className="text-2xl leading-none text-blush-400">✧</span>
          <span className="font-display text-xl italic leading-tight text-ink-700">
            {label}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-ink-300">
            Substitua pela foto real
          </span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      onError={() => setFailed(true)}
      style={{ objectPosition: position }}
      className={`img-enhance h-full w-full object-cover ${imgClassName}`}
    />
  )
}
