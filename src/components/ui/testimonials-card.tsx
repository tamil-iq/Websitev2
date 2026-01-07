import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  role: string
  company: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col justify-between gap-4 rounded-lg border-t",
        "bg-card backdrop-blur-md border border-border",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        className
      )}
    >
      
      <p className="sm:text-md mt-4 text-sm text-foreground tracking-wide font-extralight">
        {text}
      </p>
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-md font-light leading-none text-foreground tracking-wide">
            {author.name}
          </h3>
          <p className="text-xs text-muted font-extralight tracking-wide">
            {/* {author.handle} */}
            {author.role} | {author.company}
          </p>
        </div>
      </div>
    </Card>
  )
}