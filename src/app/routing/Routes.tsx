/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, {FC} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'
import {Logout, AuthPage} from '../modules/auth'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {RootState} from '../../setup'
import {MasterInit} from '../../_metronic/layout/MasterInit'


const Routes: FC = () => {
  // const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)

  return (
    <>
      <Switch>
      {/* <Route path='/error' component={ErrorsPage} />
      <Route path='/logout' component={Logout} /> */}
      <MasterLayout>
        <PrivateRoutes /> {/* Add PrivateRoutes here if needed */}
      </MasterLayout>
      </Switch>
      <MasterInit />
    </>
  )
}

export {Routes}
