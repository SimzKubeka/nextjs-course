import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import LocalSearch from "@/components/search/LocalSearch";
import { questions } from "@/constants/questions";

interface SearchParams {
  searchParams: Promise<{
    [key: string]: string;
  }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => question.title.toLowerCase().includes(query?.toLowerCase()));
  
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:items-center sm:flex-row">
        <h1 className="h1-bold">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11 flex flex-col w-full gap-10">
        <LocalSearch 
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search for Questions Here..."
          otherClasses="flex-1"
        />
      </section>
      <section className="mt-2 flex flex-col w-full gap-10">
        Homefilters
      </section>
      <div className="mt-10 flex w-full flex-col gap-6">
        { filteredQuestions.map((question) => (
          <Link href={`/question/${question._id}`} key={question._id}>
            <h1>{question.title}</h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
