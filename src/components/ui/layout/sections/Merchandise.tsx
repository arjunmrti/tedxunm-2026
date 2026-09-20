// src/components/ui/layout/sections/Merchandise.tsx
import type { MerchandiseBundle, MerchandiseSectionContent } from '../../../../types/Merchandise';
import { merchandiseBundles, merchandiseSectionContent } from '../../../../constants/merchandise';
import MerchandiseCard from './MerchandiseCard';

export interface MerchandiseProps {
  content?: MerchandiseSectionContent;
  bundles?: MerchandiseBundle[];
  onSelectBundle?: (bundleId: string) => void;
}

const Merchandise = ({
  content = merchandiseSectionContent,
  bundles = merchandiseBundles,
  onSelectBundle,
}: MerchandiseProps) => {
  return (
    <section
      aria-labelledby="merch-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200"
      id="merchandise"
    >
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block bg-[#FFF4D9] text-[#8C5D00] text-xs font-bold px-3 py-1 rounded-full mb-3">
          {content.badgeLabel}
        </span>
        <h2
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
          id="merch-heading"
        >
          {content.heading}
        </h2>
        <p className="text-base text-gray-600 mt-4 leading-relaxed">{content.description}</p>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{content.subheading}</h3>

      <div className="relative py-8 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-0 lg:-space-x-5 py-6">
          {bundles.map((bundle) => (
            <MerchandiseCard key={bundle.id} bundle={bundle} onSelect={onSelectBundle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merchandise;