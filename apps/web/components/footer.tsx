import { Globe, Mail, Share2 } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Typography } from "@workspace/ui/components/typography"

const footerColumns = [
  {
    title: "關於我們",
    links: ["品牌故事", "核心理念", "聯絡資訊"],
  },
  {
    title: "合作夥伴",
    links: ["合作流程", "合作案例", "夥伴支援"],
  },
  {
    title: "相關資訊",
    links: ["媒體資源", "常見問題", "最新消息"],
  },
]

const socialIcons = [
  { label: "官方網站", icon: Globe, href: "#" },
  { label: "聯絡我們", icon: Mail, href: "#" },
  { label: "社群分享", icon: Share2, href: "#" },
]

export function Footer() {
  return (
    <footer className="relative mt-16 bg-primary">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-12">
        <div className="grid gap-10 md:grid-cols-[auto,1fr,auto] md:items-start">
          <div className="space-y-3">
            <Typography
              variant="lg"
              color="primary"
              foreground
              className="font-semibold uppercase tracking-widest"
            >
              ELUELU
            </Typography>
            <Typography
              variant="sm"
              color="primary"
              foreground
              className="md:max-w-xs opacity-80"
            >
              用設計與科技串聯每一次互動，打造兼具美感與實用的數位體驗。
            </Typography>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-3">
                <Typography
                  variant="sm"
                  as="h4"
                  color="primary"
                  foreground
                  className="font-semibold uppercase tracking-wide opacity-80"
                >
                  {column.title}
                </Typography>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Button
                        asChild
                        variant="link"
                        radius="none"
                        foreground
                        className="h-auto justify-start px-0 text-left"
                      >
                        <a href="#">{link}</a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4">
            <div className="flex gap-3">
              {socialIcons.map(({ label, icon: Icon, href }) => (
                <Button
                  key={label}
                  asChild
                  variant="ghost"
                  size="icon"
                  radius="circle"
                  foreground
                >
                  <a href={href} aria-label={label}>
                    <Icon className="size-5" />
                    <span className="sr-only">{label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Typography
            variant="xs"
            color="primary"
            foreground
            className="opacity-70"
          >
            © {new Date().getFullYear()} ELUELU. All rights reserved.
          </Typography>
          <Typography
            variant="xs"
            color="primary"
            foreground
            className="opacity-70"
          >
            此區為示意內容，實際連結與資訊可再調整。
          </Typography>
        </div>
      </div>
    </footer>
  )
}
