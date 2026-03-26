import dynamic from 'next/dynamic';

const ConverterV2Dynamic = dynamic(() => import('./ConverterV2'), { ssr: false });

export default ConverterV2Dynamic;
