
import React from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton, EmailShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon, EmailIcon } from 'next-share';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
}

export default function SocialShare({ title, url, description }: SocialShareProps) {
  return (
    <div className="flex items-center justify-center space-x-4 py-6 border-t border-gray-200 mt-8">
      <span className="text-gray-700 font-medium">Compartilhe:</span>
      <FacebookShareButton url={url} quote={title} hashtag="#ClimatBH">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title} via="ClimatBH">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title} summary={description}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton url={url} subject={title} body={description}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
}

