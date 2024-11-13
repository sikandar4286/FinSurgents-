import dashBoardIcon from '../../../public/images/dashboardicon.svg';
import paymentIcon from '../../../public/images/paymentIcon.svg';
import ledgerIcon from '../../../public/images/ledgerIcon.svg';
import notificationIcon from '../../../public/images/notificationIcon.svg';
import settingIcon from '../../../public/images/settingIcon.svg';

export default function DynamicLogo({ icon = 'dashBoardIcon', color = '#C1C1C1' }) {
    const Icons = {
        dashBoardIcon,
        paymentIcon,
        ledgerIcon,
        notificationIcon,
        settingIcon
    };

    const SelectedIcon = Icons[icon];

    return SelectedIcon ? (
        <SelectedIcon width="20" height="20" fill={color} />
    ) : null;
}