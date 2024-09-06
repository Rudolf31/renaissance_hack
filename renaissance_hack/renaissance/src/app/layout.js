import Header from "@/components/header";
import "./globals.css";
import SideBar from "@/components/side_bar";



export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Renaissance</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Header />
        <hr className="mb-10" />
        <main className="conteiner">
          <SideBar/>
        </main>
        {children}
      </body>
    </html>
  );
}
