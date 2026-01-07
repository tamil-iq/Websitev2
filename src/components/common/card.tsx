import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const CardSkeleton = () => {
  return (
    <Card className="!p-4 text-start sm:p-6 max-w-[320px] sm:max-w-[320px] mx-auto bg-[#006AE5]/20 relative overflow-hidden border-none">
      {/* Top left corner decoration */}
      <div className="absolute top-0 left-0 w-8 h-8  bg-linear-to-br from-[#056EE7]/60 via-transparent to-transparent rounded-tl-2xl"></div>
      
      {/* Bottom right corner decoration */}
<div className="absolute bottom-0 right-0 w-8 h-8 bg-linear-to-tl from-[#056EE7]/60 via-transparent to-transparent rounded-br-2xl"></div>

      <div className="flex flex-col justify-between gap-4 rounded-lg border-t bg-card backdrop-blur-md border border-border ">
        <div className="space-y-2">
          <div className="w-8 h-8 text-muted-foreground">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="sm:text-md mt-4 text-sm text-foreground tracking-wide font-extralight">
            This platform has completely transformed how we handle our workflow.
            The intuitive interface and powerful features have made our team
            more productive than ever.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
              alt="Sarah Johnson"
            />
          </Avatar>
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-md font-light leading-none text-foreground tracking-wide">
              Sarah Johnson
            </h3>
            <p className="text-xs text-muted font-extralight tracking-wide">
              Product Manager | TechCorp
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
