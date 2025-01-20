import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserList from "./UserList";

const NAVIGATION = [

    {
        segment: "users",
        title: "Users",
        icon: (
            <CircleNotificationsIcon />
        ),
    },

    {
        segment: "logout",
        title: "Logout",
        icon: <LogoutIcon />,
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function DemoPageContent({ pathname }) {
    const navigate = useNavigate();
    const { logout } = useAuth0();
    return (
        <Box
            sx={{
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >

            {pathname === "/users" && <UserList />}
            {pathname === "/logout" && {}}
        </Box>
    );
}
DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};
function Dashboard(props) {
    const { window } = props;
    const router = useDemoRouter("/users");
    const demoWindow = window !== undefined ? window() : undefined;
    React.useEffect(() => {
        let ele = document.querySelector(".css-t3xolk");
        let ele2 = document.querySelector(".css-23htwk");
        // if (ele2) {
        //   ele2.className = "hide-scrollbar";
        // }
        // ele.style.height = "80vh";
        // ele.style.width = "98vw";
    }, []);
    return (
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                title: "Admin",
                homeUrl: "/toolpad/core/introduction",
            }}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}
export default Dashboard;