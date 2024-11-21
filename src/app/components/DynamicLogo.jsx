import dashBoardIcon from '../../../public/images/dashboardicon.svg';
import paymentIcon from '../../../public/images/paymentIcon.svg';
import ledgerIcon from '../../../public/images/ledgerIcon.svg';
import notificationIcon from '../../../public/images/notificationIcon.svg';
import settingIcon from '../../../public/images/settingIcon.svg';
import emptyWallet from '../../../public/images/empty-wallet.svg';
import dollarSquare from '../../../public/images/dollarsquare123.svg';

export default function DynamicLogo({
    icon = 'dashBoardIcon',
    color = '#C1C1C1',
    hoverColor = '#FF0000',
    width = "20",
    height = "20",
    className = "",
}) {
    const Icons = {
        dashBoardIcon,
        paymentIcon,
        ledgerIcon,
        notificationIcon,
        settingIcon,
        emptyWallet,
        dollarSquare,
    };

    const SelectedIcon = Icons[icon];

    return SelectedIcon ? (
        <div>
            <SelectedIcon
                width={width}
                height={height}
                className={`${className}`}
                fill={color} // Default fill color
            />
        </div>
    ) : null;
}
