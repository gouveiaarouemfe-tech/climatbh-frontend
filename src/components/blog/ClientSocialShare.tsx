
'use client';

import dynamic from 'next/dynamic';

// Importando SocialShare dinamicamente para evitar problemas de hidratação
const DynamicSocialShare = dynamic(() => import('./SocialShare'), { ssr: false });

interface ClientSocialShareProps {
  title: string;
  url: string;
  description?: string;
}

export default function ClientSocialShare(props: ClientSocialShareProps) {
  return <DynamicSocialShare {...props} />;
}

