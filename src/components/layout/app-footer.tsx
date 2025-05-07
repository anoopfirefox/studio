
export default function AppFooter() {
  return (
    <footer className="bg-background py-8 text-center border-t">
      <div className="container-mx">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Anoop P Hegde. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

