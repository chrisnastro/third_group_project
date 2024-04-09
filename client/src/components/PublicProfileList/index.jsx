import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TITLES_AND_DEPARTMENTS } from '../../utils/queries';

const PublicProfileList = ({ setTitles, setDepartments }) => {
  const { loading, data } = useQuery(QUERY_TITLES_AND_DEPARTMENTS);

  useEffect(() => {
    if (!loading && data) {
      const titles = Array.from(new Set(data.profiles.map(profile => profile.title).filter(Boolean)));
      const departments = Array.from(new Set(data.profiles.map(profile => profile.department).filter(Boolean)));

      setTitles(titles);
      setDepartments(departments);
    }
  }, [loading, data, setTitles, setDepartments]);

  if (loading) return <div>Loading...</div>;
  return null; 
};

export default PublicProfileList;
