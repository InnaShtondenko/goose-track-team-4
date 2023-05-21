import { LogoutBtn } from "components/Buttons/LogoutBtn/LogoutBtn";
import UserNav from "components/UserNav/UserNav";

import {
    SideBarStyled,
    WrapperStyled,
    LogoBarStyled,
    LogoStyled,
    GooseLogoStyled,
    AppNameStyled,
    ButtonStyled,
    CloseSVGStyled,
    EventWrapper,
} from "./SideBar.styled";

const handleClick = ({ currentTarget, target}) => {
    document.querySelector("#burgerBtn").disabled = false;
    document.querySelector("#burgerBtn").style.pointerEvents = "auto";

    if (currentTarget === target || target.type === "button") {
        document.querySelector("#sideBar").style.display = "none";
    };
};

const Sidebar = () => {
    return (
        <EventWrapper  id="sideBar" onClick={handleClick}>
            <SideBarStyled>
                <WrapperStyled>
                    <LogoBarStyled>
                        <LogoStyled>
                            <GooseLogoStyled />
                            <AppNameStyled>GooseTrack</AppNameStyled>
                        </LogoStyled>
                        <ButtonStyled type="button">
                            <CloseSVGStyled />
                        </ButtonStyled>
                    </LogoBarStyled>
                    <UserNav />
                </WrapperStyled>
                <LogoutBtn />         
            </SideBarStyled>
        </EventWrapper>
    );
};

export default Sidebar;