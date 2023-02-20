import { styled } from '@mui/material';
import React, { ReactElement } from 'react';
import { IBasicProfile } from 'src/types';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar } from 'src/components/atoms/avatar/avatar';
type Props = {
  data: IBasicProfile;
};

const networkMap: Record<string, { image: ReactElement; text: string }> = {
  linkedin: {
    image: <LinkedInIcon />,
    text: 'LinkedIn',
  },
  twitter: {
    image: <TwitterIcon />,
    text: 'Twitter',
  },
  github: {
    image: <GitHubIcon />,
    text: 'GitHub',
  },
};

const Link = styled('a')`
  text-decoration: none;
`;

export const Profile = ({ data }: Props) => {
  const mappedData = networkMap[data.network];
  const title = `${data.username} - ${
    mappedData ? mappedData.text : data.network
  }`;
  const content = data.logoUrl ? (
    <img src={data.logoUrl} alt={`${data.network} logo`} />
  ) : mappedData ? (
    mappedData.image
  ) : (
    <Avatar text={data.network} />
  );
  return (
    <Link href={data.url} title={title}>
      {content}
    </Link>
  );
};
