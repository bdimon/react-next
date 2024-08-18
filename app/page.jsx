import Mainform from '@/components/Mainform';
import Infoboxes from '@/components/Infoboxes';
import Homeproperties from '@/components/Homeproperties';
// import  connectDB  from '@/config/database';

// const Home = async() => {
const Home = () => {
  // await connectDB;
  //   console.log('Database Connected');
  return (
    <main>
      <Mainform />
      <Infoboxes />
      <Homeproperties />
    </main>
  );
}

export default Home;
