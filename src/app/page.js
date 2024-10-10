import Cardportion from "@/Components/Cardportion";
import Featuredsection from "@/Components/Featuredsection";
import Fotter from "@/Components/Fotter";
import Herosection from "@/Components/Herosection";
import Instructors from "@/Components/Instructors";
import Upcomingweb from "@/Components/Upcomingweb";
import Whychoseus from "@/Components/Whychoseus";


export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96]   "> 
      <Herosection/>
      <Featuredsection/>
      <Whychoseus/>
      <Cardportion/>
      <Upcomingweb />
      <Instructors/>
      <Fotter/>
      </main>
  );
}
