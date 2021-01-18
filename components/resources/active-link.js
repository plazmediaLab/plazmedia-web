import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Activelink({ children, ...props }) {
  const router = useRouter();
  console.log(router);
  return <Link {...props}>{children}</Link>;
}
