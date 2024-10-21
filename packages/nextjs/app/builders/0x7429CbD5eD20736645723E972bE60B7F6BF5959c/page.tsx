import dynamic from "next/dynamic";
import type { NextPage } from "next";

const DevvMichaelProfile: NextPage = dynamic(() => import("./_components/DevvMichaelProfile"), { ssr: false });

export default DevvMichaelProfile;
