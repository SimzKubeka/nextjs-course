import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();

  
  return (
    <>
      <div className="">Home Page</div>
      <form className="px-10 pt-[100px] flex-center" action={async () =>{
        "use server";
        await signOut({redirectTo: ROUTES.SIGN_IN});
      }}>
        <Button>Log Out</Button>
      </form>
    </>
  );
}

export default Home;