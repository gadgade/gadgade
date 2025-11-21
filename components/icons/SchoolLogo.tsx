
import React from 'react';

const SchoolLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`bg-current ${className || ''}`}
    style={{
      maskImage: 'url(https://res.cloudinary.com/dph6mqggr/image/upload/v1763725673/logo_csnpk8.svg)',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
      maskSize: 'contain',
      WebkitMaskImage: 'url(https://res.cloudinary.com/dph6mqggr/image/upload/v1763725673/logo_csnpk8.svg)',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      WebkitMaskSize: 'contain',
    }}
    role="img"
    aria-label="School Logo"
  />
);

export default SchoolLogo;
