import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {toggleActivity} from "../../store/profile";
import {store} from '../../store'

export const ProfileStatus = () => {

    const profileStatus = useSelector((state) => {
        if (state.isActive === true) {
            return "active"
        } else {
            return "inactive"
        }
    })

    const dispatch = useDispatch();

    return (
        <div>
            <h3>
                Currently your status is {profileStatus}
            </h3>
            {
                (store.getState().isActive)
                    ? <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => {
                                    dispatch(toggleActivity)
                                }}
                            />
                        }
                        color="primary"
                        label="Deactivate profile"/>
                    : <FormControlLabel
                        control={
                            <Checkbox onChange={() => {
                                dispatch(toggleActivity)
                            }}
                            />
                        }
                        color="primary"
                        label="Activate profile"/>
            }
        </div>
    );
};