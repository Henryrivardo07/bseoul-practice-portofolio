import { Marquee } from '@/components/ui/marquee';
import { trustedCompaniesData } from '@/constants/trusted-companies-data';
import Image from 'next/image';

const TrustedBy = () => {
  return (
    <div className='mt-6.5 md:mt-20'>
      <h3 className='text-md-semibold md:text-xl-semibold text-neutral-25 text-center'>
        Trusted by Leading Companies Worldwide
      </h3>

      <CompaniesMarquee />
    </div>
  );
};
export default TrustedBy;

const CompaniesMarquee = () => {
  return (
    <div className='custom-container relative flex h-28.5 items-center md:h-50'>
      <div className='w-full overflow-hidden mix-blend-luminosity'>
        <Marquee className='py-4'>
          {trustedCompaniesData.map((data) => (
            <Image
              style={{
                height: 'clamp(2.13rem, 3.97vw, 3rem)',
              }}
              className='h-full w-auto object-contain select-none'
              alt={data.alt}
              src={data.src}
              key={data.alt}
            />
          ))}
        </Marquee>
        <div className='from-base-background absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r to-transparent' />
        <div className='from-base-background absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l to-transparent' />
      </div>
    </div>
  );
};
