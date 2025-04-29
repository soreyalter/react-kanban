import { useState } from 'react'
import clsx from 'clsx'

interface ImageWithLoadingProps {
  src: string
  alt: string
  width?: string
  height?: string
  className?: string
}

/** 带有 loading 提示和占位符的图片 */
export default function ImageWithLoading({
  src,
  alt,
  width,
  height,
  className,
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false) // 图片加载成功，清除错误状态
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true) // 图片加载失败
    console.error(`Failed to load image: ${src}`)
  }

  const imageStyle = {
    // 初始隐藏图片，加载完成后显示
    display: isLoading || hasError ? 'none' : 'block',
  }

  return (
    <>
      {/* 加载中或加载失败时显示占位符 */}
      {(isLoading || hasError) && (
        <div
          className={clsx(
            'bg-secondary flex flex-col items-center justify-center',
            width ? `w-[${width}]` : 'w-auto',
            height ? `h-[${height}]` : 'h-[90vh]',
          )}
        >
          {isLoading ? (
            <h2 className="text-muted-foreground text-xl">
              猫图正在路上了，稍等...
            </h2>
          ) : (
            <h2>图片加载失败</h2>
          )}
        </div>
      )}

      {/* 图片元素，初始可能隐藏，加载完成后通过 imageStyle 显示 */}
      {/* 注意：即使初始隐藏，img 标签也需要渲染出来才能触发加载和 onload/onerror 事件 */}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={imageStyle}
        width={width}
        height={height}
        className={className}
      />
    </>
  )
}
