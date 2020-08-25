import React from 'react';
import { profileHealthCenterEditTypes } from '../../data/healthCenters';
import { RegisterHealthCenter } from '../../containers/register/RegisterHealthCenter';

export const EditProfileHealthCenter = ({
  setShow,
  name,
  website,
  phone,
  direction,
  email,
  description,
}: profileHealthCenterEditTypes) => {
  return (
    <>
      <div className='w-full'>
        <RegisterHealthCenter
          isEdit={true}
          nameInfo={name}
          websiteInfo={website}
          phoneInfo={phone}
          directionInfo={direction}
          emailInfo={email}
          descriptionInfo={description}
        />
      </div>
    </>
  );
};
