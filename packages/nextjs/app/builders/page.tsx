import { promises as fs } from "fs";
import type { NextPage } from "next";
import BuildersList from "~~/components/BuildersList";

const Builders: NextPage = async () => {
  const file = await fs.readdir(process.cwd() + "/app/builders");
  const builderProfiles = file.filter((file: string) => file.startsWith("0x") && file.length == 42);

  return (
    <>
      <BuildersList builderProfiles={builderProfiles} />
    </>
  );
};

export default Builders;
