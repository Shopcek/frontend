import { Delivery as DeliveryIcon } from 'components/images/Icons'

export function Delivery() {
    return (
        <div className="d-flex align-items-center nav-item" style={{ fontSize: '14px', textAlign: 'right' }}>
            <div className="delivery">
                <h6 className="text-primary">WORLDWIDE</h6>
            </div>
            <DeliveryIcon className="header-profile-user delivery" />
        </div>
    )
}
