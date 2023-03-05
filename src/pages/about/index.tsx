import { columns } from './columns';
import { getSecondData } from '../../api';
import { useEffect, useState } from 'react';
import { StrsTable } from '../../modules/Strs-table';

export default function About() {
  const [data, setData] = useState<ReturnType<typeof getSecondData>>([]);

  useEffect(() => {
    const data = getSecondData();
    setData(data);
  }, []);

  return (
    <>
      <StrsTable isShowheader={false} data={data} columns={columns} />
    </>
  );
}