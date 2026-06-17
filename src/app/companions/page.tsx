import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main className="p-4 md:p-8"> 
      <section className="flex justify-between gap-4 max-sm:flex-col mb-6">
        <h1 className="text-2xl font-bold">Companions Library</h1>
        <div className="gap-4 flex">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

    
      <section className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;