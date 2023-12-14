import type { Metadata } from 'next'
import { Inter } from 'next/font/google' // フォントの読み込み
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// メタデータの定義
export const metadata: Metadata = {
  title: 'オモチャンボタン',
  description: 'オモチャンのボタン 非公式',
}

// ルートレイアウトの定義
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
