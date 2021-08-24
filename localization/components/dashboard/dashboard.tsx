import { Header } from '@localization/components.header';
import { Profile } from '@localization/components.profile';
import Grid from '@material-ui/core/Grid';
import React, { useContext } from 'react';
import { Context } from '@localization/translations.language-provider';

export function Dashboard() {
  const {i18n}= useContext(Context);
  return (
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Header title={i18n('header.title')}></Header>
          </Grid>
          <Grid item container spacing={2}>
            <Profile
              name={i18n('profile.name')}
              title={i18n('profile.position')}
              workSummary={i18n('profile.description')}
              onHire={() => { alert("The person is hired!"); }}></Profile>
          </Grid>
        </Grid>
      );
};