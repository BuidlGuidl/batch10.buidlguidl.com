import dynamic from "next/dynamic";

const DevvMichaelProfile = dynamic(() => import("./_components/DevvMichaelProfile"), { ssr: false });

export default DevvMichaelProfile;
