import { IconHexagon } from "@tabler/icons-react";
import { Slugs } from "../User";
import { IconCloud } from "./Magicui/icon-cloud";


export function Loader() {
  const images = Slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full z-10 animate-[ping_1.5s_ease-in-out_1_2s] items-center justify-center overflow-hidden">
      <IconCloud images={images} />
      <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" size={80} color="#64FFDA" stroke={1}/>
      <div className="absolute font-mono text-4xl -z-10 text-primaryColor">NM</div>
    </div>
  );
}
