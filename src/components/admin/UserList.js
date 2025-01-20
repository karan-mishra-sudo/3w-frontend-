import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import * as store from "../store.js"
export default function UserList() {
    const nevigate = useNavigate();
    const [users, setusers] = React.useState([]);
    React.useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + `/allUsers`).then((res) => {
            return res.json();
        }).then((res) => {
            
            setusers(res);
            console.log("users=>", res);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <>
            {
                users.map((user, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar alt={`User ${user}`} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n8nKfIptPVHET9niwXLFN2T9aEoTw7yWr_2NfzhKxH9LHHV4T3SsKGo&s`} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={`${user.name}`}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary', display: 'inline' }}
                                        >
                                            {user.social_media}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                            <button onClick={() => {
                                store.setCurrentUserinfo(user.name)
                                nevigate("/UsersPost")
                            }}>see more</button>
                        </ListItem>
                    );
                })
            }

        </>

    );
}
