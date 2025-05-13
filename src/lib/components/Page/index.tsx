import { PropsWithChildren, useEffect } from 'react';

import { PageContainer, PageContent } from 'src/lib/base/StyledComponents/Containers';

const Page = (props: PropsWithChildren) => {
  const { children } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
};

export default Page;
