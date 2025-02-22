import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();

  
  return (
    <>
      <div className="">Home Page</div>
      
    </>
  );
}

export default Home;