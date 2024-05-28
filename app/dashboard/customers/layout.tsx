export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>
            This is customers layout
            {children}
        </body>
    </html>
  );
}
