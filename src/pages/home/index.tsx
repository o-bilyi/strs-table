import { useEffect, useState } from 'react';

import { getData } from '../../api';
import { columns } from './columns';
import { StrsTable } from '../../modules/Strs-table';

export default function Home() {
  const [data, setData] = useState<ReturnType<typeof getData>>([]);

  useEffect(() => {
    const data = getData();
    setData(data);
  }, []);

  return (
    <>
      <StrsTable isShowheader data={data} columns={columns} />
    </>
  );
}