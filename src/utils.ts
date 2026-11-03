export function formatCurrency(amount: number, currency: string = 'VND'): string {
  const locale = currency === 'VND' ? 'vi-VN' : 'en-US'
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Dùng never[] thay cho any[] để tuân thủ "không dùng any" mà vẫn nhận mọi hàm.
export function debounce<T extends (...args: never[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout> | undefined
  const debounced = (...args: Parameters<T>) => {
    if (timer !== undefined) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
  return debounced as unknown as T
}
