import Mainform from '@/components/Mainform';
import Infoboxes from '@/components/Infoboxes';
import Homeproperties from '@/components/Homeproperties';

export default function Home() {
  // console.log(process.env.MONGODB_URI);
  
  return (
    <main>
      <Mainform />
      <Infoboxes />
      <Homeproperties />
    </main>
  );
}
