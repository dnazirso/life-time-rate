import { Button, Container, Stack, TextField } from "@mui/material";
import Camera from "../Shared/Camera";
import { setYears } from "../../core/Store/yearsSlice";
import { setWeeks } from "../../core/Store/weeksSlice";
import { setPage } from "../../core/Store/appSlice";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../core/Store";
import {User} from "../../core/SignInContext";


export default function Profile() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    useEffect(() => {
        // @ts-ignore
        const user = JSON.parse(localStorage.getItem('context'));
        if (user) {
            setUser(user.user);
        }

    }, [navigate]);


    const handleProfil = () => {
        dispatch(setYears({ birthdate: user.birthdate }));
        dispatch(setWeeks({ birthdate: user.birthdate }));
        dispatch(setPage("/years"));
        navigate("/years");
    };

    const [user, setUser] = useState<User>({
        name: "",
        birthdate: new Date("10/10/1910").getTime(),
    });

    const canContinue =
        user.name.length > 0 && user.birthdate !== new Date("10/10/1910").getTime();


    function format(convertDate: number) {
        let date = new Date(convertDate);

        var day = ('0' + date.getDate()).slice(-2);
        var month = ('0' + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();

        return year + '-' + month + '-' + day;
    }

    return (
        <Container>
            <Stack component="form" noValidate spacing={3}>
                <Camera />
                <TextField
                    placeholder={user.name}
                    label="Name"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => {
                        setUser({ ...user, name: e.target.value });
                    }}
                />
                <TextField
                    id="date"
                    type="date"
                    label="Birthdate"
                    value={format(user.birthdate)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            birthdate: new Date(e.target.value).getTime(),
                        });
                    }}
                />
                <Button
                    disabled={!canContinue}
                    onClick={handleProfil}
                    variant="outlined"
                    sx={{ py: 1.75 }}
                >
                    Valider
                </Button>
            </Stack>
        </Container>
    );
}
