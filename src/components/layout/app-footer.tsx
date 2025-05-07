export default function AppFooter() {
  return (
    <footer className="bg-background py-8 text-center border-t">
      <div className="container-mx">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nextfolio. All Rights Reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Designed by <a href="#" className="text-primary hover:underline">Your Name</a> with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
