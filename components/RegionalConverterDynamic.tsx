'use client';

import dynamic from 'next/dynamic';

const RegionalConverter = dynamic(() => import('./RegionalConverter'), { ssr: false });

export default RegionalConverter;
